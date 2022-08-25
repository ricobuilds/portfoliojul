import styles from './Skills.module.css'
import { ethers, githubActions, gql, greensock, hardhat, jwt, mongodb, nextjs, node, photoshop, python, solidity, tailwind, typescript } from '../Icons';
 
export const Skills = () => {
    return (
        <div className="py-12">
                <h3 className="underline underline-offset-4 text-m-h3 md:text-d-h3 decoration-amethyst-400">skills.</h3>
                <div className="grid grid-cols-2 gap-4 mt-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-y-8 justify-items-center">
                    <div className={styles.mainSkillItem}>
                        <span>{nextjs}</span>
                        <p>NextJS</p>
                    </div>
                    <div className={styles.mainSkillItem}>
                        <span>{typescript}</span>
                        <p>Typescript</p>
                    </div>
                    <div className={styles.mainSkillItem}>
                        <span>{tailwind}</span>
                        <p>Tailwind</p>
                    </div>
                    <div className={styles.mainSkillItem}>
                        <span>{node}</span>
                        <p>Node & Express</p>
                    </div>

                    <div className={styles.mainSkillItem}>
                        <span>{gql}</span>
                        <p>GraphQL</p>
                    </div>
                    <div className={styles.mainSkillItem}>
                        <span>{jwt}</span>
                        <p>JWT</p>
                    </div>
                    <div className={`${styles.mainSkillItem} relative`}>
                        <span>{greensock}</span>
                        <p>GSAP</p>
                    </div>
                    <div className={styles.mainSkillItem}>
                        <span>{githubActions}</span>
                        <p>GitHub Actions</p>
                    </div>
                    <div className={styles.mainSkillItem}>
                        <span>{python}</span>
                        <p>Python</p>
                    </div>
                    <div className={styles.mainSkillItem}>
                        {/* <SiEthereum className='duration-300 w-14 h-14 fill-azure-500' /> */}
                        <span>{ethers}</span>
                        <p>EthersJS</p>
                    </div>
                    <div className={styles.mainSkillItem}>
                        {/* <FaHardHat className='duration-300 w-14 h-14 fill-jasper-500' /> */}
                        <span>{hardhat}</span>
                        <p>Hardhat</p>
                    </div>
                    <div className={styles.mainSkillItem}>
                        {solidity}
                        <p>Solidity</p>
                    </div>
                    <div className={styles.mainSkillItem}>
                        <span>{mongodb}</span>
                        <p>MongoDB</p>
                    </div>
                    <div className={styles.mainSkillItem}>
                        <span>{photoshop}</span>
                        <p>Photoshop</p>
                    </div>
                </div>
            </div>
    )
};