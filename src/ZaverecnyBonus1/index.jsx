import React from 'react'
import { useState } from 'react'

// Zadání 1: Pomocí události `change` na vstupním políčku a vlastnosti `event.target.value` ukládej do stavu, co uživatel napsal.
// Zadání 2: Mezi tagy `<b></b>` vlož napsaný text.
// Zadání 3. V dalším odstavci `<p>` zobraz, kolik má text znaků.
// Zadání 4. Poslední odstavec zobraz pouze v případě, že je text kratší než 8 znaků.

export const ZaverecnyBonus1 = () => {

	const [vstup, setVstup] = useState('')

	return (
		<>
			<label>
				Napiš něco: <input onChange={(event) => {setVstup(event.target.value)}} />
			</label>
			<p>
				Do políčka výše uživatel napsal: <b>{vstup}</b>
			</p>
			<p>Počet znaků: {vstup.length}</p>
				{
					vstup.length < 8 && <p>Jako heslo by text neobstál.</p>
				}
		</>
	)
}