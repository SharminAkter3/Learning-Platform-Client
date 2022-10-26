import React from 'react';

const FAQ = () => {
    return (
        <div className='m-4 p-4'>
            <h2 className='fs-2 fw-bold'>Common Questions</h2>
            <p className='fs-6'>This section of the Learning Area is designed to provide answers to common questions that may come up, which are not necessarily part of the structured core learning pathways (e.g. the HTML or CSS learning articles.) These articles are designed to work on their own.
            </p>
            <h2 className='fs-2 fw-bold'>Web mechanics</h2>
            <p className='fs-6'>This section covers questions relating to general knowledge of the web ecosystem and how it works.</p>
            <h5 className='fs-5 text-primary'>How does the Internet work?</h5>
            <p className='fs-6'>The Internet is the backbone of the web, the technical infrastructure that makes the web possible. At its most basic, the internet is a massive network of computers communicating with each other. This article discusses how it works, in broad terms.</p>
            <h5 className='fs-5 text-primary'>What is a web server?</h5>
            <p className='fs-6'> The term "web server" can refer to the hardware or software that serves websites to clients across the web — or both of them working together. In this article we go over how web servers work, and why they're important.</p>
            <h2 className='fs-2 fw-bold'>Tools and setup</h2>
            <p className='fs-6'>Questions related to the tools/software you can use to build websites.</p>
            <h5 className='fs-5 text-primary'>What software do I need to build a website?</h5>
            <p className='fs-6'>In this article we explain which software components you need to edit, upload, or view a website.</p>
            <h5 className='fs-5 text-primary'>How much does it cost to do something on the web?
            </h5>
            <p className='fs-6'>When you're launching a website, you may spend nothing or your costs may go through the roof. In this article we discuss how much everything costs and what you get for what you pay (or don't pay).</p>
            <h5 className='fs-5 text-primary'>What text editors are available?</h5>
            <p className='fs-6'> In this article we highlight some things to think about when choosing and installing a text editor for web development.</p>
            <h5 className='fs-5 text-primary'>What are browser developer tools?</h5>
            <p className='fs-6'>Every browser features a set of devtools for debugging HTML, CSS, and other web code. This article explains how to use the basic functions of your browser's devtools.</p>
            <h5 className='fs-5 text-primary'>How do you make sure your website works properly?</h5>
            <p className='fs-6'>So you've published your website online — very good! But are you sure it works properly? This article provides some basic troubleshooting steps.</p>
            <h5 className='fs-5 text-primary'>How do you set up a local testing server?</h5>
            <p className='fs-6'>This article explains how to set up a simple local testing server on your machine, and the basics of how to use it.</p>
            <h5 className='fs-5 text-primary'>How do you upload files to a web server?</h5>
            <p className='fs-6'>This article shows how to publish your site online with FTP tools — one of the most common ways to get a website online so others can access it from their computers.</p>
            <h5 className='fs-5 text-primary'>How do I use GitHub Pages?</h5>
            <p className='fs-6'>This article provides a basic guide to publishing content using GitHub's gh-pages feature.</p>
            <h5 className='fs-5 text-primary'>How do you host your website on Google App Engine?</h5>
            <p className='fs-6'>Looking for a place to host your website? Here's a step-by-step guide to hosting your website on Google App Engine.</p>
            <h5 className='fs-5 text-primary'>What tools are available to debug and improve website performance?</h5>
            <p className='fs-6'>This set of articles shows you how to use the Developer Tools in Firefox to debug and improve performance of your website, using the tools to check memory usage, the JavaScript call tree, the number of DOM nodes being rendered, and more.</p>


        </div>
    );
};

export default FAQ;