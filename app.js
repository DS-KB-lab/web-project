(function () {
    var body = document.body;
    var lang = window.MEDDATA_LANG === "en" ? "en" : "zh";
    var site = lang === "en" ? (window.MEDDATA_SITE_EN || window.MEDDATA_SITE) : (window.MEDDATA_SITE_ZH || window.MEDDATA_SITE);

    if (!body) {
        return;
    }

    var UI = {
        zh: {
            metaDescriptionHome: "医疗多模态数据集与临床合作展示平台，涵盖胃肠癌、听神经瘤、脊索瘤、眼科多模态和 MRI 多场强方向。",
            metaDescriptionDetail: "医疗多模态数据集详情页，展示统计、图像、研究价值与合作方向。",
            documentTitleHome: "医疗多模态数据集与临床合作平台 | MedData Hub",
            brandTaglineHome: "医疗数据与临床合作展示平台",
            brandTaglineDetail: "数据集详情页",
            navHome: {
                datasets: "核心数据集",
                decoded: "数据预览",
                hospitals: "合作医院",
                collaboration: "临床合作"
            },
            navDetail: {
                datasets: "全部数据集",
                hospitals: "合作医院",
                collaboration: "临床合作"
            },
            hero: {
                eyebrow: "Clinical Data Atlas",
                title: "构建可直接用于展示与沟通的医疗数据门户。",
                lead: "页面围绕胃肠癌、听神经瘤、脊索瘤、眼科多模态和 MRI 多场强方向展开，统一展示数据结构、影像预览、研究价值与合作网络，适合直接用于项目介绍与对外沟通。",
                buttonDatasets: "浏览数据集",
                buttonHospitals: "查看合作医院",
                panelTag: "Data Preview",
                panelTitle: "多模态数据内容总览",
                statsLabels: [
                    "合作机构聚合点位",
                    "核心数据集方向",
                    "胃肠癌结构化记录",
                    "眼科多模态资料",
                    "听神经瘤影像记录",
                    "覆盖数据格式",
                    "核心影像模态",
                    "点击卡片查看专页"
                ]
            },
            sections: {
                datasetsEyebrow: "Datasets",
                datasetsTitle: "点击卡片直接进入专门的数据集详情页",
                datasetsLead: "每个详情页都围绕该数据方向的图像、统计摘要、研究价值与合作潜力展开。",
                decodedEyebrow: "Preview",
                decodedTitle: "多模态数据预览",
                decodedLead: "包含 CRC 统计图、听神经瘤三维影像关键切片，以及眼科 CT / MRI 等多模态图像预览。",
                hospitalsEyebrow: "Hospital Network",
                hospitalsTitle: "合作医院的动态中国地图",
                hospitalsLead: "地图上的每个点位都对应实际合作城市，点击可以查看该城市承接的医院或科研机构。",
                collaborationEyebrow: "Clinical Collaboration",
                collaborationTitle: "按研究方向反向匹配医院与数据采集路径",
                collaborationLead: "我们可以联动科室主任推进定制化采集、数据勾画和问题定义，把模型研究和临床需求真正接起来。"
            },
            collaborationCards: [
                {
                    title: "定制化取数",
                    body: "根据病种、模态和终点变量，反向定位合作医院和科室，规划采集范围。"
                },
                {
                    title: "标注与勾画",
                    body: "支持与医院联合完成结构化整理、病灶勾画和临床标签定义。"
                },
                {
                    title: "临床共创",
                    body: "让研究问题直接对齐科室主任和临床医生的真实痛点，提升项目转化意义。"
                }
            ],
            previewCards: [
                {
                    title: "CRC 队列统计图",
                    body: "围绕分期、生存状态和队列规模，展示结直肠癌数据的结构化信息与研究基础。"
                },
                {
                    title: "听神经瘤三维影像",
                    body: "展示听神经瘤方向的三维影像关键切片，可用于分割、诊断辅助和影像分析。"
                },
                {
                    title: "眼科多模态影像",
                    body: "展示眼外伤 CT 与 Fuchs MRI 等多模态眼科相关影像内容，体现数据覆盖广度。"
                }
            ],
            hospitals: {
                legendMarker: "动态脉冲点位",
                legendLine: "与平台协作网络",
                summaryLabels: [
                    "聚合后的合作机构数量",
                    "城市点位已接入地图",
                    "华北、东北、华东、华中、华南、西南、西北",
                    "查看城市级机构清单"
                ],
                summaryValues: ["7 大区域", "点击点位"],
                focusIntro: function (count) {
                    return "当前聚合点位覆盖 " + count + " 家合作机构，以下为该城市或区域的主要合作单位。";
                },
                clusterCount: function (region, count) {
                    return region + " · " + count + " 家机构";
                }
            },
            detail: {
                back: "← 返回首页的数据集列表",
                headingEyebrow: "Dataset Detail",
                coverageChip: "数据覆盖范围",
                coverageText: function (count, note) {
                    return count + " 项资料已纳入当前展示版本。" + note;
                },
                defaultCoverage: "当前展示版本已接入该数据方向的核心内容。",
                highlightsChip: "研究价值",
                galleryEyebrow: "Gallery",
                galleryTitle: "图像与统计摘要",
                galleryLead: "本页集中展示该数据方向的代表性图像、结构化信息和研究价值。",
                relatedEyebrow: "Related",
                relatedTitle: "继续查看其他数据集",
                relatedLead: "主页仍然保留完整的动态医院地图和全部数据集入口。"
            },
            footerHome: "MedData Hub · 多模态医疗数据与临床合作展示平台",
            footerDetail: "返回首页可继续浏览其他数据集与合作医院网络",
            missingData: "数据资源未成功加载，请刷新页面或重新执行资源生成脚本。"
        },
        en: {
            metaDescriptionHome: "A bilingual showcase for multimodal medical datasets and clinical collaboration across gastrointestinal cancer, acoustic neuroma, chordoma, ophthalmology, and multi-field-strength MRI.",
            metaDescriptionDetail: "Dataset detail page with statistics, images, research value, and collaboration direction.",
            documentTitleHome: "Medical Dataset & Clinical Collaboration Platform | MedData Hub",
            brandTaglineHome: "Medical data and clinical collaboration showcase",
            brandTaglineDetail: "Dataset detail page",
            navHome: {
                datasets: "Datasets",
                decoded: "Preview",
                hospitals: "Hospital Network",
                collaboration: "Collaboration"
            },
            navDetail: {
                datasets: "All Datasets",
                hospitals: "Hospital Network",
                collaboration: "Collaboration"
            },
            hero: {
                eyebrow: "Clinical Data Atlas",
                title: "A presentation-ready portal for medical datasets and clinical collaboration.",
                lead: "The site brings together gastrointestinal cancer, acoustic neuroma, chordoma, ophthalmology multimodal resources, and multi-field-strength MRI into one clear platform for research communication and partnership discussions.",
                buttonDatasets: "Browse Datasets",
                buttonHospitals: "View Hospital Network",
                panelTag: "Data Preview",
                panelTitle: "Multimodal content overview",
                statsLabels: [
                    "Partner institution clusters",
                    "Core dataset programs",
                    "Structured GI cancer records",
                    "Ophthalmology materials",
                    "Acoustic neuroma records",
                    "Supported data formats",
                    "Core imaging modalities",
                    "Open dedicated detail page"
                ]
            },
            sections: {
                datasetsEyebrow: "Datasets",
                datasetsTitle: "Open a dedicated detail page for each dataset",
                datasetsLead: "Each detail page presents representative images, cohort statistics, research value, and collaboration potential for that program.",
                decodedEyebrow: "Preview",
                decodedTitle: "Multimodal data preview",
                decodedLead: "Includes CRC statistics, key 3D acoustic neuroma slices, and multimodal ophthalmic CT / MRI previews.",
                hospitalsEyebrow: "Hospital Network",
                hospitalsTitle: "Interactive map of partner hospitals in China",
                hospitalsLead: "Each point on the map corresponds to a real partner city. Click a city to view the hospitals and institutes represented there.",
                collaborationEyebrow: "Clinical Collaboration",
                collaborationTitle: "Match research directions to partner hospitals and acquisition paths",
                collaborationLead: "We work directly with department leaders to define collection strategy, annotation scope, and clinically meaningful research questions."
            },
            collaborationCards: [
                {
                    title: "Custom Data Access",
                    body: "Match disease type, modality, and endpoints to the right hospital and department, then plan the acquisition scope."
                },
                {
                    title: "Annotation Support",
                    body: "Support joint structuring, lesion delineation, and clinically grounded label definition with hospital teams."
                },
                {
                    title: "Clinical Co-creation",
                    body: "Keep research questions aligned with real clinician pain points to improve translational value."
                }
            ],
            previewCards: [
                {
                    title: "CRC Cohort Statistics",
                    body: "Summarizes staging, survival status, and cohort size to show the structure of the gastrointestinal cancer program."
                },
                {
                    title: "3D Acoustic Neuroma Imaging",
                    body: "Highlights key slices from the 3D imaging volume for segmentation, diagnosis support, and image analysis."
                },
                {
                    title: "Ophthalmology Multimodal Imaging",
                    body: "Shows representative CT and MRI content from the ophthalmology direction to reflect the breadth of the dataset."
                }
            ],
            hospitals: {
                legendMarker: "Animated partner markers",
                legendLine: "Platform collaboration network",
                summaryLabels: [
                    "Partner institutions represented",
                    "Cities mapped",
                    "North, Northeast, East, Central, South, Southwest, Northwest China",
                    "Click a city for details"
                ],
                summaryValues: ["7 regions", "Interactive map"],
                focusIntro: function (count) {
                    return "This cluster currently represents " + count + " partner institution" + (count > 1 ? "s" : "") + ". The main organizations are listed below.";
                },
                clusterCount: function (region, count) {
                    return region + " · " + count + " institution" + (count > 1 ? "s" : "");
                }
            },
            detail: {
                back: "← Back to dataset overview",
                headingEyebrow: "Dataset Detail",
                coverageChip: "Coverage",
                coverageText: function (count, note) {
                    return count + " materials are reflected in this presentation build. " + note;
                },
                defaultCoverage: "This presentation build includes the core content for this program.",
                highlightsChip: "Research Value",
                galleryEyebrow: "Gallery",
                galleryTitle: "Images and statistical highlights",
                galleryLead: "This page concentrates the representative visuals, structured information, and research value of the selected program.",
                relatedEyebrow: "Related",
                relatedTitle: "Continue exploring other datasets",
                relatedLead: "The homepage still provides the full hospital map and access to all programs."
            },
            footerHome: "MedData Hub · Multimodal medical data and clinical collaboration showcase",
            footerDetail: "Return to the homepage to explore more datasets and the partner network",
            missingData: "Dataset assets did not load. Refresh the page or regenerate the local assets."
        }
    };

    var copy = UI[lang];

    ready(function () {
        bindTransitions();
        bindLanguageToggle();
        applyShellCopy();

        if (!site) {
            renderMissingDataNotice();
            readyBody();
            return;
        }

        if (getPage() === "home") {
            renderHome();
        }

        if (getPage() === "dataset-detail") {
            renderDatasetDetail();
        }

        readyBody();
    });

    function ready(fn) {
        var fired = false;
        function once() {
            if (fired) {
                return;
            }
            fired = true;
            fn();
        }
        if (document.readyState === "loading") {
            addListener(document, "DOMContentLoaded", once);
            addListener(window, "load", once);
            return;
        }
        once();
    }

    function addListener(node, eventName, handler) {
        if (!node) {
            return;
        }
        if (node.addEventListener) {
            node.addEventListener(eventName, handler, false);
            return;
        }
        if (node.attachEvent) {
            node.attachEvent("on" + eventName, handler);
        }
    }

    function readyBody() {
        if (window.requestAnimationFrame) {
            window.requestAnimationFrame(function () {
                addClass(body, "is-ready");
            });
            return;
        }
        window.setTimeout(function () {
            addClass(body, "is-ready");
        }, 16);
    }

    function renderMissingDataNotice() {
        var main = document.getElementsByTagName("main")[0];
        var banner;
        if (!main || document.getElementById("asset-error-banner")) {
            return;
        }
        banner = document.createElement("div");
        banner.id = "asset-error-banner";
        banner.className = "noscript-banner";
        banner.appendChild(document.createTextNode(copy.missingData));
        main.insertBefore(banner, main.firstChild);
    }

    function bindTransitions() {
        addListener(document, "click", function (event) {
            var anchor = findTransitionAnchor(getEventTarget(event));
            var href;
            if (!anchor) {
                return;
            }
            href = anchor.getAttribute("href");
            if (!href || href.indexOf("#") === 0 || anchor.target === "_blank" || event.metaKey || event.ctrlKey) {
                return;
            }
            preventEvent(event);
            addClass(body, "is-leaving");
            window.setTimeout(function () {
                window.location.href = withLang(href);
            }, 220);
        });
    }

    function bindLanguageToggle() {
        var toggle = document.getElementById("lang-toggle");
        var buttons;
        var i;
        if (!toggle) {
            return;
        }

        buttons = toggle.getElementsByTagName("button");
        for (i = 0; i < buttons.length; i += 1) {
            bindLanguageButton(buttons[i]);
        }
    }

    function bindLanguageButton(button) {
        var buttonLang = getData(button, "lang");
        if (buttonLang === lang) {
            addClass(button, "active");
        } else {
            removeClass(button, "active");
        }

        addListener(button, "click", function () {
            var next = getData(button, "lang") === "en" ? "en" : "zh";
            if (next === lang) {
                return;
            }
            try {
                window.localStorage.setItem("meddata-lang", next);
            } catch (error) {}
            window.location.href = setLangInHref(window.location.href, next);
        });
    }

    function applyShellCopy() {
        var i;
        var page = getPage();
        if (page === "home") {
            document.title = copy.documentTitleHome;
            setDescription(copy.metaDescriptionHome);
        } else {
            setDescription(copy.metaDescriptionDetail);
        }

        if (page === "home") {
            setText("brand-tagline", copy.brandTaglineHome);
            setText("nav-datasets", copy.navHome.datasets);
            setText("nav-decoded", copy.navHome.decoded);
            setText("nav-hospitals", copy.navHome.hospitals);
            setText("nav-collaboration", copy.navHome.collaboration);
            setText("hero-eyebrow", copy.hero.eyebrow);
            setText("hero-title", copy.hero.title);
            setText("hero-lead", copy.hero.lead);
            setText("hero-button-datasets", copy.hero.buttonDatasets);
            setText("hero-button-hospitals", copy.hero.buttonHospitals);
            setText("hero-panel-tag", copy.hero.panelTag);
            setText("hero-panel-title", copy.hero.panelTitle);
            setText("datasets-eyebrow", copy.sections.datasetsEyebrow);
            setText("datasets-title", copy.sections.datasetsTitle);
            setText("datasets-lead", copy.sections.datasetsLead);
            setText("decoded-eyebrow", copy.sections.decodedEyebrow);
            setText("decoded-title", copy.sections.decodedTitle);
            setText("decoded-lead", copy.sections.decodedLead);
            setText("hospitals-eyebrow", copy.sections.hospitalsEyebrow);
            setText("hospitals-title", copy.sections.hospitalsTitle);
            setText("hospitals-lead", copy.sections.hospitalsLead);
            setText("legend-marker", copy.hospitals.legendMarker);
            setText("legend-line", copy.hospitals.legendLine);
            setText("collaboration-eyebrow", copy.sections.collaborationEyebrow);
            setText("collaboration-title", copy.sections.collaborationTitle);
            setText("collaboration-lead", copy.sections.collaborationLead);
            for (i = 0; i < copy.collaborationCards.length; i += 1) {
                setText("collab-card-" + (i + 1) + "-title", copy.collaborationCards[i].title);
                setText("collab-card-" + (i + 1) + "-body", copy.collaborationCards[i].body);
            }
            setText("footer-copy", copy.footerHome);
        }

        if (page === "dataset-detail") {
            setText("brand-tagline", copy.brandTaglineDetail);
            setText("nav-datasets", copy.navDetail.datasets);
            setText("nav-hospitals", copy.navDetail.hospitals);
            setText("nav-collaboration", copy.navDetail.collaboration);
            setText("footer-copy", copy.footerDetail);
        }
    }

    function renderHome() {
        renderHeroStats();
        renderHeroPreviewGrid();
        renderDatasetGrid();
        renderDecodedStrip();
        renderHospitals();
    }

    function renderHeroStats() {
        var container = document.getElementById("hero-stats");
        var gastro;
        var acoustic;
        var ophthalmology;
        var labels;
        var stats;
        var html;
        var i;
        if (!container) {
            return;
        }

        gastro = getDataset("gastro");
        acoustic = getDataset("acoustic");
        ophthalmology = getDataset("ophthalmology");
        labels = copy.hero.statsLabels;
        stats = [
            { value: String(site.summary.total_hospitals), label: labels[0] },
            { value: String(site.summary.dataset_count), label: labels[1] },
            { value: readStatAt(gastro, 0, "2632"), label: labels[2] },
            { value: readStatAt(ophthalmology, 0, "1221"), label: labels[3] },
            { value: readStatAt(acoustic, 0, "995"), label: labels[4] },
            { value: "DICOM / NIfTI / Excel", label: labels[5] },
            { value: "CT / MRI / OCT", label: labels[6] },
            { value: lang === "en" ? "Detail View" : "详情页", label: labels[7] }
        ];

        html = [];
        for (i = 0; i < stats.length; i += 1) {
            html.push(
                '<div class="stat-pill">' +
                    "<strong>" + escapeHtml(stats[i].value) + "</strong>" +
                    "<span>" + escapeHtml(stats[i].label) + "</span>" +
                "</div>"
            );
        }
        container.innerHTML = html.join("");
    }

    function renderHeroPreviewGrid() {
        var container = document.getElementById("hero-preview-grid");
        var gastro;
        var acoustic;
        var ophthalmology;
        var candidates;
        var previews;
        var html;
        var i;
        if (!container) {
            return;
        }

        gastro = getDataset("gastro");
        acoustic = getDataset("acoustic");
        ophthalmology = getDataset("ophthalmology");
        candidates = [
            galleryItem(gastro, 0),
            galleryItem(acoustic, 1),
            galleryItem(ophthalmology, 1),
            galleryItem(ophthalmology, 2)
        ];
        previews = filterTruthy(candidates);

        html = [];
        for (i = 0; i < previews.length; i += 1) {
            html.push(
                '<figure class="mini-preview">' +
                    '<img src="' + escapeAttr(encodePath(previews[i].src)) + '" alt="' + escapeAttr(previews[i].caption) + '">' +
                    "<figcaption>" + escapeHtml(previews[i].caption) + "</figcaption>" +
                "</figure>"
            );
        }
        container.innerHTML = html.join("");
    }

    function renderDatasetGrid() {
        var container = document.getElementById("dataset-grid");
        var html;
        var i;
        if (!container) {
            return;
        }

        html = [];
        for (i = 0; i < site.datasets.length; i += 1) {
            html.push(renderDatasetCard(site.datasets[i]));
        }
        container.innerHTML = html.join("");
    }

    function renderDatasetCard(dataset) {
        var stats = dataset.stats || [];
        var statsHtml = [];
        var j;
        var limit = stats.length > 2 ? 2 : stats.length;

        for (j = 0; j < limit; j += 1) {
            statsHtml.push(
                '<div class="dataset-stat">' +
                    "<span>" + escapeHtml(stats[j].label) + "</span>" +
                    "<strong>" + escapeHtml(stats[j].value) + "</strong>" +
                "</div>"
            );
        }

        return (
            '<a class="dataset-card" href="' + escapeAttr(withLang("dataset.html?dataset=" + encodeURIComponent(dataset.id))) + '" data-transition>' +
                "<figure>" +
                    '<img src="' + escapeAttr(encodePath(getDatasetCover(dataset))) + '" alt="' + escapeAttr(dataset.name) + '">' +
                "</figure>" +
                '<div class="dataset-card-body">' +
                    "<div>" +
                        '<div class="meta-chip">' + escapeHtml(dataset.tagline) + "</div>" +
                        "<h3>" + escapeHtml(dataset.name) + "</h3>" +
                    "</div>" +
                    "<p>" + escapeHtml(dataset.summary) + "</p>" +
                    '<div class="dataset-stats">' + statsHtml.join("") + "</div>" +
                "</div>" +
            "</a>"
        );
    }

    function renderDecodedStrip() {
        var container = document.getElementById("decoded-strip");
        var gastro;
        var acoustic;
        var ophthalmology;
        var cards;
        var html;
        var i;
        if (!container) {
            return;
        }

        gastro = getDataset("gastro");
        acoustic = getDataset("acoustic");
        ophthalmology = getDataset("ophthalmology");
        cards = [
            buildPreviewCard(copy.previewCards[0], firstAsset(gastro, 0) || gallerySrc(gastro, 0)),
            buildPreviewCard(copy.previewCards[1], firstAsset(acoustic, 1) || gallerySrc(acoustic, 1)),
            buildPreviewCard(copy.previewCards[2], firstAsset(ophthalmology, 1) || gallerySrc(ophthalmology, 1))
        ];

        html = [];
        for (i = 0; i < cards.length; i += 1) {
            html.push(
                '<article class="decoded-card">' +
                    '<img src="' + escapeAttr(encodePath(cards[i].image)) + '" alt="' + escapeAttr(cards[i].title) + '">' +
                    '<div class="decoded-card-body">' +
                        "<strong>" + escapeHtml(cards[i].title) + "</strong>" +
                        "<p>" + escapeHtml(cards[i].body) + "</p>" +
                    "</div>" +
                "</article>"
            );
        }
        container.innerHTML = html.join("");
    }

    function renderHospitals() {
        var markersRoot = document.getElementById("hospital-markers");
        var routesRoot = document.getElementById("hospital-routes");
        var focusRoot = document.getElementById("hospital-focus");
        var listRoot = document.getElementById("hospital-list");
        var summaryRoot = document.getElementById("hospital-summary");
        var clusters;
        var totalCities;
        var totalInstitutions;
        var i;
        var routesHtml = [];
        var markersHtml = [];
        var listHtml = [];

        if (!markersRoot || !routesRoot || !focusRoot || !listRoot || !summaryRoot) {
            return;
        }

        clusters = cloneArray(site.hospitals);
        clusters.sort(function (a, b) {
            if (a.count !== b.count) {
                return b.count - a.count;
            }
            if (a.city < b.city) {
                return -1;
            }
            if (a.city > b.city) {
                return 1;
            }
            return 0;
        });

        totalCities = clusters.length;
        totalInstitutions = 0;
        for (i = 0; i < clusters.length; i += 1) {
            totalInstitutions += clusters[i].count;
        }

        summaryRoot.innerHTML =
            "<div><strong>" + escapeHtml(String(totalInstitutions)) + "</strong><span>" + escapeHtml(copy.hospitals.summaryLabels[0]) + "</span></div>" +
            "<div><strong>" + escapeHtml(String(totalCities)) + "</strong><span>" + escapeHtml(copy.hospitals.summaryLabels[1]) + "</span></div>" +
            "<div><strong>" + escapeHtml(copy.hospitals.summaryValues[0]) + "</strong><span>" + escapeHtml(copy.hospitals.summaryLabels[2]) + "</span></div>" +
            "<div><strong>" + escapeHtml(copy.hospitals.summaryValues[1]) + "</strong><span>" + escapeHtml(copy.hospitals.summaryLabels[3]) + "</span></div>";

        for (i = 0; i < clusters.length; i += 1) {
            routesHtml.push('<line class="hospital-route" x1="52" y1="51.5" x2="' + escapeAttr(String(clusters[i].x)) + '" y2="' + escapeAttr(String(clusters[i].y)) + '" />');
            markersHtml.push(renderMarker(clusters[i], i === 0));
            listHtml.push(renderHospitalListButton(clusters[i], i === 0));
        }

        routesRoot.innerHTML = routesHtml.join("");
        markersRoot.innerHTML = markersHtml.join("");
        listRoot.innerHTML = listHtml.join("");

        addListener(markersRoot, "click", function (event) {
            var button = closestByClass(getEventTarget(event), "hospital-marker");
            if (button) {
                activateHospital(getData(button, "city"), clusters, focusRoot, markersRoot, listRoot);
            }
        });

        addListener(listRoot, "click", function (event) {
            var button = closestByClass(getEventTarget(event), "hospital-cluster");
            if (button) {
                activateHospital(getData(button, "city"), clusters, focusRoot, markersRoot, listRoot);
            }
        });

        if (clusters.length) {
            activateHospital(clusters[0].city, clusters, focusRoot, markersRoot, listRoot);
        }
    }

    function renderMarker(cluster, active) {
        var size = 10 + cluster.count * 1.8;
        return (
            '<button class="hospital-marker' + (active ? " active" : "") + '" type="button" style="left:' + escapeAttr(String(cluster.x)) + "%; top:" + escapeAttr(String(cluster.y)) + "%; --size:" + escapeAttr(String(size)) + 'px;" data-city="' + escapeAttr(cluster.city) + '">' +
                '<span class="marker-badge">' + escapeHtml(cluster.city) + "</span>" +
            "</button>"
        );
    }

    function renderHospitalListButton(cluster, active) {
        return (
            '<button class="hospital-cluster' + (active ? " active" : "") + '" type="button" data-city="' + escapeAttr(cluster.city) + '">' +
                "<strong>" + escapeHtml(cluster.city) + "</strong>" +
                "<span>" + escapeHtml(copy.hospitals.clusterCount(cluster.region, cluster.count)) + "</span>" +
            "</button>"
        );
    }

    function activateHospital(city, clusters, focusRoot, markersRoot, listRoot) {
        var cluster = findHospital(city, clusters);
        var listItems = [];
        var markerButtons;
        var clusterButtons;
        var i;
        if (!cluster) {
            return;
        }

        for (i = 0; i < cluster.institutions.length; i += 1) {
            listItems.push("<li>" + escapeHtml(cluster.institutions[i]) + "</li>");
        }

        focusRoot.innerHTML =
            '<div class="meta-chip">' + escapeHtml(cluster.region) + "</div>" +
            "<h3>" + escapeHtml(cluster.city) + "</h3>" +
            "<p>" + escapeHtml(copy.hospitals.focusIntro(cluster.count)) + "</p>" +
            "<ul>" + listItems.join("") + "</ul>";

        markerButtons = markersRoot.getElementsByTagName("button");
        for (i = 0; i < markerButtons.length; i += 1) {
            if (getData(markerButtons[i], "city") === cluster.city) {
                addClass(markerButtons[i], "active");
            } else {
                removeClass(markerButtons[i], "active");
            }
        }

        clusterButtons = listRoot.getElementsByTagName("button");
        for (i = 0; i < clusterButtons.length; i += 1) {
            if (getData(clusterButtons[i], "city") === cluster.city) {
                addClass(clusterButtons[i], "active");
            } else {
                removeClass(clusterButtons[i], "active");
            }
        }
    }

    function renderDatasetDetail() {
        var root = document.getElementById("dataset-detail-root");
        var datasetId;
        var dataset;
        var related;
        var html = [];
        var i;
        var noteHtml = "";
        var sectionsHtml = [];
        var statsHtml = [];
        var galleryHtml = [];
        var relatedHtml = [];
        var highlightItems = [];

        if (!root) {
            return;
        }

        datasetId = getQueryParam("dataset");
        dataset = getDataset(datasetId) || site.datasets[0];
        related = [];
        for (i = 0; i < site.datasets.length; i += 1) {
            if (site.datasets[i].id !== dataset.id && related.length < 3) {
                related.push(site.datasets[i]);
            }
        }

        document.title = dataset.name + " | MedData Hub";
        setDescription(copy.metaDescriptionDetail);

        for (i = 0; i < (dataset.stats || []).length; i += 1) {
            statsHtml.push(
                '<div class="detail-stat">' +
                    "<strong>" + escapeHtml(dataset.stats[i].value) + "</strong>" +
                    "<span>" + escapeHtml(dataset.stats[i].label) + "</span>" +
                "</div>"
            );
        }

        for (i = 0; i < (dataset.highlights || []).length; i += 1) {
            highlightItems.push("<li>" + escapeHtml(dataset.highlights[i]) + "</li>");
        }

        for (i = 0; i < (dataset.detail_sections || []).length; i += 1) {
            sectionsHtml.push(
                '<article class="detail-section-card">' +
                    "<h3>" + escapeHtml(dataset.detail_sections[i].title) + "</h3>" +
                    "<p>" + escapeHtml(dataset.detail_sections[i].body) + "</p>" +
                "</article>"
            );
        }

        for (i = 0; i < (dataset.gallery || []).length; i += 1) {
            galleryHtml.push(
                '<figure class="detail-figure">' +
                    '<img src="' + escapeAttr(encodePath(dataset.gallery[i].src)) + '" alt="' + escapeAttr(dataset.gallery[i].caption) + '">' +
                    "<figcaption>" +
                        "<strong>" + escapeHtml(dataset.name) + "</strong>" +
                        "<span>" + escapeHtml(dataset.gallery[i].caption) + "</span>" +
                    "</figcaption>" +
                "</figure>"
            );
        }

        for (i = 0; i < related.length; i += 1) {
            relatedHtml.push(
                '<a class="related-card" href="' + escapeAttr(withLang("dataset.html?dataset=" + encodeURIComponent(related[i].id))) + '" data-transition>' +
                    '<div class="meta-chip">' + escapeHtml(related[i].tagline) + "</div>" +
                    "<h3>" + escapeHtml(related[i].name) + "</h3>" +
                    "<p>" + escapeHtml(related[i].summary) + "</p>" +
                "</a>"
            );
        }

        if (dataset.status_note) {
            noteHtml = '<div><div class="meta-chip">' + escapeHtml(copy.detail.coverageChip) + '</div><p class="detail-intro">' + escapeHtml(dataset.status_note) + "</p></div>";
        }

        html.push('<section class="detail-shell">');
        html.push('<div class="detail-topbar"><a class="detail-back" href="' + escapeAttr(withLang("index.html#datasets")) + '" data-transition>' + escapeHtml(copy.detail.back) + '</a><div class="meta-chip">' + escapeHtml(dataset.tagline) + "</div></div>");
        html.push('<div class="detail-headline"><p class="eyebrow">' + escapeHtml(copy.detail.headingEyebrow) + "</p><h1>" + escapeHtml(dataset.name) + '</h1><p class="detail-intro">' + escapeHtml(dataset.summary) + "</p></div>");
        html.push('<div class="detail-stat-grid">' + statsHtml.join("") + "</div>");
        html.push('<div class="detail-grid">');
        html.push('<article class="detail-hero-card"><img src="' + escapeAttr(encodePath(getDatasetCover(dataset))) + '" alt="' + escapeAttr(dataset.name) + '"><div class="detail-card-copy"><div class="meta-chip">' + escapeHtml(copy.detail.coverageChip) + '</div><p class="detail-intro">' + escapeHtml(dataset.file_audit ? copy.detail.coverageText(dataset.file_audit.count, dataset.file_audit.note) : copy.detail.defaultCoverage) + "</p></div></article>");
        html.push('<aside class="detail-note">' + noteHtml + '<div><div class="meta-chip">' + escapeHtml(copy.detail.highlightsChip) + "</div><ul>" + highlightItems.join("") + "</ul></div></aside>");
        html.push("</div>");
        html.push('<div class="detail-section-grid">' + sectionsHtml.join("") + "</div>");
        html.push('<div class="section-heading"><p class="eyebrow">' + escapeHtml(copy.detail.galleryEyebrow) + "</p><h2>" + escapeHtml(copy.detail.galleryTitle) + "</h2><p>" + escapeHtml(copy.detail.galleryLead) + "</p></div>");
        html.push('<div class="detail-gallery">' + galleryHtml.join("") + "</div>");
        html.push('<div class="section-heading"><p class="eyebrow">' + escapeHtml(copy.detail.relatedEyebrow) + "</p><h2>" + escapeHtml(copy.detail.relatedTitle) + "</h2><p>" + escapeHtml(copy.detail.relatedLead) + "</p></div>");
        html.push('<div class="detail-related">' + relatedHtml.join("") + "</div>");
        html.push("</section>");
        root.innerHTML = html.join("");
    }

    function getPage() {
        return body.getAttribute("data-page") || "";
    }

    function getDataset(id) {
        var i;
        for (i = 0; i < site.datasets.length; i += 1) {
            if (site.datasets[i].id === id) {
                return site.datasets[i];
            }
        }
        return null;
    }

    function findHospital(city, clusters) {
        var i;
        for (i = 0; i < clusters.length; i += 1) {
            if (clusters[i].city === city) {
                return clusters[i];
            }
        }
        return clusters.length ? clusters[0] : null;
    }

    function readStatAt(dataset, index, fallback) {
        if (!dataset || !dataset.stats || !dataset.stats[index]) {
            return fallback;
        }
        return dataset.stats[index].value || fallback;
    }

    function galleryItem(dataset, index) {
        if (!dataset || !dataset.gallery) {
            return null;
        }
        return dataset.gallery[index] || null;
    }

    function gallerySrc(dataset, index) {
        var item = galleryItem(dataset, index);
        return item ? item.src : "";
    }

    function firstAsset(dataset, index) {
        if (!dataset || !dataset.assets) {
            return "";
        }
        return dataset.assets[index] || "";
    }

    function buildPreviewCard(base, image) {
        return {
            title: base.title,
            body: base.body,
            image: image
        };
    }

    function getDatasetCover(dataset) {
        if (dataset.id === "ophthalmology" && dataset.representative_images && dataset.representative_images.length) {
            return dataset.representative_images[0][1];
        }
        if (dataset.id === "acoustic" && dataset.gallery && dataset.gallery[1]) {
            return dataset.gallery[1].src;
        }
        if (dataset.gallery && dataset.gallery.length) {
            return dataset.gallery[0].src;
        }
        return "";
    }

    function withLang(rawHref) {
        if (!rawHref || rawHref.indexOf("#") === 0 || rawHref.indexOf("mailto:") === 0 || rawHref.indexOf("javascript:") === 0) {
            return rawHref;
        }
        return setLangInHref(rawHref, lang);
    }

    function setLangInHref(href, nextLang) {
        var hashIndex = href.indexOf("#");
        var hash = "";
        var beforeHash = href;
        var queryIndex;
        var path;
        var search;
        var query;

        if (hashIndex >= 0) {
            hash = href.substring(hashIndex);
            beforeHash = href.substring(0, hashIndex);
        }

        queryIndex = beforeHash.indexOf("?");
        path = queryIndex >= 0 ? beforeHash.substring(0, queryIndex) : beforeHash;
        search = queryIndex >= 0 ? beforeHash.substring(queryIndex + 1) : "";
        query = upsertQueryParam(search, "lang", nextLang);
        return path + (query ? "?" + query : "") + hash;
    }

    function upsertQueryParam(search, key, value) {
        var items = [];
        var pairs;
        var i;
        var pair;
        var name;
        var encodedKey = encodeURIComponent(key);

        if (search) {
            pairs = search.split("&");
            for (i = 0; i < pairs.length; i += 1) {
                if (!pairs[i]) {
                    continue;
                }
                pair = pairs[i].split("=");
                name = decodeQueryPart(pair[0]);
                if (name !== key) {
                    items.push(pairs[i]);
                }
            }
        }

        items.push(encodedKey + "=" + encodeURIComponent(value));
        return items.join("&");
    }

    function getQueryParam(name) {
        var search = window.location.search || "";
        var pairs;
        var i;
        var pair;
        if (search.indexOf("?") === 0) {
            search = search.substring(1);
        }
        if (!search) {
            return "";
        }
        pairs = search.split("&");
        for (i = 0; i < pairs.length; i += 1) {
            pair = pairs[i].split("=");
            if (decodeQueryPart(pair[0]) === name) {
                return decodeQueryPart(pair.slice(1).join("="));
            }
        }
        return "";
    }

    function decodeQueryPart(value) {
        if (!value) {
            return "";
        }
        try {
            return decodeURIComponent(String(value).replace(/\+/g, " "));
        } catch (error) {
            return String(value);
        }
    }

    function setText(id, value) {
        var node = document.getElementById(id);
        if (node) {
            node.textContent = value;
        }
    }

    function setDescription(value) {
        var node = document.getElementById("page-description");
        if (node) {
            node.setAttribute("content", value);
        }
    }

    function encodePath(path) {
        if (!path) {
            return "";
        }
        return encodeURI(String(path));
    }

    function filterTruthy(items) {
        var result = [];
        var i;
        for (i = 0; i < items.length; i += 1) {
            if (items[i]) {
                result.push(items[i]);
            }
        }
        return result;
    }

    function cloneArray(items) {
        var result = [];
        var i;
        for (i = 0; i < items.length; i += 1) {
            result.push(items[i]);
        }
        return result;
    }

    function getEventTarget(event) {
        return event.target || event.srcElement;
    }

    function preventEvent(event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    }

    function findTransitionAnchor(node) {
        while (node && node !== document) {
            if (node.tagName && node.tagName.toUpperCase() === "A" && node.getAttribute("data-transition") !== null) {
                return node;
            }
            node = node.parentNode;
        }
        return null;
    }

    function closestByClass(node, className) {
        while (node && node !== document) {
            if (hasClass(node, className)) {
                return node;
            }
            node = node.parentNode;
        }
        return null;
    }

    function getData(node, name) {
        if (!node) {
            return "";
        }
        return node.getAttribute("data-" + name) || "";
    }

    function hasClass(node, className) {
        var current = node && node.className ? String(node.className) : "";
        return (" " + current + " ").indexOf(" " + className + " ") >= 0;
    }

    function addClass(node, className) {
        if (!node || hasClass(node, className)) {
            return;
        }
        node.className = node.className ? node.className + " " + className : className;
    }

    function removeClass(node, className) {
        var current;
        if (!node || !node.className) {
            return;
        }
        current = (" " + node.className + " ").replace(" " + className + " ", " ");
        node.className = current.replace(/^\s+|\s+$/g, "").replace(/\s+/g, " ");
    }

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }

    function escapeAttr(value) {
        return escapeHtml(value).replace(/'/g, "&#39;");
    }
})();
