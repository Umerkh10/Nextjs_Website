"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const ToolsWeUse = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
        });
    }, []);
  return (
    <div className='bg-slate-200 dark:bg-transparent py-5'>

        <div className='grid lg:grid-cols-2 grid-cols-1'>
            <div className=' p-5' data-aos="fade-up">
                <div className='text-purple-500 text-lg font-medium italic'>Tools Are Important</div>
                <div className='font-extrabold text-4xl '>What Kind of Tools We Use at Webnike</div>
            </div>
            <div className=' p-5' data-aos="fade-down">
                <div className='text-purple-500 text-lg font-semibold lg:pt-7 italic'>Key work tools are essential. Here are some examples of tools which we use every day in our work and in cooperation with clients</div>
            </div>
        </div>

            <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-4 p-5">

        <div data-aos="flip-right" class="group border-[5px] border-purple-700 p-4 rounded-lg shadow-md hover:bg-purple-600 hover:border-sky-300 transition ease-in duration-200 delay-100 hover:shadow-2xl hover:scale-105">
            <div class=" space-x-2">
                <Image src="/imgs/google-workspace.png" width={100} height={100} alt="Google Workspace" ></Image>
                <div className='group-hover:text-gray-200'>
                    <h2 class="text-xl font-semibold ">Workspace</h2>
                    <p>We use the most popular tools from Google Workspace.</p>
                </div>
            </div>
        </div>

        <div data-aos="flip-left" class=" group border-[5px] border-purple-700 p-4 rounded-lg shadow-md hover:bg-purple-600 hover:border-sky-300 transition ease-in duration-200 delay-100 hover:shadow-2xl hover:scale-105">
            <div class=" space-x-2">
            <Image src="/imgs/figma.png" width={100} height={100} alt="figma" ></Image>
                <div className='group-hover:text-gray-200'>
                    <h2 class="text-xl font-semibold ">Figma</h2>
                    <p>We build our designs using the most popular design programme.</p>
                </div>
            </div>
        </div>

        <div data-aos="flip-right" class=" group border-[5px] border-purple-700 p-4 rounded-lg shadow-md hover:bg-purple-600 hover:border-sky-300 transition ease-in duration-200 delay-100 hover:shadow-2xl hover:scale-105">
            <div class=" space-x-2">
            <Image src="/imgs/slack.png" width={100} height={100} alt="slack" ></Image>
                <div className='group-hover:text-gray-200'>
                    <h2 class="text-xl font-semibold ">Slack</h2>
                    <p>Our primary communication tool. We use them for business communication and small-talks.</p>
                </div>
            </div>
        </div>

        <div data-aos="flip-left" class="group border-[5px] border-purple-700 p-4 rounded-lg shadow-md hover:bg-purple-600 hover:border-sky-300 transition ease-in duration-200 delay-100 hover:shadow-2xl hover:scale-105">
            <div class=" space-x-2">
            <Image src="/imgs/sentry.png" width={100} height={100} alt="sentry" ></Image>
                <div className='group-hover:text-gray-200'>
                    <h2 class="text-xl font-semibold">Sentry</h2>
                    <p>We use Sentry to monitor and report errors in our apps in real time.</p>
                </div>
            </div>
        </div>

        <div data-aos="flip-right" class="group border-[5px] border-purple-700 p-4 rounded-lg shadow-md hover:bg-purple-600 hover:border-sky-300 transition ease-in duration-200 delay-100 hover:shadow-2xl hover:scale-105">
            <div class=" space-x-2">
            <Image src="/imgs/bitbucket.png" width={100} height={100} alt="bitbucket" ></Image>
                <div className='group-hover:text-gray-200'>
                    <h2 class="text-xl font-semibold">Bitbucket</h2>
                    <p>Source code management via Git-based version control, bug tracking and release planning.</p>
                </div>
            </div>
        </div>

        <div data-aos="flip-left" class="group border-[5px] border-purple-700 p-4 rounded-lg shadow-md hover:bg-purple-600 hover:border-sky-300 transition ease-in duration-200 delay-100 hover:shadow-2xl hover:scale-105">
            <div class=" space-x-2">
            <Image src="/imgs/jira.png" width={100} height={100} alt="jira" ></Image>
                <div className='group-hover:text-gray-200'>
                    <h2 class="text-xl font-semibold">Jira</h2>
                    <p>We manage projects, monitor progress and prioritise tasks.</p>
                </div>
            </div>
        </div>

        <div data-aos="flip-right" class="group border-[5px] border-purple-700 p-4 rounded-lg shadow-md hover:bg-purple-600 hover:border-sky-300 transition ease-in duration-200 delay-100 hover:shadow-2xl hover:scale-105">
            <div class=" space-x-2">
            <Image src="/imgs/confluence.png" width={100} height={100} alt="confluence" ></Image>

                <div className='group-hover:text-gray-200'>
                    <h2 class="text-xl font-semibold">Confluence</h2>
                    <p>We create, store and share documentation and design expertise.</p>
                </div>
            </div>
        </div>

        <div data-aos="flip-left" class="group border-[5px] border-purple-700 p-4 rounded-lg shadow-md hover:bg-purple-600 hover:border-sky-300 transition ease-in duration-200 delay-100 hover:shadow-2xl hover:scale-105">
            <div class=" space-x-2">
            <Image src="/imgs/aws.png" width={100} height={100} alt="AWS" ></Image>

                <div className='group-hover:text-gray-200 '>
                    <h2 class="text-xl font-semibold pt-2">AWS</h2>
                    <p className='text-sm pt-2'>AWS (Amazon Web Services) is an extensive cloud platform offering computing services, data storage and other IT solutions.</p>
                </div>
            </div>
        </div>

    </div>
    </div>
  )
}

export default ToolsWeUse