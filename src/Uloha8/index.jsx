import React from 'react'
import { useState } from 'react'

// Zadání 1: Vytvoř stavovou proměnnou s výchozí hodnotou `'možná'`.
// Zadání 2: Proměnnou vypiš místo `ano/ne/možná`.
// Zadání 3: Po kliknutí na tlačítko změň `možná` na `ano`, `ano` na `ne`, případně `ne` na `možná`.

export const Uloha8 = () => {
	const [odpoved, setOdpoved] = useState('možná')

	return (
		<>
			<h3>Prší v Brně: {odpoved}</h3>
			<button onClick={() => {
				setOdpoved(
					odpoved === 'možná' ? 'ano' : (
						odpoved === 'ano' ? 'ne' : 'možná'
					) 						
				)
			}}
			>
				změnit
			</button>
		</>
	)
}
