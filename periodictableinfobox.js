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
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/0/0c/Be-140g.jpg";
		} else if (element.symbol === "B") {
			imageUrl = "https://d2cbg94ubxgsnp.cloudfront.net/Pictures/480xany/0/5/5/141055_Boron.jpg";
		} else if (element.symbol === "C") {
			imageUrl = "https://cdn.britannica.com/38/127738-004-697C0793/Bituminous-coal.jpg";
		} else if (element.symbol === "Na") {
			imageUrl = "https://cdn.britannica.com/60/123760-004-8C402A04/Sodium-chloride.jpg";
		} else if (element.symbol === "Mg") {
			imageUrl = "https://study.com/cimages/multimages/16/magnesium8968139749597950675.jpg";
		} else if (element.symbol === "K") {
			imageUrl = "https://cdn.britannica.com/77/131177-050-79292189/fragments-Potassium-metal.jpg";
		} else if (element.symbol === "Ca") {
			imageUrl = "https://cdn.britannica.com/94/176094-050-40C6CB53/Calcite-calcium-carbonate-variety-crystals-development.jpg";
		} else if (element.symbol === "Rb") {
			imageUrl = "https://i0.wp.com/periodic-table.com/wp-content/uploads/2018/11/Rubidium.jpg?fit=252%2C200&ssl=1";
		} else if (element.symbol === "Sr") {
			imageUrl = "https://i0.wp.com/periodic-table.com/wp-content/uploads/2018/11/Strontium.jpg?fit=225%2C225&ssl=1";
		} else if (element.symbol === "Cs") {
			imageUrl = "https://cdn.mos.cms.futurecdn.net/bLVuDQsGh2dF7P3jgytc3D.jpg";
		} else if (element.symbol === "Ba") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg/640px-Barium_unter_Argon_Schutzgas_Atmosph%C3%A4re.jpg";
		} else if (element.symbol === "Fr") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Francium-87.jpg/481px-Francium-87.jpg";
		} else if (element.symbol === "Ra") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/8/88/Radium_Dial.jpg";
		} else if (element.symbol === "Sc") {
			imageUrl = "https://7cad390533514c32acc8-75d23ce06fcfaf780446d85d50c33f7b.ssl.cf6.rackcdn.com/sc/1671441604-normal-Scandium%20metal.jpg";
		} else if (element.symbol === "Y") {
			imageUrl = "https://i0.wp.com/periodic-table.com/wp-content/uploads/2018/11/Yttrium.jpg?fit=225%2C225&ssl=1";
		} else if (element.symbol === "Lu") {
			imageUrl = "https://scienceinfo.com/wp-content/uploads/2023/08/image-37.png";
		} else if (element.symbol === "Lr") {
			imageUrl = "https://www.chemistrylearner.com/wp-content/uploads/2018/03/Lawrencium.jpg";
		} else if (element.symbol === "La") {
			imageUrl = "https://www.chemistrylearner.com/wp-content/uploads/2018/06/Lanthanum.jpg";
		} else if (element.symbol === "Ac") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Uraninite-39029.jpg/150px-Uraninite-39029.jpg";
		} else if (element.symbol === "Ti") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Titanium-stamps.jpg/220px-Titanium-stamps.jpg";
		} else if (element.symbol === "Zr") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/9/92/Zirconium_crystal_bar_and_1cm3_cube.jpg";
		} else if (element.symbol === "Hf") {
			imageUrl = "https://cdn.mos.cms.futurecdn.net/476mwLnFvNQhpUyNpNu2zn.jpg";
		} else if (element.symbol === "Rf") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Rhenium_single_crystal_bar_and_1cm3_cube.jpg/1200px-Rhenium_single_crystal_bar_and_1cm3_cube.jpg";
		} else if (element.symbol === "Ce") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/0/0d/Cerium2.jpg";
		} else if (element.symbol === "Th") {
			imageUrl = "https://www.cancer.gov/sites/g/files/xnrzdm211/files/styles/cgov_article/public/cgov_image/media_image/800/800/files/thorium.jpg?h=4965b7f7&itok=2-Nn8PVg";
		} else if (element.symbol === "V") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vanadium_crystal_bar_and_1cm3_cube.jpg";
		} else if (element.symbol === "Nb") {
			imageUrl = "https://7cad390533514c32acc8-75d23ce06fcfaf780446d85d50c33f7b.ssl.cf6.rackcdn.com/arm/uploads/2018/01/What_Is_Niobium_Used_For_In_Everyday_Life-2.png";
		} else if (element.symbol === "Ta") {
			imageUrl = "https://cdn.britannica.com/69/132469-050-31A2E365/Tantalum.jpg";
		} else if (element.symbol === "Db") {
			imageUrl = "https://www.nanochemazone.com/wp-content/uploads/2021/06/Dubnium-Powder.jpg";
		} else if (element.symbol === "Pr") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/c/c7/Praseodymium.jpg";
		} else if (element.symbol === "Pa") {
			imageUrl = "https://study.com/cimages/multimages/16/256px-blenda_smolista6.jpeg";
		} else if (element.symbol === "Cr") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/0/08/Chromium_crystals_and_1cm3_cube.jpg";
		} else if (element.symbol === "Mo") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/3/32/Molybdenum_crystaline_fragment_and_1cm3_cube.jpg";
		} else if (element.symbol === "W") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/1/1a/Wolfram_evaporated_crystals_and_1cm3_cube.jpg";
		} else if (element.symbol === "Sg") {
			imageUrl = "https://www.chemistrylearner.com/wp-content/uploads/2018/01/Seaborgium.jpg";
		} else if (element.symbol === "Nd") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/b/ba/Neodymium2.jpg";
		} else if (element.symbol === "U") {
			imageUrl = "https://cdn.britannica.com/56/255356-050-50B39125/uranium-chemical-element.jpg";
		} else if (element.symbol === "Mn") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Manganese_electrolytic_and_1cm3_cube.jpg/1200px-Manganese_electrolytic_and_1cm3_cube.jpg";
		} else if (element.symbol === "Tc") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Technetium-sample-cropped.jpg/640px-Technetium-sample-cropped.jpg";
		} else if (element.symbol === "Re") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Rhenium_single_crystal_bar_and_1cm3_cube.jpg/1200px-Rhenium_single_crystal_bar_and_1cm3_cube.jpg";
		} else if (element.symbol === "Bh") {
			imageUrl = "https://periodiske-system.dk/img/images/lowRes/107.jpg";
		} else if (element.symbol === "Pm") {
			imageUrl = "https://i0.wp.com/periodic-table.com/wp-content/uploads/2018/12/Promethium.jpg?fit=200%2C200&ssl=1";
		} else if (element.symbol === "Np") {
			imageUrl = "https://www.chemistrylearner.com/wp-content/uploads/2018/02/Neptunium-Element.jpg";
		} else if (element.symbol === "Fe") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/2/2e/HematitaEZ.jpg";
		} else if (element.symbol === "Ru") {
			imageUrl = "https://i0.wp.com/periodic-table.com/wp-content/uploads/2018/12/Ruthenium.jpg?fit=225%2C225&ssl=1";
		} else if (element.symbol === "Os") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/0/0c/Osmium_crystals.jpg";
		} else if (element.symbol === "Hs") {
			imageUrl = "https://veronicadeguzman.neocities.org/periodic_table/pic/hassium.jpg";
		} else if (element.symbol === "Sm") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Samarium-2.jpg/640px-Samarium-2.jpg";
		} else if (element.symbol === "Pu") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Plutonium_pellet.jpg/1200px-Plutonium_pellet.jpg";
		} else if (element.symbol === "Co") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/a/a8/Kobalt_electrolytic_and_1cm3_cube.jpg";
		} else if (element.symbol === "Rh") {
			imageUrl = "https://cdn.britannica.com/77/126277-050-5969B551/foil-wire.jpg";
		} else if (element.symbol === "Ir") {
			imageUrl = "https://cdn.mos.cms.futurecdn.net/Lhqrokmoy5afcPygHxRGTX.jpg";
		} else if (element.symbol === "Mt") {
			imageUrl = "https://periodic-table.rsc.org/Content/Images/Elements/Meitnerium-L.jpg?6.0.4.2";
		} else if (element.symbol === "Eu") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Europium.jpg/640px-Europium.jpg";
		} else if (element.symbol === "Am") {
			imageUrl = "https://i0.wp.com/periodic-table.com/wp-content/uploads/2018/12/Americium.jpg?fit=225%2C224&ssl=1";
		} else if (element.symbol === "Ni") {
			imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXFnT-_jEF4G5r-JF6jKDbhzi4T2URe6cJHw&s";
		} else if (element.symbol === "Pd") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/d/d7/Palladium_%2846_Pd%29.jpg";
		} else if (element.symbol === "Pt") {
			imageUrl = "https://cdn.britannica.com/28/141028-050-5ECC6A2B/one-unreactive-elements.jpg";
		} else if (element.symbol === "Ds") {
			imageUrl = "https://pubchem.ncbi.nlm.nih.gov/images/iupac/j_pac-2015-0703_fig_146.jpg";
		} else if (element.symbol === "Gd") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/d/d1/Gadolinium-4.jpg";
		} else if (element.symbol === "Cm") {
			imageUrl = "https://i0.wp.com/periodic-table.com/wp-content/uploads/2019/01/Curium.jpg?fit=225%2C225&ssl=1";
		} else if (element.symbol === "Cu") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/NatCopper.jpg/1200px-NatCopper.jpg";
		} else if (element.symbol === "Ag") {
			imageUrl = "https://cdn.britannica.com/77/128177-050-D1FD0DDD/silver-nugget.jpg";
		} else if (element.symbol === "Au") {
			imageUrl = "https://www.usatoday.com/gcdn/-mm-/9e1f6e2ee20f44aa1f3be4f71e9f3e52b6ae2c7e/c=0-110-2121-1303/local/-/media/2020/08/08/USATODAY/usatsports/MotleyFool-TMOT-55eb0403-gold-rocks.jpg?width=1200&disable=upscale&format=pjpg&auto=webp";
		} else if (element.symbol === "Rg") {
			imageUrl = "https://cdn1.byjus.com/wp-content/uploads/2018/08/Roentgenium-2.jpg";
		} else if (element.symbol === "Tb") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/9/9a/Terbium-2.jpg";
		} else if (element.symbol === "Bk") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/b/b6/Berkelium_metal.jpg";
		} else if (element.symbol === "Zn") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/f/f9/Zinc_fragment_sublimed_and_1cm3_cube.jpg";
		} else if (element.symbol === "Cd") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/b/b5/Cadmium-crystal_bar.jpg";
		} else if (element.symbol === "Hg") {
			imageUrl = "https://cdn.britannica.com/91/150291-050-675525C7/mercury-beads-glass-container.jpg";
		} else if (element.symbol === "Cn") {
			imageUrl = "https://cdn1.byjus.com/wp-content/uploads/2018/08/Copernicium-2.jpg";
		} else if (element.symbol === "Dy") {
			imageUrl = "https://www.thoughtco.com/thmb/2uVS3jDL5aFJvcokmXEKBvUlvc8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Dy-Metal-2-56a613dd5f9b58b7d0dfcc4a.jpg";
		} else if (element.symbol === "Cf") {
			imageUrl = "https://i0.wp.com/periodic-table.com/wp-content/uploads/2018/12/Californium.jpg?fit=252%2C200&ssl=1";
		} else if (element.symbol === "Al") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/5/5d/Aluminium-4.jpg";
		} else if (element.symbol === "Ga") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/9/92/Gallium_crystals.jpg";
		} else if (element.symbol === "In") {
			imageUrl = "https://cdn.mos.cms.futurecdn.net/EmE4MmqR4GzYfF3MhzotFm-1144-80.jpg";
		} else if (element.symbol === "Tl") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/b/bb/Thallium_pieces_in_ampoule.jpg";
		} else if (element.symbol === "Nh") {
			imageUrl = "https://cdn1.byjus.com/wp-content/uploads/2018/08/Nihonium-2.jpg";
		} else if (element.symbol === "Ho") {
			imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ892UI4KXu0LYStyCF478KEX9et9Ls1_E4ig&s";
		} else if (element.symbol === "Es") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/5/55/Einsteinium.jpg";
		} else if (element.symbol === "Si") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/e/e9/SiliconCroda.jpg";
		} else if (element.symbol === "Ge") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Polycrystalline-germanium.jpg/640px-Polycrystalline-germanium.jpg";
		} else if (element.symbol === "Sn") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Cassiterite09.jpg/220px-Cassiterite09.jpg";
		} else if (element.symbol === "Pb") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/e/e6/Lead_electrolytic_and_1cm3_cube.jpg";
		} else if (element.symbol === "Fl") {
			imageUrl = "https://cdn1.byjus.com/wp-content/uploads/2018/08/Flerovium-2.jpg";
		} else if (element.symbol === "Er") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/8/88/Erbium_%2868_Er%29.jpg";
		} else if (element.symbol === "Fm") {
			imageUrl = "https://periodic.lanl.gov/images/fermium-ytterbium-alloy.jpg";
		} else if (element.symbol === "N") {
			imageUrl = "https://i0.wp.com/periodic-table.com/wp-content/uploads/2018/11/Nitrogen.jpg?fit=225%2C225&ssl=1";
		} else if (element.symbol === "P") {
			imageUrl = "https://cdn.britannica.com/54/123754-004-9BAF7258/phosphorus-matches.jpg";
		} else if (element.symbol === "As") {
			imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeOgUKTj901zFDVFJsOPKKeb6p7-Rc0da09A&s";
		} else if (element.symbol === "Sb") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/5/5c/Antimony-4.jpg";
		} else if (element.symbol === "Bi") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/e/ef/Bismuth_crystals_and_1cm3_cube.jpg";
		} else if (element.symbol === "Mc") {
			imageUrl = "https://cdn1.byjus.com/wp-content/uploads/2018/08/Moscovium-2.jpg";
		} else if (element.symbol === "Tm") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/1/1e/Thulium_sublimed_dendritic_and_1cm3_cube.jpg";
		} else if (element.symbol === "Md") {
			imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXjCURKA4FtPw5dHXYsO1vJiBX4G-DhdyEUg&s";
		} else if (element.symbol === "O") {
			imageUrl = "https://periodictable.com/Samples/008.8/s7s.JPG";
		} else if (element.symbol === "S") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Sulfur_-_El_Desierto_mine%2C_San_Pablo_de_Napa%2C_Daniel_Campos_Province%2C_Potos%C3%AD%2C_Bolivia.jpg/1200px-Sulfur_-_El_Desierto_mine%2C_San_Pablo_de_Napa%2C_Daniel_Campos_Province%2C_Potos%C3%AD%2C_Bolivia.jpg";
		} else if (element.symbol === "Se") {
			imageUrl = "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2021/4/shutterstock_1056917978.jpg";
		} else if (element.symbol === "Te") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Tellurium2.jpg/640px-Tellurium2.jpg";
		} else if (element.symbol === "Po") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/en/6/66/Polonium.jpg";
		} else if (element.symbol === "Lv") {
			imageUrl = "https://cdn1.byjus.com/wp-content/uploads/2018/08/Livermorium-2.jpg";
		} else if (element.symbol === "Yb") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/c/ce/Ytterbium-3.jpg";
		} else if (element.symbol === "No") {
			imageUrl = "https://cdn1.byjus.com/wp-content/uploads/2018/08/Nobelium-2.jpg";
		} else if (element.symbol === "He") {
			imageUrl = "https://cdn.mos.cms.futurecdn.net/H3wgQVehsRLqAJmuYaN94M.jpg";
		} else if (element.symbol === "Ne") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/4/46/Neon_discharge_tube.jpg";
		} else if (element.symbol === "Ar") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/8/87/Argon_discharge_tube.jpg";
		} else if (element.symbol === "Kr") {
			imageUrl = "https://www.syfy.com/sites/syfy/files/2021/12/gettyimages-886851320.jpg";
		} else if (element.symbol === "Xe") {
			imageUrl = "https://upload.wikimedia.org/wikipedia/commons/d/d7/Xenon_discharge_tube.jpg";
		} else if (element.symbol === "Rn") {
			imageUrl = "https://theodoregray.com/periodictable/Samples/086/s14s.JPG";
		} else if (element.symbol === "Og") {
			imageUrl = "https://cdn1.byjus.com/wp-content/uploads/2018/08/Oganesson-2.jpg";
		} else if (element.symbol === "F") {
			imageUrl = "https://www.chemicool.com/elements/images/300-fluorite-before.jpg";
		} else if (element.symbol === "Cl") {
			imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB2RIllerNMBXd7DFup9aq_aOEbWkzjec7KQ&s";
		} else if (element.symbol === "Br") {
			imageUrl = "https://cdn.mos.cms.futurecdn.net/S6SNpRNQFXaMCyyYttoQcc.jpg";
		} else if (element.symbol === "I") {
			imageUrl = "https://cdn.britannica.com/68/132468-050-9DE736C3/Iodine.jpg";
		} else if (element.symbol === "At") {
			imageUrl = "https://www.chemistrylearner.com/wp-content/uploads/2018/03/Astatine.jpg";
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
