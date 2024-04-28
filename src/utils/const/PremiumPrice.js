import React from 'react'
import Svg, { Path, G, ClipPath, Defs, Rect } from 'react-native-svg'

export const PremiumPackages = [
    {
        id: 1,
        title: 'Aylık',
        price1: '29',
        price2: '.99',
        price3: ' ₺',
        icon:
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M19.9308 18.2383L19.9825 18.135V18.1C19.9825 18.0658 20 18.0308 20 18.0142V17.9792C20 17.945 20 17.8933 19.9833 17.8583L19.9308 17.755V17.7375L10.45 1.77917C10.4047 1.69998 10.3391 1.63425 10.2601 1.58871C10.181 1.54318 10.0912 1.51946 10 1.52C9.90943 1.52172 9.82076 1.5463 9.74223 1.59147C9.6637 1.63663 9.59787 1.70091 9.55083 1.77833L0.0691667 17.7208V17.7383L0.0175 17.8417C0 17.8758 0 17.9275 0 17.9617V17.9967C0 18.0308 0 18.0658 0.0166667 18.0825V18.1175C0.0341667 18.1517 0.0341667 18.1867 0.0691667 18.2208L0.0858333 18.2383C0.103333 18.2725 0.120833 18.3075 0.155833 18.325L0.2075 18.3767C0.224167 18.3933 0.241667 18.4108 0.259167 18.4108C0.275833 18.4283 0.310833 18.4283 0.328333 18.4458C0.345 18.4458 0.3625 18.4625 0.38 18.4625C0.42462 18.4769 0.471535 18.4828 0.518333 18.48H19.465C19.5167 18.48 19.5508 18.48 19.6025 18.4633C19.62 18.4633 19.6375 18.4458 19.655 18.4458C19.6892 18.4283 19.7067 18.4283 19.7408 18.4108C19.7575 18.3942 19.7758 18.3942 19.7925 18.3767L19.8442 18.325C19.8724 18.3006 19.8958 18.2712 19.9133 18.2383H19.9308ZM10 9.43L13.0225 14.3008H6.9775L10 9.43ZM9.48167 8.3075L5.68167 14.4383L1.96917 16.5633L9.48167 3.93833V8.3075ZM6.18333 15.3542H13.8L17.5133 17.4792H2.47L6.18333 15.3542ZM14.3175 14.4383L10.5175 8.3075V3.9375L18.0308 16.5625L14.3175 14.4383Z" fill="#FF3200" />
            </Svg>
    },
    {
        id: 2,
        title: 'Yıllık',
        price1: '299',
        price2: '.99',
        price3: ' ₺',
        icon:
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <G clip-path="url(#clip0_130_119)">
                    <Path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#3B5BDB" />
                    <Path d="M9.84375 2.5C5.7875 2.5 2.5 5.7875 2.5 9.84375C2.5 13.9 5.7875 17.1875 9.84375 17.1875C13.9 17.1875 17.1875 13.9 17.1875 9.84375C17.1875 7.89607 16.4138 6.02815 15.0366 4.65093C13.6593 3.27371 11.7914 2.5 9.84375 2.5ZM9.84375 15.3562C8.38174 15.3562 6.97962 14.7755 5.94582 13.7417C4.91203 12.7079 4.33125 11.3058 4.33125 9.84375C4.33125 8.38174 4.91203 6.97962 5.94582 5.94582C6.97962 4.91203 8.38174 4.33125 9.84375 4.33125C11.3058 4.33125 12.7079 4.91203 13.7417 5.94582C14.7755 6.97962 15.3562 8.38174 15.3562 9.84375C15.3562 11.3058 14.7755 12.7079 13.7417 13.7417C12.7079 14.7755 11.3058 15.3562 9.84375 15.3562ZM8.0125 9.85L9.85 12.6L11.675 9.85L9.85 7.09375L8.0125 9.85Z" fill="white" />
                </G>
                <Defs>
                    <ClipPath id="clip0_130_119">
                        <Rect width="20" height="20" fill="white" />
                    </ClipPath>
                </Defs>
            </Svg>
    },
    {
        id: 3,
        title: 'Sınırsız',
        price1: '399',
        price2: '.99',
        price3: ' ₺',
        icon:
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M5 1.66667H6.74333L4.995 6.66667H1.985L4.255 2.12667C4.32428 1.98842 4.43065 1.87218 4.56222 1.79094C4.69379 1.7097 4.84537 1.66667 5 1.66667ZM2.045 8.33333L7.06833 16.145L4.95 8.33333H2.045ZM6.67667 8.33333L9.22667 17.7417C9.27186 17.9123 9.37221 18.0632 9.51208 18.1708C9.65195 18.2785 9.8235 18.3368 10 18.3368C10.1765 18.3368 10.348 18.2785 10.4879 18.1708C10.6278 18.0632 10.7281 17.9123 10.7733 17.7417L13.33 8.33333H6.67667ZM15.0567 8.33333L12.9333 16.1417L17.955 8.33333H15.0567ZM18.015 6.66667H15.01L13.26 1.66667H15C15.1549 1.66636 15.3068 1.70924 15.4387 1.7905C15.5706 1.87176 15.6773 1.98817 15.7467 2.12667L18.015 6.66667ZM13.245 6.66667H6.76167L8.50833 1.66667H11.4917L13.245 6.66667Z" fill="#2F9E44" />
            </Svg>

    },
]

