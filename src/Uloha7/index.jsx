import React from 'react'
import './ukazatel-uspechu.css'
import { useState } from 'react'

// Zadání 1: Použij prop `barva` ve style atributu.
// Zadání 2: Přidej komponentě číselný stav od nuly do sta, který bude reprezentovat postup.
// Zadání 3: Po kliknutí na tlačítko zvětši stav o deset. Nejvýše ale do sta.
// Zadání 4. Nastav prvku `ukazatel-uspechu__postup` šířku podle stavové proměnné.

const UkazatelPokroku = ({ barva }) => {
	const [stav, setStav] = useState(0)

	return (
		<div className="ukazatel-uspechu">
			<div className="ukazatel-uspechu__ramecek">
				<div
					className="ukazatel-uspechu__postup"
					style={{
						width: `${stav}%`,
						backgroundColor: barva,
					}}
				></div>
			</div>
			<button
				onClick={() => {
					setStav(Math.min(100, stav + 10))
				}}
			>
				postoupit o 10 %
			</button>
		</div>
	)
}

export const Uloha7 = () => {
	return (
		<>
			<UkazatelPokroku barva="blue" />
			<UkazatelPokroku barva="green" />
			<UkazatelPokroku barva="purple" />
		</>
	)
}