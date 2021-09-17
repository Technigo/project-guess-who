// All the DOM selectors stored as short variables
const board = document.getElementById(`board`);
const questions = document.getElementById(`questions`);
const restartBtn = document.getElementById(`restart`);
const findOutBtn = document.getElementById(`filter`);
const winOrLose = document.getElementById(`winOrLose`);
const championCounter = document.getElementById(`championCounter`);
const playAgain = document.getElementById(`playAgain`);
const questionsHistory = document.getElementById(`questionsHistory`);

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: "Aatrox",
    img: "images/RiotX_ChampionList_aatrox.jpg",
    hair: "none",
    homeRegion: "none",
    mainRole: "fighter",
    accessories: [],
  },
  {
    name: "Ahri",
    img: "images/RiotX_ChampionList_ahri.jpg",
    hair: "black",
    homeRegion: "ionia",
    mainRole: "mage",
    accessories: [],
  },
  {
    name: "Akali",
    img: "images/RiotX_ChampionList_Akali.jpg",
    hair: "black",
    homeRegion: "ionia",
    mainRole: "assassin",
    accessories: ["headpiece", "weapon"],
  },
  {
    name: "Akshan",
    img: "images/RiotX_ChampionList_akshan.jpg",
    hair: "black",
    homeRegion: "shurima",
    mainRole: "marksman",
    accessories: ["weapon", "facialhair"],
  },
  {
    name: "Alistar",
    img: "images/RiotX_ChampionList_alistar.jpg",
    hair: "blue",
    homeRegion: "none",
    mainRole: "tank",
    accessories: [],
  },
  {
    name: "Amumu",
    img: "images/RiotX_ChampionList_amumu.jpg",
    hair: "none",
    homeRegion: "shurima",
    mainRole: "tank",
    accessories: [],
  },
  {
    name: "Anivia",
    img: "images/RiotX_ChampionList_anivia.jpg",
    hair: "none",
    homeRegion: "freljord",
    mainRole: "mage",
    accessories: [],
  },
  {
    name: "Annie",
    img: "images/RiotX_ChampionList_annie.jpg",
    hair: "red",
    homeRegion: "none",
    mainRole: "mage",
    accessories: ["headpiece"],
  },
  {
    name: "Aphelios",
    img: "images/RiotX_ChampionList_aphelios.jpg",
    hair: "black",
    homeRegion: "targon",
    mainRole: "marksman",
    accessories: [],
  },
  {
    name: "Ashe",
    img: "images/RiotX_ChampionList_ashe.jpg",
    hair: "white",
    homeRegion: "freljord",
    mainRole: "marksman",
    accessories: ["headpiece", "weapon"],
  },
  {
    name: "Aurelion Sol",
    img: "images/RiotX_ChampionList_aurelionsol.jpg",
    hair: "none",
    homeRegion: "targon",
    mainRole: "mage",
    accessories: [],
  },
  {
    name: "Azir",
    img: "images/RiotX_ChampionList_azir.jpg",
    hair: "none",
    homeRegion: "shurima",
    mainRole: "mage",
    accessories: ["weapon", "headpiece"],
  },
  {
    name: "Bard",
    img: "images/RiotX_ChampionList_bard.jpg",
    hair: "white",
    homeRegion: "none",
    mainRole: "support",
    accessories: ["headpiece", "facialhair"],
  },
  {
    name: "Blitzcrank",
    img: "images/RiotX_ChampionList_blitzcrank.jpg",
    hair: "none",
    homeRegion: "zaun",
    mainRole: "tank",
    accessories: [],
  },
  {
    name: "Brand",
    img: "images/RiotX_ChampionList_brand.jpg",
    hair: "none",
    homeRegion: "none",
    mainRole: "mage",
    accessories: [],
  },
  {
    name: "Braum",
    img: "images/RiotX_ChampionList_braum.jpg",
    hair: "brown",
    homeRegion: "freljord",
    mainRole: "support",
    accessories: ["facialhair"],
  },
  {
    name: "Caitlyn",
    img: "images/RiotX_ChampionList_caitlyn.jpg",
    hair: "purple",
    homeRegion: "piltover",
    mainRole: "marksman",
    accessories: ["weapon", "headpiece"],
  },
  {
    name: "Camille",
    img: "images/RiotX_ChampionList_camille.jpg",
    hair: "white",
    homeRegion: "piltover",
    mainRole: "fighter",
    accessories: [],
  },
  {
    name: "Cassiopeia",
    img: "images/RiotX_ChampionList_cassiopeia.jpg",
    hair: "none",
    homeRegion: "noxus",
    mainRole: "mage",
    accessories: ["headpiece"],
  },
  {
    name: "Cho'gath",
    img: "images/RiotX_ChampionList_chogath.jpg",
    hair: "none",
    homeRegion: "void",
    mainRole: "tank",
    accessories: [],
  },
  {
    name: "Corki",
    img: "images/RiotX_ChampionList_corki.jpg",
    hair: "white",
    homeRegion: "bandlecity",
    mainRole: "marksman",
    accessories: ["headpiece", "facialhair"],
  },
  {
    name: "Darius",
    img: "images/RiotX_ChampionList_darius.jpg",
    hair: "black",
    homeRegion: "noxus",
    mainRole: "fighter",
    accessories: ["weapon"],
  },
  {
    name: "Diana",
    img: "images/RiotX_ChampionList_diana.jpg",
    hair: "white",
    homeRegion: "targon",
    mainRole: "fighter",
    accessories: ["weapon"],
  },
  {
    name: "Dr. Mundo",
    img: "images/RiotX_ChampionList_drmundo.jpg",
    hair: "black",
    homeRegion: "zaun",
    mainRole: "fighter",
    accessories: ["weapon"],
  },
  {
    name: "Draven",
    img: "images/RiotX_ChampionList_draven.jpg",
    hair: "brown",
    homeRegion: "noxus",
    mainRole: "marksman",
    accessories: ["weapon", "headpiece", "facialhair"],
  },
  {
    name: "Ekko",
    img: "images/RiotX_ChampionList_ekko.jpg",
    hair: "white",
    homeRegion: "zaun",
    mainRole: "assassin",
    accessories: ["weapon"],
  },
  {
    name: "Elise",
    img: "images/RiotX_ChampionList_elise.jpg",
    hair: "red",
    homeRegion: "shadowisles",
    mainRole: "mage",
    accessories: [],
  },
  {
    name: "Evelynn",
    img: "images/RiotX_ChampionList_evelynn.jpg",
    hair: "white",
    homeRegion: "none",
    mainRole: "assassin",
    accessories: [],
  },
  {
    name: "Ezreal",
    img: "images/RiotX_ChampionList_ezreal.jpg",
    hair: "blonde",
    homeRegion: "piltover",
    mainRole: "marksman",
    accessories: ["weapon"],
  },
  {
    name: "Fiddlesticks",
    img: "images/RiotX_ChampionList_fiddlesticks.jpg",
    hair: "none",
    homeRegion: "none",
    mainRole: "mage",
    accessories: ["weapon"],
  },
  {
    name: "Fiora",
    img: "images/RiotX_ChampionList_fiora.jpg",
    hair: "red",
    homeRegion: "demacia",
    mainRole: "fighter",
    accessories: ["weapon"],
  },
  {
    name: "Fizz",
    img: "images/RiotX_ChampionList_fizz.jpg",
    hair: "none",
    homeRegion: "bilgewater",
    mainRole: "assassin",
    accessories: ["weapon"],
  },
  {
    name: "Galio",
    img: "images/RiotX_ChampionList_galio.jpg",
    hair: "none",
    homeRegion: "demacia",
    mainRole: "tank",
    accessories: ["headpiece"],
  },
  {
    name: "Gangplank",
    img: "images/RiotX_ChampionList_gangplank.jpg",
    hair: "brown",
    homeRegion: "bilgewater",
    mainRole: "fighter",
    accessories: ["weapon", "headpiece", "facialhair"],
  },
  {
    name: "Garen",
    img: "images/RiotX_ChampionList_garen.jpg",
    hair: "brown",
    homeRegion: "demacia",
    mainRole: "fighter",
    accessories: [],
  },
  {
    name: "Gnar",
    img: "images/RiotX_ChampionList_gnar.jpg",
    hair: "none",
    homeRegion: "freljord",
    mainRole: "fighter",
    accessories: ["headpiece"],
  },
  {
    name: "Gragas",
    img: "images/RiotX_ChampionList_gragas.jpg",
    hair: "red",
    homeRegion: "freljord",
    mainRole: "fighter",
    accessories: ["facialhair"],
  },
  {
    name: "Graves",
    img: "images/RiotX_ChampionList_graves.jpg",
    hair: "brown",
    homeRegion: "bilgewater",
    mainRole: "marksman",
    accessories: ["weapon", "facialhair"],
  },
  {
    name: "Gwen",
    img: "images/RiotX_ChampionList_gwen.jpg",
    hair: "blue",
    homeRegion: "shadowisles",
    mainRole: "fighter",
    accessories: ["weapon"],
  },
  {
    name: "Hecarim",
    img: "images/RiotX_ChampionList_hecarim.jpg",
    hair: "none",
    homeRegion: "shadowisles",
    mainRole: "fighter",
    accessories: ["headpiece"],
  },
  {
    name: "Heimerdinger",
    img: "images/RiotX_ChampionList_heimerdinger.jpg",
    hair: "blonde",
    homeRegion: "piltover",
    mainRole: "mage",
    accessories: ["weapon", "facialhair"],
  },
  {
    name: "Illaoi",
    img: "images/RiotX_ChampionList_illaoi.jpg",
    hair: "brown",
    homeRegion: "bilgewater",
    mainRole: "fighter",
    accessories: [],
  },
  {
    name: "Irelia",
    img: "images/RiotX_ChampionList_irelia.jpg",
    hair: "purple",
    homeRegion: "ionia",
    mainRole: "fighter",
    accessories: ["headpiece"],
  },
  {
    name: "Ivern",
    img: "images/RiotX_ChampionList_ivern.jpg",
    hair: "none",
    homeRegion: "ionia",
    mainRole: "support",
    accessories: ["facialhair"],
  },
  {
    name: "Janna",
    img: "images/RiotX_ChampionList_janna.jpg",
    hair: "white",
    homeRegion: "zaun",
    mainRole: "support",
    accessories: ["weapon"],
  },
  {
    name: "Jarvan IV",
    img: "images/RiotX_ChampionList_jarvaniv.jpg",
    hair: "none",
    homeRegion: "demacia",
    mainRole: "tank",
    accessories: ["headpiece", "weapon"],
  },
  {
    name: "Jax",
    img: "images/RiotX_ChampionList_jax.jpg",
    hair: "none",
    homeRegion: "none",
    mainRole: "fighter",
    accessories: ["weapon", "headpiece"],
  },
  {
    name: "Jayce",
    img: "images/RiotX_ChampionList_jayce.jpg",
    hair: "brown",
    homeRegion: "piltover",
    mainRole: "fighter",
    accessories: ["weapon"],
  },
  {
    name: "Jhin",
    img: "images/RiotX_ChampionList_jhin.jpg",
    hair: "none",
    homeRegion: "ionia",
    mainRole: "marksman",
    accessories: ["weapon", "headpiece"],
  },
  {
    name: "Jinx",
    img: "images/RiotX_ChampionList_jinx.jpg",
    hair: "blue",
    homeRegion: "zaun",
    mainRole: "marksman",
    accessories: ["weapon"],
  },
  {
    name: "Kai'sa",
    img: "images/RiotX_ChampionList_kaisa.jpg",
    hair: "black",
    homeRegion: "void",
    mainRole: "marksman",
    accessories: ["weapon"],
  },
  {
    name: "Kalista",
    img: "images/RiotX_ChampionList_kalista.jpg",
    hair: "black",
    homeRegion: "shadowisles",
    mainRole: "marksman",
    accessories: ["weapon", "headpiece"],
  },
  {
    name: "Karma",
    img: "images/RiotX_ChampionList_karma.jpg",
    hair: "brown",
    homeRegion: "ionia",
    mainRole: "mage",
    accessories: ["headpiece"],
  },
  {
    name: "Karthus",
    img: "images/RiotX_ChampionList_karthus.jpg",
    hair: "none",
    homeRegion: "shadowisles",
    mainRole: "mage",
    accessories: ["headpiece"],
  },
  {
    name: "Kassadin",
    img: "images/RiotX_ChampionList_kassadin.jpg",
    hair: "none",
    homeRegion: "void",
    mainRole: "assassin",
    accessories: ["headpiece"],
  },
  {
    name: "Katarina",
    img: "images/RiotX_ChampionList_katarina.jpg",
    hair: "red",
    homeRegion: "noxus",
    mainRole: "assassin",
    accessories: ["weapon"],
  },
  {
    name: "Kayle",
    img: "images/RiotX_ChampionList_kayle.jpg",
    hair: "none",
    homeRegion: "demacia",
    mainRole: "fighter",
    accessories: ["headpiece"],
  },
  {
    name: "Kayn",
    img: "images/RiotX_ChampionList_kayn.jpg",
    hair: "black",
    homeRegion: "ionia",
    mainRole: "fighter",
    accessories: ["weapon"],
  },
  {
    name: "Kennen",
    img: "images/RiotX_ChampionList_kennen.jpg",
    hair: "none",
    homeRegion: "ionia",
    mainRole: "mage",
    accessories: ["headpiece"],
  },
  {
    name: "Kha'zix",
    img: "images/RiotX_ChampionList_khazix.jpg",
    hair: "none",
    homeRegion: "void",
    mainRole: "assassin",
    accessories: [],
  },
  {
    name: "Kindred",
    img: "images/RiotX_ChampionList_kindred.jpg",
    hair: "white",
    homeRegion: "none",
    mainRole: "marksman",
    accessories: ["weapon", "headpiece"],
  },
  {
    name: "Kled",
    img: "images/RiotX_ChampionList_kled.jpg",
    hair: "white",
    homeRegion: "noxus",
    mainRole: "fighter",
    accessories: ["facialhair", "headpiece"],
  },
  {
    name: "Kog'maw",
    img: "images/RiotX_ChampionList_kogmaw.jpg",
    hair: "none",
    homeRegion: "void",
    mainRole: "marksman",
    accessories: [],
  },
  {
    name: "Leblanc",
    img: "images/RiotX_ChampionList_leblanc.jpg",
    hair: "purple",
    homeRegion: "noxus",
    mainRole: "assassin",
    accessories: ["weapon", "headpiece"],
  },
  {
    name: "Lee Sin",
    img: "images/RiotX_ChampionList_leesin.jpg",
    hair: "brown",
    homeRegion: "ionia",
    mainRole: "fighter",
    accessories: ["facialhair"],
  },
  {
    name: "Leona",
    img: "images/RiotX_ChampionList_leona.jpg",
    hair: "brown",
    homeRegion: "targon",
    mainRole: "tank",
    accessories: ["weapon", "headpiece"],
  },
  {
    name: "Lillia",
    img: "images/RiotX_ChampionList_lillia.jpg",
    hair: "purple",
    homeRegion: "ionia",
    mainRole: "fighter",
    accessories: ["weapon"],
  },
  {
    name: "Lissandra",
    img: "images/RiotX_ChampionList_lissandra.jpg",
    hair: "none",
    homeRegion: "freljord",
    mainRole: "mage",
    accessories: ["headpiece"],
  },
  {
    name: "Lucian",
    img: "images/RiotX_ChampionList_lucian.jpg",
    hair: "brown",
    homeRegion: "demacia",
    mainRole: "marksman",
    accessories: ["weapon"],
  },
  {
    name: "Lulu",
    img: "images/RiotX_ChampionList_lulu.jpg",
    hair: "purple",
    homeRegion: "bandlecity",
    mainRole: "support",
    accessories: ["headpiece", "weapon"],
  },
  {
    name: "Lux",
    img: "images/RiotX_ChampionList_lux.jpg",
    hair: "blonde",
    homeRegion: "demacia",
    mainRole: "mage",
    accessories: ["weapon"],
  },
  {
    name: "Malphite",
    img: "images/RiotX_ChampionList_malphite.jpg",
    hair: "none",
    homeRegion: "ixtal",
    mainRole: "tank",
    accessories: [],
  },
  {
    name: "Malzahar",
    img: "images/RiotX_ChampionList_malzahar.jpg",
    hair: "none",
    homeRegion: "void",
    mainRole: "mage",
    accessories: ["headpiece", "weapon"],
  },
  {
    name: "Maokai",
    img: "images/RiotX_ChampionList_maokai.jpg",
    hair: "none",
    homeRegion: "shadowisles",
    mainRole: "tank",
    accessories: [],
  },
  {
    name: "Master Yi",
    img: "images/RiotX_ChampionList_masteryi.jpg",
    hair: "brown",
    homeRegion: "ionia",
    mainRole: "assassin",
    accessories: ["weapon", "facialhair", "headpiece"],
  },
  {
    name: "Miss Fortune",
    img: "images/RiotX_ChampionList_missfortune.jpg",
    hair: "red",
    homeRegion: "bilgewater",
    mainRole: "marksman",
    accessories: ["weapon", "headpiece"],
  },
  {
    name: "Mordekaiser",
    img: "images/RiotX_ChampionList_mordekaiser.jpg",
    hair: "none",
    homeRegion: "noxus",
    mainRole: "fighter",
    accessories: ["headpiece"],
  },
  {
    name: "Morgana",
    img: "images/RiotX_ChampionList_morgana.jpg",
    hair: "purple",
    homeRegion: "demacia",
    mainRole: "mage",
    accessories: [],
  },
  {
    name: "Nami",
    img: "images/RiotX_ChampionList_nami.jpg",
    hair: "none",
    homeRegion: "none",
    mainRole: "support",
    accessories: ["headpiece", "weapon"],
  },
  {
    name: "Nasus",
    img: "images/RiotX_ChampionList_nasus.jpg",
    hair: "none",
    homeRegion: "shurima",
    mainRole: "fighter",
    accessories: ["headpiece"],
  },
  {
    name: "Nautilus",
    img: "images/RiotX_ChampionList_nautilus.jpg",
    hair: "none",
    homeRegion: "bilgewater",
    mainRole: "tank",
    accessories: ["headpiece", "weapon"],
  },
  {
    name: "Neeko",
    img: "images/RiotX_ChampionList_neeko.jpg",
    hair: "purple",
    homeRegion: "ixtal",
    mainRole: "mage",
    accessories: [],
  },
  {
    name: "Nidalee",
    img: "images/RiotX_ChampionList_nidalee.jpg",
    hair: "brown",
    homeRegion: "ixtal",
    mainRole: "assassin",
    accessories: ["weapon"],
  },
  {
    name: "Nocturne",
    img: "images/RiotX_ChampionList_nocturne.jpg",
    hair: "none",
    homeRegion: "none",
    mainRole: "assassin",
    accessories: [],
  },
  {
    name: "Nunu & Willump",
    img: "images/RiotX_ChampionList_nunu.jpg",
    hair: "brown",
    homeRegion: "freljord",
    mainRole: "tank",
    accessories: ["headpiece"],
  },
  {
    name: "Olaf",
    img: "images/RiotX_ChampionList_olaf.jpg",
    hair: "orange",
    homeRegion: "freljord",
    mainRole: "fighter",
    accessories: ["headpiece", "weapon", "facialhair"],
  },
  {
    name: "Orianna",
    img: "images/RiotX_ChampionList_orianna.jpg",
    hair: "brown",
    homeRegion: "piltover",
    mainRole: "mage",
    accessories: [],
  },
  {
    name: "Ornn",
    img: "images/RiotX_ChampionList_ornn.jpg",
    hair: "black",
    homeRegion: "freljord",
    mainRole: "tank",
    accessories: ["facialhair"],
  },
  {
    name: "Pantheon",
    img: "images/RiotX_ChampionList_pantheon.jpg",
    hair: "none",
    homeRegion: "targon",
    mainRole: "fighter",
    accessories: ["headpiece"],
  },
  {
    name: "Poppy",
    img: "images/RiotX_ChampionList_poppy.jpg",
    hair: "white",
    homeRegion: "demacia",
    mainRole: "tank",
    accessories: ["weapon"],
  },
  {
    name: "Pyke",
    img: "images/RiotX_ChampionList_pyke.jpg",
    hair: "none",
    homeRegion: "bilgewater",
    mainRole: "assassin",
    accessories: ["weapon", "headpiece"],
  },
  {
    name: "Qiyana",
    img: "images/RiotX_ChampionList_qiyana.jpg",
    hair: "white",
    homeRegion: "ixtal",
    mainRole: "assassin",
    accessories: ["weapon", "headpiece"],
  },
  {
    name: "Quinn",
    img: "images/RiotX_ChampionList_quinn.jpg",
    hair: "brown",
    homeRegion: "demacia",
    mainRole: "marksman",
    accessories: ["headpiece", "weapon"],
  },
  {
    name: "Rakan",
    img: "images/RiotX_ChampionList_rakan.jpg",
    hair: "white",
    homeRegion: "ionia",
    mainRole: "support",
    accessories: ["facialhair"],
  },
  {
    name: "Rammus",
    img: "images/RiotX_ChampionList_rammus.jpg",
    hair: "none",
    homeRegion: "shurima",
    mainRole: "tank",
    accessories: ["headpiece"],
  },
  {
    name: "Rek'sai",
    img: "images/RiotX_ChampionList_reksai.jpg",
    hair: "none",
    homeRegion: "void",
    mainRole: "fighter",
    accessories: [],
  },
  {
    name: "Rell",
    img: "images/RiotX_ChampionList_rell.jpg",
    hair: "blone",
    homeRegion: "none",
    mainRole: "tank",
    accessories: ["weapon"],
  },
  {
    name: "Renekton",
    img: "images/RiotX_ChampionList_renekton.jpg",
    hair: "none",
    homeRegion: "shurima",
    mainRole: "fighter",
    accessories: ["headpiece"],
  },
  {
    name: "Rengar",
    img: "images/RiotX_ChampionList_rengar.jpg",
    hair: "white",
    homeRegion: "ixtal",
    mainRole: "assassin",
    accessories: ["facialhair", "weapon"],
  },
  {
    name: "Riven",
    img: "images/RiotX_ChampionList_riven.jpg",
    hair: "white",
    homeRegion: "noxus",
    mainRole: "fighter",
    accessories: ["weapon"],
  },
  {
    name: "Rumble",
    img: "images/RiotX_ChampionList_rumble.jpg",
    hair: "blue",
    homeRegion: "bandlecity",
    mainRole: "fighter",
    accessories: [],
  },
  {
    name: "Ryze",
    img: "images/RiotX_ChampionList_ryze.jpg",
    hair: "black",
    homeRegion: "none",
    mainRole: "mage",
    accessories: ["facialhair"],
  },
  {
    name: "Samira",
    img: "images/RiotX_ChampionList_samira.jpg",
    hair: "brown",
    homeRegion: "noxus",
    mainRole: "marksman",
    accessories: ["weapon", "headpiece"],
  },
  {
    name: "Sejuani",
    img: "images/RiotX_ChampionList_sejuani.jpg",
    hair: "white",
    homeRegion: "freljord",
    mainRole: "tank",
    accessories: ["weapon", "headpiece"],
  },
  {
    name: "Senna",
    img: "images/RiotX_ChampionList_senna.jpg",
    hair: "black",
    homeRegion: "none",
    mainRole: "marksman",
    accessories: ["weapon", "headpiece"],
  },
  {
    name: "Seraphine",
    img: "images/RiotX_ChampionList_seraphine.jpg",
    hair: "pink",
    homeRegion: "piltover",
    mainRole: "mage",
    accessories: ["weapon"],
  },
  {
    name: "Sett",
    img: "images/RiotX_ChampionList_sett.jpg",
    hair: "pink",
    homeRegion: "ionia",
    mainRole: "fighter",
    accessories: [],
  },
  {
    name: "Shaco",
    img: "images/RiotX_ChampionList_shaco.jpg",
    hair: "none",
    homeRegion: "none",
    mainRole: "assassin",
    accessories: ["headpiece", "weapon"],
  },
  {
    name: "Shen",
    img: "images/RiotX_ChampionList_shen.jpg",
    hair: "none",
    homeRegion: "ionia",
    mainRole: "tank",
    accessories: ["headpiece", "weapon"],
  },
  {
    name: "Shyvana",
    img: "images/RiotX_ChampionList_shyvana.jpg",
    hair: "purple",
    homeRegion: "demacia",
    mainRole: "fighter",
    accessories: ["weapon", "headpiece"],
  },
  {
    name: "Singed",
    img: "images/RiotX_ChampionList_singed.jpg",
    hair: "none",
    homeRegion: "zaun",
    mainRole: "tank",
    accessories: ["headpiece", "weapon"],
  },
  {
    name: "Sion",
    img: "images/RiotX_ChampionList_sion.jpg",
    hair: "none",
    homeRegion: "noxus",
    mainRole: "tank",
    accessories: ["headpiece"],
  },
  {
    name: "Sivir",
    img: "images/RiotX_ChampionList_sivir.jpg",
    hair: "brown",
    homeRegion: "shurima",
    mainRole: "marksman",
    accessories: ["weapon", "headpiece"],
  },
  {
    name: "Skarner",
    img: "images/RiotX_ChampionList_skarner.jpg",
    hair: "none",
    homeRegion: "shurima",
    mainRole: "fighter",
    accessories: [],
  },
  {
    name: "Sona",
    img: "images/RiotX_ChampionList_sona.jpg",
    hair: "blue",
    homeRegion: "demacia",
    mainRole: "support",
    accessories: ["weapon"],
  },
  {
    name: "Soraka",
    img: "images/RiotX_ChampionList_soraka.jpg",
    hair: "white",
    homeRegion: "targon",
    mainRole: "support",
    accessories: ["weapon"],
  },
  {
    name: "Swain",
    img: "images/RiotX_ChampionList_swain.jpg",
    hair: "white",
    homeRegion: "noxus",
    mainRole: "mage",
    accessories: [],
  },
  {
    name: "Sylas",
    img: "images/RiotX_ChampionList_sylas.jpg",
    hair: "black",
    homeRegion: "demacia",
    mainRole: "mage",
    accessories: ["facialhair"],
  },
  {
    name: "Syndra",
    img: "images/RiotX_ChampionList_syndra.jpg",
    hair: "white",
    homeRegion: "ionia",
    mainRole: "mage",
    accessories: ["headpiece"],
  },
  {
    name: "Tahm Kench",
    img: "images/RiotX_ChampionList_tahmkench.jpg",
    hair: "none",
    homeRegion: "bilgewater",
    mainRole: "support",
    accessories: ["headpiece"],
  },
  {
    name: "Taliyah",
    img: "images/RiotX_ChampionList_taliyah.jpg",
    hair: "brown",
    homeRegion: "shurima",
    mainRole: "mage",
    accessories: ["headpiece"],
  },
  {
    name: "Talon",
    img: "images/RiotX_ChampionList_talon.jpg",
    hair: "none",
    homeRegion: "noxus",
    mainRole: "assassin",
    accessories: ["weapon", "headpiece"],
  },
  {
    name: "Taric",
    img: "images/RiotX_ChampionList_taric.jpg",
    hair: "brown",
    homeRegion: "targon",
    mainRole: "support",
    accessories: ["weapon"],
  },
  {
    name: "Teemo",
    img: "images/RiotX_ChampionList_teemo.jpg",
    hair: "brown",
    homeRegion: "bandlecity",
    mainRole: "marksman",
    accessories: ["weapon", "headpiece"],
  },
  {
    name: "Thresh",
    img: "images/RiotX_ChampionList_thresh.jpg",
    hair: "none",
    homeRegion: "shadowisles",
    mainRole: "support",
    accessories: ["weapon"],
  },
  {
    name: "Tristana",
    img: "images/RiotX_ChampionList_tristana.jpg",
    hair: "white",
    homeRegion: "bandlecity",
    mainRole: "marksman",
    accessories: ["weapon"],
  },
  {
    name: "Trundle",
    img: "images/RiotX_ChampionList_trundle.jpg",
    hair: "pink",
    homeRegion: "freljord",
    mainRole: "fighter",
    accessories: ["weapon", "facialhair"],
  },
  {
    name: "Tryndamere",
    img: "images/RiotX_ChampionList_tryndamere.jpg",
    hair: "black",
    homeRegion: "freljord",
    mainRole: "fighter",
    accessories: ["weapon", "headpiece"],
  },
  {
    name: "Twisted Fate",
    img: "images/RiotX_ChampionList_twistedfate.jpg",
    hair: "black",
    homeRegion: "bilgewater",
    mainRole: "mage",
    accessories: ["headpiece", "facialhair"],
  },
  {
    name: "Twitch",
    img: "images/RiotX_ChampionList_twitch.jpg",
    hair: "brown",
    homeRegion: "zaun",
    mainRole: "marksman",
    accessories: ["headpiece", "weapon"],
  },
  {
    name: "Udyr",
    img: "images/RiotX_ChampionList_udyr.jpg",
    hair: "black",
    homeRegion: "freljord",
    mainRole: "fighter",
    accessories: ["headpiece", "facialhair"],
  },
  {
    name: "Urgot",
    img: "images/RiotX_ChampionList_urgot.jpg",
    hair: "none",
    homeRegion: "zaun",
    mainRole: "fighter",
    accessories: ["headpiece"],
  },
  {
    name: "Varus",
    img: "images/RiotX_ChampionList_varus.jpg",
    hair: "white",
    homeRegion: "ionia",
    mainRole: "marksman",
    accessories: ["weapon", "headpiece"],
  },
  {
    name: "Vayne",
    img: "images/RiotX_ChampionList_vayne.jpg",
    hair: "purple",
    homeRegion: "demacia",
    mainRole: "marksman",
    accessories: ["weapon", "headpiece"],
  },
  {
    name: "Veigar",
    img: "images/RiotX_ChampionList_veigar.jpg",
    hair: "none",
    homeRegion: "bandlecity",
    mainRole: "mage",
    accessories: ["headpiece"],
  },
  {
    name: "Vel'koz",
    img: "images/RiotX_ChampionList_velkoz.jpg",
    hair: "none",
    homeRegion: "void",
    mainRole: "mage",
    accessories: [],
  },
  {
    name: "Vi",
    img: "images/RiotX_ChampionList_vi.jpg",
    hair: "pink",
    homeRegion: "piltover",
    mainRole: "fighter",
    accessories: ["weapon", "headpiece"],
  },
  {
    name: "Viego",
    img: "images/RiotX_ChampionList_viego.jpg",
    hair: "white",
    homeRegion: "shadowisles",
    mainRole: "assassin",
    accessories: ["headpiece", "weapon"],
  },
  {
    name: "Viktor",
    img: "images/RiotX_ChampionList_viktor.jpg",
    hair: "black",
    homeRegion: "zaun",
    mainRole: "mage",
    accessories: ["headpiece"],
  },
  {
    name: "Vladimir",
    img: "images/RiotX_ChampionList_vladimir.jpg",
    hair: "blonde",
    homeRegion: "noxus",
    mainRole: "mage",
    accessories: [],
  },
  {
    name: "Volibear",
    img: "images/RiotX_ChampionList_volibear.jpg",
    hair: "white",
    homeRegion: "freljord",
    mainRole: "fighter",
    accessories: [],
  },
  {
    name: "Warwick",
    img: "images/RiotX_ChampionList_warwick.jpg",
    hair: "black",
    homeRegion: "zaun",
    mainRole: "fighter",
    accessories: [],
  },
  {
    name: "Wukong",
    img: "images/RiotX_ChampionList_wukong.jpg",
    hair: "brown",
    homeRegion: "ionia",
    mainRole: "fighter",
    accessories: ["facialhair"],
  },
  {
    name: "Xayah",
    img: "images/RiotX_ChampionList_xayah.jpg",
    hair: "purple",
    homeRegion: "ionia",
    mainRole: "marksman",
    accessories: ["headpiece", "weapon"],
  },
  {
    name: "Xerath",
    img: "images/RiotX_ChampionList_xerath.jpg",
    hair: "none",
    homeRegion: "shurima",
    mainRole: "mage",
    accessories: [],
  },
  {
    name: "Xin Zhao",
    img: "images/RiotX_ChampionList_xinzhao.jpg",
    hair: "black",
    homeRegion: "demacia",
    mainRole: "fighter",
    accessories: ["weapon"],
  },
  {
    name: "Yasuo",
    img: "images/RiotX_ChampionList_yasuo.jpg",
    hair: "brown",
    homeRegion: "ionia",
    mainRole: "fighter",
    accessories: ["weapon"],
  },
  {
    name: "Yone",
    img: "images/RiotX_ChampionList_yone.jpg",
    hair: "black",
    homeRegion: "ionia",
    mainRole: "assassin",
    accessories: ["weapon", "headpiece"],
  },
  {
    name: "Yorick",
    img: "images/RiotX_ChampionList_yorick.jpg",
    hair: "black",
    homeRegion: "shadowisles",
    mainRole: "fighter",
    accessories: ["weapon", "headpiece", "facialhair"],
  },
  {
    name: "Yuumi",
    img: "images/RiotX_ChampionList_yuumi.jpg",
    hair: "white",
    homeRegion: "bandlecity",
    mainRole: "support",
    accessories: ["headpiece"],
  },
  {
    name: "Zac",
    img: "images/RiotX_ChampionList_zac.jpg",
    hair: "none",
    homeRegion: "zaun",
    mainRole: "tank",
    accessories: [],
  },
  {
    name: "Zed",
    img: "images/RiotX_ChampionList_zed.jpg",
    hair: "none",
    homeRegion: "ionia",
    mainRole: "assassin",
    accessories: ["weapon", "headpiece"],
  },
  {
    name: "Ziggs",
    img: "images/RiotX_ChampionList_ziggs.jpg",
    hair: "brown",
    homeRegion: "zaun",
    mainRole: "mage",
    accessories: ["weapon", "headpiece"],
  },
  {
    name: "Zilean",
    img: "images/RiotX_ChampionList_zilean.jpg",
    hair: "blue",
    homeRegion: "none",
    mainRole: "support",
    accessories: [],
  },
  {
    name: "Zoe",
    img: "images/RiotX_ChampionList_zoe.jpg",
    hair: "orange",
    homeRegion: "targon",
    mainRole: "mage",
    accessories: [],
  },
  {
    name: "Zyra",
    img: "images/RiotX_ChampionList_zyra.jpg",
    hair: "red",
    homeRegion: "ixtal",
    mainRole: "mage",
    accessories: [],
  },
];

// Global variables
let secret,
  currentQuestion,
  charactersInPlay,
  championToCheck,
  startTime,
  endTime;
let questionsAsked = 0;

// Function that draws the game board
const generateBoard = () => {
  board.innerHTML = ``;
  charactersInPlay.forEach((champion) => {
    board.innerHTML += `
      <div class="card" style="background-image: url('${champion.img}');background-size: cover;">
        <p>${champion.name}</p>
        <div class="guess">
          <span>Guess on ${champion.name}?</span>
          <button class="filled-button small" onclick="guess('${champion.name}')">Guess</button>
        </div>
      </div>
    `;
  });
};

// Function that randomly select a champion from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret =
    charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)];
};

// A functions which starts and restarts the game, start the game, change and resets some data so the game is loaded from the beginning
// if you pressed the restart butten. Invokes a lot of functions.
const start = () => {
  startTimer();
  questionsAsked = 0;
  questionsHistory.innerHTML = ``;
  guessCounter.innerHTML = `Questions asked: ${questionsAsked}`;
  winOrLose.classList.remove("active");
  document.body.style.overflow = "auto";
  charactersInPlay = CHARACTERS;
  setCharacterInPlayCounter();
  generateBoard();
  setSecret();
  selectQuestion();
};

// Functions that start and ends a timer.
const startTimer = () => {
  startTime = new Date();
};

const endTimer = () => {
  endTime = new Date();
  let timeDiff = endTime - startTime;
  timeDiff /= 1000;
  let seconds = Math.round(timeDiff);
  timer.innerHTML = `The game took ${seconds} seconds to finish`;
};

// Function that sets the currentQuestion object when you select something in the dropdown and saves the value of category and value
// inside the global variable currentQuestion.
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.id;
  const value = questions.options[questions.selectedIndex].value;
  currentQuestion = {
    category: category,
    value: value,
  };
};

// Function that gets invoked by pressing the find out button. It plays the sound, invoke the function increaseQuestionsAsked and invokes the filterCharacter function.
const checkQuestion = () => {
  playSound(`./sound/askQuestion.mp3`);
  const { category, value } = currentQuestion;
  increaseQuestionsAsked();

  if (
    category === "hair" ||
    category === "homeRegion" ||
    category === "mainRole"
  ) {
    if (secret[category] === value) {
      filterCharacters(true);
    } else {
      filterCharacters(false);
    }
  } else if (category === "accessories") {
    if (secret.accessories.includes(value)) {
      filterCharacters(true);
    } else {
      filterCharacters(false);
    }
  }
};

// Functions for each type of filter which gets called from the function filterCharacters.
const keepChampionsAccessories = (category, value) => {
  charactersInPlay = charactersInPlay.filter((champion) =>
    champion[category].includes(value)
  );
};

const removeChampionsAccessories = (category, value) => {
  charactersInPlay = charactersInPlay.filter(
    (champion) => !champion[category].includes(value)
  );
};

const keepChampionsHairHomeRegionMainRole = (category, value) => {
  charactersInPlay = charactersInPlay.filter(
    (champion) => champion[category] === value
  );
};

const removeChampionsHairHomeRegionMainRole = (category, value) => {
  charactersInPlay = charactersInPlay.filter(
    (champion) => champion[category] !== value
  );
};

// Function that changes the questionHistory.innerHTML. It shows the right altert calls and invokes one of the previous four functions
// to do the actual filtering depending on category and if keep is true or false. When done with the filtering it invokes generate board function to redraw the board
// and invokes setCharacterInPlayCounter.
const filterCharacters = (keep) => {
  const { category, value } = currentQuestion;

  if (keep === true) {
    questionsHistory.innerHTML += `
  <div class="correct">${category}: ${value}</div>`;
  } else {
    questionsHistory.innerHTML += `
    <div class="wrong">${category}: ${value}</div>`;
  }

  if (category === "accessories") {
    if (keep) {
      alert(
        `Yes, the champion have a ${value}! Keeping all the champions that have a ${value}.`
      );
      keepChampionsAccessories(category, value);
    } else {
      alert(
        `No, the champion doesn't have a ${value}! Removing all the champions that have a ${value}.`
      );
      removeChampionsAccessories(category, value);
    }
  } else if (category === "hair") {
    if (keep) {
      keepChampionsHairHomeRegionMainRole(category, value);
      alert(
        `Yes, the champion has ${value} hair! Keeping all the champions that has ${value} hair.`
      );
    } else {
      removeChampionsHairHomeRegionMainRole(category, value);
      alert(
        `No, the champion doesnt have ${value} hair! Removing all champions with ${value} hair.`
      );
    }
  } else if (category === "homeRegion") {
    if (keep) {
      keepChampionsHairHomeRegionMainRole(category, value);
      alert(
        `Yes, the champion is from ${value}! Keeping all the champions that are from ${value}.`
      );
    } else {
      removeChampionsHairHomeRegionMainRole(category, value);
      alert(
        `No, the champion is not from ${value}! Removing all the champions from ${value}.`
      );
    }
  } else if (category === "mainRole") {
    if (keep) {
      keepChampionsHairHomeRegionMainRole(category, value);
      alert(
        `Yes, the champion is a ${value}! Keeping all the champions that are ${value}s.`
      );
    } else {
      removeChampionsHairHomeRegionMainRole(category, value);
      alert(
        `No, the champion is not a ${value}! Removing all the champions that are ${value}s.`
      );
    }
  }
  setCharacterInPlayCounter();
  generateBoard();
};

// Function that checks if the guess gets confirmed and invokes the function checkMyGuess with the champion selected by the player.
const confirmGuess = (message) => {
  let result = confirm(message);
  if (result === true) {
    checkMyGuess(championToCheck);
    window.scrollTo(0, 0);
  }
};

// Function that invokes the confirmGuess function with a message.
const guess = (championToConfirm) => {
  championToCheck = championToConfirm;
  confirmGuess("Do you really wanna guess on this option?");
};

//Function that checks if the guess is the same champion as at the secret card. Depending on the result it sends out a congratulate/sorry you lost message.
//it activates the function playSound and invokes the endTimer function.
const checkMyGuess = (championToCheck) => {
  if (championToCheck === secret.name) {
    winOrLoseText.innerHTML = `Congratulations you guessed on the right champion!`;
  } else {
    winOrLoseText.innerHTML = `Sorry, you guessed wrong!`;
  }
  winOrLose.classList.add(`active`);
  playSound(`./sound/win.mp3`);
  document.body.style.overflow = "hidden";
  endTimer();
};

// Function that adds the number 1 everytime and change the number of questions asked. It is called in the function that starts when the player presses
// the findOutBtn.
const increaseQuestionsAsked = () => {
  questionsAsked += 1;
  guessCounter.innerHTML = `Questions asked: ${questionsAsked}`;
};

// Function that changes the innerHTML depending on the value of charactersInPLay.
const setCharacterInPlayCounter = () => {
  championCounter.innerHTML = `Champions left: ${charactersInPlay.length}`;
};

// Function that playes the sound.
const playSound = (audiofile) => {
  const audio = new Audio(audiofile);
  audio.play();
};

// Invokes the start function when website is loaded
start();

// All the event listeners
restartBtn.addEventListener("click", start);
questions.addEventListener("change", selectQuestion);
findOutBtn.addEventListener("click", checkQuestion);
playAgain.addEventListener("click", start);
