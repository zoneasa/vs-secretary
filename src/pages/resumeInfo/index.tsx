import React, { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import { AtAvatar, AtCard, AtTag, AtModal, AtModalHeader, AtModalContent, AtModalAction, AtInput } from "taro-ui"
import detailStore from '@/store/resumeDetails'

import { IndexMain } from './indexSty'

import grade from '@/assets/gradeWhite.png'
import share from '@/assets/shareWhite.png'
import like from '@/assets/like.png'
import download from '@/assets/download.png'
import add from '@/assets/addOrange.png'

type stateType = {
    showAddTags: boolean,
    value:string,
}


interface ResumeInfo {
    state: stateType,
}
class ResumeInfo extends Component {


    constructor(props) {
        super(props)
        this.state = {
            showAddTags: false,
            value:''
        }
    }

    addTags(show) {
        this.setState({
            showAddTags: show
        })
    }

    handleChange(){

    }
    render() {
        const details = detailStore.resumeDetail
        return (
            <IndexMain>
                <view className="header__search">
                    <View className='at-row details' >
                        <View className='at-col at-col-1 text__name'>
                            {details.name}
                        </View>
                        <View className='at-col at-col-1 img__grade'>
                            <AtAvatar image={grade} className="media"></AtAvatar>
                        </View>
                        <View className='at-col at-col-7'>
                            <Text className="text__score">7.8</Text>
                        </View>
               
                        <View className='at-col at-col-3 img__share'>
                            <Button className="button share" open-type="share">
                                <AtAvatar image={share}></AtAvatar>
                            </Button>

                        </View>
                    </View>


                    <Text className="text__info">职位：产品经理 ｜ 经验：6年 ｜ 学历：本科</Text>
                    <Text className="text__info">岗位类型：外包 ｜ 性别：男</Text>
                </view>

                <view className="card">
                    <AtCard>
                        <View className='at-row'>
                            <View className='at-col at-col-10'>
                                <view className="text_tags">标签：</view>
                            </View>
                            <View className='at-col at-col-2' onClick={this.addTags.bind(this, true)}>
                                <AtAvatar image={add} className="add" ></AtAvatar>
                            </View>
                        </View>

                        <view className="tags__2">
                            <AtTag>
                                <View className='at-row'>
                                    <View className='at-col at-col-8'>有数据思维</View>
                                    <View className='at-col at-col-2'><AtAvatar image={like}></AtAvatar></View>
                                    <View className='at-col at-col-2 text__count'>29</View>
                                </View>
                            </AtTag>
                            <AtTag>
                                <View className='at-row'>
                                    <View className='at-col at-col-8'>经验丰富</View>
                                    <View className='at-col at-col-2'><AtAvatar image={like}></AtAvatar></View>
                                    <View className='at-col at-col-2 text__count'>9</View>
                                </View>
                            </AtTag>
                            <AtTag >
                                <View className='at-row'>
                                    <View className='at-col at-col-8'>项目管理</View>
                                    <View className='at-col at-col-2'><AtAvatar image={like}></AtAvatar></View>
                                    <View className='at-col at-col-2 text__count'>19</View>
                                </View>
                            </AtTag>

                            <AtTag >
                                <View className='at-row active'>
                                    <View className='at-col at-col-9'>交互经验丰富</View>
                                    <View className='at-col at-col-2'><AtAvatar image={like}></AtAvatar></View>
                                    <View className='at-col at-col-2 text__count'>19</View>
                                </View>
                            </AtTag>
                            <AtTag >
                                <View className='at-row'>
                                    <View className='at-col at-col-8'>经验丰富</View>
                                    <View className='at-col at-col-2'><AtAvatar image={like}></AtAvatar></View>
                                    <View className='at-col at-col-2 text__count'>19</View>
                                </View>
                            </AtTag>
                        </view>

                    </AtCard>

                    <AtCard>
                        <View className='at-row'>
                            <View className='at-col at-col-10'>
                                <view className="text_tags">简历附件：</view>
                            </View>
                        </View>

                        <view className="tags__2">
                            <AtTag>
                                <View className='at-row'>
                                    <View className='at-col at-col-8'>{details.name}的简历.docx</View>
                                    <View className='at-col at-col-4 img__download'><AtAvatar image={download}></AtAvatar></View>
                                </View>
                            </AtTag>
                            <AtTag className="row__down__count">
                                <View className='at-row '>
                                    <Text className='at-col at-col-1 down__count'>已下载23份</Text>
                                </View>
                            </AtTag>
                        </view>

                        <View className='at-row'>
                            <View className='at-col at-col-10'>
                                <view className="text_tags">其它附件：</view>
                            </View>
                        </View>

                        <view className="tags__2">
                            <AtTag>
                                <View className='at-row'>
                                    <View className='at-col at-col-8'>{details.name}的作品集1.pdf</View>
                                    <View className='at-col at-col-4 img__download'><AtAvatar image={download}></AtAvatar></View>
                                </View>
                            </AtTag>

                            <AtTag>
                                <View className='at-row'>
                                    <View className='at-col at-col-8'>{details.name}的作品集2.pdf</View>
                                    <View className='at-col at-col-4 img__download'><AtAvatar image={download}></AtAvatar></View>
                                </View>
                            </AtTag>
                        </view>
                    </AtCard>
                </view>

            </IndexMain>
        )
    }
}

export default ResumeInfo