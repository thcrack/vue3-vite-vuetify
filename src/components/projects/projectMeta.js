import EyebusProject from './EyebusProject.vue'
import WalkingVibe from './WalkingVibe.vue'

export const projectMeta = {
    hong: {

    },
    eyebus: {
        title: "Eyebus",
        projectComponent: EyebusProject,
    },
    walkingvibe: {
        title: "WalkingVibe",
        projectComponent: WalkingVibe,
    }
}

export const projectPreviewData = [
    {
        projectIcon: 'https://carolyn-yu.com/images/reddotlogo.png',
        projectTitle: 'EyeBus',
        projectDescription: 'A Bus Reservation Service for People with Visual Impairments in Taipei.',
        img: 'https://carolyn-yu.com/images/eyebusCover.png',
        tags: ['UX','Mobile','Accessibility','Usability Testing','Sketch','Xcode'],
        themeColor: '#F1EFED',
        id: "eyebus",
        component: EyebusProject,
    },
    {
        projectIcon: 'https://carolyn-yu.com/images/chi2020logo.png',
        projectTitle: 'WalkingVibe',
        projectDescription: 'Reducing Virtual Reality Sickness and Improving Realism while Walking in VR using Unobtrusive Head-mounted Vibrotactile Feedback.',
        img: 'https://carolyn-yu.com/images/walkingvibeCover.png',
        tags: ['UX','Virtual Reality (VR)','Prototyping','C#','Arduino'],
        themeColor: '#E5ECF7',
        id: "walkingvibe",
        component: WalkingVibe,
    }
]
