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
    {id: 1, label: "Text", value: "simple-text-form"},
    {id: 2, label: "E-mail", value: "email-form"},
    {id: 3, label: "URL", value: "url-form"},
    {id: 4, label: "Phone Number", value: "phone-number-form"},
    {id: 5, label: "Wi-Fi", value: "wifi-account-form"},
    {id: 6, label: "Personal Card ", value: "vcard-form"},
]