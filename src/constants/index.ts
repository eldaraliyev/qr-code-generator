interface Socials {
    github: string,
    linkedin: string
}
interface Label {
    id: number | string
    label: string
    value: string
}

export const SocialLinks = {
    github: 'https://github.com/eldaraliyev',
    linkedin: 'https://linkedin.com/in/eldaralyv/'
}

export const Tabs: Label[] = [
    {id: 1, label: "Simple Text", value: "simple-text-form"},
    {id: 2, label: "URL", value: "url-form"},
    {id: 3, label: "Phone Number", value: "phone-number"},
    {id: 4, label: "Wi-Fi Access", value: "wifiacc-form"},
    {id: 5, label: "Personal Card ", value: "vcard-form"},
]