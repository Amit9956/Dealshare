import React from 'react'
import { useNavigate } from 'react-router-dom'

const Item1 = () => {


    const listSection = [
        {
            "slotId": "c3b71cdb-08e3-11ee-8d59-11165f12fb5f",
            "slotPosition": 1,
            "versionType": "NEW",
            "functionalComponentType": "grid_fc",
            "uiComponent": "grid_dynamic_height",
            "metaData": {
                "adIdentifier": null,
                "gridId": 207,
                "gridType": null,
                "bgImage": null,
                "dimension": null,
                "themeMode": "DARK",
                "titleAlignment": "TOP",
                "titleColor": "#333333",
                "subTitleColor": "#7B7B7B",
                "separator": false
            },
            "contentData": {
                "id": 207,
                "title": "Grocery & Packaged Food",
                "subtitle": null,
                "dimension": {
                    "width": 234,
                    "height": 312
                },
                "promotionalContents": null,
                "rows": 2,
                "columns": 7,
                "backgroundImage": null,
                "gridCellModelList": [
                    {
                        "id": 1116,
                        "title": "",
                        "image": "https://images.dealshare.in/1740740466494lucstapleCookingEssentials.jpg?tr=f-webp",
                        "spans": {
                            "rowSpan": 1,
                            "colSpan": 1
                        },
                        "tags": {
                            "top": ""
                        },
                        "cta": {
                            "ctaType": "DEEPLINK",
                            "ctaVal": {
                                "landingPageType": "COLLECTION_LISTING",
                                "ctaParams": {
                                    "collectionId": "6624",
                                    "collectionName": "cooking-essentials"
                                },
                                "extraParams": null
                            },
                            "label": null,
                            "ctaIcon": null
                        }
                    },
                    {
                        "id": 1117,
                        "title": "",
                        "image": "https://images.dealshare.in/1740740471014lucstapleCookingEssentials_.jpg?tr=f-webp",
                        "spans": {
                            "rowSpan": 1,
                            "colSpan": 1
                        },
                        "tags": {
                            "top": ""
                        },
                        "cta": {
                            "ctaType": "DEEPLINK",
                            "ctaVal": {
                                "landingPageType": "CATEGORY_L2",
                                "ctaParams": {
                                    "categoryId": "1207",
                                    "categoryName": "flours-grains",
                                    "parentCategoryName": "grocery"
                                },
                                "extraParams": null
                            },
                            "label": null,
                            "ctaIcon": null
                        }
                    },
                    {
                        "id": 1118,
                        "title": "",
                        "image": "https://images.dealshare.in/1740740476667Rice&Pulses.jpg?tr=f-webp",
                        "spans": {
                            "rowSpan": 1,
                            "colSpan": 1
                        },
                        "tags": {
                            "top": ""
                        },
                        "cta": {
                            "ctaType": "DEEPLINK",
                            "ctaVal": {
                                "landingPageType": "COLLECTION_LISTING",
                                "ctaParams": {
                                    "collectionId": "6688",
                                    "collectionName": "rice-pulses"
                                },
                                "extraParams": null
                            },
                            "label": null,
                            "ctaIcon": null
                        }
                    },
                    {
                        "id": 1119,
                        "title": "",
                        "image": "https://images.dealshare.in/1740740482958lucDryFruits&Spices.png?tr=f-webp",
                        "spans": {
                            "rowSpan": 1,
                            "colSpan": 1
                        },
                        "tags": {
                            "top": ""
                        },
                        "cta": {
                            "ctaType": "DEEPLINK",
                            "ctaVal": {
                                "landingPageType": "COLLECTION_LISTING",
                                "ctaParams": {
                                    "collectionId": "6689",
                                    "collectionName": "dry-fruits-spices"
                                },
                                "extraParams": null
                            },
                            "label": null,
                            "ctaIcon": null
                        }
                    },
                    {
                        "id": 1120,
                        "title": "",
                        "image": "https://images.dealshare.in/1740740493791HotBeveragescopy2.jpg?tr=f-webp",
                        "spans": {
                            "rowSpan": 1,
                            "colSpan": 1
                        },
                        "tags": {
                            "top": ""
                        },
                        "cta": {
                            "ctaType": "DEEPLINK",
                            "ctaVal": {
                                "landingPageType": "COLLECTION_LISTING",
                                "ctaParams": {
                                    "collectionId": "6178",
                                    "collectionName": "hot-beverages"
                                },
                                "extraParams": null
                            },
                            "label": null,
                            "ctaIcon": null
                        }
                    },
                    {
                        "id": 1121,
                        "title": "",
                        "image": "https://images.dealshare.in/1740740501405lucColdBeverage_.jpg?tr=f-webp",
                        "spans": {
                            "rowSpan": 1,
                            "colSpan": 1
                        },
                        "tags": {
                            "top": ""
                        },
                        "cta": {
                            "ctaType": "DEEPLINK",
                            "ctaVal": {
                                "landingPageType": "COLLECTION_LISTING",
                                "ctaParams": {
                                    "collectionId": "6179",
                                    "collectionName": "cold-beverages"
                                },
                                "extraParams": null
                            },
                            "label": null,
                            "ctaIcon": null
                        }
                    },
                    {
                        "id": 1122,
                        "title": "",
                        "image": "https://images.dealshare.in/1740740506289lucPFBiscuits.jpg?tr=f-webp",
                        "spans": {
                            "rowSpan": 1,
                            "colSpan": 1
                        },
                        "tags": {
                            "top": ""
                        },
                        "cta": {
                            "ctaType": "DEEPLINK",
                            "ctaVal": {
                                "landingPageType": "COLLECTION_LISTING",
                                "ctaParams": {
                                    "collectionId": "6182",
                                    "collectionName": "biscuits"
                                },
                                "extraParams": null
                            },
                            "label": null,
                            "ctaIcon": null
                        }
                    },
                    {
                        "id": 1123,
                        "title": "",
                        "image": "https://images.dealshare.in/1740740510595Namkeencopy4.jpg?tr=f-webp",
                        "spans": {
                            "rowSpan": 1,
                            "colSpan": 1
                        },
                        "tags": {
                            "top": ""
                        },
                        "cta": {
                            "ctaType": "DEEPLINK",
                            "ctaVal": {
                                "landingPageType": "COLLECTION_LISTING",
                                "ctaParams": {
                                    "collectionId": "6183",
                                    "collectionName": "namkeen"
                                },
                                "extraParams": null
                            },
                            "label": null,
                            "ctaIcon": null
                        }
                    },
                    {
                        "id": 1124,
                        "title": "",
                        "image": "https://images.dealshare.in/1740740514530Ketchup,Jams&Pickle.jpg?tr=f-webp",
                        "spans": {
                            "rowSpan": 1,
                            "colSpan": 1
                        },
                        "tags": {
                            "top": ""
                        },
                        "cta": {
                            "ctaType": "DEEPLINK",
                            "ctaVal": {
                                "landingPageType": "COLLECTION_LISTING",
                                "ctaParams": {
                                    "collectionId": "6184",
                                    "collectionName": "ketchup-jams-pickles"
                                },
                                "extraParams": null
                            },
                            "label": null,
                            "ctaIcon": null
                        }
                    },
                    {
                        "id": 1125,
                        "title": "",
                        "image": "https://images.dealshare.in/1740740519204InstantFood.jpg?tr=f-webp",
                        "spans": {
                            "rowSpan": 1,
                            "colSpan": 1
                        },
                        "tags": {
                            "top": ""
                        },
                        "cta": {
                            "ctaType": "DEEPLINK",
                            "ctaVal": {
                                "landingPageType": "COLLECTION_LISTING",
                                "ctaParams": {
                                    "collectionId": "6186",
                                    "collectionName": "instant-food"
                                },
                                "extraParams": null
                            },
                            "label": null,
                            "ctaIcon": null
                        }
                    },
                    {
                        "id": 1126,
                        "title": "",
                        "image": "https://images.dealshare.in/1740740526276Chocolates&Sweets.jpg?tr=f-webp",
                        "spans": {
                            "rowSpan": 1,
                            "colSpan": 1
                        },
                        "tags": {
                            "top": ""
                        },
                        "cta": {
                            "ctaType": "DEEPLINK",
                            "ctaVal": {
                                "landingPageType": "COLLECTION_LISTING",
                                "ctaParams": {
                                    "collectionId": "6187",
                                    "collectionName": "chocolates-sweets"
                                },
                                "extraParams": null
                            },
                            "label": null,
                            "ctaIcon": null
                        }
                    },
                    {
                        "id": 1127,
                        "title": "",
                        "image": "https://images.dealshare.in/1737910241798StaplesFruits&Vegetablesallregions.webp",
                        "spans": {
                            "rowSpan": 1,
                            "colSpan": 1
                        },
                        "tags": {
                            "top": ""
                        },
                        "cta": {
                            "ctaType": "DEEPLINK",
                            "ctaVal": {
                                "landingPageType": "COLLECTION_LISTING",
                                "ctaParams": {
                                    "collectionId": "4413",
                                    "collectionName": "fv-dairy-bakery"
                                },
                                "extraParams": null
                            },
                            "label": null,
                            "ctaIcon": null
                        }
                    }
                ]
            },
            "fallbackSlots": null,
            "fallbackSlot": false
        },
        {
            "slotId": "5fcd9ea2-5054-11ee-8cd8-53a789828fdc",
            "slotPosition": 2,
            "versionType": "NEW",
            "functionalComponentType": "grid_fc",
            "uiComponent": "grid_dynamic_height",
            "metaData": {
                "adIdentifier": null,
                "gridId": 208,
                "gridType": null,
                "bgImage": null,
                "dimension": null,
                "themeMode": "DARK",
                "titleAlignment": "TOP",
                "titleColor": "#333333",
                "subTitleColor": "#7B7B7B",
                "separator": false
            },
            "contentData": {
                "id": 208,
                "title": "Personal Care",
                "subtitle": null,
                "dimension": {
                    "width": 234,
                    "height": 312
                },
                "promotionalContents": null,
                "rows": 1,
                "columns": 7,
                "backgroundImage": null,
                "gridCellModelList": [
                    {
                        "id": 1128,
                        "title": "",
                        "image": "https://images.dealshare.in/1738321347459lucSoaps&HairCare.jpg",
                        "spans": {
                            "rowSpan": 1,
                            "colSpan": 1
                        },
                        "tags": {
                            "top": ""
                        },
                        "cta": {
                            "ctaType": "DEEPLINK",
                            "ctaVal": {
                                "landingPageType": "COLLECTION_LISTING",
                                "ctaParams": {
                                    "collectionId": "6188",
                                    "collectionName": "soaps-hair-care"
                                },
                                "extraParams": null
                            },
                            "label": null,
                            "ctaIcon": null
                        }
                    },
                    {
                        "id": 1129,
                        "title": "",
                        "image": "https://images.dealshare.in/1740740562092luc_kolHPCOralCare.jpg?tr=f-webp",
                        "spans": {
                            "rowSpan": 1,
                            "colSpan": 1
                        },
                        "tags": {
                            "top": ""
                        },
                        "cta": {
                            "ctaType": "DEEPLINK",
                            "ctaVal": {
                                "landingPageType": "CATEGORY_L2",
                                "ctaParams": {
                                    "categoryId": "499",
                                    "categoryName": "oral-care",
                                    "parentCategoryName": "personal-care"
                                },
                                "extraParams": null
                            },
                            "label": null,
                            "ctaIcon": null
                        }
                    },
                    {
                        "id": 1130,
                        "title": "",
                        "image": "https://images.dealshare.in/1738321357948ncrHPCSkinCare,deos,Shaving.jpg",
                        "spans": {
                            "rowSpan": 1,
                            "colSpan": 1
                        },
                        "tags": {
                            "top": ""
                        },
                        "cta": {
                            "ctaType": "DEEPLINK",
                            "ctaVal": {
                                "landingPageType": "COLLECTION_LISTING",
                                "ctaParams": {
                                    "collectionId": "6190",
                                    "collectionName": "skin-care-deo-shaving-needs"
                                },
                                "extraParams": null
                            },
                            "label": null,
                            "ctaIcon": null
                        }
                    },
                    {
                        "id": 1131,
                        "title": "",
                        "image": "https://images.dealshare.in/1738321364678ncrHPCSanpads&Diaper.jpg",
                        "spans": {
                            "rowSpan": 1,
                            "colSpan": 1
                        },
                        "tags": {
                            "top": ""
                        },
                        "cta": {
                            "ctaType": "DEEPLINK",
                            "ctaVal": {
                                "landingPageType": "COLLECTION_LISTING",
                                "ctaParams": {
                                    "collectionId": "6189",
                                    "collectionName": "sanitary-care-diapers"
                                },
                                "extraParams": null
                            },
                            "label": null,
                            "ctaIcon": null
                        }
                    }
                ]
            },
            "fallbackSlots": null,
            "fallbackSlot": false
        },
        {
            "slotId": "4294eac2-7826-11ee-b965-bd94ec9124b4",
            "slotPosition": 3,
            "versionType": "NEW",
            "functionalComponentType": "grid_fc",
            "uiComponent": "grid",
            "metaData": {
                "adIdentifier": null,
                "gridId": 192,
                "gridType": null,
                "bgImage": null,
                "dimension": null,
                "themeMode": "DARK",
                "titleAlignment": "TOP",
                "titleColor": "#333333",
                "subTitleColor": "#7B7B7B",
                "separator": false
            },
            "contentData": {
                "id": 192,
                "title": "Home & Kitchen",
                "subtitle": null,
                "dimension": {
                    "width": 234,
                    "height": 312
                },
                "promotionalContents": null,
                "rows": 2,
                "columns": 7,
                "backgroundImage": null,
                "gridCellModelList": [
                    {
                        "id": 972,
                        "title": "",
                        "image": "https://images.dealshare.in/1740740581477forallregionsHPCFabricCare.jpg?tr=f-webp",
                        "spans": {
                            "rowSpan": 1,
                            "colSpan": 1
                        },
                        "tags": {
                            "top": ""
                        },
                        "cta": {
                            "ctaType": "DEEPLINK",
                            "ctaVal": {
                                "landingPageType": "CATEGORY_L2",
                                "ctaParams": {
                                    "categoryId": "1155",
                                    "categoryName": "detergents-fabric-care",
                                    "parentCategoryName": "cleaning-household-care"
                                },
                                "extraParams": null
                            },
                            "label": null,
                            "ctaIcon": null
                        }
                    },
                    {
                        "id": 973,
                        "title": "",
                        "image": "https://images.dealshare.in/1740740617861kol_lucHPCCleaner&Others_.jpg?tr=f-webp",
                        "spans": {
                            "rowSpan": 1,
                            "colSpan": 1
                        },
                        "tags": {
                            "top": ""
                        },
                        "cta": {
                            "ctaType": "DEEPLINK",
                            "ctaVal": {
                                "landingPageType": "COLLECTION_LISTING",
                                "ctaParams": {
                                    "collectionId": "6191",
                                    "collectionName": "cleaners"
                                },
                                "extraParams": null
                            },
                            "label": null,
                            "ctaIcon": null
                        }
                    },
                    {
                        "id": 974,
                        "title": "",
                        "image": "https://images.dealshare.in/1740740635204Home&Kitchen.jpg?tr=f-webp",
                        "spans": {
                            "rowSpan": 1,
                            "colSpan": 1
                        },
                        "tags": {
                            "top": ""
                        },
                        "cta": {
                            "ctaType": "DEEPLINK",
                            "ctaVal": {
                                "landingPageType": "COLLECTION_LISTING",
                                "ctaParams": {
                                    "collectionId": "6459",
                                    "collectionName": "home-kitchen"
                                },
                                "extraParams": null
                            },
                            "label": null,
                            "ctaIcon": null
                        }
                    },
                    {
                        "id": 975,
                        "title": "",
                        "image": "https://images.dealshare.in/1740740639478Appliancesgm_.jpg?tr=f-webp",
                        "spans": {
                            "rowSpan": 1,
                            "colSpan": 1
                        },
                        "tags": {
                            "top": ""
                        },
                        "cta": {
                            "ctaType": "DEEPLINK",
                            "ctaVal": {
                                "landingPageType": "COLLECTION_LISTING",
                                "ctaParams": {
                                    "collectionId": "6460",
                                    "collectionName": "appliances-electronics"
                                },
                                "extraParams": null
                            },
                            "label": null,
                            "ctaIcon": null
                        }
                    },
                    {
                        "id": 976,
                        "title": "",
                        "image": "https://images.dealshare.in/1740740645691Stationary&Bags.jpg?tr=f-webp",
                        "spans": {
                            "rowSpan": 1,
                            "colSpan": 1
                        },
                        "tags": {
                            "top": ""
                        },
                        "cta": {
                            "ctaType": "DEEPLINK",
                            "ctaVal": {
                                "landingPageType": "COLLECTION_LISTING",
                                "ctaParams": {
                                    "collectionId": "6461",
                                    "collectionName": "stationary-luggage"
                                },
                                "extraParams": null
                            },
                            "label": null,
                            "ctaIcon": null
                        }
                    },
                    {
                        "id": 977,
                        "title": "",
                        "image": "https://images.dealshare.in/1740740651932MobileAccessories&Electricals.jpg?tr=f-webp",
                        "spans": {
                            "rowSpan": 1,
                            "colSpan": 1
                        },
                        "tags": {
                            "top": ""
                        },
                        "cta": {
                            "ctaType": "DEEPLINK",
                            "ctaVal": {
                                "landingPageType": "COLLECTION_LISTING",
                                "ctaParams": {
                                    "collectionId": "6462",
                                    "collectionName": "mobile-acc-electricals"
                                },
                                "extraParams": null
                            },
                            "label": null,
                            "ctaIcon": null
                        }
                    },
                    {
                        "id": 978,
                        "title": "",
                        "image": "https://images.dealshare.in/1740740656906Bath&Cleaninggm_.jpg?tr=f-webp",
                        "spans": {
                            "rowSpan": 1,
                            "colSpan": 1
                        },
                        "tags": {
                            "top": ""
                        },
                        "cta": {
                            "ctaType": "DEEPLINK",
                            "ctaVal": {
                                "landingPageType": "COLLECTION_LISTING",
                                "ctaParams": {
                                    "collectionId": "4465",
                                    "collectionName": "bath-cleaning"
                                },
                                "extraParams": null
                            },
                            "label": null,
                            "ctaIcon": null
                        }
                    },
                    {
                        "id": 979,
                        "title": "",
                        "image": "https://images.dealshare.in/1740740661787Fashion&Furnishing.jpg?tr=f-webp",
                        "spans": {
                            "rowSpan": 1,
                            "colSpan": 1
                        },
                        "tags": {
                            "top": ""
                        },
                        "cta": {
                            "ctaType": "DEEPLINK",
                            "ctaVal": {
                                "landingPageType": "COLLECTION_LISTING",
                                "ctaParams": {
                                    "collectionId": "4445",
                                    "collectionName": "fashion-furnishing"
                                },
                                "extraParams": null
                            },
                            "label": null,
                            "ctaIcon": null
                        }
                    }
                ]
            },
            "fallbackSlots": null,
            "fallbackSlot": false
        },
        {
            "slotId": "9943a56e-f9a2-11ef-bec0-019903572205",
            "slotPosition": 4,
            "versionType": "NEW",
            "functionalComponentType": "collection_fc",
            "uiComponent": "hdc_collection",
            "metaData": {
                "adIdentifier": null,
                "totalNumberOfDeals": 10,
                "minimumNumberOfItems": 2,
                "numberOfItemsInViewPort": 0.0,
                "showTotalItems": false,
                "rows": 0,
                "componentEntityCursor": 1,
                "showTitle": true,
                "highlightIndex": null,
                "collectionId": 8197,
                "bgImage": null,
                "dimension": null,
                "titleAlignment": "TOP",
                "titleColor": "#333333",
                "subTitleColor": "#7B7B7B",
                "gradient1": "#F2FFF0",
                "gradient2": "#B9D2A5",
                "separator": false
            },
            "contentData": {
                "title": "New Launch",
                "contentTitle": "New Launch",
                "subtitle": null,
                "viewAllEnabled": true,
                "viewAllCta": {
                    "ctaType": "DEEPLINK",
                    "ctaVal": {
                        "landingPageType": "COLLECTION_LISTING",
                        "ctaParams": {
                            "collectionId": "8197",
                            "collectionName": "new-launch"
                        },
                        "extraParams": null
                    },
                    "label": null,
                    "ctaIcon": "https://images.dealshare.in/1703140986066B9D2A5.webp"
                },
                "componentEntityCursor": 2,
                "hasNext": true,
                "informationTitle": null,
                "tooltip": null,
                "icon": null,
                "lottieIcon": null,
                "dealDetailsList": [
                    {
                        "id": 386052,
                        "offerId": "Luc23170",
                        "image": "https://media.dealshare.in/img/offer/1738315515674:9AF0A5A868_1.webp?tr=f-webp",
                        "animationImage": "https://media.dealshare.in/img/offer/1738315515674:9AF0A5A868_1.webp?tr=f-webp",
                        "offerType": "general",
                        "foodType": null,
                        "maxQuantityAllowed": 6,
                        "categoryId": 1155,
                        "parentCategoryId": 1152,
                        "categoryL3Id": 894,
                        "productId": 1196995,
                        "brand": "Chemko",
                        "imageTemplate": "https://media.dealshare.in/img/offer/1738315515674:9AF0A5A868_1.webp?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "Chemko Detergent Powder Jasmine & Rose - 3 Kg",
                        "mrp": 210.0,
                        "price": 99.0,
                        "categoryNameL1": "Cleaning & Household Care",
                        "categoryNameL2": "Detergents & Fabric Care",
                        "categoryNameL3": "Detergent Powders",
                        "offPercentage": "52% off",
                        "discountText": "You save ₹111",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-12-31 05:30:00",
                        "startTime": "2025-01-21 12:36:36",
                        "grammage": "3 kg",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 1
                    },
                    {
                        "id": 384930,
                        "offerId": "Luc22948",
                        "image": "https://media.dealshare.in/img/offer/1734707913505:DCD537BF81_1.webp?tr=f-webp",
                        "animationImage": "https://media.dealshare.in/img/offer/1734707913505:DCD537BF81_1.webp?tr=f-webp",
                        "offerType": "general",
                        "foodType": null,
                        "maxQuantityAllowed": 5,
                        "categoryId": 1168,
                        "parentCategoryId": 1161,
                        "categoryL3Id": 990,
                        "productId": 1196830,
                        "brand": "Khao Piyo",
                        "imageTemplate": "https://media.dealshare.in/img/offer/1734707913505:DCD537BF81_1.webp?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "Khao Piyo Veg Mayonnaise - 750 Gm",
                        "mrp": 179.0,
                        "price": 69.0,
                        "categoryNameL1": "Snacks & Packaged Food",
                        "categoryNameL2": "Ketchup & Sauces",
                        "categoryNameL3": "Mayonnaise",
                        "offPercentage": "61% off",
                        "discountText": "You save ₹110",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-12-31 00:00:00",
                        "startTime": "2024-12-16 18:06:06",
                        "grammage": "750 gm",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 3
                    },
                    {
                        "id": 385898,
                        "offerId": "Luc23157",
                        "image": "https://media.dealshare.in/img/offer/53D52CB3B8_1.webp?tr=f-webp",
                        "animationImage": "https://media.dealshare.in/img/offer/53D52CB3B8_1.webp?tr=f-webp",
                        "offerType": "general",
                        "foodType": null,
                        "maxQuantityAllowed": 6,
                        "categoryId": 855,
                        "parentCategoryId": 1152,
                        "categoryL3Id": 856,
                        "productId": 1196696,
                        "brand": "Chemko",
                        "imageTemplate": "https://media.dealshare.in/img/offer/53D52CB3B8_1.webp?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "Chemko Disinfectant Citrus Floor Cleaner - 2 Ltr",
                        "mrp": 399.0,
                        "price": 99.0,
                        "categoryNameL1": "Cleaning & Household Care",
                        "categoryNameL2": "Cleaners",
                        "categoryNameL3": "Floor Cleaners",
                        "offPercentage": "75% off",
                        "discountText": "You save ₹300",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "89",
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-12-31 05:30:00",
                        "startTime": "2025-01-13 17:20:11",
                        "grammage": "2 ltr",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 3
                    },
                    {
                        "id": 387991,
                        "offerId": "Luc23296",
                        "image": "https://media.dealshare.in/img/offer/843D794D09_1.png?tr=f-webp",
                        "animationImage": "https://media.dealshare.in/img/offer/843D794D09_1.png?tr=f-webp",
                        "offerType": "general",
                        "foodType": null,
                        "maxQuantityAllowed": 6,
                        "categoryId": 991,
                        "parentCategoryId": 1161,
                        "categoryL3Id": 1103,
                        "productId": 1197442,
                        "brand": "Khao Piyo",
                        "imageTemplate": "https://media.dealshare.in/img/offer/843D794D09_1.png?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "Khao Piyo Penne Pasta - 500 Gm",
                        "mrp": 110.0,
                        "price": 49.0,
                        "categoryNameL1": "Snacks & Packaged Food",
                        "categoryNameL2": "Noodles, Pasta & Vermicelli",
                        "categoryNameL3": "Pasta",
                        "offPercentage": "55% off",
                        "discountText": "You save ₹61",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "89",
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-12-31 05:30:00",
                        "startTime": "2025-02-24 17:54:17",
                        "grammage": "500 gm",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 4
                    },
                    {
                        "id": 387992,
                        "offerId": "Luc23297",
                        "image": "https://media.dealshare.in/img/offer/6F9A431EDC_1.png?tr=f-webp",
                        "animationImage": "https://media.dealshare.in/img/offer/6F9A431EDC_1.png?tr=f-webp",
                        "offerType": "general",
                        "foodType": null,
                        "maxQuantityAllowed": 6,
                        "categoryId": 991,
                        "parentCategoryId": 1161,
                        "categoryL3Id": 1081,
                        "productId": 1197441,
                        "brand": "Khao Piyo",
                        "imageTemplate": "https://media.dealshare.in/img/offer/6F9A431EDC_1.png?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "Khao Piyo Roasted Vermicelli - 850 Gm",
                        "mrp": 130.0,
                        "price": 65.0,
                        "categoryNameL1": "Snacks & Packaged Food",
                        "categoryNameL2": "Noodles, Pasta & Vermicelli",
                        "categoryNameL3": "Vermicelli",
                        "offPercentage": "50% off",
                        "discountText": "You save ₹65",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "89",
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-12-31 05:30:00",
                        "startTime": "2025-02-24 17:54:17",
                        "grammage": "850 gm",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 5
                    },
                    {
                        "id": 386204,
                        "offerId": "Luc23198",
                        "image": "https://media.dealshare.in/img/offer/1737995890925:69692875F2_1.webp?tr=f-webp",
                        "animationImage": "https://media.dealshare.in/img/offer/1737995890925:69692875F2_1.webp?tr=f-webp",
                        "offerType": "general",
                        "foodType": null,
                        "maxQuantityAllowed": 6,
                        "categoryId": 1153,
                        "parentCategoryId": 1152,
                        "categoryL3Id": 883,
                        "productId": 1197001,
                        "brand": "Home First",
                        "imageTemplate": "https://media.dealshare.in/img/offer/1737995890925:69692875F2_1.webp?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "Home First Bathroom Air Freshener Blocks Mixed 50 Gm (Pack Of 4) - 200 Gm",
                        "mrp": 180.0,
                        "price": 90.0,
                        "categoryNameL1": "Cleaning & Household Care",
                        "categoryNameL2": "Air Freshner",
                        "categoryNameL3": "Toilet Freshners",
                        "offPercentage": "50% off",
                        "discountText": "You save ₹90",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-12-31 05:30:00",
                        "startTime": "2025-01-24 15:27:36",
                        "grammage": "200 gm",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 6
                    },
                    {
                        "id": 386064,
                        "offerId": "Luc23172",
                        "image": "https://media.dealshare.in/img/offer/1738315515684:C071D0F19E_X5.webp?tr=f-webp",
                        "animationImage": "https://media.dealshare.in/img/offer/1738315515684:C071D0F19E_X5.webp?tr=f-webp",
                        "offerType": "general",
                        "foodType": null,
                        "maxQuantityAllowed": 6,
                        "categoryId": 1155,
                        "parentCategoryId": 1152,
                        "categoryL3Id": 894,
                        "productId": 1196993,
                        "brand": "Chemko",
                        "imageTemplate": "https://media.dealshare.in/img/offer/1738315515684:C071D0F19E_X5.webp?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "Chemko Detergent Powder Jasmine & Rose - 1 Kg x 5",
                        "mrp": 375.0,
                        "price": 176.0,
                        "categoryNameL1": "Cleaning & Household Care",
                        "categoryNameL2": "Detergents & Fabric Care",
                        "categoryNameL3": "Detergent Powders",
                        "offPercentage": "53% off",
                        "discountText": "You save ₹199",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-12-31 05:30:00",
                        "startTime": "2025-01-21 14:55:00",
                        "grammage": "5 x 1 kg",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 7
                    },
                    {
                        "id": 384740,
                        "offerId": "Luc22907",
                        "image": "https://media.dealshare.in/img/offer/8E45DE50A7_1.webp?tr=f-webp",
                        "animationImage": "https://media.dealshare.in/img/offer/8E45DE50A7_1.webp?tr=f-webp",
                        "offerType": "general",
                        "foodType": null,
                        "maxQuantityAllowed": 6,
                        "categoryId": 855,
                        "parentCategoryId": 1152,
                        "categoryL3Id": 859,
                        "productId": 1196694,
                        "brand": "Chemko",
                        "imageTemplate": "https://media.dealshare.in/img/offer/8E45DE50A7_1.webp?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "Chemko Disinfectant Toilet Cleaner - 200 Ml",
                        "mrp": 45.0,
                        "price": 19.0,
                        "categoryNameL1": "Cleaning & Household Care",
                        "categoryNameL2": "Cleaners",
                        "categoryNameL3": "Toilet Cleaners",
                        "offPercentage": "57% off",
                        "discountText": "You save ₹26",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-12-31 05:30:00",
                        "startTime": "2024-12-09 18:19:42",
                        "grammage": "200 ml",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 5
                    },
                    {
                        "id": 385552,
                        "offerId": "Luc23065",
                        "image": "https://media.dealshare.in/img/offer/1736265204332:9C8A6ABBDA_1.webp?tr=f-webp",
                        "animationImage": "https://media.dealshare.in/img/offer/1736265204332:9C8A6ABBDA_1.webp?tr=f-webp",
                        "offerType": "general",
                        "foodType": null,
                        "maxQuantityAllowed": 6,
                        "categoryId": 1189,
                        "parentCategoryId": 421,
                        "categoryL3Id": 1038,
                        "productId": 1197011,
                        "brand": "Lyfglow",
                        "imageTemplate": "https://media.dealshare.in/img/offer/1736265204332:9C8A6ABBDA_1.webp?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "Lyfglow Glycerin Soap 125 Gm (Pack Of 3) - 375 Gm",
                        "mrp": 215.0,
                        "price": 107.0,
                        "categoryNameL1": "Personal Care",
                        "categoryNameL2": "Soaps & Personal Hygiene",
                        "categoryNameL3": "Soaps",
                        "offPercentage": "50% off",
                        "discountText": "You save ₹108",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "89",
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-12-31 05:30:00",
                        "startTime": "2025-01-03 21:35:36",
                        "grammage": "375 gm",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 9
                    },
                    {
                        "id": 386060,
                        "offerId": "Luc23171",
                        "image": "https://media.dealshare.in/img/offer/1738315515678:C071D0F19E_X3.webp?tr=f-webp",
                        "animationImage": "https://media.dealshare.in/img/offer/1738315515678:C071D0F19E_X3.webp?tr=f-webp",
                        "offerType": "general",
                        "foodType": null,
                        "maxQuantityAllowed": 6,
                        "categoryId": 1155,
                        "parentCategoryId": 1152,
                        "categoryL3Id": 894,
                        "productId": 1196993,
                        "brand": "Chemko",
                        "imageTemplate": "https://media.dealshare.in/img/offer/1738315515678:C071D0F19E_X3.webp?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "Chemko Detergent Powder Jasmine & Rose - 1 Kg x 3",
                        "mrp": 225.0,
                        "price": 109.0,
                        "categoryNameL1": "Cleaning & Household Care",
                        "categoryNameL2": "Detergents & Fabric Care",
                        "categoryNameL3": "Detergent Powders",
                        "offPercentage": "51% off",
                        "discountText": "You save ₹116",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-12-31 05:30:00",
                        "startTime": "2025-01-21 14:55:00",
                        "grammage": "3 x 1 kg",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 10
                    }
                ]
            },
            "fallbackSlots": null,
            "fallbackSlot": false
        },
        {
            "slotId": "2ab32ae8-e3e7-11ef-8cc1-933e4aa4c232",
            "slotPosition": 5,
            "versionType": "NEW",
            "functionalComponentType": "collection_fc",
            "uiComponent": "hdc_collection",
            "metaData": {
                "adIdentifier": null,
                "totalNumberOfDeals": 10,
                "minimumNumberOfItems": 1,
                "numberOfItemsInViewPort": 0.0,
                "showTotalItems": false,
                "rows": 1,
                "componentEntityCursor": 1,
                "showTitle": true,
                "highlightIndex": null,
                "collectionId": 8017,
                "bgImage": null,
                "dimension": {
                    "width": 360,
                    "height": 284
                },
                "titleAlignment": "TOP",
                "titleColor": "#333333",
                "subTitleColor": "#7B7B7B",
                "gradient1": "#F2FFF0",
                "gradient2": "#B9D2A5",
                "separator": false
            },
            "contentData": {
                "title": "Atta, Dal, Chawal",
                "contentTitle": "Atta, Dal, Chawal",
                "subtitle": null,
                "viewAllEnabled": true,
                "viewAllCta": {
                    "ctaType": "DEEPLINK",
                    "ctaVal": {
                        "landingPageType": "COLLECTION_LISTING",
                        "ctaParams": {
                            "collectionId": "8017",
                            "collectionName": "atta-dal-chawal"
                        },
                        "extraParams": null
                    },
                    "label": null,
                    "ctaIcon": "https://images.dealshare.in/1703140986066B9D2A5.webp"
                },
                "componentEntityCursor": 2,
                "hasNext": true,
                "informationTitle": null,
                "tooltip": null,
                "icon": null,
                "lottieIcon": null,
                "dealDetailsList": [
                    {
                        "id": 380547,
                        "offerId": "Luc22178",
                        "image": "https://media.dealshare.in/img/offer/1739005659475:08DA18C194_1.png?tr=f-webp",
                        "animationImage": "https://media.dealshare.in/img/offer/1739005659475:08DA18C194_1.png?tr=f-webp",
                        "offerType": "general",
                        "foodType": "VEG",
                        "maxQuantityAllowed": 6,
                        "categoryId": 829,
                        "parentCategoryId": 719,
                        "categoryL3Id": 1253,
                        "productId": 1136904,
                        "brand": "India Gate",
                        "imageTemplate": "https://media.dealshare.in/img/offer/1739005659475:08DA18C194_1.png?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "India Gate Basmati Rice (Rozana) - 1 Kg",
                        "mrp": 118.0,
                        "price": 104.0,
                        "categoryNameL1": "Grocery",
                        "categoryNameL2": "Rice & Rice Products",
                        "categoryNameL3": "Basmati Rice",
                        "offPercentage": "11% off",
                        "discountText": "You save ₹14",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "89",
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-12-31 05:30:00",
                        "startTime": "2024-09-24 16:41:19",
                        "grammage": "1 kg",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 1
                    },
                    {
                        "id": 378874,
                        "offerId": "Luc21962",
                        "image": "https://media.dealshare.in/img/offer/1734928989240:B331284BB7_DEAL.webp?tr=f-webp",
                        "animationImage": "https://media.dealshare.in/img/offer/1734928989240:B331284BB7_DEAL.webp?tr=f-webp",
                        "offerType": "general",
                        "foodType": null,
                        "maxQuantityAllowed": 3,
                        "categoryId": 1207,
                        "parentCategoryId": 719,
                        "categoryL3Id": 1248,
                        "productId": 1196325,
                        "brand": "Savaria",
                        "imageTemplate": "https://media.dealshare.in/img/offer/1734928989240:B331284BB7_DEAL.webp?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "Savaria Shuddh Whole Wheat Atta - 10 Kg",
                        "mrp": 399.0,
                        "price": 374.0,
                        "categoryNameL1": "Grocery",
                        "categoryNameL2": "Flours & Grains",
                        "categoryNameL3": "Wheat Flour/chakki Fresh Atta",
                        "offPercentage": "6% off",
                        "discountText": "You save ₹25",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-01-01 00:00:00",
                        "startTime": "2024-08-28 13:46:45",
                        "grammage": "10 kg",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 2
                    },
                    {
                        "id": 376319,
                        "offerId": "Luc21499",
                        "image": "https://media.dealshare.in/img/offer/1727245882769:638FDAC443_1.webp?tr=f-webp",
                        "animationImage": "https://media.dealshare.in/img/offer/1727245882769:638FDAC443_1.webp?tr=f-webp",
                        "offerType": "general",
                        "foodType": "VEG",
                        "maxQuantityAllowed": 2,
                        "categoryId": 829,
                        "parentCategoryId": 719,
                        "categoryL3Id": 1253,
                        "productId": 1170673,
                        "brand": "Haryana King",
                        "imageTemplate": "https://media.dealshare.in/img/offer/1727245882769:638FDAC443_1.webp?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "HK 1121 Mini Mogra II Basmati Tukdi Rice - 10 Kg",
                        "mrp": 600.0,
                        "price": 406.0,
                        "categoryNameL1": "Grocery",
                        "categoryNameL2": "Rice & Rice Products",
                        "categoryNameL3": "Basmati Rice",
                        "offPercentage": "32% off",
                        "discountText": "You save ₹194",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-12-31 05:30:00",
                        "startTime": "2024-07-11 17:08:40",
                        "grammage": "10 kg",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 3
                    },
                    {
                        "id": 384468,
                        "offerId": "Luc22884",
                        "image": "https://media.dealshare.in/img/offer/1734767581440:03986D3DF9_1.webp?tr=f-webp",
                        "animationImage": "https://media.dealshare.in/img/offer/1734767581440:03986D3DF9_1.webp?tr=f-webp",
                        "offerType": "general",
                        "foodType": null,
                        "maxQuantityAllowed": 6,
                        "categoryId": 829,
                        "parentCategoryId": 719,
                        "categoryL3Id": 1253,
                        "productId": 1196922,
                        "brand": "Sampoorti",
                        "imageTemplate": "https://media.dealshare.in/img/offer/1734767581440:03986D3DF9_1.webp?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "Sampoorti Hyderabadi Biryani Basmati Rice - 5 Kg",
                        "mrp": 925.0,
                        "price": 365.0,
                        "categoryNameL1": "Grocery",
                        "categoryNameL2": "Rice & Rice Products",
                        "categoryNameL3": "Basmati Rice",
                        "offPercentage": "60% off",
                        "discountText": "You save ₹560",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "89",
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-12-31 05:30:00",
                        "startTime": "2024-12-03 00:04:03",
                        "grammage": "5 kg",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 4
                    },
                    {
                        "id": 379456,
                        "offerId": "Luc22047",
                        "image": "https://media.dealshare.in/img/offer/1740385308477:30ADAD0094_DEAL.png?tr=f-webp",
                        "animationImage": "https://media.dealshare.in/img/offer/1740385308477:30ADAD0094_DEAL.png?tr=f-webp",
                        "offerType": "general",
                        "foodType": "VEG",
                        "maxQuantityAllowed": 1,
                        "categoryId": 1207,
                        "parentCategoryId": 719,
                        "categoryL3Id": 1248,
                        "productId": 1140209,
                        "brand": "Aashirvaad",
                        "imageTemplate": "https://media.dealshare.in/img/offer/1740385308477:30ADAD0094_DEAL.png?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "Aashirvaad Shudh Chakki Atta - 10 Kg",
                        "mrp": 485.0,
                        "price": 439.0,
                        "categoryNameL1": "Grocery",
                        "categoryNameL2": "Flours & Grains",
                        "categoryNameL3": "Wheat Flour/chakki Fresh Atta",
                        "offPercentage": "9% off",
                        "discountText": "You save ₹46",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-12-31 00:00:00",
                        "startTime": "2024-09-06 17:05:05",
                        "grammage": "10 kg",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 5
                    },
                    {
                        "id": 378479,
                        "offerId": "Luc21880",
                        "image": "https://media.dealshare.in/img/offer/Luc18795.webp?tr=f-webp",
                        "animationImage": "https://media.dealshare.in/img/offer/Luc18795.webp?tr=f-webp",
                        "offerType": "general",
                        "foodType": "VEG",
                        "maxQuantityAllowed": 6,
                        "categoryId": 829,
                        "parentCategoryId": 719,
                        "categoryL3Id": 1247,
                        "productId": 1186779,
                        "brand": "Sampoorti",
                        "imageTemplate": "https://media.dealshare.in/img/offer/Luc18795.webp?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "Sampoorti Jada (Mota) Poha - 1 Kg",
                        "mrp": 90.0,
                        "price": 39.0,
                        "categoryNameL1": "Grocery",
                        "categoryNameL2": "Rice & Rice Products",
                        "categoryNameL3": "Poha, Murmura & Sabudana",
                        "offPercentage": "56% off",
                        "discountText": "You save ₹51",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "63"
                        ],
                        "dealType": "LQD",
                        "endTime": "2060-01-01 00:00:00",
                        "startTime": "2024-08-16 14:19:52",
                        "grammage": "1 kg",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 6
                    },
                    {
                        "id": 366239,
                        "offerId": "Luc19624",
                        "image": "https://media.dealshare.in/img/offer/1737452272777:F821BC5DCC_DEAL.webp?tr=f-webp",
                        "animationImage": "https://media.dealshare.in/img/offer/1737452272777:F821BC5DCC_DEAL.webp?tr=f-webp",
                        "offerType": "general",
                        "foodType": null,
                        "maxQuantityAllowed": 1,
                        "categoryId": 829,
                        "parentCategoryId": 719,
                        "categoryL3Id": 1255,
                        "productId": 1195169,
                        "brand": "Bharat",
                        "imageTemplate": "https://media.dealshare.in/img/offer/1737452272777:F821BC5DCC_DEAL.webp?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "Bharat Rice (Bag) - 10 Kg",
                        "mrp": 340.0,
                        "price": 340.0,
                        "categoryNameL1": "Grocery",
                        "categoryNameL2": "Rice & Rice Products",
                        "categoryNameL3": "Other Regional Rice",
                        "offPercentage": null,
                        "discountText": null,
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "89",
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-01-01 00:00:00",
                        "startTime": "2024-02-26 13:01:01",
                        "grammage": "10 kg",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 7
                    },
                    {
                        "id": 372067,
                        "offerId": "Luc20826",
                        "image": "https://media.dealshare.in/img/offer/1734774925934:65583BE4E8_1.webp?tr=f-webp",
                        "animationImage": "https://media.dealshare.in/img/offer/1734774925934:65583BE4E8_1.webp?tr=f-webp",
                        "offerType": "general",
                        "foodType": "VEG",
                        "maxQuantityAllowed": 3,
                        "categoryId": 1208,
                        "parentCategoryId": 719,
                        "categoryL3Id": 1239,
                        "productId": 1186629,
                        "brand": "Sampoorti",
                        "imageTemplate": "https://media.dealshare.in/img/offer/1734774925934:65583BE4E8_1.webp?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "Sampoorti Mix Dal - 1 Kg",
                        "mrp": 175.0,
                        "price": 146.0,
                        "categoryNameL1": "Grocery",
                        "categoryNameL2": "Dals & Pulses",
                        "categoryNameL3": "Mix Dal",
                        "offPercentage": "16% off",
                        "discountText": "You save ₹29",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "89",
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-12-31 05:30:00",
                        "startTime": "2024-05-13 23:17:50",
                        "grammage": "1 kg",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 8
                    },
                    {
                        "id": 380792,
                        "offerId": "Luc22234",
                        "image": "https://media.dealshare.in/img/offer/1741011864894:A517062E9E_1.png?tr=f-webp",
                        "animationImage": "https://media.dealshare.in/img/offer/1741011864894:A517062E9E_1.png?tr=f-webp",
                        "offerType": "general",
                        "foodType": "VEG",
                        "maxQuantityAllowed": 2,
                        "categoryId": 1207,
                        "parentCategoryId": 719,
                        "categoryL3Id": 1248,
                        "productId": 1172990,
                        "brand": "Nourish",
                        "imageTemplate": "https://media.dealshare.in/img/offer/1741011864894:A517062E9E_1.png?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "Nourish Chakki Fresh Atta - 10 Kg",
                        "mrp": 495.0,
                        "price": 389.0,
                        "categoryNameL1": "Grocery",
                        "categoryNameL2": "Flours & Grains",
                        "categoryNameL3": "Wheat Flour/chakki Fresh Atta",
                        "offPercentage": "21% off",
                        "discountText": "You save ₹106",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-01-01 00:00:00",
                        "startTime": "2024-09-27 18:21:33",
                        "grammage": "10 kg",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 9
                    },
                    {
                        "id": 371568,
                        "offerId": "Luc20714",
                        "image": "https://media.dealshare.in/img/offer/1730699358359:8FA25F954A_1.webp?tr=f-webp",
                        "animationImage": "https://media.dealshare.in/img/offer/1730699358359:8FA25F954A_1.webp?tr=f-webp",
                        "offerType": "general",
                        "foodType": "VEG",
                        "maxQuantityAllowed": 2,
                        "categoryId": 829,
                        "parentCategoryId": 719,
                        "categoryL3Id": 1253,
                        "productId": 1150812,
                        "brand": "India Gate",
                        "imageTemplate": "https://media.dealshare.in/img/offer/1730699358359:8FA25F954A_1.webp?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "India Gate Mogra Basmati Rice - 10 Kg",
                        "mrp": 840.0,
                        "price": 689.0,
                        "categoryNameL1": "Grocery",
                        "categoryNameL2": "Rice & Rice Products",
                        "categoryNameL3": "Basmati Rice",
                        "offPercentage": "17% off",
                        "discountText": "You save ₹151",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "89",
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-12-31 05:30:00",
                        "startTime": "2024-05-07 22:46:16",
                        "grammage": "10 kg",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 10
                    }
                ]
            },
            "fallbackSlots": null,
            "fallbackSlot": false
        },
        {
            "slotId": "649362f2-54bc-11ef-adda-cb9848addee6",
            "slotPosition": 6,
            "versionType": "NEW",
            "functionalComponentType": "collection_fc",
            "uiComponent": "hdc_collection",
            "metaData": {
                "adIdentifier": null,
                "totalNumberOfDeals": 10,
                "minimumNumberOfItems": 1,
                "numberOfItemsInViewPort": 0.0,
                "showTotalItems": false,
                "rows": 1,
                "componentEntityCursor": 1,
                "showTitle": true,
                "highlightIndex": null,
                "collectionId": 8018,
                "bgImage": null,
                "dimension": null,
                "titleAlignment": "TOP",
                "titleColor": "#333333",
                "subTitleColor": "#7B7B7B",
                "gradient1": "#F2FFF0",
                "gradient2": "#B9D2A5",
                "separator": false
            },
            "contentData": {
                "title": "Best Prices On Oil & Ghee",
                "contentTitle": "Best Prices On Oil & Ghee",
                "subtitle": null,
                "viewAllEnabled": true,
                "viewAllCta": {
                    "ctaType": "DEEPLINK",
                    "ctaVal": {
                        "landingPageType": "COLLECTION_LISTING",
                        "ctaParams": {
                            "collectionId": "8018",
                            "collectionName": "best-prices-on-oil-ghee"
                        },
                        "extraParams": null
                    },
                    "label": null,
                    "ctaIcon": "https://images.dealshare.in/1703140986066B9D2A5.webp"
                },
                "componentEntityCursor": 2,
                "hasNext": true,
                "informationTitle": null,
                "tooltip": null,
                "icon": null,
                "lottieIcon": null,
                "dealDetailsList": [
                    {
                        "id": 379918,
                        "offerId": "Luc22090",
                        "image": "https://media.dealshare.in/img/offer/1731997878288:4107D94F0F_1.webp?tr=f-webp",
                        "animationImage": "https://media.dealshare.in/img/offer/1731997878288:4107D94F0F_1.webp?tr=f-webp",
                        "offerType": "general",
                        "foodType": "VEG",
                        "maxQuantityAllowed": 2,
                        "categoryId": 1206,
                        "parentCategoryId": 719,
                        "categoryL3Id": 774,
                        "productId": 1165913,
                        "brand": "Bail Kolhu",
                        "imageTemplate": "https://media.dealshare.in/img/offer/1731997878288:4107D94F0F_1.webp?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "Bail Kolhu Kachi Ghani Oil (Jar) - 5 Ltr",
                        "mrp": 930.0,
                        "price": 869.0,
                        "categoryNameL1": "Grocery",
                        "categoryNameL2": "Cooking Oil",
                        "categoryNameL3": "Mustard Oil",
                        "offPercentage": "6% off",
                        "discountText": "You save ₹61",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-12-31 05:30:00",
                        "startTime": "2024-09-16 09:18:37",
                        "grammage": "5 ltr",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 1
                    },
                    {
                        "id": 360701,
                        "offerId": "Luc18472",
                        "image": "https://media.dealshare.in/img/offer/1737524780550:35FABFF015_1.webp?tr=f-webp",
                        "animationImage": "https://media.dealshare.in/img/offer/1737524780550:35FABFF015_1.webp?tr=f-webp",
                        "offerType": "general",
                        "foodType": null,
                        "maxQuantityAllowed": 6,
                        "categoryId": 1210,
                        "parentCategoryId": 719,
                        "categoryL3Id": 780,
                        "productId": 1194055,
                        "brand": "Nimantran",
                        "imageTemplate": "https://media.dealshare.in/img/offer/1737524780550:35FABFF015_1.webp?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "Nimantran Ghee - 1 Ltr",
                        "mrp": 610.0,
                        "price": 420.0,
                        "categoryNameL1": "Grocery",
                        "categoryNameL2": "Ghee & Vanaspati",
                        "categoryNameL3": "Desi Ghee",
                        "offPercentage": "31% off",
                        "discountText": "You save ₹190",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "89",
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-01-01 00:00:00",
                        "startTime": "2024-01-08 16:09:16",
                        "grammage": "1 ltr",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 2
                    },
                    {
                        "id": 380605,
                        "offerId": "Luc22186",
                        "image": "https://media.dealshare.in/img/offer/1740055270370:34C746EEA6_DEAL.png?tr=f-webp",
                        "animationImage": "https://media.dealshare.in/img/offer/1740055270370:34C746EEA6_DEAL.png?tr=f-webp",
                        "offerType": "general",
                        "foodType": "VEG",
                        "maxQuantityAllowed": 2,
                        "categoryId": 1206,
                        "parentCategoryId": 719,
                        "categoryL3Id": 1546,
                        "productId": 1160301,
                        "brand": "Fortune",
                        "imageTemplate": "https://media.dealshare.in/img/offer/1740055270370:34C746EEA6_DEAL.png?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "Fortune Refined Soyabean Oil - 1 Ltr",
                        "mrp": 175.0,
                        "price": 158.0,
                        "categoryNameL1": "Grocery",
                        "categoryNameL2": "Cooking Oil",
                        "categoryNameL3": "Soyabean Oil",
                        "offPercentage": "9% off",
                        "discountText": "You save ₹17",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-01-01 00:00:00",
                        "startTime": "2024-09-25 12:07:31",
                        "grammage": "1 ltr",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 3
                    },
                    {
                        "id": 380335,
                        "offerId": "Luc22153",
                        "image": "https://media.dealshare.in/img/offer/1734928989652:CCC213A11D_DEAL.webp?tr=f-webp",
                        "animationImage": "https://media.dealshare.in/img/offer/1734928989652:CCC213A11D_DEAL.webp?tr=f-webp",
                        "offerType": "general",
                        "foodType": "VEG",
                        "maxQuantityAllowed": 3,
                        "categoryId": 1206,
                        "parentCategoryId": 719,
                        "categoryL3Id": 774,
                        "productId": 1165916,
                        "brand": "Bail Kolhu",
                        "imageTemplate": "https://media.dealshare.in/img/offer/1734928989652:CCC213A11D_DEAL.webp?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "Bail Kolhu Kachi Ghani Oil (Pouch) - 1 Ltr",
                        "mrp": 196.0,
                        "price": 165.0,
                        "categoryNameL1": "Grocery",
                        "categoryNameL2": "Cooking Oil",
                        "categoryNameL3": "Mustard Oil",
                        "offPercentage": "15% off",
                        "discountText": "You save ₹31",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-01-01 00:00:00",
                        "startTime": "2024-09-22 13:11:35",
                        "grammage": "1 ltr",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 4
                    },
                    {
                        "id": 386075,
                        "offerId": "Luc23178",
                        "image": "https://media.dealshare.in/img/offer/789AFF118B_1.webp?tr=f-webp",
                        "animationImage": "https://media.dealshare.in/img/offer/789AFF118B_1.webp?tr=f-webp",
                        "offerType": "general",
                        "foodType": "VEG",
                        "maxQuantityAllowed": 6,
                        "categoryId": 1210,
                        "parentCategoryId": 719,
                        "categoryL3Id": 780,
                        "productId": 1136383,
                        "brand": "Amul",
                        "imageTemplate": "https://media.dealshare.in/img/offer/789AFF118B_1.webp?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "Amul Pure Ghee (Carton) - 1 Ltr",
                        "mrp": 635.0,
                        "price": 584.0,
                        "categoryNameL1": "Grocery",
                        "categoryNameL2": "Ghee & Vanaspati",
                        "categoryNameL3": "Desi Ghee",
                        "offPercentage": "8% off",
                        "discountText": "You save ₹51",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-12-31 05:30:00",
                        "startTime": "2025-01-22 17:03:12",
                        "grammage": "1 kg",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 5
                    },
                    {
                        "id": 375724,
                        "offerId": "Luc21408",
                        "image": "https://media.dealshare.in/img/offer/1737452272576:5354C8AA0A_DEAL.webp?tr=f-webp",
                        "animationImage": "https://media.dealshare.in/img/offer/1737452272576:5354C8AA0A_DEAL.webp?tr=f-webp",
                        "offerType": "general",
                        "foodType": "VEG",
                        "maxQuantityAllowed": 3,
                        "categoryId": 1206,
                        "parentCategoryId": 719,
                        "categoryL3Id": 774,
                        "productId": 1146520,
                        "brand": "Fortune",
                        "imageTemplate": "https://media.dealshare.in/img/offer/1737452272576:5354C8AA0A_DEAL.webp?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "Fortune Kachi Ghani Pure Mustard Oil (Pouch) - 1 Ltr",
                        "mrp": 190.0,
                        "price": 157.0,
                        "categoryNameL1": "Grocery",
                        "categoryNameL2": "Cooking Oil",
                        "categoryNameL3": "Mustard Oil",
                        "offPercentage": "17% off",
                        "discountText": "You save ₹33",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-12-31 05:30:00",
                        "startTime": "2024-07-02 12:09:47",
                        "grammage": "1 ltr",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 6
                    },
                    {
                        "id": 380219,
                        "offerId": "Luc22139",
                        "image": "https://media.dealshare.in/img/offer/8A6AE6586F_1.webp?tr=f-webp",
                        "animationImage": "https://media.dealshare.in/img/offer/8A6AE6586F_1.webp?tr=f-webp",
                        "offerType": "general",
                        "foodType": null,
                        "maxQuantityAllowed": 6,
                        "categoryId": 1210,
                        "parentCategoryId": 719,
                        "categoryL3Id": 780,
                        "productId": 1196437,
                        "brand": "Provedic",
                        "imageTemplate": "https://media.dealshare.in/img/offer/8A6AE6586F_1.webp?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "Provedic Desi Ghee (ceka Pack) - 900 Ml",
                        "mrp": 590.0,
                        "price": 444.0,
                        "categoryNameL1": "Grocery",
                        "categoryNameL2": "Ghee & Vanaspati",
                        "categoryNameL3": "Desi Ghee",
                        "offPercentage": "24% off",
                        "discountText": "You save ₹146",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-12-31 05:30:00",
                        "startTime": "2024-09-20 13:48:50",
                        "grammage": "900 ml",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 7
                    },
                    {
                        "id": 380793,
                        "offerId": "Luc22235",
                        "image": "https://media.dealshare.in/img/offer/1740385308547:B4C64538D5_DEAL.png?tr=f-webp",
                        "animationImage": "https://media.dealshare.in/img/offer/1740385308547:B4C64538D5_DEAL.png?tr=f-webp",
                        "offerType": "general",
                        "foodType": "VEG",
                        "maxQuantityAllowed": 3,
                        "categoryId": 1206,
                        "parentCategoryId": 719,
                        "categoryL3Id": 776,
                        "productId": 1185543,
                        "brand": "Nourish",
                        "imageTemplate": "https://media.dealshare.in/img/offer/1740385308547:B4C64538D5_DEAL.png?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "Nourish Refined Sunflower Oil (Pouch) - 1 Ltr",
                        "mrp": 172.0,
                        "price": 150.0,
                        "categoryNameL1": "Grocery",
                        "categoryNameL2": "Cooking Oil",
                        "categoryNameL3": "Sunflower Oil",
                        "offPercentage": "12% off",
                        "discountText": "You save ₹22",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-12-31 05:30:00",
                        "startTime": "2024-09-27 18:21:33",
                        "grammage": "1 ltr",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 8
                    },
                    {
                        "id": 320725,
                        "offerId": "Luc12892",
                        "image": "https://images.dealshare.in/offerImage/17281202439E5CA9A475_1.webp?tr=f-webp",
                        "animationImage": "https://images.dealshare.in/offerImage/17281202439E5CA9A475_1.webp?tr=f-webp",
                        "offerType": "general",
                        "foodType": null,
                        "maxQuantityAllowed": 2,
                        "categoryId": 1210,
                        "parentCategoryId": 719,
                        "categoryL3Id": 779,
                        "productId": 1189556,
                        "brand": "Pro Vedic",
                        "imageTemplate": "https://images.dealshare.in/offerImage/17281202439E5CA9A475_1.webp?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "Provedic Cow Ghee (Jar) - 1 Ltr",
                        "mrp": 650.0,
                        "price": 522.0,
                        "categoryNameL1": "Grocery",
                        "categoryNameL2": "Ghee & Vanaspati",
                        "categoryNameL3": "Cow Ghee",
                        "offPercentage": "19% off",
                        "discountText": "You save ₹128",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "89",
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-01-01 00:00:00",
                        "startTime": "2023-03-03 18:06:06",
                        "grammage": "1 ltr",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 9
                    },
                    {
                        "id": 377680,
                        "offerId": "Luc21700",
                        "image": "https://media.dealshare.in/img/offer/1737524780569:58A4B9582C_1.webp?tr=f-webp",
                        "animationImage": "https://media.dealshare.in/img/offer/1737524780569:58A4B9582C_1.webp?tr=f-webp",
                        "offerType": "general",
                        "foodType": null,
                        "maxQuantityAllowed": 3,
                        "categoryId": 1206,
                        "parentCategoryId": 719,
                        "categoryL3Id": 1546,
                        "productId": 1196184,
                        "brand": "Vibhor",
                        "imageTemplate": "https://media.dealshare.in/img/offer/1737524780569:58A4B9582C_1.webp?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "Vibhor Refined Soyabean Oil (Pouch) - 830 Gm",
                        "mrp": 151.0,
                        "price": 129.0,
                        "categoryNameL1": "Grocery",
                        "categoryNameL2": "Cooking Oil",
                        "categoryNameL3": "Soyabean Oil",
                        "offPercentage": "14% off",
                        "discountText": "You save ₹22",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-01-01 00:00:00",
                        "startTime": "2024-07-29 14:55:06",
                        "grammage": "830 gm",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 10
                    }
                ]
            },
            "fallbackSlots": null,
            "fallbackSlot": false
        },
        {
            "slotId": "5f4a188a-65fc-11ef-a0ea-133304fcecc8",
            "slotPosition": 7,
            "versionType": "NEW",
            "functionalComponentType": "collection_fc",
            "uiComponent": "hdc_collection",
            "metaData": {
                "adIdentifier": null,
                "totalNumberOfDeals": 10,
                "minimumNumberOfItems": 1,
                "numberOfItemsInViewPort": 0.0,
                "showTotalItems": false,
                "rows": 1,
                "componentEntityCursor": 1,
                "showTitle": true,
                "highlightIndex": null,
                "collectionId": 8022,
                "bgImage": null,
                "dimension": null,
                "titleAlignment": "TOP",
                "titleColor": "#333333",
                "subTitleColor": "#7B7B7B",
                "gradient1": "#F2FFF0",
                "gradient2": "#B9D2A5",
                "separator": false
            },
            "contentData": {
                "title": "Biscuits & Namkeen",
                "contentTitle": "Biscuits & Namkeen",
                "subtitle": null,
                "viewAllEnabled": true,
                "viewAllCta": {
                    "ctaType": "DEEPLINK",
                    "ctaVal": {
                        "landingPageType": "COLLECTION_LISTING",
                        "ctaParams": {
                            "collectionId": "8022",
                            "collectionName": "biscuits-namkeen"
                        },
                        "extraParams": null
                    },
                    "label": null,
                    "ctaIcon": "https://images.dealshare.in/1703140986066B9D2A5.webp"
                },
                "componentEntityCursor": 2,
                "hasNext": true,
                "informationTitle": null,
                "tooltip": null,
                "icon": null,
                "lottieIcon": null,
                "dealDetailsList": [
                    {
                        "id": 378366,
                        "offerId": "Luc21843",
                        "image": "https://media.dealshare.in/img/offer/1740385308550:C8C1B49B71_DEAL.png?tr=f-webp",
                        "animationImage": "https://media.dealshare.in/img/offer/1740385308550:C8C1B49B71_DEAL.png?tr=f-webp",
                        "offerType": "general",
                        "foodType": "VEG",
                        "maxQuantityAllowed": 1,
                        "categoryId": 1163,
                        "parentCategoryId": 1161,
                        "categoryL3Id": 1262,
                        "productId": 1145905,
                        "brand": "Parle",
                        "imageTemplate": "https://media.dealshare.in/img/offer/1740385308550:C8C1B49B71_DEAL.png?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "Parle G Gold Biscuit - 1 Kg",
                        "mrp": 150.0,
                        "price": 129.0,
                        "categoryNameL1": "Snacks & Packaged Food",
                        "categoryNameL2": "Biscuits & Cookies",
                        "categoryNameL3": "Plain Biscuits",
                        "offPercentage": "14% off",
                        "discountText": "You save ₹21",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-12-31 05:30:00",
                        "startTime": "2024-08-14 11:40:31",
                        "grammage": "1 kg",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 1
                    },
                    {
                        "id": 376441,
                        "offerId": "Luc21532",
                        "image": "https://media.dealshare.in/img/offer/1737452272510:47CF538C1E_DEAL.webp?tr=f-webp",
                        "animationImage": "https://media.dealshare.in/img/offer/1737452272510:47CF538C1E_DEAL.webp?tr=f-webp",
                        "offerType": "general",
                        "foodType": "VEG",
                        "maxQuantityAllowed": 6,
                        "categoryId": 1169,
                        "parentCategoryId": 1161,
                        "categoryL3Id": 1272,
                        "productId": 1190436,
                        "brand": "Badshah",
                        "imageTemplate": "https://media.dealshare.in/img/offer/1737452272510:47CF538C1E_DEAL.webp?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "Badshah Heeng Mixture Namkeen - 900 Gm",
                        "mrp": 320.0,
                        "price": 145.0,
                        "categoryNameL1": "Snacks & Packaged Food",
                        "categoryNameL2": "Namkeens & Salted Snacks",
                        "categoryNameL3": "Bhujia & Namkeen",
                        "offPercentage": "54% off",
                        "discountText": "You save ₹175",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-12-31 05:30:00",
                        "startTime": "2024-07-14 13:32:57",
                        "grammage": "900 gm",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 2
                    },
                    {
                        "id": 369359,
                        "offerId": "Luc20298",
                        "image": "https://media.dealshare.in/img/offer/1734928990139:F0F3FEB8D1_DEAL.webp?tr=f-webp",
                        "animationImage": "https://media.dealshare.in/img/offer/1734928990139:F0F3FEB8D1_DEAL.webp?tr=f-webp",
                        "offerType": "general",
                        "foodType": "VEG",
                        "maxQuantityAllowed": 6,
                        "categoryId": 1169,
                        "parentCategoryId": 1161,
                        "categoryL3Id": 1272,
                        "productId": 1189718,
                        "brand": "Pitaara",
                        "imageTemplate": "https://media.dealshare.in/img/offer/1734928990139:F0F3FEB8D1_DEAL.webp?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "Pitaara Bikaneri Bhujia - 900 Gm",
                        "mrp": 330.0,
                        "price": 129.0,
                        "categoryNameL1": "Snacks & Packaged Food",
                        "categoryNameL2": "Namkeens & Salted Snacks",
                        "categoryNameL3": "Bhujia & Namkeen",
                        "offPercentage": "60% off",
                        "discountText": "You save ₹201",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "89",
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-01-01 00:00:00",
                        "startTime": "2024-03-29 12:31:41",
                        "grammage": "900 gm",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 3
                    },
                    {
                        "id": 360172,
                        "offerId": "Luc18395",
                        "image": "https://media.dealshare.in/img/offer/1740733175863:07E2CA8420_1.png?tr=f-webp",
                        "animationImage": "https://media.dealshare.in/img/offer/1740733175863:07E2CA8420_1.png?tr=f-webp",
                        "offerType": "general",
                        "foodType": "VEG",
                        "maxQuantityAllowed": 6,
                        "categoryId": 1163,
                        "parentCategoryId": 1161,
                        "categoryL3Id": 416,
                        "productId": 1157458,
                        "brand": "Britannia",
                        "imageTemplate": "https://media.dealshare.in/img/offer/1740733175863:07E2CA8420_1.png?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "Britannia Good Day Cashew Cookies - 200 Gm",
                        "mrp": 45.0,
                        "price": 38.0,
                        "categoryNameL1": "Snacks & Packaged Food",
                        "categoryNameL2": "Biscuits & Cookies",
                        "categoryNameL3": "Cookies",
                        "offPercentage": "15% off",
                        "discountText": "You save ₹7",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "89",
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-12-31 05:30:00",
                        "startTime": "2024-01-01 23:06:32",
                        "grammage": "200 gm",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 4
                    },
                    {
                        "id": 351021,
                        "offerId": "Luc16883",
                        "image": "https://media.dealshare.in/img/offer/1739779537662:AA88FD92B5_DEAL.png?tr=f-webp",
                        "animationImage": "https://media.dealshare.in/img/offer/1739779537662:AA88FD92B5_DEAL.png?tr=f-webp",
                        "offerType": "general",
                        "foodType": null,
                        "maxQuantityAllowed": 6,
                        "categoryId": 1169,
                        "parentCategoryId": 1161,
                        "categoryL3Id": 1272,
                        "productId": 1193623,
                        "brand": "Nimantran",
                        "imageTemplate": "https://media.dealshare.in/img/offer/1739779537662:AA88FD92B5_DEAL.png?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "Nimantran Mixture Namkeen - 900 Gm",
                        "mrp": 290.0,
                        "price": 99.0,
                        "categoryNameL1": "Snacks & Packaged Food",
                        "categoryNameL2": "Namkeens & Salted Snacks",
                        "categoryNameL3": "Bhujia & Namkeen",
                        "offPercentage": "65% off",
                        "discountText": "You save ₹191",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-01-01 00:00:00",
                        "startTime": "2023-09-28 12:56:28",
                        "grammage": "900 gm",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 5
                    },
                    {
                        "id": 338436,
                        "offerId": "Luc14814",
                        "image": "https://media.dealshare.in/img/offer/1737620300922:9A6350EDF0_1.webp?tr=f-webp",
                        "animationImage": "https://media.dealshare.in/img/offer/1737620300922:9A6350EDF0_1.webp?tr=f-webp",
                        "offerType": "general",
                        "foodType": "VEG",
                        "maxQuantityAllowed": 6,
                        "categoryId": 1163,
                        "parentCategoryId": 1161,
                        "categoryL3Id": 1259,
                        "productId": 1188982,
                        "brand": "Cremica",
                        "imageTemplate": "https://media.dealshare.in/img/offer/1737620300922:9A6350EDF0_1.webp?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "Cremica Digestive Biscuits (super Value Pack) - 900 Gm",
                        "mrp": 240.0,
                        "price": 120.0,
                        "categoryNameL1": "Snacks & Packaged Food",
                        "categoryNameL2": "Biscuits & Cookies",
                        "categoryNameL3": "Digestive Biscuit",
                        "offPercentage": "50% off",
                        "discountText": "You save ₹120",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-01-01 00:00:00",
                        "startTime": "2023-06-03 11:46:48",
                        "grammage": "900 gm",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 6
                    },
                    {
                        "id": 378076,
                        "offerId": "Luc21797",
                        "image": "https://media.dealshare.in/img/offer/1739780602241:ECB59799E0_1.png?tr=f-webp",
                        "animationImage": "https://media.dealshare.in/img/offer/1739780602241:ECB59799E0_1.png?tr=f-webp",
                        "offerType": "general",
                        "foodType": null,
                        "maxQuantityAllowed": 6,
                        "categoryId": 1169,
                        "parentCategoryId": 1161,
                        "categoryL3Id": 1272,
                        "productId": 1191728,
                        "brand": "Pitaara",
                        "imageTemplate": "https://media.dealshare.in/img/offer/1739780602241:ECB59799E0_1.png?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "Pitaara Navrang - 900 Gm",
                        "mrp": 330.0,
                        "price": 129.0,
                        "categoryNameL1": "Snacks & Packaged Food",
                        "categoryNameL2": "Namkeens & Salted Snacks",
                        "categoryNameL3": "Bhujia & Namkeen",
                        "offPercentage": "60% off",
                        "discountText": "You save ₹201",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-12-31 05:30:00",
                        "startTime": "2024-08-03 11:55:33",
                        "grammage": "900 gm",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 7
                    },
                    {
                        "id": 377311,
                        "offerId": "Luc21634",
                        "image": "https://media.dealshare.in/img/offer/1725270096254:F235D3D81D_1.webp?tr=f-webp",
                        "animationImage": "https://media.dealshare.in/img/offer/1725270096254:F235D3D81D_1.webp?tr=f-webp",
                        "offerType": "general",
                        "foodType": "VEG",
                        "maxQuantityAllowed": 6,
                        "categoryId": 1169,
                        "parentCategoryId": 1161,
                        "categoryL3Id": 1272,
                        "productId": 1189719,
                        "brand": "Pitaara",
                        "imageTemplate": "https://media.dealshare.in/img/offer/1725270096254:F235D3D81D_1.webp?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "Pitara Laajawaab All In One - 900 Gm",
                        "mrp": 330.0,
                        "price": 129.0,
                        "categoryNameL1": "Snacks & Packaged Food",
                        "categoryNameL2": "Namkeens & Salted Snacks",
                        "categoryNameL3": "Bhujia & Namkeen",
                        "offPercentage": "60% off",
                        "discountText": "You save ₹201",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-01-01 00:00:00",
                        "startTime": "2024-07-25 11:40:39",
                        "grammage": "900 gm",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 8
                    },
                    {
                        "id": 344871,
                        "offerId": "Luc15963",
                        "image": "https://media.dealshare.in/img/offer/1737464822562:495E2D18E8_1.webp?tr=f-webp",
                        "animationImage": "https://media.dealshare.in/img/offer/1737464822562:495E2D18E8_1.webp?tr=f-webp",
                        "offerType": "general",
                        "foodType": "VEG",
                        "maxQuantityAllowed": 6,
                        "categoryId": 1163,
                        "parentCategoryId": 1161,
                        "categoryL3Id": 416,
                        "productId": 1183289,
                        "brand": "Parle",
                        "imageTemplate": "https://media.dealshare.in/img/offer/1737464822562:495E2D18E8_1.webp?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "Parle 20-20 Gold Cashew - 1 Kg",
                        "mrp": 270.0,
                        "price": 135.0,
                        "categoryNameL1": "Snacks & Packaged Food",
                        "categoryNameL2": "Biscuits & Cookies",
                        "categoryNameL3": "Cookies",
                        "offPercentage": "50% off",
                        "discountText": "You save ₹135",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "89",
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-01-01 00:00:00",
                        "startTime": "2023-08-01 16:34:09",
                        "grammage": "1 kg",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 9
                    },
                    {
                        "id": 376671,
                        "offerId": "Luc21554",
                        "image": "https://media.dealshare.in/img/offer/98D2231D7C_1.webp?tr=f-webp",
                        "animationImage": "https://media.dealshare.in/img/offer/98D2231D7C_1.webp?tr=f-webp",
                        "offerType": "general",
                        "foodType": "VEG",
                        "maxQuantityAllowed": 24,
                        "categoryId": 1163,
                        "parentCategoryId": 1161,
                        "categoryL3Id": 1258,
                        "productId": 1135666,
                        "brand": "Lotte",
                        "imageTemplate": "https://media.dealshare.in/img/offer/98D2231D7C_1.webp?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "Lotte Choco Pie - 336 Gm",
                        "mrp": 170.0,
                        "price": 99.0,
                        "categoryNameL1": "Snacks & Packaged Food",
                        "categoryNameL2": "Biscuits & Cookies",
                        "categoryNameL3": "Cream Biscuits & Chocopie",
                        "offPercentage": "41% off",
                        "discountText": "You save ₹71",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-12-31 05:30:00",
                        "startTime": "2024-07-17 14:22:01",
                        "grammage": "336 gm",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 10
                    }
                ]
            },
            "fallbackSlots": null,
            "fallbackSlot": false
        },
        {
            "slotId": "741a6dda-f7f2-11ef-bec0-e96d735d80b6",
            "slotPosition": 8,
            "versionType": "NEW",
            "functionalComponentType": "banner_carousel_fc",
            "uiComponent": "banner_carousel_dynamic_height",
            "metaData": {
                "adIdentifier": null,
                "bannerCarouselId": 3340,
                "autoCarousel": false,
                "timeGapForAutoCarousel": 1,
                "totalNumberOfImages": 0,
                "bannerLayoutIdentifier": "horizontal",
                "numberOfItemsInViewPort": 1.0,
                "bgImage": null,
                "dimension": null,
                "themeMode": null,
                "titleAlignment": "TOP",
                "titleColor": "#333333",
                "subTitleColor": "#7B7B7B",
                "separator": false
            },
            "contentData": {
                "id": 3340,
                "title": "",
                "subtitle": null,
                "dimension": {
                    "width": 960,
                    "height": 108
                },
                "promotionalContents": [],
                "icon": "",
                "banners": [
                    {
                        "id": 5016,
                        "imageUrl": "https://images.dealshare.in/1740980098823BANNER-2.png?tr=f-webp",
                        "cta": {
                            "ctaType": "DEEPLINK",
                            "ctaVal": {
                                "landingPageType": "NONE",
                                "ctaParams": null,
                                "extraParams": null
                            },
                            "label": null,
                            "ctaIcon": null
                        }
                    }
                ]
            },
            "fallbackSlots": null,
            "fallbackSlot": false
        },
        {
            "slotId": "741a6ddb-f7f2-11ef-bec0-8dd33180c3aa",
            "slotPosition": 9,
            "versionType": "NEW",
            "functionalComponentType": "banner_carousel_fc",
            "uiComponent": "banner_carousel",
            "metaData": {
                "adIdentifier": null,
                "bannerCarouselId": 3343,
                "autoCarousel": false,
                "timeGapForAutoCarousel": 1,
                "totalNumberOfImages": 0,
                "bannerLayoutIdentifier": "tiled",
                "numberOfItemsInViewPort": 1.0,
                "bgImage": null,
                "dimension": null,
                "themeMode": null,
                "titleAlignment": "TOP",
                "titleColor": "#333333",
                "subTitleColor": "#7B7B7B",
                "separator": false
            },
            "contentData": {
                "id": 3343,
                "title": "",
                "subtitle": null,
                "dimension": {
                    "width": 312,
                    "height": 399
                },
                "promotionalContents": [],
                "icon": "",
                "banners": [
                    {
                        "id": 4999,
                        "imageUrl": "https://images.dealshare.in/1740892801136gulal-all-region.png?tr=f-webp",
                        "cta": {
                            "ctaType": "DEEPLINK",
                            "ctaVal": {
                                "landingPageType": "COLLECTION_LISTING",
                                "ctaParams": {
                                    "collectionId": "8188",
                                    "collectionName": "gulal-pichkari-more"
                                },
                                "extraParams": null
                            },
                            "label": null,
                            "ctaIcon": null
                        }
                    },
                    {
                        "id": 5012,
                        "imageUrl": "https://images.dealshare.in/1740893365910FESTIVE-COOKING.png?tr=f-webp",
                        "cta": {
                            "ctaType": "DEEPLINK",
                            "ctaVal": {
                                "landingPageType": "COLLECTION_LISTING",
                                "ctaParams": {
                                    "collectionId": "8183",
                                    "collectionName": "festive-cooking"
                                },
                                "extraParams": null
                            },
                            "label": null,
                            "ctaIcon": null
                        }
                    },
                    {
                        "id": 5013,
                        "imageUrl": "https://images.dealshare.in/1740893394397drinks.png?tr=f-webp",
                        "cta": {
                            "ctaType": "DEEPLINK",
                            "ctaVal": {
                                "landingPageType": "COLLECTION_LISTING",
                                "ctaParams": {
                                    "collectionId": "8165",
                                    "collectionName": "drinks-juices"
                                },
                                "extraParams": null
                            },
                            "label": null,
                            "ctaIcon": null
                        }
                    },
                    {
                        "id": 5014,
                        "imageUrl": "https://images.dealshare.in/1740893419537HOSTing-needs.png?tr=f-webp",
                        "cta": {
                            "ctaType": "DEEPLINK",
                            "ctaVal": {
                                "landingPageType": "COLLECTION_LISTING",
                                "ctaParams": {
                                    "collectionId": "8164",
                                    "collectionName": "hosting-needs"
                                },
                                "extraParams": null
                            },
                            "label": null,
                            "ctaIcon": null
                        }
                    },
                    {
                        "id": 5015,
                        "imageUrl": "https://images.dealshare.in/1740893445969skin.png?tr=f-webp",
                        "cta": {
                            "ctaType": "DEEPLINK",
                            "ctaVal": {
                                "landingPageType": "COLLECTION_LISTING",
                                "ctaParams": {
                                    "collectionId": "8166",
                                    "collectionName": "skin-hair-care"
                                },
                                "extraParams": null
                            },
                            "label": null,
                            "ctaIcon": null
                        }
                    },
                    {
                        "id": 5000,
                        "imageUrl": "https://images.dealshare.in/1740892848620post-holi-all-region.png?tr=f-webp",
                        "cta": {
                            "ctaType": "DEEPLINK",
                            "ctaVal": {
                                "landingPageType": "COLLECTION_LISTING",
                                "ctaParams": {
                                    "collectionId": "8167",
                                    "collectionName": "post-holi-cleaning"
                                },
                                "extraParams": null
                            },
                            "label": null,
                            "ctaIcon": null
                        }
                    }
                ]
            },
            "fallbackSlots": null,
            "fallbackSlot": false
        },
        {
            "slotId": "f2342b27-cfda-11ef-aa29-cde9c9205139",
            "slotPosition": 10,
            "versionType": "NEW",
            "functionalComponentType": "collection_fc",
            "uiComponent": "grid_collection",
            "metaData": {
                "adIdentifier": null,
                "totalNumberOfDeals": 10,
                "minimumNumberOfItems": 1,
                "numberOfItemsInViewPort": 0.0,
                "showTotalItems": false,
                "rows": 2,
                "componentEntityCursor": 1,
                "showTitle": true,
                "highlightIndex": null,
                "collectionId": 7938,
                "bgImage": null,
                "dimension": null,
                "titleAlignment": "TOP",
                "titleColor": "#333333",
                "subTitleColor": "#7B7B7B",
                "gradient1": "#F2FFF0",
                "gradient2": "#B9D2A5",
                "separator": false
            },
            "contentData": {
                "title": "Noodles, Ketchup & Spreads",
                "contentTitle": "Noodles, Ketchup & Spreads",
                "subtitle": null,
                "viewAllEnabled": true,
                "viewAllCta": {
                    "ctaType": "DEEPLINK",
                    "ctaVal": {
                        "landingPageType": "COLLECTION_LISTING",
                        "ctaParams": {
                            "collectionId": "7938",
                            "collectionName": "noodles-ketchup-spreads"
                        },
                        "extraParams": null
                    },
                    "label": null,
                    "ctaIcon": "https://images.dealshare.in/1703140986066B9D2A5.webp"
                },
                "componentEntityCursor": 2,
                "hasNext": true,
                "informationTitle": null,
                "tooltip": null,
                "icon": null,
                "lottieIcon": null,
                "dealDetailsList": [
                    {
                        "id": 348224,
                        "offerId": "Luc16376",
                        "image": "https://media.dealshare.in/img/offer/1734928989672:CD0FE93AB9_DEAL.webp?tr=f-webp",
                        "animationImage": "https://media.dealshare.in/img/offer/1734928989672:CD0FE93AB9_DEAL.webp?tr=f-webp",
                        "offerType": "general",
                        "foodType": "VEG",
                        "maxQuantityAllowed": 2,
                        "categoryId": 991,
                        "parentCategoryId": 1161,
                        "categoryL3Id": 1275,
                        "productId": 1190376,
                        "brand": "Maggi",
                        "imageTemplate": "https://media.dealshare.in/img/offer/1734928989672:CD0FE93AB9_DEAL.webp?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "Maggi 2 Minute Masala Instant Noodles - 70 Gm (Pack Of 12)",
                        "mrp": 180.0,
                        "price": 159.0,
                        "categoryNameL1": "Snacks & Packaged Food",
                        "categoryNameL2": "Noodles, Pasta & Vermicelli",
                        "categoryNameL3": "Noodles",
                        "offPercentage": "11% off",
                        "discountText": "You save ₹21",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-01-01 00:00:00",
                        "startTime": "2023-09-04 23:42:12",
                        "grammage": "840 gm",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 1
                    },
                    {
                        "id": 348927,
                        "offerId": "Luc16480",
                        "image": "https://images.dealshare.in/offerImage/1701925919Deal55725.webp?tr=f-webp",
                        "animationImage": "https://images.dealshare.in/offerImage/1701925919Deal55725.webp?tr=f-webp",
                        "offerType": "general",
                        "foodType": "VEG",
                        "maxQuantityAllowed": 6,
                        "categoryId": 991,
                        "parentCategoryId": 1161,
                        "categoryL3Id": 1081,
                        "productId": 1188228,
                        "brand": "Sanskriti",
                        "imageTemplate": "https://images.dealshare.in/offerImage/1701925919Deal55725.webp?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "Sanskriti Roasted Vermicelli - 850 Gm",
                        "mrp": 125.0,
                        "price": 68.0,
                        "categoryNameL1": "Snacks & Packaged Food",
                        "categoryNameL2": "Noodles, Pasta & Vermicelli",
                        "categoryNameL3": "Vermicelli",
                        "offPercentage": "45% off",
                        "discountText": "You save ₹57",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "89",
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-01-01 00:00:00",
                        "startTime": "2023-09-09 11:37:30",
                        "grammage": "850 gm",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 2
                    },
                    {
                        "id": 384930,
                        "offerId": "Luc22948",
                        "image": "https://media.dealshare.in/img/offer/1734707913505:DCD537BF81_1.webp?tr=f-webp",
                        "animationImage": "https://media.dealshare.in/img/offer/1734707913505:DCD537BF81_1.webp?tr=f-webp",
                        "offerType": "general",
                        "foodType": null,
                        "maxQuantityAllowed": 5,
                        "categoryId": 1168,
                        "parentCategoryId": 1161,
                        "categoryL3Id": 990,
                        "productId": 1196830,
                        "brand": "Khao Piyo",
                        "imageTemplate": "https://media.dealshare.in/img/offer/1734707913505:DCD537BF81_1.webp?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "Khao Piyo Veg Mayonnaise - 750 Gm",
                        "mrp": 179.0,
                        "price": 69.0,
                        "categoryNameL1": "Snacks & Packaged Food",
                        "categoryNameL2": "Ketchup & Sauces",
                        "categoryNameL3": "Mayonnaise",
                        "offPercentage": "61% off",
                        "discountText": "You save ₹110",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-12-31 00:00:00",
                        "startTime": "2024-12-16 18:06:06",
                        "grammage": "750 gm",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 3
                    },
                    {
                        "id": 377203,
                        "offerId": "Luc21598",
                        "image": "https://media.dealshare.in/img/offer/B1F734ED9C_1.webp?tr=f-webp",
                        "animationImage": "https://media.dealshare.in/img/offer/B1F734ED9C_1.webp?tr=f-webp",
                        "offerType": "general",
                        "foodType": null,
                        "maxQuantityAllowed": 6,
                        "categoryId": 991,
                        "parentCategoryId": 1161,
                        "categoryL3Id": 1103,
                        "productId": 1192846,
                        "brand": "Goldden Shinee",
                        "imageTemplate": "https://media.dealshare.in/img/offer/B1F734ED9C_1.webp?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "Goldden Shinee Macroni Elbows - 1 Kg",
                        "mrp": 150.0,
                        "price": 75.0,
                        "categoryNameL1": "Snacks & Packaged Food",
                        "categoryNameL2": "Noodles, Pasta & Vermicelli",
                        "categoryNameL3": "Pasta",
                        "offPercentage": "50% off",
                        "discountText": "You save ₹75",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "89",
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-12-31 05:30:00",
                        "startTime": "2024-07-24 11:24:04",
                        "grammage": "1 kg",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 4
                    },
                    {
                        "id": 361825,
                        "offerId": "Luc18754",
                        "image": "https://media.dealshare.in/img/offer/Kol23695.webp?tr=f-webp",
                        "animationImage": "https://media.dealshare.in/img/offer/Kol23695.webp?tr=f-webp",
                        "offerType": "general",
                        "foodType": null,
                        "maxQuantityAllowed": 6,
                        "categoryId": 991,
                        "parentCategoryId": 1161,
                        "categoryL3Id": 1081,
                        "productId": 1194544,
                        "brand": "Khao Piyo",
                        "imageTemplate": "https://media.dealshare.in/img/offer/Kol23695.webp?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "Khao Piyo Vermicelli - 850 Gm",
                        "mrp": 110.0,
                        "price": 59.0,
                        "categoryNameL1": "Snacks & Packaged Food",
                        "categoryNameL2": "Noodles, Pasta & Vermicelli",
                        "categoryNameL3": "Vermicelli",
                        "offPercentage": "46% off",
                        "discountText": "You save ₹51",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-01-01 00:00:00",
                        "startTime": "2024-01-18 16:59:12",
                        "grammage": "850 gm",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 5
                    },
                    {
                        "id": 376171,
                        "offerId": "Luc21455",
                        "image": "https://media.dealshare.in/img/offer/2AABA77F76_1.webp?tr=f-webp",
                        "animationImage": "https://media.dealshare.in/img/offer/2AABA77F76_1.webp?tr=f-webp",
                        "offerType": "general",
                        "foodType": "VEG",
                        "maxQuantityAllowed": 6,
                        "categoryId": 991,
                        "parentCategoryId": 1161,
                        "categoryL3Id": 1275,
                        "productId": 1137181,
                        "brand": "Chings",
                        "imageTemplate": "https://media.dealshare.in/img/offer/2AABA77F76_1.webp?tr=w-{width},h-{height},f-{format},dpr-{dpr}",
                        "title": "Ching's Schezwan Instant Noodles - 240 Gm",
                        "mrp": 80.0,
                        "price": 54.0,
                        "categoryNameL1": "Snacks & Packaged Food",
                        "categoryNameL2": "Noodles, Pasta & Vermicelli",
                        "categoryNameL3": "Noodles",
                        "offPercentage": "32% off",
                        "discountText": "You save ₹26",
                        "isBouncerDeal": false,
                        "variantInformationList": null,
                        "dealPriceModel": null,
                        "clusters": [
                            "63"
                        ],
                        "dealType": "general",
                        "endTime": "2060-12-31 05:30:00",
                        "startTime": "2024-07-09 13:53:47",
                        "grammage": "240 gm",
                        "vehicleType": 5,
                        "offerSellerType": "dealshare",
                        "promotionPlanId": null,
                        "position": 6
                    }
                ]
            },
            "fallbackSlots": null,
            "fallbackSlot": false
        },
    ]
 const navigate =useNavigate()
  return (<>
    <div className='h-full w-full p-10 pl-44 flex flex-wrap gap-10'>
   { 
    listSection[0].contentData.gridCellModelList.map((item) => (
       <div key={item.id}  onClick={()=>{navigate("/details",{state:{
        data:item




       }})}} className="w-[15%] lg:h-[40vh] border border-gray-400 rounded-2xl">
        <div className="bg-[#F2FFF0] flex justify-center lg:h-[65%] rounded-t-2xl">
         <img className="h-full" src={item.image} alt="Product" />
        </div>
       <div className="h-[25%] ml-2 w-full">
         <p className="text-xs mt-2">{item.cta.ctaVal.ctaParams.collectionName}</p>
       <div className="w-full h-full mt-1 flex justify-between">
        <div>
          <p className="mt-2 text-gray-600 text-xs font-semibold">5 Ltr</p>
          <p className="text-green-600 font-bold">₹869</p>
          <p className="line-through text-gray-600 text-xs font-semibold">₹930</p>
        </div>
        <div>
          <button className="font-bold bg-green-600 mt-8 mr-5 px-3 py-0.5 text-white rounded-3xl">
            ADD
          </button>
        </div>
        </div>
      </div>
      </div>
    ))}
    </div>
    <div className='h-full w-full p-10 pl-44 flex flex-wrap gap-10'>
   { 
    listSection[1].contentData.gridCellModelList.map((item) => (
       <div key={item.id} className="w-[15%] lg:h-[40vh] border border-gray-400 rounded-2xl">
        <div className="bg-[#F2FFF0] flex justify-center lg:h-[65%] rounded-t-2xl">
         <img className="h-full" src={item.image} alt="Product" />
        </div>
       <div className="h-[25%] ml-2 w-full">
         <p className="text-xs mt-2">{item.cta.ctaVal.ctaParams.collectionName}</p>
       <div className="w-full h-full mt-1 flex justify-between">
        <div>
          <p className="mt-2 text-gray-600 text-xs font-semibold">5 Ltr</p>
          <p className="text-green-600 font-bold">₹869</p>
          <p className="line-through text-gray-600 text-xs font-semibold">₹930</p>
        </div>
        <div>
          <button className="font-bold bg-green-600 mt-8 mr-5 px-3 py-0.5 text-white rounded-3xl">
            ADD
          </button>
        </div>
        </div>
      </div>
      </div>
    ))}
    </div>
    <div className='h-full w-full p-10 pl-44 flex flex-wrap gap-10'>
   { 
    listSection[2].contentData.gridCellModelList.map((item) => (
       <div key={item.id} className="w-[15%] lg:h-[40vh] border border-gray-400 rounded-2xl">
        <div className="bg-[#F2FFF0] flex justify-center lg:h-[65%] rounded-t-2xl">
         <img className="h-full" src={item.image} alt="Product" />
        </div>
       <div className="h-[25%] ml-2 w-full">
         <p className="text-xs mt-2">{item.cta.ctaVal.ctaParams.collectionName}</p>
       <div className="w-full h-full mt-1 flex justify-between">
        <div>
          <p className="mt-2 text-gray-600 text-xs font-semibold">5 Ltr</p>
          <p className="text-green-600 font-bold">₹869</p>
          <p className="line-through text-gray-600 text-xs font-semibold">₹930</p>
        </div>
        <div>
          <button className="font-bold bg-green-600 mt-8 mr-5 px-3 py-0.5 text-white rounded-3xl">
            ADD
          </button>
        </div>
        </div>
      </div>
      </div>
    ))}
    </div>
    <div className='h-full w-full p-10 pl-44 flex flex-wrap gap-10'>
   { 
    listSection[3].contentData.dealDetailsList?.map((item) => (
       <div key={item.id} className="w-[15%] lg:h-[40vh] border border-gray-400 rounded-2xl">
        <div className="bg-[#F2FFF0] flex justify-center lg:h-[65%] rounded-t-2xl">
         <img className="h-full" src={item.image} alt="Product" />
        </div>
       <div className="h-[25%] ml-2 w-full">
         <p className="text-xs mt-2">{item.categoryNameL3}</p>
       <div className="w-full h-full mt-1 flex justify-between">
        <div>
          <p className="mt-2 text-gray-600 text-xs font-semibold">5 Ltr</p>
          <p className="text-green-600 font-bold">₹869</p>
          <p className="line-through text-gray-600 text-xs font-semibold">₹930</p>
        </div>
        <div>
          <button className="font-bold bg-green-600 mt-8 mr-5 px-3 py-0.5 text-white rounded-3xl">
            ADD
          </button>
        </div>
        </div>
      </div>
      </div>
    ))}
    </div>
    <div className='h-full w-full p-10 pl-44 flex flex-wrap gap-10'>
   { 
    listSection[4].contentData.dealDetailsList?.map((item) => (
       <div key={item.id} className="w-[15%] lg:h-[40vh] border border-gray-400 rounded-2xl">
        <div className="bg-[#F2FFF0] flex justify-center lg:h-[65%] rounded-t-2xl">
         <img className="h-full" src={item.image} alt="Product" />
        </div>
       <div className="h-[25%] ml-2 w-full">
         <p className="text-xs mt-2">{item.categoryNameL3}</p>
       <div className="w-full h-full mt-1 flex justify-between">
        <div>
          <p className="mt-2 text-gray-600 text-xs font-semibold">5 Ltr</p>
          <p className="text-green-600 font-bold">₹869</p>
          <p className="line-through text-gray-600 text-xs font-semibold">₹930</p>
        </div>
        <div>
          <button className="font-bold bg-green-600 mt-8 mr-5 px-3 py-0.5 text-white rounded-3xl">
            ADD
          </button>
        </div>
        </div>
      </div>
      </div>
    ))}
    </div>
    <div className='h-full w-full p-10 pl-44 flex flex-wrap gap-10'>
   { 
    listSection[5].contentData.dealDetailsList?.map((item) => (
       <div key={item.id} className="w-[15%] lg:h-[40vh] border border-gray-400 rounded-2xl">
        <div className="bg-[#F2FFF0] flex justify-center lg:h-[65%] rounded-t-2xl">
         <img className="h-full" src={item.image} alt="Product" />
        </div>
       <div className="h-[25%] ml-2 w-full">
         <p className="text-xs mt-2">{item.categoryNameL3}</p>
       <div className="w-full h-full mt-1 flex justify-between">
        <div>
          <p className="mt-2 text-gray-600 text-xs font-semibold">5 Ltr</p>
          <p className="text-green-600 font-bold">₹869</p>
          <p className="line-through text-gray-600 text-xs font-semibold">₹930</p>
        </div>
        <div>
          <button className="font-bold bg-green-600 mt-8 mr-5 px-3 py-0.5 text-white rounded-3xl">
            ADD
          </button>
        </div>
        </div>
      </div>
      </div>
    ))}
    </div>
    <div className='h-full w-full p-10 pl-44 flex flex-wrap gap-10'>
   { 
    listSection[6].contentData.dealDetailsList?.map((item) => (
       <div key={item.id} className="w-[15%] lg:h-[40vh] border border-gray-400 rounded-2xl">
        <div className="bg-[#F2FFF0] flex justify-center lg:h-[65%] rounded-t-2xl">
         <img className="h-full" src={item.image} alt="Product" />
        </div>
       <div className="h-[25%] ml-2 w-full">
         <p className="text-xs mt-2">{item.categoryNameL3}</p>
       <div className="w-full h-full mt-1 flex justify-between">
        <div>
          <p className="mt-2 text-gray-600 text-xs font-semibold">5 Ltr</p>
          <p className="text-green-600 font-bold">₹869</p>
          <p className="line-through text-gray-600 text-xs font-semibold">₹930</p>
        </div>
        <div>
          <button className="font-bold bg-green-600 mt-8 mr-5 px-3 py-0.5 text-white rounded-3xl">
            ADD
          </button>
        </div>
        </div>
      </div>
      </div>
    ))}
    </div>
    <div className='h-full w-full p-10 pl-44 flex flex-wrap gap-10'>
   { 
    listSection[7].contentData.dealDetailsList?.map((item) => (
       <div key={item.id} className="w-[15%] lg:h-[40vh] border border-gray-400 rounded-2xl">
        <div className="bg-[#F2FFF0] flex justify-center lg:h-[65%] rounded-t-2xl">
         <img className="h-full" src={item.image} alt="Product" />
        </div>
       <div className="h-[25%] ml-2 w-full">
         <p className="text-xs mt-2">{item.categoryNameL3}</p>
       <div className="w-full h-full mt-1 flex justify-between">
        <div>
          <p className="mt-2 text-gray-600 text-xs font-semibold">5 Ltr</p>
          <p className="text-green-600 font-bold">₹869</p>
          <p className="line-through text-gray-600 text-xs font-semibold">₹930</p>
        </div>
        <div>
          <button className="font-bold bg-green-600 mt-8 mr-5 px-3 py-0.5 text-white rounded-3xl">
            ADD
          </button>
        </div>
        </div>
      </div>
      </div>
    ))}
    </div>
    <div className='h-full w-full pl-44 flex flex-wrap gap-10'>
   { 
    listSection[8].contentData.banners?.map((item) => (
       <div key={item.id} className="w-[15%] lg:h-[40vh] border border-gray-400 rounded-2xl">
        <div className="bg-[#F2FFF0] flex justify-center lg:h-[65%] rounded-t-2xl">
         <img className="h-full" src={item.imageUrl} alt="Product" />
        </div>
       <div className="h-[25%] ml-2 w-full">
         <p className="text-xs mt-2">{item.categoryNameL3}</p>
       <div className="w-full h-full mt-1 flex justify-between">
        <div>
          <p className="mt-2 text-gray-600 text-xs font-semibold">5 Ltr</p>
          <p className="text-green-600 font-bold">₹869</p>
          <p className="line-through text-gray-600 text-xs font-semibold">₹930</p>
        </div>
        <div>
          <button className="font-bold bg-green-600 mt-8 mr-5 px-3 py-0.5 text-white rounded-3xl">
            ADD
          </button>
        </div>
        </div>
      </div>
      </div>
    ))}
    </div>
    <div className='h-full w-full p-10 pl-44 flex flex-wrap gap-10'>
   { 
    listSection[9].contentData.dealDetailsList?.map((item) => (
       <div key={item.id} className="w-[15%] lg:h-[40vh] border border-gray-400 rounded-2xl">
        <div className="bg-[#F2FFF0] flex justify-center lg:h-[65%] rounded-t-2xl">
         <img className="h-full" src={item.image} alt="Product" />
        </div>
       <div className="h-[25%] ml-2 w-full">
         <p className="text-xs mt-2">{item.categoryNameL3}</p>
       <div className="w-full h-full mt-1 flex justify-between">
        <div>
          <p className="mt-2 text-gray-600 text-xs font-semibold">5 Ltr</p>
          <p className="text-green-600 font-bold">₹869</p>
          <p className="line-through text-gray-600 text-xs font-semibold">₹930</p>
        </div>
        <div>
          <button className="font-bold bg-green-600 mt-8 mr-5 px-3 py-0.5 text-white rounded-3xl">
            ADD
          </button>
        </div>
        </div>
      </div>
      </div>
    ))}
    </div>
   </> )
}

export default Item1
