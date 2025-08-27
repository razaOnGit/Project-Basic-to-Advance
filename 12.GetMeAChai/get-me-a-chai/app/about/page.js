import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800 text-white">
            <div className="container mx-auto px-4 py-12 max-w-4xl">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                        About Get Me a Chai
                    </h1>
                    <div className="w-24 h-1 bg-orange-400 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
                        Get Me a Chai is a crowdfunding platform designed for creators to fund their projects with the support of their fans. It's a space where your fans can directly contribute to your creative endeavors by buying you a chai. Unlock the potential of your fanbase and bring your projects to life.
                    </p>
                </div>

                {/* How It Works Section */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-xl">
                    <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-purple-900/40 p-6 rounded-xl flex flex-col items-center text-center transition-transform hover:scale-105">
                            <img className="w-24 h-24 rounded-full mb-4 border-4 border-orange-400" src="/group.gif" alt="Fans Want to Collaborate" />
                            <h3 className="text-xl font-semibold mb-3 text-orange-300">Fans Want to Collaborate</h3>
                            <p className="text-gray-200">Your fans are enthusiastic about collaborating with you on your projects.</p>
                        </div>
                        <div className="bg-purple-900/40 p-6 rounded-xl flex flex-col items-center text-center transition-transform hover:scale-105">
                            <img className="w-24 h-24 rounded-full mb-4 border-4 border-orange-400" src="/coin.gif" alt="Support Through Chai" />
                            <h3 className="text-xl font-semibold mb-3 text-orange-300">Support Through Chai</h3>
                            <p className="text-gray-200">Receive support from your fans in the form of chai purchases, directly contributing to your project funding.</p>
                        </div>
                    </div>
                </div>

                {/* Benefits Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                        <h2 className="text-2xl font-bold mb-6 text-orange-300">Benefits for Creators</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-orange-400 mr-2 text-xl">•</span>
                                <span>Direct financial support from your fanbase</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-orange-400 mr-2 text-xl">•</span>
                                <span>Engage with your fans on a more personal level</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-orange-400 mr-2 text-xl">•</span>
                                <span>Access to a platform tailored for creative projects</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                        <h2 className="text-2xl font-bold mb-6 text-orange-300">Benefits for Fans</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-orange-400 mr-2 text-xl">•</span>
                                <span>Directly contribute to the success of your favorite creators</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-orange-400 mr-2 text-xl">•</span>
                                <span>Exclusive rewards and perks for supporting creators</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-orange-400 mr-2 text-xl">•</span>
                                <span>Be part of the creative process and connect with creators</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                        <h2 className="text-2xl font-bold mb-6 text-orange-300">Benefits of Collaboration</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-orange-400 mr-2 text-xl">•</span>
                                <span>Unlock new opportunities through collaboration with fellow creators</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-orange-400 mr-2 text-xl">•</span>
                                <span>Expand your network and reach a wider audience</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-orange-400 mr-2 text-xl">•</span>
                                <span>Combine skills and resources to create innovative projects</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                        <h2 className="text-2xl font-bold mb-6 text-orange-300">Community Engagement</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-orange-400 mr-2 text-xl">•</span>
                                <span>Interact with a supportive community of like-minded individuals</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-orange-400 mr-2 text-xl">•</span>
                                <span>Receive valuable feedback and encouragement from peers</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-orange-400 mr-2 text-xl">•</span>
                                <span>Participate in discussions and events centered around your interests</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                        <h2 className="text-2xl font-bold mb-6 text-orange-300">Access to Resources</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-orange-400 mr-2 text-xl">•</span>
                                <span>Gain access to resources such as tutorials, templates, and tools</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-orange-400 mr-2 text-xl">•</span>
                                <span>Receive guidance and mentorship from experienced creators</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-orange-400 mr-2 text-xl">•</span>
                                <span>Stay updated on industry trends and best practices</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                        <h2 className="text-2xl font-bold mb-6 text-orange-300">Recognition and Exposure</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-orange-400 mr-2 text-xl">•</span>
                                <span>Showcase your work to a global audience and gain recognition</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-orange-400 mr-2 text-xl">•</span>
                                <span>Feature in promotional materials and campaigns</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-orange-400 mr-2 text-xl">•</span>
                                <span>Build your portfolio and increase your credibility as a creator</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl md:col-span-2">
                        <h2 className="text-2xl font-bold mb-6 text-orange-300">Supportive Community</h2>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-orange-400 mr-2 text-xl">•</span>
                                <span>Join a community that values creativity, diversity, and inclusivity</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-orange-400 mr-2 text-xl">•</span>
                                <span>Find encouragement and inspiration from fellow members</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-orange-400 mr-2 text-xl">•</span>
                                <span>Collaborate on projects and share resources for mutual growth</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <p className="text-xl mb-6">Ready to start your creative journey?</p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Join Our Community
                    </button>
                </div>
            </div>
        </div>
    );
}

export default About;

export const metadata = {
    title: "About - Get Me A Chai",
}