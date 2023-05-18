<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ include file="/WEB-INF/views/user/include/header.jsp" %>



<body>


	<div id="wrap">
        <section id="back_img" class="archive-img"><!--상단 이미지-->
            <article id="back_img_inner">
                <h3 data-lang-type="kr">조선통신사 디지털 아카이브</h3>
                <h3 data-lang-type="jp">朝鮮通信使デジタルアーカイブ</h3>
                <h3 data-lang-type="en">Joseon Tongsinsa Digital Archive</h3>
            </article></section>
        <section id="archive-nav">
            <ul id="archiveSubNav">
                <li class="archive-sub-routes current" onclick="location.href='archive.do'">
                    <span data-lang-type="kr">아카이브 안내</span>
                    <span data-lang-type="jp">アーカイブの紹介</span>
                    <span data-lang-type="en">Introduction to the Archives</span>    
                </li>
                <li class="archive-sub-routes " onclick="location.href='DataUse.do'">
                    <span data-lang-type="kr">자료이용 안내</span>
                    <span data-lang-type="jp"> 資料の使用ガイド</span>
                    <span data-lang-type="en">Guide to Using Materials</span>   
                </li>
            </ul>
            <div id="contentView" data-sub-route="community" data-sub-route-current="아카이브 안내">
            </div>
        </section>

        <section id="archive-content">
            <article id="archive-content-inner">
                <div class="archive-top-text">
                    <h3>
                        <span data-lang-type="kr">아카이브 안내</span>
                        <span data-lang-type="jp">アーカイブのガイド</span>
                        <span data-lang-type="en">Guide to the Archives</span>
                    </h3>
                    <p>
                        <span data-lang-type="kr">조선통신사 디지털 아카이브는 국내 · 외에 분산된 유네스코 세계기록유산 등재 조선통신사 기록물의 통합 정보 시스템을 구축하여
                        조선통신사 기록물의 역사적 가치와 우수성을 알리고자 운영하고 있습니다. 조선통신사 기록물의 정보와 해설, 원문 이미지와 함께
                        기록물을 활용한 음성 지원 콘텐츠, 가상 전시 등 다양한 매체형식의 서비스를 통하여
                        언제 어디서나 접근 가능하며 누구나 이해하기 쉬운 기록물 정보를 전달하고자 합니다.
                        </span>
                        <span data-lang-type="jp">朝鮮通信使デジタルアーカイブは、ユネスコの世界遺産に登録された朝鮮通信使の記録を国内
                            外に配信する統合情報システムを構築し、朝鮮通信使の記録の歴史的価値と卓越性を広く知ら
                            せるために運営しています。 朝鮮通信使は、記録に関する情報と解説、原画を使用した記録を
                            利用した音声支援コンテンツ、バーチャル展示など、さまざまなメディア形式のサービスを通じ
                            て、どこからでもアクセスでき、誰にでもわかりやすい記録情報をお届けすることを目指していま
                            す。
                        </span>
                        <span data-lang-type="en">The Joseon Tongsinsa Digital Archive is operating to publicize the historical value and
                            excellence of Joseon Tongsinsa records by establishing an integrated information system of
                            Joseon Tongsinsa records registered as UNESCO World Heritage distributed domestically
                            and internationally. Joseon Tongsinsa aims to deliver information on records that can be
                            accessed anywhere and is easy for anyone to understand through services in various media
                            formats, such as information and commentary on records, audio support contents using
                            records using original images, and virtual exhibitions.
                            </span>
                        
                    </p>
                </div>

                <div class="archive-middle-icon">
                    <div class="archive-record-box">
                        <div class="archive-icon-imgs">
                            <p class="archive-icon-img icon-img1"></p>
                        </div>
                        <h6>
                            <span data-lang-type="kr">기록물 검색</span>
                            <span data-lang-type="jp">アーカイブ検索</span>
                            <span data-lang-type="en">archives search</span>
                        </h6>
                        <div>
                            <p>
                                <span data-lang-type="kr">유네스코 세계기록유산으로 등재된
                                    조선통신사 기록물의 정보를
                                    통합 검색할 수 있습니다.
                                </span>
                                <span data-lang-type="jp">ユネスコ世界記憶遺産に登録された朝鮮通信使の資料情報を検索できます。
                                </span>
                                <span data-lang-type="en">You can search the information of Joseon Tongsinsa records registered as UNESCO Memory of the World Register</span>
                            </p>
                        </div>
                    </div>
                    
                    <div class="archive-record-box">
                        <div class="archive-icon-imgs">
                            <p class="archive-icon-img icon-img2"></p>
                        </div>
                       
                        <h6>
                            <span data-lang-type="kr">기록물 해설</span>
                            <span data-lang-type="jp">ドキュメンタリー解説</span>
                            <span data-lang-type="en">documentary commentary</span>
                        </h6>
                        <div>
                            <p>
                                <span data-lang-type="kr">사용자의 목적에 맞게
                                    기록물의 정보를 선택할 수 있도록
                                    연구자용(도록)과 일반 해설을
                                    각각 제공합니다.
                                </span>
                                <span data-lang-type="jp">研究者向け（目録）と総合解説をそれぞれ提供しており、利用者の目的に応じて記録の情報を選択でき
                                    るようになっています。
                                </span>
                                <span data-lang-type="en">We provide a (catalog) for researchers and a general commentary, respectively, so that the information of the records can be selected according to the user's purpose..</span>
                             </p>
                        </div>
                    </div>
                    
                    <div class="archive-record-box">
                        <div class="archive-icon-imgs">
                            <p class="archive-icon-img icon-img3"></p>
                        </div>
                        <h6>
                                <span data-lang-type="kr">디지털 소장자료</span>
                                <span data-lang-type="jp">デジタルコレクション</span>
                                <span data-lang-type="en">Digital collection</span>
                            </h6>
                        <div>
                            <p>
                                <span data-lang-type="kr">유네스코 세계기록유산으로 등재
                                    조선통신사 기록물 소장처의 협조를 통해
                                    기록물의 원문 이미지를 제공합니다.
                                </span>
                                <span data-lang-type="jp">ユネスコの世界遺産に登録 朝鮮通信使の資料館の協力により、記録の原画を提供しています。</span>
                                <span data-lang-type="en">Registered as a UNESCO World Heritage Site We provide original images of records through the cooperation of the archives of Joseon Tongsinsa.</span>
                            </p>
                            <p>
                                <span data-lang-type="kr">* 일부 기록물은 소장처의 사정에 따라 원문 미공개</span>
                                <span data-lang-type="jp">* 持株会社の都合により、一部レコードの原文を非公開とさせていただいております。
                                </span>
                                <span data-lang-type="en">*The original text of some records is not disclosed due to the circumstances of the holding company.
                                    </span>
                            </p>
                        </div>
                    </div>
                    
                    <div class="archive-record-box">
                        <div class="archive-icon-imgs">
                            <p class="archive-icon-img icon-img4"></p>
                        </div>
                        <h6>
                            <span data-lang-type="kr">기록물 활용 콘텐츠</span>
                            <span data-lang-type="jp">利用内容の記録</span>
                            <span data-lang-type="en">Records Utilization Content</span>
                        </h6>
                        <div>
                            <p>
                                <span data-lang-type="kr">음성지원 콘텐츠, 가상 전시 등
                                    조선통신사 기록물을 활용한
                                    콘텐츠를 개발, 제공합니다.
                                </span>
                                <span data-lang-type="jp">音声支援コンテンツやバーチャル展示など、朝鮮通信使の記録を活用したコンテンツを開発・提供して
                                    います。
                                </span>
                                <span data-lang-type="en">We develop and provide contents using records of Joseon Tongsinsa, such as audio support contents and virtual exhibitions.</span>
                             </p>
                        </div>
                    </div>
                </div>

            </article><!--archive-content-inner-->

            <section id="archive-bottom-Builders">
                <article id="archive-bottom-inner">
                    <div class="archive-Builders-title">
                        <p class="archive-Builders-text">
                                                        
                            <span data-lang-type="kr">조선통신사 디지털 아카이브</span>
                            <span data-lang-type="jp">朝鮮通信使デジタルアーカイブビルダー</span>
                            <span data-lang-type="en">Joseon Tongsinsa Digital Archive builders</span>

                        </p>
                        <p>
                            <span data-lang-type="kr">구축 참여자</span>
       
                        </p>
                    </div>
                    <div class="archive-Builders-list">
                        <p>
                            <span data-lang-type="kr">편집의원 : 강남주 (전 부경대학교 총장)</span>
                            <span data-lang-type="jp">カン・ナムジュ (元普京大学校長)</span>
                            <span data-lang-type="en">Kang Namju (Former President of PUKYUNG NATIONAL UNIVERSITY)</span>
                        </p>
                        <p>
                            <span data-lang-type="kr">강대민 (경성대학교 명예교수)</span>
                            <span data-lang-type="jp">カン・デミン (慶星大学名誉教授)</span>
                            <span data-lang-type="en">Kang Daemin (An Honorary Professor at KYUNG SUNG UNIVERSITY)
                            </span>
                        </p>
                        <p>
                            <span data-lang-type="kr">박화진 (부경대학교 교수)</span>
                            <span data-lang-type="jp">パク・ファジン (国立普京大学教授)</span>
                            <span data-lang-type="en">Park Hwajin (A Professor at PUKYUNG NATIONAL UNIVERSITY)</span>
                        </p>
                        <p>
                            <span data-lang-type="kr">한태문 (부경대학교 교수)</span>
                            <span data-lang-type="jp">ハン・テムン (国立普京大学教授)</span>
                            <span data-lang-type="en">Han Tae-moon (A Professor at PUKYUNG NATIONAL UNIVERSITY)</span>
                        </p>
                        <p>
                            <span data-lang-type="kr">이재성 (부경대학교 교수)</span>
                            <span data-lang-type="jp">イ・ジェソン (国立普京大学教授)</span>
                            <span data-lang-type="en">Lee Jae-seong (A Professor at PUKYUNG NATIONAL UNIVERSITY)</span>
                        </p>
                        <p>
                            <span data-lang-type="kr">정성일 (광주여자대학교 교수)</span>
                            <span data-lang-type="jp">チョン・ソンイル(光州女子大学教授)                            </span>
                            <span data-lang-type="en">Jeong Seong-il (A Professor at KWANGJU WOMEN's UNIVERSITY)</span>
                        </p>
                        <p>
                            <span data-lang-type="kr">정훈식 (울산대학교 국어국문학부 객원교수)</span>
                            <span data-lang-type="jp">チョン・フンシク(蔚山大学国語国文学客員教授)</span>
                            <span data-lang-type="en">Jeong Hoon-shik (Visiting Professor of Korean Language and Literature at UNIVERSITY of
                                ULSAN)</span>
                        </p>
                        <p>
                            <span data-lang-type="kr">이정은 (국립해양박물관 선임 학예사)</span>
                            <span data-lang-type="jp">イ・ジョンウン (韓国国立海洋博物館主任学芸員)</span>
                            <span data-lang-type="en">Lee Jeongeun (Senior curator at the National Maritime Museum of Korea) </span>
                        </p>
                        <p>
                            <span data-lang-type="kr">정은영 (부산대학교 강사)</span>
                            <span data-lang-type="jp">チョン・ウニョン (国立釜山大学講師)</span>
                            <span data-lang-type="en">Jung Eun-young (A Lecturer at PUSAN NATIONAL UNIVERSITY)</span>
                        </p>
                        <p>
                            <span data-lang-type="kr">편집감사 : 조가원·최유미 (부산대학교 박사수료) </span>
                            <span data-lang-type="jp">チョ・ガウォン・チェ・ユミ (釜山国立大学博士課程修了)</span>
                            <span data-lang-type="en">Jo Gawon·Choi Yumi (PhD Completion from PUSAN NATIONAL UNIVERSITY)</span>
                        </p>
                         <p>
                            <span data-lang-type="kr">아카이브 개발 : (주) 바이브컴퍼니 (대표:이재용)</span>
                            <span data-lang-type="jp">VAIVカンパニー株式会社 (代表 : イ・ジェヨン)</span>
                            <span data-lang-type="en">VAIV Company Co.LTD (CEO : Lee Jaeyoung)</span>
                        </p>
                        <p>
                            <span data-lang-type="kr">글쎄 (대표:신현동)</span>
                            <span data-lang-type="jp">GOULCE (代表 : シン・ヒョンドン)</span>
                            <span data-lang-type="en">GOULCE (CEO : Shin Hyun-dong)</span>
                        </p>
                        <p>
                            <span data-lang-type="kr">엠에엠네트웍스 (대표:김성원)</span>
                            <span data-lang-type="jp">(代表 : キム・ソンウォン)</span>
                            <span data-lang-type="en">M&M Networks (CEO : Kim Sungwon)</span>
                        </p>
                    </div>
                </article>
            </section>
        </section><!--archive-content-->
    </div>
<script>
	window.onload = function(){
		checkLangType();
	}
	
</script>

<%@ include file="/WEB-INF/views/user/include/footer.jsp" %>