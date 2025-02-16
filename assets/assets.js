import user_image from './user-image.jpg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import git from './git.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import profile_img from './profile_img.jpg';
import office from './office.jpg';
import stevenson from './stevenson.png';
import grades from './grades.png';
import swimming from './swimming.png';
import swimming_dark from './swimming-dark.png';
import clubs from './clubs.png';
import clubs_dark from './clubs-dark.png';
import mit from './MIT.png';
import blueprint from './blueprint.png';
import eecs from './eecs.png';
import idss from './idss.jpeg';
import mckinsey from './mckinsey.jpeg';
import ibm from './ibm.png'

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    git,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    office,
    stevenson,
    grades,
    swimming,
    swimming_dark,
    clubs,
    clubs_dark,
    mit,
    blueprint,
    eecs,
    idss,
    mckinsey,
    ibm
};

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/work-1.png',
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: '/work-2.png',
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/work-3.png',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'Python, Java, Javascript React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.S. in Computer Science and B.S in Business Management' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Link to my GitHub' }
];

export const toolsData = [
    assets.vscode, assets.office, assets.git
];

export const highSchool = [
    { icon: assets.grades, iconDark: assets.grades, title: 'GPA/SAT', description: 'GPA: 3.98/4.0\n\nSAT: 1590/1600 (800 Math)' },
    { icon: assets.swimming, iconDark: assets.swimming_dark, title: 'Sports', description: 'Varsity Swimming: 4-year letterwinner, Team State Champion, School Record-holder in 3 events.\n\nVarsity Water Polo: 2-year starter, Team 2nd Place, School Season-Assist Record Holder, Illinois Senior Scholar Athlete Award Winner' },
    { icon: assets.clubs, iconDark: assets.clubs_dark, title: 'Extracurriculars', description: 'National Honor Society\n\nFreshman Mentor Program'}
]

export const college = [
    { icon: assets.grades, iconDark: assets.grades, title: 'Academics', description: 'GPA: 4.7/5.0\n\nCS Coursework: Data Structures and Algorithms, Linear Algebra, ML, Software Engineering, Probability.\n\nBusiness Coursework: Finance, Accounting, Competitive Strategy' },
    { icon: assets.swimming, iconDark: assets.swimming_dark, title: 'Sports', description:'Varsity Water Polo: Team finish of 4th Place at DIII Nationals, DIII Nationals All-Tournament Team' },
    { icon: assets.clubs, iconDark: assets.clubs_dark, title: 'Extracurriculars', description: 'Phi Kappa Psi Fraternity Brotherhood Chair & Recruitment Chair\n\nMIT EECS Department Lab Assistant\n\nMIT IDSS Research Assistant' }
]
