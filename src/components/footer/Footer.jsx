// components/Footer.js
export default function Footer() {
    // Define sections with links
    // const sections = [
    //     {
    //         title: "Company",
    //         links: [
    //             { name: "About Us", href: "#about" },
    //             { name: "Services", href: "#services" },
    //             { name: "Contact", href: "#contact" },
    //         ],
    //     },
    //     {
    //         title: "Support",
    //         links: [
    //             { name: "Help Center", href: "#help" },
    //             { name: "FAQs", href: "#faq" },
    //             { name: "Terms of Service", href: "#terms" },
    //         ],
    //     },
    // ];

    // Define social media links
    const socialLinks = [
        { name: "Facebook", href: "#", icon: "fab fa-facebook-f" },
        { name: "Twitter", href: "#", icon: "fab fa-twitter" },
        { name: "LinkedIn", href: "#", icon: "fab fa-linkedIn" },
    ];

    return (
        <footer className="mt-10 text-white py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">

                {/* Logo and Description */}
                <div className="mb-4 md:mb-0 text-center md:text-left">
                    <h2 className="text-2xl font-bold">Diatomicsoft</h2>
                    <p className="text-gray-400">Connecting people with the best services around.</p>
                </div>

                {/* Links Sections */}
                {/*<div className="flex flex-col md:flex-row gap-6 md:gap-12">*/}
                {/*    {sections.map((section, index) => (*/}
                {/*        <div key={index}>*/}
                {/*            <h3 className="font-semibold">{section.title}</h3>*/}
                {/*            <ul>*/}
                {/*                {section.links.map((link, linkIndex) => (*/}
                {/*                    <li key={linkIndex}>*/}
                {/*                        <a href={link.href} className="text-gray-400 hover:text-white">*/}
                {/*                            {link.name}*/}
                {/*                        </a>*/}
                {/*                    </li>*/}
                {/*                ))}*/}
                {/*            </ul>*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*</div>*/}

                {/* Social Media Links */}
                <div className="flex gap-4 mt-4 md:mt-0">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            className="text-gray-400 hover:text-white"
                            aria-label={social.name}
                        >
                            <i className={social.icon}></i> {social.name}
                        </a>
                    ))}
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-8 text-center text-gray-500">
                &copy; {new Date().getFullYear()} Diatomicsoft. All rights reserved.
            </div>
        </footer>
    );
}
