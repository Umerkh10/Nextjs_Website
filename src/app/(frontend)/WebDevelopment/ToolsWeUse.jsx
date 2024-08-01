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
                <div className='text-purple-500 text-lg font-medium italic'>Tools Play a Crucial Role</div>
                <div className='font-extrabold text-4xl '>Explore the Tools We Utilize at Webnike</div>
            </div>
            <div className=' p-5' data-aos="fade-down">
                <div className='text-purple-500 text-lg font-semibold lg:pt-7 italic'>
                Essential work tools play a crucial role. Here are some examples of tools we use daily in our tasks and collaborations with clients.</div>
            </div>
        </div>

            <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-4 p-5">

        <div data-aos="flip-right" class="group border-[5px] border-purple-700 p-4 rounded-lg shadow-md hover:bg-purple-600 hover:border-sky-300 transition ease-in duration-200 delay-100 hover:shadow-2xl hover:scale-105">
            <div class=" space-x-2">
                <Image src="/imgs/google-workspace.png" width={100} height={100} alt="Google Workspace" ></Image>
                <div className='group-hover:text-gray-200'>
                    <div class="text-xl font-semibold ">Workspace</div>
                    <p>We leverage top tools from Google Workspace.</p>
                </div>
            </div>
        </div>

        <div data-aos="flip-left" class=" group border-[5px] border-purple-700 p-4 rounded-lg shadow-md hover:bg-purple-600 hover:border-sky-300 transition ease-in duration-200 delay-100 hover:shadow-2xl hover:scale-105">
            <div class=" space-x-2">
            <Image src="/imgs/figma.png" width={100} height={100} alt="figma" ></Image>
                <div className='group-hover:text-gray-200'>
                    <div class="text-xl font-semibold ">Figma</div>
                    <p>We create our designs using the leading design software.</p>
                </div>
            </div>
        </div>

        <div data-aos="flip-right" class=" group border-[5px] border-purple-700 p-4 rounded-lg shadow-md hover:bg-purple-600 hover:border-sky-300 transition ease-in duration-200 delay-100 hover:shadow-2xl hover:scale-105">
            <div class=" space-x-2">
            <Image src="/imgs/slack.png" width={100} height={100} alt="slack" ></Image>
                <div className='group-hover:text-gray-200'>
                    <div class="text-xl font-semibold ">Slack</div>
                    <p>Our main communication platform. It's used for both business interactions and casual conversations.</p>
                </div>
            </div>
        </div>

        <div data-aos="flip-left" class="group border-[5px] border-purple-700 p-4 rounded-lg shadow-md hover:bg-purple-600 hover:border-sky-300 transition ease-in duration-200 delay-100 hover:shadow-2xl hover:scale-105">
            <div class=" space-x-2">
            <Image src="/imgs/sentry.png" width={100} height={100} alt="sentry" ></Image>
                <div className='group-hover:text-gray-200'>
                    <div class="text-xl font-semibold">Sentry</div>
                    <p>We leverage Sentry for real-time monitoring and error reporting in our applications.</p>
                </div>
            </div>
        </div>

        <div data-aos="flip-right" class="group border-[5px] border-purple-700 p-4 rounded-lg shadow-md hover:bg-purple-600 hover:border-sky-300 transition ease-in duration-200 delay-100 hover:shadow-2xl hover:scale-105">
            <div class=" space-x-2">
            <Image src="/imgs/bitbucket.png" width={100} height={100} alt="bitbucket" ></Image>
                <div className='group-hover:text-gray-200'>
                    <div class="text-xl font-semibold">Bitbucket</div>
                    <p>Version control with Git, bug tracking, and release planning through source code management.</p>
                </div>
            </div>
        </div>

        <div data-aos="flip-left" class="group border-[5px] border-purple-700 p-4 rounded-lg shadow-md hover:bg-purple-600 hover:border-sky-300 transition ease-in duration-200 delay-100 hover:shadow-2xl hover:scale-105">
            <div class=" space-x-2">
            <Image src="/imgs/jira.png" width={100} height={100} alt="jira" ></Image>
                <div className='group-hover:text-gray-200'>
                    <div class="text-xl font-semibold">Jira</div>
                    <p>We oversee projects, track progress, and prioritize tasks.</p>
                </div>
            </div>
        </div>

        <div data-aos="flip-right" class="group border-[5px] border-purple-700 p-4 rounded-lg shadow-md hover:bg-purple-600 hover:border-sky-300 transition ease-in duration-200 delay-100 hover:shadow-2xl hover:scale-105">
            <div class=" space-x-2">
            <Image src="/imgs/confluence.png" width={100} height={100} alt="confluence" ></Image>

                <div className='group-hover:text-gray-200'>
                    <div class="text-xl font-semibold">Confluence</div>
                    <p>We develop, archive, and disseminate our documentation and design knowledge.</p>
                </div>
            </div>
        </div>

        <div data-aos="flip-left" class="group border-[5px] border-purple-700 p-4 rounded-lg shadow-md hover:bg-purple-600 hover:border-sky-300 transition ease-in duration-200 delay-100 hover:shadow-2xl hover:scale-110">
            <div class=" space-x-2">
            <Image src="/imgs/aws.png" width={100} height={100} alt="AWS" ></Image>

                <div className='group-hover:text-gray-200 '>
                    <div class="text-xl font-semibold pt-2">AWS</div>
                    <p className='text-sm pt-2'>AWS (Amazon Web Services) is a comprehensive cloud platform that provides a wide range of computing services, data storage options, and various IT solutions.</p>
                </div>
            </div>
        </div>

    </div>
    </div>
  )
}

export default ToolsWeUse