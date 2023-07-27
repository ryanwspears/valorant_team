import React from 'react'
import teamStyles from '../styles/Team.module.css'
import Image from 'next/image'

export default function Team_Card() {
    return (
        <>
        <div className={teamStyles.meetus}>Meet Our Players!!!</div>
            <div className={teamStyles.name_cards}>
                <div className={teamStyles.name_and_rank}>
                    <div className={teamStyles.member}>
                        <div className={teamStyles.profilePic}>
                            <Image alt="img" src="/istockphoto.jpg" fill />
                        </div>
                        <p>Mori Jin</p>
                        <p>Radiant</p>
                        <div className={teamStyles.socials}>
                            <Image alt="img" src="/facebook.svg" width={30} height={30} />
                            <Image alt="img" src="/instagram.svg" width={30} height={30} />
                            <Image alt="img" src="/tiktok.svg" width={30} height={30} />
                            <Image alt="img" src="/youtube.svg" width={30} height={30} />
                        </div>
                    </div>
                    <div className={teamStyles.member}>
                        <div className={teamStyles.profilePic}>
                            <Image alt="img" src="/istockphoto.jpg" fill />
                        </div>
                        <p>Maximum Ride</p>
                        <p>Radiant</p>
                        <div className={teamStyles.socials}>
                            <Image alt="img" src="/facebook.svg" width={30} height={30} />
                            <Image alt="img" src="/instagram.svg" width={30} height={30} />
                            <Image alt="img" src="/tiktok.svg" width={30} height={30} />
                            <Image alt="img" src="/youtube.svg" width={30} height={30} />
                        </div>
                    </div>
                    <div className={teamStyles.member}>
                        <div className={teamStyles.profilePic}>
                            <Image alt="img" src="/istockphoto.jpg" fill />
                        </div>
                        <p>PlayerUnknown</p>
                        <p>Radiant</p>
                        <div className={teamStyles.socials}>
                            <Image alt="img" src="/facebook.svg" width={30} height={30} />
                            <Image alt="img" src="/instagram.svg" width={30} height={30} />
                            <Image alt="img" src="/tiktok.svg" width={30} height={30} />
                            <Image alt="img" src="/youtube.svg" width={30} height={30} />
                        </div>
                    </div>
                    <div className={teamStyles.member}>
                        <div className={teamStyles.profilePic}>
                            <Image alt="img" src="/istockphoto.jpg" fill />
                        </div>
                        <p>Railer</p>
                        <p>Radiant</p>
                        <div className={teamStyles.socials}>
                            <Image alt="img" src="/facebook.svg" width={30} height={30} />
                            <Image alt="img" src="/instagram.svg" width={30} height={30} />
                            <Image alt="img" src="/tiktok.svg" width={30} height={30} />
                            <Image alt="img" src="/youtube.svg" width={30} height={30} />
                        </div>
                    </div>
                    <div className={teamStyles.member}>
                        <div className={teamStyles.profilePic}>
                            <Image alt="img" src="/istockphoto.jpg" fill />
                        </div>
                        <p>Fashion</p>
                        <p>Radiant</p>
                        <div className={teamStyles.socials}>
                            <Image alt="img" src="/facebook.svg" width={30} height={30} />
                            <Image alt="img" src="/instagram.svg" width={30} height={30} />
                            <Image alt="img" src="/tiktok.svg" width={30} height={30} />
                            <Image alt="img" src="/youtube.svg" width={30} height={30} />
                        </div>
                    </div>
                    <div className={teamStyles.member}>
                        <div className={teamStyles.profilePic}>
                            <Image alt="img" src="/istockphoto.jpg" fill />
                        </div>
                        <p>Void</p>
                        <p>Immortal III</p>
                        <div className={teamStyles.socials}>
                            <Image alt="img" src="/facebook.svg" width={30} height={30} />
                            <Image alt="img" src="/instagram.svg" width={30} height={30} />
                            <Image alt="img" src="/tiktok.svg" width={30} height={30} />
                            <Image alt="img" src="/youtube.svg" width={30} height={30} />
                        </div>
                    </div>
                    <div className={teamStyles.member}>
                        <div className={teamStyles.profilePic}>
                            <Image alt="img" src="/istockphoto.jpg" fill />
                        </div>
                        <p>IvyBear</p>
                        <p>Immortal III</p>
                        <div className={teamStyles.socials}>
                            <Image alt="img" src="/facebook.svg" width={30} height={30} />
                            <Image alt="img" src="/instagram.svg" width={30} height={30} />
                            <Image alt="img" src="/tiktok.svg" width={30} height={30} />
                            <Image alt="img" src="/youtube.svg" width={30} height={30} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
