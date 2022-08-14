import type { NextPage } from 'next'
import { BaseLayout } from '../Layouts/Base';
import styles from '../styles/About.module.css'

const About: NextPage = () => {
    return (
        <BaseLayout>
        <div className="h-full px-8 text-sylver-100 sm:px-16 md:px-32 lg:px-64">
        <div id={`aboutRico`} className="flex flex-col w-full max-w-2xl py-8 ml-auto gap-y-6">
                <p>Que lo que mi gente! I&apos;m known as Rico - a Fullstack Web3 Developer with 4+ years of experience
                    solving problems and materialising visions into tangible
                    products. I made the switch to Web3 in Jan 2021, and I have
                    worked as a freelance creative for the past 8 years and counting,
                    covering areas like Djing, GFX, UI/UX & Motion Design, Video Editing,
                    Web development and more. I take pride in delivering quality digital
                    products with true impact.</p>
                <p>I&apos;ve embarked on my indie hacker journey to leverage my skills and develop products that solve your problems - currently working on RuskelUI to bring forth many out of my 23 biz ideas
                    that tap into 1T USD in TAM combined. Check out the official RuskelUI repo <a href="https://github.com/0xreeko/ruskelui" target={`_blank`}><span className='underline text-amethyst-400 underline-offset-4'>here.</span></a></p>
                <p>Apart from Web3, my current interests are: Machine Learning & AI,
                    Robotics, Internet of Things and the Mixed Reality umbrella. I&apos;ve already developed in ML & AI before, but my goal is to eventually get deep in my dev bag and learn these themes thoroughly.</p>
            </div>
            <div className="py-12">
                <h2 className="text-m-h2 sm:text-d-h2"></h2>
                <div className="grid grid-cols-2 gap-4 mt-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-y-8 justify-items-center">
                    <div className={styles.mainSkillItem}>
                        {/* <SiNextdotjs className='duration-300 w-14 h-14 fill-russian-400' /> */}
                        <span><svg className='duration-300 w-14 h-14 fill-russian-400 hover:fill-russian-400/80' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24"viewBox="0 0 48 48"><path d="M18.974,31.5c0,0.828-0.671,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-14c0-0.653,0.423-1.231,1.045-1.43 c0.625-0.198,1.302,0.03,1.679,0.563l16.777,23.704C40.617,36.709,44,30.735,44,24c0-11-9-20-20-20S4,13,4,24s9,20,20,20 c3.192,0,6.206-0.777,8.89-2.122L18.974,22.216V31.5z M28.974,16.5c0-0.828,0.671-1.5,1.5-1.5s1.5,0.672,1.5,1.5v13.84l-3-4.227 V16.5z"></path></svg></span>
                        <p>NextJS</p>
                    </div>
                    <div className={styles.mainSkillItem}>
                        {/* <SiTypescript className='w-14 h-14 duration-300 fill-[#007acc]' /> */}
                        <span><svg className='w-14 h-14 fill-[#007acc] duration-300 hover:fill-[#007acc]/80' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"width="24" height="24"viewBox="0 0 24 24"><path d="M3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5c0-1.105-0.895-2-2-2H5C3.895,3,3,3.895,3,5z M13.666,12.451h-2.118	V19H9.841v-6.549H7.767V11h5.899V12.451z M13.998,18.626v-1.751c0,0,0.956,0.721,2.104,0.721c1.148,0,1.103-0.75,1.103-0.853	c0-1.089-3.251-1.089-3.251-3.501c0-3.281,4.737-1.986,4.737-1.986l-0.059,1.559c0,0-0.794-0.53-1.692-0.53	c-0.897,0-1.221,0.427-1.221,0.883c0,1.177,3.281,1.059,3.281,3.428C19,20.244,13.998,18.626,13.998,18.626z"></path></svg></span>
                        <p>Typescript</p>
                    </div>
                    <div className={styles.mainSkillItem}>
                        {/* <SiTailwindcss className='w-14 h-14 duration-300 fill-[#00b4b6]' /> */}
                        <p>Tailwind</p>
                    </div>
                    <div className={styles.mainSkillItem}>
                        {/* <SiNodedotjs className='w-14 h-14 duration-300 fill-[#215732]' /> */}
                        <p>Node & Express</p>
                    </div>
                    <div className={styles.mainSkillItem}>
                        {/* <SiGraphql className='w-14 h-14 duration-300 fill-[#E10098]' /> */}
                        <p>GraphQL</p>
                    </div>
                    <div className={styles.mainSkillItem}>
                        {/* <SiJsonwebtokens className='duration-300 w-14 h-14 fill-scarlet-500' /> */}
                        <p>JWT</p>
                    </div>
                    <div className={styles.mainSkillItem}>
                        {/* <SiJest className='w-14 h-14 duration-300 fill-[#C63D14]' /> */}
                        <p>Jest</p>
                    </div>
                    <div className={styles.mainSkillItem}>
                        {/* <SiGithubactions className='duration-300 w-14 h-14 fill-azure-500' /> */}
                        <p>GitHub Actions</p>
                    </div>
                    <div className={styles.mainSkillItem}>
                        {/* <SiPython className='w-14 h-14 duration-300 fill-[#4B8BBE]' /> */}
                        <p>Python</p>
                    </div>
                    <div className={styles.mainSkillItem}>
                        {/* <SiEthereum className='duration-300 w-14 h-14 fill-azure-500' /> */}
                        <p>EthersJS</p>
                    </div>
                    <div className={styles.mainSkillItem}>
                        {/* <FaHardHat className='duration-300 w-14 h-14 fill-jasper-500' /> */}
                        <p>Hardhat</p>
                    </div>
                    <div className={styles.mainSkillItem}>
                        {/* <SiSolidity className='duration-300 w-14 h-14 fill-sylver-800' /> */}
                        <p>Solidity</p>
                    </div>
                    <div className={styles.mainSkillItem}>
                        {/* <SiMongodb className='w-14 h-14 duration-300 fill-[#4DB33D]' /> */}
                        <p>MongoDB</p>
                    </div>
                    <div className={styles.mainSkillItem}>
                        {/* <SiAdobephotoshop className='w-14 h-14 duration-300 fill-[#40D0FB]' /> */}
                        <p>Photoshop</p>
                    </div>
                </div>
            </div>
        </div>
        </BaseLayout>
    )
};

export default About