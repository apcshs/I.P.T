class PeriodicTableInfoBox
{
	constructor(periodictable, infoboxbackgroundid, infoboxid)
	{
		this._periodictable = periodictable;
        this._infoboxid = infoboxid;
        this._infoboxbackgroundid = infoboxbackgroundid;

		document.onkeyup = (event) =>
		{
			if(event.key === "Escape" && document.getElementById(this._infoboxid).style.visibility === "visible")
			{
				this.Hide();
			}
		}

		document.getElementById("btnCloseInfoBox").onclick = () => this.Hide();
    }

	Hide()
	{
		document.getElementById(this._infoboxid).style.visibility = "hidden";
		document.getElementById(this._infoboxbackgroundid).style.visibility = "hidden";
	}

	Show(atomicnumber) {
		const element = this._periodictable.GetElement(atomicnumber);
	
		document.getElementById("infoName").innerHTML = element.name;
		document.getElementById("infoAtomicNumber").innerHTML = element.atomicnumber;
		document.getElementById("infoChemicalSymbol").innerHTML = element.symbol;
		document.getElementById("infoCategory").innerHTML = element.category;
		document.getElementById("infoAtomicWeightConventional").innerHTML = element.atomicweight;
		document.getElementById("infoAtomicWeightStandard").innerHTML = element.atomicweightfull;
		document.getElementById("infoOccurrence").innerHTML = element.occurrence;
		document.getElementById("infoStateOfMatter").innerHTML = element.stateofmatter;
		document.getElementById("infoGroup").innerHTML = element.group;
		document.getElementById("infoPeriod").innerHTML = element.period;
		document.getElementById("infoBlock").innerHTML = element.block;
		document.getElementById("infoElectronConfiguration").innerHTML = element.electronConfiguration;
		document.getElementById("infoValenceElectrons").innerHTML = element.valenceElectrons;

		
		let imageUrl = "";
		if (element.symbol === "Li") {
			imageUrl = "https://cdn-reichelt.de/bilder/web/artikel_ws/D600%2FANS_1512-0002_02_ANW.jpg?type=Product&";
		} else if (element.symbol === "H") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/7/74/Delta_IV_launch_2013-08-28.jpg";
		} else if (element.symbol === "Be") {
			imageUrl = "https://scx2.b-cdn.net/gfx/news/hires/509902main_heaveymetal-img2-orig.jpg";
		} else if (element.symbol === "B") {
			imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXXAfq_-SYPG2BbOqGpnyZ_zk0S0noK1R-qNK9E5QAXOX_Pix-U-A4QCj8sM7qQ-JHyf4&usqp=CAU";
		} else if (element.symbol === "C") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/5/51/Charcoal_8.jpg";
		} else if (element.symbol === "Na") {
			imageUrl = "https://supplements.selfdecode.com/app/uploads/2018/04/bigstock-jar-of-baking-soda-on-the-blac-134347160-min-1.jpg";
		} else if (element.symbol === "Mg") {
			imageUrl = "https://thumbs.dreamstime.com/b/fireworks-various-colours-20356437.jpg";
		} else if (element.symbol === "K") {
			imageUrl = "https://5.imimg.com/data5/SELLER/Default/2022/5/WO/WB/XI/14297314/potassium-chloride-bp-10-injection-sal-kcl-injection--500x500.jpeg";
		} else if (element.symbol === "Ca") {
			imageUrl = "https://media.post.rvohealth.io/wp-content/uploads/2020/08/642x361_IMAGE_1_8_Fast_Facts_About_Calcium.jpg";
		} else if (element.symbol === "Rb") {
			imageUrl = "https://study.com/cimages/multimages/16/rsz_purple.jpg";
		} else if (element.symbol === "Sr") {
			imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIw-8tN3B72LF081VNnBk5tnz-ZVS7IKHWRbGRajo0Bsm79kwtFnfWeY8Iil_cXpvWxrI&usqp=CAU";
		} else if (element.symbol === "Cs") {
			imageUrl = "https://optica.africa/cdn/shop/files/CESIUMC25-P81___FRONT_1200x1200.jpg?v=1709721702";
		} else if (element.symbol === "Ba") {
			imageUrl = "https://thelogicalindian.com/wp-content/uploads/2024/10/500x300_234246-fireflyapictureoffirecrackers33679.webp";
		} else if (element.symbol === "Fr") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Francium-87.jpg/481px-Francium-87.jpg";
		} else if (element.symbol === "Ra") {
			imageUrl = "https://d2cbg94ubxgsnp.cloudfront.net/Pictures/1024x536/4/3/9/143439_shutterstock_1097370944.jpg";
		} else if (element.symbol === "Sc") {
			imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZkOUiLmwl3q6cIfXEPEkl1hsSduMD6PPaLviLr38u8IP3aBS33oQfi6aSVm_D11c4_Sk&usqp=CAU";
		} else if (element.symbol === "Y") {
			imageUrl = "https://periodic-table.rsc.org/Content/Images/Elements/Yttrium-L.jpg?6.0.4.2";
		} else if (element.symbol === "Lu") {
			imageUrl = "https://marketing.webassets.siemens-healthineers.com/1800000007261928/c44fd355fad6/v/58b7dc2f3c4a/siemens-healthineers_mi_biograph-vision_pet_ct_scanner_preview.png?nowebp=1";
		} else if (element.symbol === "Lr") {
			imageUrl = "https://periodic-table.rsc.org/Content/Images/Elements/Lawrencium-L.jpg?6.0.4.2";
		} else if (element.symbol === "La") {
			imageUrl = "https://preview.redd.it/is-the-lanthanide-coating-in-the-lll-35mm-f2-dangerous-v0-k4mu0hpi8mac1.jpg?width=871&format=pjpg&auto=webp&s=0037216e62b6d8f004fb62883b7d840b9b7080bb";
		} else if (element.symbol === "Ac") {
			imageUrl = "https://i.ytimg.com/vi/BjIhiWU1e3Q/maxresdefault.jpg";
		} else if (element.symbol === "Ti") {
			imageUrl = "https://7cad390533514c32acc8-75d23ce06fcfaf780446d85d50c33f7b.ssl.cf6.rackcdn.com/arm/uploads/2019/10/applications_of_titanium_in_dental_implants.jpg";
		} else if (element.symbol === "Zr") {
			imageUrl = "https://www.zircon-association.org/assets/images/2019/600x400/gemstone-pixabay-diamond-123338_600x400.jpg";
		} else if (element.symbol === "Hf") {
			imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ5DTj6VLr2kPWXSij3XzKVvsz96Ou_QyQTLlia6yp9cioOXdE8YRnVAKlcwBKqIxqIhE&usqp=CAU";
		} else if (element.symbol === "Rf") {
			imageUrl = "https://www.americanelements.com/images/2024-08/rutherfordium-banner.jpg";
		} else if (element.symbol === "Ce") {
			imageUrl = "https://image.made-in-china.com/229f0j00YtiRzLlysPqM/62f276415648a871d66f9ca0163a5fa0-mp4.webp";
		} else if (element.symbol === "Th") {
			imageUrl = "https://www.orau.org/health-physics-museum/img/museum/consumer-products/thorium/pentax-camera.jpg";
		} else if (element.symbol === "V") {
			imageUrl = "https://www.americangeosciences.org/static/earth/mineral-resource-month-vanadium/2008-04-14_Chrome-Vanadium_Wrenches.jpg";
		} else if (element.symbol === "Nb") {
			imageUrl = "https://7cad390533514c32acc8-75d23ce06fcfaf780446d85d50c33f7b.ssl.cf6.rackcdn.com/arm/uploads/2020/04/Uses_of_Niobium-2.jpg";
		} else if (element.symbol === "Ta") {
			imageUrl = "https://ph.element14.com/productimages/large/en_US/4484183.jpg";
		} else if (element.symbol === "Db") {
			imageUrl = "https://isoflex.com/images/widgetkit/CoolingTowers660x308.jpg";
		} else if (element.symbol === "Pr") {
			imageUrl = "https://cdn.xingosoftware.com/audioxpress/images/fetch/dpr_1,w_765,h_574,c_fit/https%3A%2F%2Faudioxpress.com%2Fassets%2Fupload%2Fimages%2F1%2F20190331201044_Photo1-DENON-AH-D7200-explodedviewWeb.png";
		} else if (element.symbol === "Pa") {
			imageUrl = "https://study.com/cimages/multimages/16/256px-blenda_smolista6.jpeg";
		} else if (element.symbol === "Cr") {
			imageUrl = "https://study.com/cimages/multimages/16/d89a3253-78f3-4df0-b342-ebbac3830ed9_cake-fork-metal-cutlery-small-fork-39552.jpeg";
		} else if (element.symbol === "Mo") {
			imageUrl = "https://7cad390533514c32acc8-75d23ce06fcfaf780446d85d50c33f7b.ssl.cf6.rackcdn.com/arm/uploads/2020/04/Molybdenum_Powder_Types_Applications.jpg";
		} else if (element.symbol === "W") {
			imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIdSPBgWAd44tMBpZZXKG6qOmkbRFXCEobJaq_N5DVKGViO78Pu2QKTVZv7wlBG4usNGM&usqp=CAU";
		} else if (element.symbol === "Sg") {
			imageUrl = "https://www.chemistrylearner.com/wp-content/uploads/2018/01/Seaborgium.jpg";
		} else if (element.symbol === "Nd") {
			imageUrl = "https://m.media-amazon.com/images/I/71UTQKtJuvL._SL1500_.jpg";
		} else if (element.symbol === "U") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/2/24/2011-05-10_18-57-46_Switzerland_-_Wil_crop.jpg";
		} else if (element.symbol === "Mn") {
			imageUrl = "https://www.manganese.org/sites/default/files/styles/text_image_x2_/public/featured_images/ALUMINIUM.jpg.webp?itok=kHiIcn1E";
		} else if (element.symbol === "Tc") {
			imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuTO-ycZX9x3oKvGMMp-8wzc49Oohn-5E23RRIln7kD2Ow8wf5KdHnwBw19qTbjbmrVK4&usqp=CAU";
		} else if (element.symbol === "Re") {
			imageUrl = "https://7cad390533514c32acc8-75d23ce06fcfaf780446d85d50c33f7b.ssl.cf6.rackcdn.com/arm/uploads/2019/04/Rhenium_Uses_in_Aerospace-2.png";
		} else if (element.symbol === "Bh") {
			imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfjPTi86eBfCL3ZqjgjYGWqopNyTwE7sbjlCxyKmkix3HwHxqH2lX7BEbdkNpiQltdS4k&usqp=CAU";
		} else if (element.symbol === "Pm") {
			imageUrl = "https://periodictable.com/Samples/038.6/s13.JPG";
		} else if (element.symbol === "Np") {
			imageUrl = "https://www.chemistrylearner.com/wp-content/uploads/2018/02/Neptunium-Element.jpg";
		} else if (element.symbol === "Fe") {
			imageUrl = "https://periodictable.com/Samples/026.59/s7s.JPG";
		} else if (element.symbol === "Ru") {
			imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwL4OqBkSFnhSZK7EMWLuuQlVaNxkjYJaQMwDVv_XaM6TGgH4DFlRkCISdi1EONfSPH7U&usqp=CAU";
		} else if (element.symbol === "Os") {
			imageUrl = "https://periodictable.com/Samples/OsmiridiumPen/s13.JPG";
		} else if (element.symbol === "Hs") {
			imageUrl = "https://periodic-table.rsc.org/Content/Images/Elements/Hassium-L.jpg?6.0.4.2";
		} else if (element.symbol === "Sm") {
			imageUrl = "https://www.magnetshop.com/includes/work/image_cache/webp/35d8f09fe195e6d72eb03b4f8a984075.thumb.webp";
		} else if (element.symbol === "Pu") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/0/0e/Fat_Man_%28replica_of_nuclear_bomb%29.jpg";
		} else if (element.symbol === "Co") {
			imageUrl = "https://chemistrytalk.org/wp-content/uploads/2023/03/640px-Early_2000s_Rechargeable_Batteries.jpg";
		} else if (element.symbol === "Rh") {
			imageUrl = "https://i00.eu/img/413/680x680/47nzz836/39495.jpg";
		} else if (element.symbol === "Ir") {
			imageUrl = "https://www.ubuy.com.ph/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFGWlhKcm95MkwuX0FDX1NMMTUwMF8uanBn.jpg";
		} else if (element.symbol === "Mt") {
			imageUrl = "https://periodic-table.rsc.org/Content/Images/Elements/Meitnerium-L.jpg?6.0.4.2";
		} else if (element.symbol === "Eu") {
			imageUrl = "https://periodictable.com/Samples/063.5/s13.JPG";
		} else if (element.symbol === "Am") {
			imageUrl = "http://large.stanford.edu/courses/2011/ph241/eason1/images/f1big.jpg";
		} else if (element.symbol === "Ni") {
			imageUrl = "https://www.mecmining.com.au/wp-content/uploads/2016/10/nickel-004-1.jpg";
		} else if (element.symbol === "Pd") {
			imageUrl = "https://img.medicalexpo.com/images_me/photo-mg/72900-9526751.webp";
		} else if (element.symbol === "Pt") {
			imageUrl = "https://stefanonavi.com/cdn/shop/articles/a_74b80132-e544-4995-9d14-0b2298434303_600x.jpg?v=1623270810";
		} else if (element.symbol === "Ds") {
			imageUrl = "https://study.com/cimages/multimages/16/bates_linear_accelerator_002.jpg";
		} else if (element.symbol === "Gd") {
			imageUrl = "https://jodasexpoim.in/wp-content/uploads/2024/05/GBCAs-in-MRI.jpg";
		} else if (element.symbol === "Cm") {
			imageUrl = "https://www.sky-rayinstrument.com/uploads/201816063/portable-mineral-analyzer49271158291.jpg";
		} else if (element.symbol === "Cu") {
			imageUrl = "https://www.netmeds.com/images/cms/wysiwyg/blog/2020/10/1603441464_Copper_big_3.jpg";
		} else if (element.symbol === "Ag") {
			imageUrl = "https://sarasotaantiquebuyers.com/wp-content/uploads/2017/11/We-buy-Antique-Silver.jpg";
		} else if (element.symbol === "Au") {
			imageUrl = "https://investingnews.com/media-library/rows-of-gold-bars.jpg?id=54966053&width=1200&height=800&quality=80&coordinates=0%2C0%2C0%2C0";
		} else if (element.symbol === "Rg") {
			imageUrl = "https://www.americanelements.com/images/2024-08/roentgenium-banner.jpg";
		} else if (element.symbol === "Tb") {
			imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwDnKJKATMR18xmlnV-W76qZqfOF0ZICRrd9QiRhu6jhw6dX_DE9QYymTqcb_hodR3lBw&usqp=CAU";
		} else if (element.symbol === "Bk") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/b/b6/Berkelium_metal.jpg";
		} else if (element.symbol === "Zn") {
			imageUrl = "https://1.bp.blogspot.com/-D067hJvnJcE/XW5a8yqv_LI/AAAAAAAAABU/gNRox4yNbg0vIgH6PIKyAFZFRaxpPeWkQCLcBGAs/s1600/zinc-manufacturers-in-India.jpg";
		} else if (element.symbol === "Cd") {
			imageUrl = "https://www.globalhealingcenter.com/natural-health/wp-content/uploads/2013/05/cadmium-batteries.jpg";
		} else if (element.symbol === "Hg") {
			imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO2DM769FEQZ0c7D03eDium0gCswQAIKJWSnTbiqnvQlFVy-4EH7S-t1z8YNUizIaeyTk&usqp=CAU";
		} else if (element.symbol === "Cn") {
			imageUrl = "https://img.chemie.de/Portal/News/1695_vtOBw7aWY.jpg?tr=n-xzoom";
		} else if (element.symbol === "Dy") {
			imageUrl = "https://nuclear-power.com/wp-content/uploads/2014/11/Cluster_assembly.png";
		} else if (element.symbol === "Cf") {
			imageUrl = "https://www.chemicool.com/elements/images/300-californium-mine-detector.jpg";
		} else if (element.symbol === "Al") {
			imageUrl = "https://www.windpowerengineering.com/wp-content/uploads/2019/05/helukabel-headline-image.jpg";
		} else if (element.symbol === "Ga") {
			imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBXzgxUIP4ZqmFA_I5F4BYH8LxnZ83MMEJ1OprjNq404mFLy2qfPXjtzBynTLw6Apk&usqp=CAU";
		} else if (element.symbol === "In") {
			imageUrl = "https://images.squarespace-cdn.com/content/v1/5fc769a68b9e860b7b20d9a1/97bd6fd9-60a9-481a-84c2-8a893bda7452/unsplash-image-oCfkSnqZ0SI.jpg";
		} else if (element.symbol === "Tl") {
			imageUrl = "https://productimages.edmundoptics.com/9499.jpg?quality=100";
		} else if (element.symbol === "Nh") {
			imageUrl = "https://www.thoughtco.com/thmb/laf80UF2HLJyhaxb0UiwlpUG20g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/distorted-concentric-light-circles-light-painting-534360517-58865a615f9b58bdb3aa07f2.jpg";
		} else if (element.symbol === "Ho") {
			imageUrl = "https://auction.fabexchange.com/Content/listingImages/20220606/8091cfdf-65f1-4d9c-af44-cf278c2f1554_fullsize.jpg";
		} else if (element.symbol === "Es") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/5/55/Einsteinium.jpg";
		} else if (element.symbol === "Si") {
			imageUrl = "https://cdn.prod.website-files.com/60a3c1fc44c5715c395770e7/60df7dec735f6345d2dc9f59_Depositphotos_7331896_m-2015-p-800.jpeg";
		} else if (element.symbol === "Ge") {
			imageUrl = "https://cdn.prod.website-files.com/60a3c1fc44c5715c395770e7/63ec538e059ecdbc89b2c7d3_pexels-rfstudio-3825581.jpg";
		} else if (element.symbol === "Sn") {
			imageUrl = "https://study.com/cimages/videopreview/videopreview-full/yiu1pc0sap.jpg";
		} else if (element.symbol === "Pb") {
			imageUrl = "https://mm.digikey.com/Volume0/opasdata/d220001/medias/images/4280/MFG_ENR_Max_Product-Image_E92_Straight.jpg";
		} else if (element.symbol === "Fl") {
			imageUrl = "https://cdn1.byjus.com/wp-content/uploads/2018/08/Flerovium-2.jpg";
		} else if (element.symbol === "Er") {
			imageUrl = "https://7cad390533514c32acc8-75d23ce06fcfaf780446d85d50c33f7b.ssl.cf6.rackcdn.com/sc/1682563166-normal-erbium-oxide-as-a-colorant-in-glass-production.jpg";
		} else if (element.symbol === "Fm") {
			imageUrl = "https://d2cbg94ubxgsnp.cloudfront.net/Pictures/780xany/4/9/6/135496_shutterstock_339962993.jpg";
		} else if (element.symbol === "N") {
			imageUrl = "https://etimg.etb2bimg.com/photo/70126789.cms";
		} else if (element.symbol === "P") {
			imageUrl = "https://cdn.mos.cms.futurecdn.net/kUec7ZhbuZkR4DQAhvPB57-500-80.jpg.webp";
		} else if (element.symbol === "As") {
			imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNEGar3X05QUqXvKYVcijM21ZnXIS5qVZMkJPZwimG-OPEYSqwRAq11zYTYSsvcvZF6l8&usqp=CAU";
		} else if (element.symbol === "Sb") {
			imageUrl = "https://image.made-in-china.com/226f3j00ZLHWvUmYYQkz/SZSC-Series-Tin-Zinc-Antimony-Copper-Alloy-Wire-for-Film-Capacitor-Patented-Product-Sample-Customization.webp";
		} else if (element.symbol === "Bi") {
			imageUrl = "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/peb/peb03928/l/24.jpg";
		} else if (element.symbol === "Mc") {
			imageUrl = "https://cdn1.byjus.com/wp-content/uploads/2018/08/Moscovium-2.jpg";
		} else if (element.symbol === "Tm") {
			imageUrl = "https://pub.mdpi-res.com/sensors/sensors-17-00531/article_deploy/html/images/sensors-17-00531-g006.png?1569249753";
		} else if (element.symbol === "Md") {
			imageUrl = "https://chemicool.com/elements/images/300-berkeley-60inch-cyclotron.jpg";
		} else if (element.symbol === "O") {
			imageUrl = "https://engiomed.ae/wp-content/uploads/2022/09/oxygen-cylinder.jpg";
		} else if (element.symbol === "S") {
			imageUrl = "https://medsgo.ph/images/detailed/26/Unilab-United-Home-Sulfent-_Sulfur-Ointment-for-Pimples-Scabies-30g-Tube_-3[1].jpg";
		} else if (element.symbol === "Se") {
			imageUrl = "https://www.alzdiscovery.org/uploads/cognitive_vitality/iStock-Selenium_rating.jpg";
		} else if (element.symbol === "Te") {
			imageUrl = "https://media.sciencephoto.com/image/c0132774/800wm";
		} else if (element.symbol === "Po") {
			imageUrl = "https://www.orau.org/health-physics-museum/img/museum/consumer-products/miscellaneous/staticmaster-1.jpg";
		} else if (element.symbol === "Lv") {
			imageUrl = "https://cdn1.byjus.com/wp-content/uploads/2018/08/Livermorium-2.jpg";
		} else if (element.symbol === "Yb") {
			imageUrl = "https://techwin-china.com/products/1_1_4_ytterbium_doped_pulsed_fiber_01.jpg";
		} else if (element.symbol === "No") {
			imageUrl = "https://www.chemicool.com/elements/images/gammasphere.jpg";
		} else if (element.symbol === "He") {
			imageUrl = "https://www.gasworld.com/cdn-cgi/image/width=1200,height=900,fit=contain,quality=75,metadata=none,format=auto,gravity=auto/https://www.gasworld.com/wp-content/files/gwml/mrimachine_628365.jpg";
		} else if (element.symbol === "Ne") {
			imageUrl = "https://www.repairfaq.org/sam/jkhene/Laser_2_Front_Big.JPG";
		} else if (element.symbol === "Ar") {
			imageUrl = "https://img-seychelles.com/wp-content/uploads/2023/05/Argon-Gas-for-sale-in-Seychelles.jpg";
		} else if (element.symbol === "Kr") {
			imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFibQzuBBmmCFgGHYqbUjPw1ibPXvqcOFTCtZjRYzmDxjunesGMbK6JYGhbLT2kxEWtdc&usqp=CAU";
		} else if (element.symbol === "Xe") {
			imageUrl = "https://www.powerbulbs.com/uploads/images/blog_images/Xenon-BMW-Blog-Image-1.jpg";
		} else if (element.symbol === "Rn") {
			imageUrl = "https://www.popsci.com/wp-content/uploads/2019/03/18/ZNEQNMUE6JC3V7UEVWGVC32IKQ.jpg?quality=85";
		} else if (element.symbol === "Og") {
			imageUrl = "https://cdn1.byjus.com/wp-content/uploads/2018/08/Oganesson-2.jpg";
		} else if (element.symbol === "F") {
			imageUrl = "https://periodictable.com/Samples/009.1/s13.JPG";
		} else if (element.symbol === "Cl") {
			imageUrl = "https://araxchemi.com/my_uploads/2019/05/Chlorine-with-pool-768x512.webp";
		} else if (element.symbol === "Br") {
			imageUrl = "https://bromine123.weebly.com/uploads/4/6/9/4/46940515/379692.jpg?321";
		} else if (element.symbol === "I") {
			imageUrl = "https://media.post.rvohealth.io/wp-content/uploads/2019/03/Salt_Spoons_732x549-thumbnail.jpg";
		} else if (element.symbol === "At") {
			imageUrl = "https://news.cnrs.fr/sites/default/files/styles/lightbox-hd/public/assets/images/img_0452_enceinte_blindee_pour_automate_de_synthese_de_produits_radiopharmaceutiques_72dpi_0.jpg?itok=nkGUuKNL";
		} else if (element.symbol === "Ts") {
			imageUrl = "https://cdn1.byjus.com/wp-content/uploads/2018/08/Tennessine-2.jpg";
		}



		const infoImage = document.getElementById("infoImage");
		if (imageUrl) {
			infoImage.src = imageUrl;
			infoImage.alt = element.name;
			infoImage.style.display = "block"; 
		} else {
			infoImage.style.display = "none"; 
		}
	
		document.getElementById(this._infoboxbackgroundid).style.visibility = "visible";
		document.getElementById(this._infoboxid).style.visibility = "visible";
	}
}
