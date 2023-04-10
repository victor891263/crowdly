import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HelpArticle() {
    const params = useParams();
    const content = `If several workmen were to be asked: "How much wages do you get?", one would reply, "I get two shillings a day", and so on. According to the different branches of industry in which they are employed, they would mention different sums of money that they receive from their respective employers for the completion of a certain task; for example, for weaving a yard of linen, or for setting a page of type. Despite the variety of their statements, they would all agree upon one point: that wages are the amount of money which the capitalist pays for a certain period of work or for a certain amount of work.

Consequently, it appears that the capitalist buys their labour with money, and that for money they sell him their labour. But this is merely an illusion. What they actually sell to the capitalist for money is their labour-power. This labour-power the capitalist buys for a day, a week, a month, etc. And after he has bought it, he uses it up by letting the worker labour during the stipulated time. With the same amount of money with which the capitalist has bought their labour-power (for example, with two shillings) he could have bought a certain amount of sugar or of any other commodity. The two shillings with which he bought 20 pounds of sugar is the price of the 20 pounds of sugar. The two shillings with which he bought 12 hours' use of labour-power, is the price of 12 hours' labour. Labour-power, then, is a commodity, no more, no less so than is the sugar. The first is measured by the clock, the other by the scales.

Their commodity, labour-power, the workers exchange for the commodity of the capitalist, for money, and, moreover, this exchange takes place at a certain ratio. So much money for so long a use of labour-power. For 12 hours' weaving, two shillings. And these two shillings, do they not represent all the other commodities which I can buy for two shillings? Therefore, actually, the worker has exchanged his commodity, labour-power, for commodities of all kinds, and, moreover, at a certain ratio. By giving him two shillings, the capitalist has given him so much meat, so much clothing, so much wood, light, etc., in exchange for his day's work. The two shillings therefore express the relation in which labour-power is exchanged for other commodities, the exchange-value of labour-power.

The exchange value of a commodity estimated in money is called its price. Wages therefore are only a special name for the price of labour-power, and are usually called the price of labour; it is the special name for the price of this peculiar commodity, which has no other repository than human flesh and blood.`;

    return (
        <>
            <Header />
            <div className="container mx-auto px-6 pt-32 pb-16 text-gray-700 xl:max-w-screen-xl dark:text-gray-300">
                <h1 className="first-letter:capitalize sm:text-3xl font-bold tracking-tight text-2xl text-black dark:text-white">{params.article}</h1>
                <div className="sm:mt-3 mt-2 text-sm">Last updated 2 days ago</div>
                <div className="flex border-t pt-8 mt-9 dark:border-gray-700">
                    <div className="lg:w-8/12 lg:pr-8">
                        <div className="flex flex-col gap-4 leading-relaxed whitespace-pre-wrap">
                            <p>Crossposting is an easy way to take a post from one community and share it with another community. When you crosspost content, the crosspost includes an embed of the original post, along with the username, community, and karma score on the original post. This gives your fellow redditors a way to find the original source of the content while also providing ways to get more exposure for the original content and the community it was posted in.</p>
                            <h3 className="pt-4 font-semibold text-lg text-black dark:text-white">Can I Crosspost anywhere?</h3>
                            <p>No. Not all communities allow crossposting and you must first be a member of a community to crosspost there. If a community does not allow crossposted content and you are a member of that community, the option to select that community will be greyed out during the selection process.</p>
                            <h3 className="pt-4 font-semibold text-lg text-black dark:text-white">What are some Crossposting best practices I should know?</h3>
                            <p>You should only crosspost content that is relevant to the community you are posting in. Crossposting content randomly in various, unrelated communities can be seen as spammy behavior which may reflect poorly on you and the community you’re crossposting from.</p>
                        </div>
                        <div className="mt-10 pt-10 border-t flex flex-col items-center dark:border-gray-700">
                            <h3 className="font-semibold text-lg text-black dark:text-white">Was this article useful?</h3>
                            <div className="flex gap-2 mt-4 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                                <button className="block border rounded py-2 px-6 dark:border-gray-700">Yes</button>
                                <button className="block border rounded py-2 px-6 dark:border-gray-700">No</button>
                            </div>
                            <p className="mt-4 text-sm">199 out of 274 found this helpful</p>
                        </div>



                        <div className="mt-10 pt-8 md:pt-10 border-t grid grid-cols-2 gap-4 dark:border-gray-700">
                            <Link to="/" className="block md:border rounded-md md:py-3 md:px-4 dark:border-gray-700">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="rotate-180 w-3 h-auto inline"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                                    <div className="inline text-sm ml-1">Previous article</div>
                                </div>
                                <div className="max-md:hidden mt-0.5 font-semibold text-indigo-600 dark:text-indigo-400">Conditional Rendering</div>
                            </Link>
                            <Link to="/" className="text-right block md:border rounded-md md:py-3 md:px-4 dark:border-gray-700">
                                <div>
                                    <div className="inline text-sm mr-1">Next article</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-auto inline"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                                </div>
                                <div className="max-md:hidden mt-0.5 font-semibold text-indigo-600 dark:text-indigo-400">Event Handling</div>
                            </Link>
                        </div>
                    </div>
                    <div className="w-4/12 pl-8 border-l dark:border-gray-700">
                        <h3 className="font-semibold text-lg text-black dark:text-white">Tagged in</h3>
                        <div className="flex gap-2 mt-4">
                            <div className="border rounded-md py-2 px-3 text-indigo-600 font-semibold">Getting started</div>
                            <div className="border rounded-md py-2 px-3 text-indigo-600 font-semibold">Data and privacy</div>
                        </div>
                        <h3 className="mt-8 font-semibold text-lg text-black dark:text-white">Related articles</h3>
                        <Link to="/" className="block w-fit mt-4 font-semibold text-indigo-600 dark:text-indigo-400">How do I save a post and where does it get saved?</Link>
                        <Link to="/" className="block w-fit mt-3 font-semibold text-indigo-600 dark:text-indigo-400">What are community content tags and how do they work and how can I get one?</Link>
                        <Link to="/" className="block w-fit mt-3 font-semibold text-indigo-600 dark:text-indigo-400">What can I do to get my posts noticed?</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

/*

BREADCRUMBS

<ol className="text-sm italic leading-6">
                        <Link to="/" className="inline">Help</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-auto inline mx-1.5 mb-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                        <Link to="/" className="inline">Getting started</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-auto inline mx-1.5 mb-0.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                        <Link to="/" className="inline">Creating an account</Link>
                    </ol>

RELATED ARTICLES IN SINGLE-COLUMN FORMAT

<div className="mt-10 pt-10 border-t dark:border-gray-700">
                            <h3 className="font-semibold text-lg text-black dark:text-white">Related articles</h3>
                            <Link to="/" className="block w-fit mt-4 font-semibold text-indigo-600 dark:text-indigo-400">How do I save a post and where does it get saved?</Link>
                            <Link to="/" className="block w-fit mt-3 font-semibold text-indigo-600 dark:text-indigo-400">What are community content tags and how do they work?</Link>
                            <Link to="/" className="block w-fit mt-3 font-semibold text-indigo-600 dark:text-indigo-400">What can I do to get my posts noticed?</Link>
                        </div>

 */