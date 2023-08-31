import React from 'react'
import './main.scss'
import preview_mockup from '../assets/preview_mockup.png'
import preview_playstore from '../assets/preview_playstore.png'
import preview_appstore from '../assets/preview_appstore.png'
import overview_mockup from '../assets/overview_mockup.png'
import timer_mockup from '../assets/timer_mockup.png'
import statistics_mockup from '../assets/statistics_mockup.png'
import ranking_mockup from '../assets/ranking_mockup.png'
import benefit_1 from '../assets/benefit_1.png'
import benefit_2 from '../assets/benefit_2.png'
import benefit_3 from '../assets/benefit_3.png'
import benefit_4 from '../assets/benefit_4.png'
import TableItem from '../components/table_item'
import download_playstore from '../assets/download_playstore.png'
import download_appstore from '../assets/download_appstore.png'

function Main() {
    return (
        <>
            <div className='main_page'>
                <div className='preview_bg'>
                    <div className='preview'>
                        <img className='preview_mockup' src={preview_mockup} />
                        <div className='preview_contents'>
                            <span className='preview_subtitle'>내가 키우는 뽀모도로</span>
                            <span className='preview_title'>방울이</span>
                            <span className='preview_description'>귀여운 방울이와 즐겁게 시간 관리하기</span>
                            <div>
                                <img className='preview_playstore' src={preview_playstore} />
                                <img src={preview_appstore} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='overview_bg'>
                    <div className='overview'>
                        <div className='overview_contents'>
                            <span className='overview_title'>Overview</span>
                            <span className='overview_subtitle'>의지를 심어주는 뽀모도로 관리 앱</span>
                            <span className='overview_description'>방울이는 사용자가 시간관리를 지속할 수 있도록<br />
                                의지를 주는데 초점이 맞춰진 뽀모도로 관리 앱입니다</span>
                        </div>
                        <img className='overview_mockup' src={overview_mockup} />
                    </div>
                </div>
                <div className='timer_bg'>
                    <div className='timer'>
                        <img className='timer_mockup' src={timer_mockup} />
                        <div className='timer_contents'>
                            <span className='timer_title'>Timer</span>
                            <span className='timer_subtitle'>귀엽고 직관적인 타이머</span>
                            <span className='timer_description'>사용자에게 부담을 주지 않는<br />
                                간단한 타이머 설정과<br />
                                실행하면 나타나는 귀여운 방울이를 통해<br />
                                즐거운 집중시간을 보낼 수 있습니다</span>
                        </div>
                    </div>
                </div>
                <div className='statistics_bg'>
                    <div className='statistics'>
                        <div className='statistics_contents'>
                            <span className='statistics_title'>Statistics</span>
                            <span className='statistics_subtitle'>쌓여가는 토마토</span>
                            <span className='statistics_description'>당신이 집중한 시간에 비례해서<br />
                                나무에 토마토가 열립니다<br />
                                얼마나 많은 토마토를 모을 수 있을까요<br />
                                쌓여가는 토마토와 함꼐 성취감을 느껴보세요<br />
                                주간, 월간 통계도 함께 확인해볼 수 있습니다</span>
                        </div>
                        <img className='statistics_mockup' src={statistics_mockup} />
                    </div>
                </div>
                <div className='ranking_bg'>
                    <div className='ranking'>
                        <img className='ranking_mockup' src={ranking_mockup} />
                        <div className='ranking_contents'>
                            <span className='ranking_title'>Ranking</span>
                            <span className='ranking_subtitle'>쌓여가는 토마토</span>
                            <span className='ranking_description'>당신이 집중한 시간에 비례해서<br />
                                나무에 토마토가 열립니다<br />
                                얼마나 많은 토마토를 모을 수 있을까요<br />
                                쌓여가는 토마토와 함꼐 성취감을 느껴보세요<br />
                                주간, 월간 통계도 함께 확인해볼 수 있습니다</span>
                        </div>
                    </div>
                </div>
                <div className='benefits_bg'>
                    <div className='benefits'>
                        <div className='benefits_contents'>
                            <span className='benefits_title'>Benefits</span>
                            <span className='benefits_subtitle'>방울이의 장점</span>
                        </div>
                        <div className='benefits_table'>
                            <TableItem src={benefit_1} title='방울 뽀모도로' description1='시작하는 부담감을 줄이고자 더 쉬워진' description2='15분/5분의 방울 뽀모도로 기법 제안'/>
                            <TableItem src={benefit_2} title='시각적 피드백' description1='집중시간을 바탕으로 15분마다 자라는' description2='토마토와 통계, 랭킹으로 동기부여 제공'/>
                            <TableItem src={benefit_3} title='귀여운 캐릭터' description1='사용자에게 더 친근하게 다가갈 수 있도록' description2='디자인과 캐릭터로 귀여운 분위기 조성'/>
                            <TableItem src={benefit_4} title='간편한 기능' description1='간단하고 직관적인 작동 방식으로 사용성을' description2='높이고 편리함 추구'/>
                        </div>
                    </div>
                </div>
                <div className='download_bg'>
                    <div className='download'>
                        <span className='download_description'>지금 다운로드 해보세요</span>
                        <div>
                            <img className='download_playstore' src={download_playstore}/>
                            <img src={download_appstore}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main;