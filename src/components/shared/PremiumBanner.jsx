import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Svg, { Circle, Rect } from 'react-native-svg'
import PremiumImageSvg from './PremiumImageSvg'


export default function PremiumBanner() {
    return (
        <View className='mt-5 bg-main rounded-[6px] mx-[10px] h-[125px] px-[10px] items-center justify-between flex-row'>
            <View>
                <View>
                    <Text className='text-[15px] text-white font-medium mb-[3px] '>Premium'a Geçmenin Tam Zamanı</Text>

                    <Text className='text-[11px] text-white '>Premium ile tariflerinizi ön plana çıkarın</Text>
                </View>

                <TouchableOpacity  className='mt-[10px] bg-white rounded-[24px] w-10/12 h-[32px] items-center justify-center '>
                    <Text className='text-[13px] text-primary font-medium'>7 Gün Ücretsiz</Text>
                </TouchableOpacity>
            </View>

            <View className='mt-5'>
                <PremiumImageSvg />
            </View>
        </View>
    )
}

