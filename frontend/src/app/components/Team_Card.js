import React from 'react'
import teamStyles from '../styles/Team.module.css'

export default function Team_Card() {
    return (
        <>
            <div className={teamStyles.team_name}>Team_Card</div>
            <div className={teamStyles.name-cards}>
                <div class={teamStyles.name-and-rank}>
                    <div class={Mori}>
                        <p>Mori Jin</p>
                        <p>Bronze 1</p>
                    </div>
                    <div class={Maxi}>
                        <p>Maximum Ride</p>
                        <p>Bronze 1</p>
                    </div>
                    <div class={Player}>
                        <p>PlayerUnknown</p>
                        <p>Bronze 1</p>
                    </div>
                </div>
            </div>
        </>
    )
}
