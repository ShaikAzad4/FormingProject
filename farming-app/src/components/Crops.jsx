import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaSeedling, FaInfoCircle } from 'react-icons/fa';
import { cropImages } from '../assets/images';
import './Crops.css';

const Crops = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [filteredCrops, setFilteredCrops] = useState([]);
  const [loading, setLoading] = useState(true);

  const { soilType, season } = location.state || {};

const cropsDatabase = {
  kharif: {
    loamy: [
      { 
        id: 1, 
        name: 'Rice', 
        image: cropImages.rice, 
        titleDescription: 'Rice is the premier staple grain of India, grown during monsoon in puddled fields with standing water, essential for food security and cultural heritage across the nation.',
        description: {
          stage1: "Land preparation begins with early summer plowing using moldboard plow to 20-25cm depth, exposing soil to sunlight for 15-20 days to kill pathogens and weed seeds. Pre-monsoon showers trigger second plowing with disc harrow, incorporating previous crop residues. Field is leveled using laser leveler for uniform water distribution, crucial for rice cultivation.",
          stage2: "Nursery preparation starts 30-35 days before transplanting on raised beds of 1.5m width. Certified organic seeds are treated with cow urine (10% solution) for 12 hours, then with Trichoderma viride at 10g/kg seed. Seeds are sprouted in gunny bags for 24-36 hours before sowing in nursery beds at 5kg per 100 sq.m.",
          stage3: "Main field puddling operation begins with 2-3 plowings in standing water 10-15cm deep using puddler or cultivator. Green manure crops like dhaincha or sunn hemp sown 45 days earlier are incorporated at flowering stage. Field is leveled again and left for settling for 24-48 hours before transplanting.",
          stage4: "Transplanting at 25-28 days when seedlings have 4-5 leaves, using 20x15cm spacing with 2-3 seedlings per hill. Transplanting early morning or late evening reduces transplanting shock. Depth maintained at 3-4cm, ensuring roots covered but growing point exposed. Gap filling done within 7-10 days.",
          stage5: "Basal application of well-decomposed FYM at 12 tons/ha, vermicompost at 2.5 tons/ha, and neem cake at 250kg/ha incorporated during final puddling. Azolla biofertilizer introduced at 500kg/ha as dual crop fixes atmospheric nitrogen and suppresses weeds through surface coverage.",
          stage6: "Water management maintains 5-7cm standing water during vegetative phase (0-60 days), increased to 10-15cm during flowering, and drained completely 15 days before harvest. Intermittent irrigation with 2-3 day drainage periods improves root health and reduces methane emissions.",
          stage7: "Weed management through two manual weedings at 20 and 40 days after transplanting. Conoweeder operation between rows at 25 days aerates soil and incorporates weeds. Rice-fish culture in deeper fields provides natural weed and pest control through fish grazing.",
          stage8: "Integrated pest management includes installing pheromone traps for stem borer at 12/ha, light traps for leaf folder at 1/ha, and maintaining 2-3cm water depth for duck farming. Neem oil 2% spray at tillering and panicle initiation stages controls sucking pests effectively.",
          stage9: "Top dressing with compost tea and jeevamrit at panicle initiation (60 days) and flowering (80 days) stages through irrigation water. Panchagavya spray at 3% concentration at booting stage enhances grain filling and improves nutritional quality of grains.",
          stage10: "Harvesting at 20-22% moisture when 80% panicles turn golden yellow, using serrated sickles with 15cm stubble height. Sun drying on clean concrete floors for 3-4 days to 14% moisture, threshing using pedal thresher to minimize breakage, winnowing, and storage in gunny bags with neem leaves yields 2.8-3.5 tons/ha."

        },
        water: 'High', 
        temp: '20-27°C', 
        duration: '120-150 days', 
        soil: 'Loamy soil', 
        fertilizer: 'NPK 120:60:40', 
        yield: '2.5-3.5 tons/ha' 
      },
      { 
        id: 2, 
        name: 'Maize', 
        image: cropImages.maize, 
        titleDescription: 'Maize is a versatile cereal crop with immense food, feed, and industrial value, thriving in warm conditions with moderate rainfall and well-drained fertile soils.',
        description: {
          stage1: "Deep summer plowing with moldboard plow to 25-30cm depth exposes soil to solar radiation for 20 days, killing soil-borne pathogens and weed seeds. Pre-monsoon harrowing 2-3 times achieves fine tilth with good soil structure. Field is leveled and marked for row planting at 60cm spacing.",
          stage2: "Seed selection of desi composite varieties with 90% germination rate, treated with Trichoderma viride at 10g/kg seed and Pseudomonas fluorescens at 10g/kg for 30 minutes. Cow dung slurry coating provides additional protection and micronutrients. Seeds are shade dried for 2 hours before sowing.",
          stage3: "Sowing with onset of monsoon at 60x25cm spacing using manual dibbling or seed drill at 4-5cm depth. Two seeds per hill planted to ensure germination, thinned to one healthy seedling at 15 days. Seed rate of 18-20kg/ha for composites, 8-10kg/ha for hybrids.",
          stage4: "Basal application of well-decomposed FYM at 10 tons/ha, vermicompost at 2 tons/ha, and neem cake at 250kg/ha incorporated during final land preparation. Rock phosphate at 200kg/ha placed in furrows below seeds for phosphorus availability throughout crop growth.",
          stage5: "Intercropping with cowpea or greengram at 1:2 ratio in alternate rows optimizes land use. Legumes fix 25-30kg nitrogen per hectare, provide additional yield, and suppress weeds through ground coverage. Sowing of intercrops simultaneously with main crop.",
          stage6: "Irrigation management with first irrigation immediately after sowing, subsequent at 10-12 day intervals based on rainfall. Critical stages for moisture are tasseling, silking, and grain filling. Drip irrigation at 80% pan evaporation saves 40% water with 25% yield increase.",
          stage7: "Weed management through two hand weedings at 20 and 40 days after sowing, combined with light earthing up. Atrazine application in conventional systems replaced by mulching with crop residue at 5 tons/ha between rows for moisture conservation and weed suppression.",
          stage8: "Top dressing with jeevamrit at 30, 50, and 70 days after sowing through irrigation water or foliar spray. Panchagavya at 3% concentration at tasseling and silking stages enhances pollination and grain filling. Compost tea application at 15-day intervals during reproductive phase.",
          stage9: "Integrated pest management includes Trichogramma card installation at 50,000/ha for stem borer control, yellow sticky traps for aphids, and bird perches at 50/ha. Neem oil 2% spray if leaf eating caterpillars exceed economic threshold level of 10% damage.",
          stage10: "Harvesting at 25-30% moisture when husk turns brown and black layer forms at grain base. Cobs dehusked, sun-dried on raised platforms for 5-7 days to 15-16% moisture. Shelling using maize shelter, winnowing, grading, and storage in moisture-proof bins with neem leaves yields 2.5-3 tons/ha."
        },
        water: 'Medium', 
        temp: '21-27°C', 
        duration: '90-110 days', 
        soil: 'Loamy soil', 
        fertilizer: 'NPK 80:40:40', 
        yield: '2.5-3 tons/ha' 
      },
      { 
        id: 3, 
        name: 'Groundnut', 
        image: cropImages.groundnut, 
        titleDescription: 'Groundnut is a unique legume-oilseed crop where flowers above ground produce pods underground, valued for protein-rich kernels and soil-enriching nitrogen fixation ability.',
        description: {
          stage1: "Land preparation begins with off-season deep plowing to 25-30cm depth using moldboard plow, exposing soil to solar radiation for 20-25 days. Pre-sowing harrowing 2-3 times achieves fine tilth without forming hard pan. Field is leveled and ridges formed at 30cm spacing using ridger.",
          stage2: "Seed selection of bold, mature kernels from disease-free pods, hand-shelled 2-3 days before sowing to maintain viability. Grading removes immature and damaged seeds. Seed treatment with Rhizobium and PSB cultures at 50g/kg seed each in 10% jaggery solution ensures effective nodulation.",
          stage3: "Seed treatment with Trichoderma viride at 10g/kg seed for 30 minutes controls Aspergillus and soil-borne diseases. Cow dung slurry coating at 20% concentration provides additional protection. Seeds shade dried for 2 hours before sowing for better establishment.",
          stage4: "Sowing with onset of monsoon at 30x10cm spacing on ridge tops at 4-5cm depth. Two seeds per hill planted, thinned to one at 15 days. Seed rate of 100-120kg/ha for bold varieties. Sowing depth critical - too deep affects peg penetration, too shallow exposes seeds to birds.",
          stage5: "Basal application of well-decomposed FYM at 8 tons/ha, vermicompost at 1.5 tons/ha, and rock phosphate at 200kg/ha in furrows below seeds. Gypsum at 500kg/ha applied at peg initiation stage (35-40 days) provides calcium essential for pod development in pegging zone.",
          stage6: "Intercultivation with hand hoe at 20 and 40 days after sowing controls weeds and provides light earthing up. Second intercultivation coinciding with peg initiation facilitates peg penetration into soil. Hand weeding removes weeds within rows missed by hoeing.",
          stage7: "Irrigation management with critical stages at flowering (25-30 days), peg formation (40-45 days), and pod development (60-75 days). Light irrigation at 8-10 day intervals if dry spell exceeds one week. Drip irrigation at 60% pan evaporation optimizes water use and yield.",
          stage8: "Jeevamrit application at 30 and 50 days after sowing through irrigation water enhances soil biological activity and nutrient availability. Foliar spray of panchagavya at 3% at flowering and 15 days after flowering improves pod setting and kernel quality.",
          stage9: "Integrated pest management includes monitoring for leaf miner using yellow sticky traps, tikka disease control through neem oil 2% spray at 15-day intervals. Avoid irrigation during disease incidence. Field sanitation removes volunteer groundnut plants acting as pest hosts.",
          stage10: "Harvesting at 100-120 days when 75% pods matured, indicated by yellowing leaves, hardened shells with dark inner veins. Plants uprooted manually at proper soil moisture, pods stripped, cleaned, sun-dried on mats for 5-6 days to 8% moisture. Grading and storage yields 1.5-2 tons/ha."
        },
        water: 'Low', 
        temp: '25-30°C', 
        duration: '100-120 days', 
        soil: 'Loamy soil', 
        fertilizer: 'NPK 40:60:40', 
        yield: '1.5-2 tons/ha' 
      }
    ],
    clay: [
      { 
        id: 4, 
        name: 'Rice', 
        image: cropImages.rice, 
        titleDescription: 'Rice in clay soils yields abundantly due to excellent water retention, with traditional varieties adapted to heavy soils producing distinctive grain quality and taste.',
        description: {
          stage1: "Land preparation in clay soils begins with early summer plowing using moldboard plow when soil has 15-20% moisture. Deep plowing to 25cm depth followed by exposure to summer sun for 20-25 days cracks soil, improving structure and aeration. Pre-monsoon harrowing 3-4 times achieves desired tilth.",
          stage2: "Green manuring with sunn hemp or dhaincha sown 45 days before transplanting at 40-50kg/ha. At flowering stage, crops are cut and incorporated into soil through puddling, adding 3-4 tons green biomass per hectare, fixing 40-50kg nitrogen, and improving soil organic matter.",
          stage3: "Puddling operation begins with first monsoon rains, flooding field to 10-15cm depth. Wet plowing 3-4 times using puddler or cultivator creates impervious layer reducing percolation losses by 60%. Field leveled using laser leveler for uniform water distribution across clay fields.",
          stage4: "Nursery preparation on raised beds with 5:3:2 ratio of soil, FYM, and vermicompost. Traditional varieties seeds treated with cow urine 10% solution for 12 hours, then Trichoderma at 10g/kg. Sprouted seeds sown at 5kg/100 sq.m, covered with fine soil and straw mulch.",
          stage5: "Twenty-five-day-old seedlings with 4-5 leaves transplanted at 20x15cm spacing with 2 seedlings per hill. Transplanting in lines using markers ensures uniform spacing. Depth maintained at 3-4cm, pressing soil around seedlings. Gap filling within 7-10 days maintains optimum population.",
          stage6: "Basal application of well-decomposed FYM at 12 tons/ha, vermicompost at 2.5 tons/ha, and neem cake at 250kg/ha incorporated during final puddling. Azolla biofertilizer introduced at 500kg/ha 7 days after transplanting fixes nitrogen and suppresses weeds through dense mat formation.",
          stage7: "Water management maintains 5-7cm standing water during vegetative phase (0-60 days), increasing to 10-15cm during flowering. Complete drainage 15 days before harvest. Clay soils retain moisture longer, reducing irrigation frequency by 30% compared to loamy soils.",
          stage8: "Weed management through two manual weedings at 20 and 40 days after transplanting. Conoweeder operation between rows at 25 days aerates soil and incorporates weeds. Rice-fish culture with Cyprinus carpio at 5000 fingerlings/ha provides natural weed and pest control.",
          stage9: "Integrated pest management includes pheromone traps for yellow stem borer at 12/ha, light traps for leaf folder at 1/ha. Duck farming at 200 birds/ha from 30 days after transplanting controls pests and weeds while providing manure. Neem oil spray only if threshold crossed.",
          stage10: "Harvesting at 130-150 days when 90% panicles turn golden yellow with 20-22% moisture. Manual harvesting using sickles with 15cm stubble. Sun drying on clean concrete floors for 4-5 days to 14% moisture, threshing using pedal thresher, winnowing, and storage yields 3-3.8 tons/ha."
        },
        water: 'High', 
        temp: '20-27°C', 
        duration: '120-150 days', 
        soil: 'Clay soil', 
        fertilizer: 'NPK 120:60:40', 
        yield: '2.8-3.8 tons/ha' 
      },
      { 
        id: 5, 
        name: 'Sugarcane', 
        image: cropImages.sugarcane, 
        titleDescription: 'Sugarcane is a long-duration cash crop providing sugar, jaggery, and biofuel, thriving in deep clay soils with abundant water and warm humid conditions.',
        description: {
          stage1: "Land preparation begins with deep summer plowing using moldboard plow to 35-40cm depth, breaking hard pans in clay soils. Field exposed to solar radiation for 30 days, followed by disc harrowing 3-4 times. Trenches opened at 90cm spacing and 20cm depth using ridger for planting.",
          stage2: "Selection of healthy setts from 8-10 month old disease-free crop, preferably from certified organic source. Setts cut into 2-3 bud pieces (45cm length) using sharp knife, dipped in 5% salt solution for 10 minutes to control scale insects, then shade dried for 2 hours.",
          stage3: "Sett treatment with Trichoderma viride at 10g/lit water for 30 minutes controls red rot and wilt diseases. Hot water treatment at 52°C for 30 minutes eliminates systemic pathogens. Treatment with cow dung slurry and panchagavya provides nutrients and growth promoters.",
          stage4: "Planting during February-March in trenches at end-to-end placement with 5cm overlap, covered with 5cm soil. Two-row planting system with 90cm between rows and 45cm between setts within row optimizes population. Seed rate of 35,000-40,000 three-bud setts per hectare.",
          stage5: "Basal application of well-decomposed FYM at 15 tons/ha, press mud at 10 tons/ha, and neem cake at 500kg/ha in trenches before planting. Rock phosphate at 300kg/ha and gypsum at 500kg/ha incorporated for phosphorus and calcium availability throughout crop duration.",
          stage6: "Intercropping with short duration vegetables like onion, garlic, or coriander in initial 4 months optimizes land use. Legume intercrops like cowpea fix nitrogen and provide additional income. Intercrops harvested before sugarcane canopy closes at 120 days.",
          stage7: "Irrigation through drip system with 2 laterals per row and drippers at 60cm spacing saves 40% water. Critical stages for irrigation are germination (0-30 days), tillering (60-120 days), grand growth (120-240 days), and maturity (240-300 days).",
          stage8: "Earthing up operations twice - first at 90 days after planting with compost incorporation, second at 150 days with jeevamrit application. Trash mulching between rows using dried leaves conserves moisture, suppresses weeds, and adds organic matter upon decomposition.",
          stage9: "Integrated pest management includes pheromone traps for early shoot borer at 12/ha, Trichogramma releases for stem borer at 50,000/ha monthly. Propping at 8-10 months using cane leaves tied with ropes prevents lodging in heavy clay soils.",
          stage10: "Harvesting at 10-12 months when juice brix reaches 18-20% and cane turns golden yellow. Cane cut close to ground using sharp knife, tops removed for next planting, trash removed. Clean canes bundled and transported to mill within 24-48 hours yields 70-80 tons/ha."
        },
        water: 'High', 
        temp: '20-30°C', 
        duration: '10-12 months', 
        soil: 'Clay soil', 
        fertilizer: 'NPK 150:75:75', 
        yield: '70-80 tons/ha' 
      },
      { 
        id: 6, 
        name: 'Maize', 
        image: cropImages.maize, 
        titleDescription: 'Maize in clay soils achieves robust growth due to sustained moisture availability, requiring careful drainage management and timely operations for optimal yields.',
        description: {
          stage1: "Land preparation begins with deep summer plowing using moldboard plow to 30cm depth, exposing clay soil to solar radiation for 20-25 days. Pre-monsoon harrowing 3-4 times at proper moisture (15-20%) achieves fine tilth without clod formation. Raised beds of 15cm height prepared for improved drainage.",
          stage2: "Seed selection of desi composite varieties with 90% germination rate, treated with Trichoderma viride at 10g/kg seed and Pseudomonas fluorescens at 10g/kg for 30 minutes. Cow dung slurry coating with 5% neem oil provides additional protection against soil-borne pathogens in heavy soils.",
          stage3: "Sowing with onset of monsoon on raised bed tops at 60x25cm spacing using manual dibbling at 4-5cm depth. Two seeds per hill planted to ensure germination, thinned to one healthy seedling at 15 days. Seed rate of 18-20kg/ha for composites in clay soils.",
          stage4: "Basal application of well-decomposed FYM at 10 tons/ha, vermicompost at 2 tons/ha, and neem cake at 250kg/ha incorporated during final land preparation. Rock phosphate at 200kg/ha placed in furrows below seeds for phosphorus availability throughout crop growth in heavy soils.",
          stage5: "Drainage channels prepared at 10m intervals before monsoon to remove excess water during heavy rains. Clay soils prone to waterlogging require raised beds and proper drainage. Intercropping with soybean at 1:2 ratio optimizes land use and provides nitrogen fixation.",
          stage6: "Irrigation management with critical stages at tasseling, silking, and grain filling. Clay soils retain moisture longer, requiring irrigation at 15-18 day intervals compared to 10-12 days in light soils. Drip irrigation at 80% pan evaporation saves 30% water with yield increase.",
          stage7: "Weed management through two hand weedings at 20 and 40 days after sowing combined with light earthing up. Intercultivation using bullock-drawn hoe between rows aerates heavy soils. Mulching with crop residue at 5 tons/ha between rows conserves moisture.",
          stage8: "Top dressing with jeevamrit at 30, 50, and 70 days after sowing through irrigation water. Panchagavya at 3% concentration at tasseling and silking stages enhances pollination. Compost tea application at 15-day intervals during reproductive phase improves grain filling.",
          stage9: "Integrated pest management includes Trichogramma card installation at 50,000/ha for stem borer control, yellow sticky traps for aphids. Clay soils with good structure reduce root lodging. Bird perches at 50/ha provide natural pest control through predatory birds.",
          stage10: "Harvesting at 100-110 days when husk turns brown and black layer forms at grain base. Cobs dehusked, sun-dried on raised platforms for 6-8 days to 15-16% moisture in clay soil areas. Shelling, winnowing, and storage in moisture-proof bins yields 2.5-3 tons/ha."
        },
        water: 'Medium', 
        temp: '21-27°C', 
        duration: '90-110 days', 
        soil: 'Clay soil', 
        fertilizer: 'NPK 80:40:40', 
        yield: '2.5-3 tons/ha' 
      },
      { 
        id: 7, 
        name: 'Banana', 
        image: cropImages.banana, 
        titleDescription: 'Banana is a nutrient-rich fruit crop providing year-round harvests, thriving in deep clay soils with consistent moisture and warm humid tropical conditions.',
        description: {
          stage1: "Land preparation begins with deep summer plowing using moldboard plow to 45cm depth, breaking hard pans in clay soils. Disc harrowing 4-5 times followed by rotovator achieves fine tilth. Field leveled and marked for pit digging at 2x2m spacing for high-density planting.",
          stage2: "Pit digging of 60x60x60cm size using auger or manual labor during summer, exposing soil to solar radiation for 20-25 days. Pits filled with 15kg well-decomposed FYM, 5kg vermicompost, 2kg neem cake, and 100g Trichoderma mixed soil, leaving 15cm depth for planting.",
          stage3: "Selection of healthy sword suckers from virus-free mother plants weighing 500-750g with well-developed rhizome. Sucker pared removing outer layers and old roots, dipped in cow dung paste with 5% panchagavya for 30 minutes. Treatment with Trichoderma at 10g/lit controls rhizome rot.",
          stage4: "Planting at onset of monsoon with suckers placed vertically in pits, soil pressed firmly around. Planting depth such that rhizome covered but growing point exposed. Mulching with 10cm thick dried leaves or paddy straw conserves moisture and suppresses weeds in clay soils.",
          stage5: "Basal application of well-decomposed FYM at 10 tons/ha, vermicompost at 2 tons/ha, and neem cake at 500kg/ha in pits before planting. Rock phosphate at 300kg/ha and gypsum at 500kg/ha incorporated for phosphorus and calcium availability throughout crop duration.",
          stage6: "Drip irrigation installation with 2 drippers per plant (8 LPH) at 60cm from pseudostem. Critical stages for irrigation are vegetative growth (1-4 months), flowering (5-7 months), and fruit development (8-11 months). Mulching with black polythene saves 40% water.",
          stage7: "Intercropping with short duration vegetables, legumes, or turmeric in initial 6 months optimizes land use. Legume intercrops fix nitrogen and provide additional income. Intercrops harvested before banana canopy closes at 7 months, leaving residues as green manure.",
          stage8: "Removal of suckers regularly, retaining 3 suckers of different ages (mother, follower, and second follower) for ratoon planning. Desuckering at 15-day intervals using sharp knife removes unwanted suckers competing for nutrition with mother plant.",
          stage9: "Propping using bamboo poles or coir ropes supports heavy bunches against lodging in clay soils during windy conditions. Bunch covering with dried banana leaves or blue polythene protects from sunburn, bird damage, and improves fruit color and quality.",
          stage10: "Harvesting at 12-14 months when fingers turn from deep green to light green with angularity filling. Bunches cut with 15cm stalk, dehanded, cleaned, and dipped in 2% salt solution to remove latex. Ripening naturally yields 30-40 tons/ha with excellent fruit quality."
        },
        water: 'High', 
        temp: '25-35°C', 
        duration: '12-14 months', 
        soil: 'Clay soil', 
        fertilizer: 'NPK 180:60:300', 
        yield: '30-40 tons/ha' 
      }
    ],
    sandy: [
      { 
        id: 8, 
        name: 'Millet', 
        image: cropImages.millet, 
        titleDescription: 'Millets are ancient drought-tolerant nutri-cereals with short growing seasons, perfectly adapted to sandy soils and rainfed conditions with minimal inputs.',
        description: {
          stage1: "Land preparation begins with minimum tillage to preserve sandy soil structure. One deep plowing with moldboard plow to 20cm depth during summer followed by harrowing after first monsoon showers. Conservation furrows at 5m intervals along contours prevent soil erosion in sandy fields.",
          stage2: "Seed selection of desi pearl millet varieties with 85% germination rate, adapted to local rainfall patterns. Seed treatment with Trichoderma viride at 10g/kg seed for 30 minutes controls downy mildew. Cow dung slurry coating provides nutrients and protection during germination.",
          stage3: "Sowing with onset of monsoon at 45x15cm spacing using seed drill at 3-4cm depth. Two seeds per hill planted to ensure germination, thinned to one healthy seedling at 15 days. Seed rate of 3-4kg/ha for pearl millet in sandy soils with low moisture retention.",
          stage4: "Basal application of well-decomposed FYM at 5 tons/ha and vermicompost at 1 ton/ha placed in furrows below seeds. Rock phosphate at 150kg/ha provides phosphorus for root development in phosphorus-deficient sandy soils. Organic matter improves water holding capacity.",
          stage5: "Intercropping with cowpea or green gram at 1:2 ratio in alternate rows optimizes land use. Legumes fix 20-25kg nitrogen per hectare, provide additional yield, and their residue adds organic matter to sandy soils improving moisture retention over time.",
          stage6: "No irrigation except lifesaving at critical stages - flowering and grain filling - in case of prolonged dry spells exceeding two weeks. Sandy soils drain quickly, requiring careful monitoring. Sprinkler irrigation at 40mm per application if severe drought occurs.",
          stage7: "Thinning at 15 days maintains optimum plant population of 1.5 lakh plants/ha for pearl millet. Gap filling with soaked seeds ensures uniform stand. One hand weeding at 20 days and intercultural operation at 35 days controls weeds in sandy soils.",
          stage8: "Jeevamrit application at 30 and 50 days after sowing through foliar spray enhances nutrient availability in sandy soils. Panchagavya at 3% concentration at flowering improves grain setting and filling under moisture stress conditions in rainfed areas.",
          stage9: "Integrated pest management includes installation of bird perches at 50/ha for natural pest control, light traps for insects. Downy mildew controlled by removing infected plants at early stage. Field sanitation removes volunteer plants acting as pest hosts.",
          stage10: "Harvesting at 70-90 days when grains harden and straw dries, indicated by 18-20% moisture. Earheads cut with 30cm stalk, sun-dried on threshing floors for 3-4 days to 12% moisture. Threshing, winnowing, and storage yields 1-1.5 tons/ha grain plus 3-4 tons/ha dry fodder."
        },
        water: 'Low', 
        temp: '25-31°C', 
        duration: '70-90 days', 
        soil: 'Sandy soil', 
        fertilizer: 'NPK 60:30:30', 
        yield: '1-1.5 tons/ha' 
      },
      { 
        id: 9, 
        name: 'Groundnut', 
        image: cropImages.groundnut, 
        titleDescription: 'Groundnut in sandy soils produces high-quality kernels with excellent oil content, facilitated by loose structure for peg penetration and ease of harvest.',
        description: {
          stage1: "Land preparation begins with off-season deep plowing using moldboard plow to 25cm depth during summer. Pre-monsoon harrowing 2-3 times achieves fine tilth without forming hard pan in sandy soils. Field leveled and ridges formed at 30cm spacing using ridger for better peg penetration.",
          stage2: "Seed selection of bold, mature kernels from disease-free pods, hand-shelled 2-3 days before sowing to maintain viability in sandy conditions. Grading removes immature and damaged seeds. Seed treatment with Rhizobium and PSB cultures at 50g/kg seed each ensures effective nodulation.",
          stage3: "Seed treatment with Trichoderma viride at 10g/kg seed for 30 minutes controls Aspergillus and soil-borne diseases common in sandy soils. Cow dung slurry coating with 5% panchagavya provides additional protection. Seeds shade dried for 2 hours before sowing.",
          stage4: "Sowing with onset of monsoon at 30x10cm spacing on ridge tops at 4-5cm depth. Two seeds per hill planted, thinned to one at 15 days. Seed rate of 120-140kg/ha for bold varieties. Sandy soils require slightly deeper sowing (5cm) for moisture access.",
          stage5: "Basal application of well-decomposed FYM at 8 tons/ha, vermicompost at 1.5 tons/ha, and rock phosphate at 200kg/ha in furrows below seeds. Gypsum at 500kg/ha applied at peg initiation stage (35-40 days) provides calcium essential for pod development.",
          stage6: "Irrigation management with critical stages at flowering (25-30 days), peg formation (40-45 days), and pod development (60-75 days). Sandy soils require irrigation at 5-7 day intervals through sprinkler or drip. Drip at 60% pan evaporation saves 40% water with 25% yield increase.",
          stage7: "Intercultivation with hand hoe at 20 and 40 days after sowing controls weeds and provides light earthing up. Second intercultivation coinciding with peg initiation facilitates peg penetration in sandy soils. Hand weeding removes weeds within rows missed by hoeing.",
          stage8: "Mulching with crop residue at 3 tons/ha between rows conserves moisture in sandy soils, reducing irrigation frequency by 30%. Straw mulch also suppresses weeds and adds organic matter upon decomposition, improving water holding capacity over time.",
          stage9: "Jeevamrit application at 30 and 50 days after sowing through irrigation water enhances soil biological activity. Foliar spray of panchagavya at 3% at flowering and 15 days after flowering improves pod setting and kernel quality in sandy soils.",
          stage10: "Harvesting at 100-120 days when 75% pods matured, indicated by yellowing leaves, hardened shells with dark inner veins. Sandy soils allow easy uprooting at proper moisture. Pods sun-dried on mats for 5-6 days to 8% moisture. Grading and storage yields 1.5-2 tons/ha."
        },
        water: 'Low', 
        temp: '25-30°C', 
        duration: '100-120 days', 
        soil: 'Sandy soil', 
        fertilizer: 'NPK 40:60:40', 
        yield: '1.5-2 tons/ha' 
      },
      { 
        id: 10, 
        name: 'Watermelon', 
        image: cropImages.watermelon, 
        titleDescription: 'Watermelon is a refreshing summer fruit with high water content, thriving in warm sandy soils producing sweet, crisp fruits ideal for hot climates.',
        description: {
          stage1: "Land preparation begins with deep summer plowing using moldboard plow to 30cm depth. Disc harrowing 3-4 times followed by rotovator achieves fine tilth. Raised beds of 3m width and 20cm height prepared at 1m spacing for drainage. Sandy soils warm quickly promoting early growth.",
          stage2: "Pit digging of 45x45x45cm size on beds at 1.5m spacing during summer. Pits filled with 10kg well-decomposed FYM, 5kg vermicompost, and 2kg neem cake mixed soil. Organic matter in pits improves water holding capacity of surrounding sandy soil.",
          stage3: "Seed selection of open-pollinated varieties with 90% germination rate. Seed treatment with Trichoderma viride at 10g/kg seed for 30 minutes controls damping off. Treatment with cow urine 10% solution for 12 hours enhances germination and provides disease resistance.",
          stage4: "Sowing after last frost (February-March) with 4-5 seeds per pit at 2-3cm depth. Seeds covered with fine soil and watered gently. Thinning at 15 days retains 2 healthy seedlings per pit. Sandy soils with good aeration promote rapid root development.",
          stage5: "Drip irrigation installation with 2 drippers per pit (4 LPH) and mulching using black polythene or paddy straw. Mulching in sandy soils conserves 40% moisture, suppresses weeds, and prevents fruit contact with soil reducing rot and improving quality.",
          stage6: "Basal application of enriched compost at 5 tons/ha and rock phosphate at 200kg/ha in pits before sowing. Top dressing with jeevamrit and vermiwash at 15-day intervals through drip. Foliar spray of panchagavya at 3% at flowering and fruit set stages.",
          stage7: "Vine training along beds prevents crowding and ensures uniform fruit development. Hand pollination in morning hours (7-9 AM) if natural pollinator activity low due to weather. Female flowers recognized by small fruit behind flower, pollinated with male flower stamens.",
          stage8: "Fruit management by retaining one fruit per vine for large size (8-10kg), or two fruits for medium size (4-5kg). Removal of misshapen and diseased fruits at early stage. Straw or leaf mulching under developing fruits prevents soil contact and rotting in sandy soils.",
          stage9: "Integrated pest management includes pheromone traps for fruit fly at 12/ha, collection and destruction of affected fruits. Neem oil 2% spray for aphids and pumpkin beetles. Yellow sticky traps for whitefly monitoring. Field sanitation removes crop residues after harvest.",
          stage10: "Harvesting at 80-100 days when tendril near fruit dries, ground spot turns yellow, and hollow sound on thumping. Fruits cut with 2-3cm stalk in cool morning hours, sorted by size, cleaned, and shade stored. Average organic yield 20-30 tons/ha."
        },
        water: 'Medium', 
        temp: '25-35°C', 
        duration: '80-100 days', 
        soil: 'Sandy soil', 
        fertilizer: 'NPK 80:40:80', 
        yield: '20-30 tons/ha' 
      },
      { 
        id: 11, 
        name: 'Cucumber', 
        image: cropImages.cucumber, 
        titleDescription: 'Cucumber is a quick-growing vine vegetable with crisp refreshing fruits, perfectly adapted to sandy soils with good drainage and warm growing conditions.',
        description: {
          stage1: "Land preparation begins with deep plowing using moldboard plow to 25cm depth during summer. Disc harrowing 3-4 times followed by rotovator achieves fine tilth. Raised beds of 1.5m width and 20cm height prepared with 50cm pathways for drainage in sandy soils.",
          stage2: "Pits or furrows opened at 1m spacing on beds for sowing. Basal application of well-decomposed FYM at 10 tons/ha and vermicompost at 2 tons/ha incorporated during bed preparation. Organic matter in sandy soils improves water holding capacity and nutrient retention.",
          stage3: "Seed selection of desi variety seeds with 90% germination rate. Seed treatment with Trichoderma viride at 10g/kg and Pseudomonas fluorescens at 10g/kg for 30 minutes controls damping off and root rot diseases common in cucurbits.",
          stage4: "Direct sowing preferred over transplanting for better establishment in sandy soils. Two seeds sown per hill at 2-3cm depth, covered with fine soil and watered gently. Thinning at 15 days retains one healthy seedling per hill. Spacing of 1m between plants maintained.",
          stage5: "Drip irrigation installation with 2 drippers per plant (4 LPH) and mulching using paddy straw or black polythene. Sandy soils require irrigation at 2-3 day intervals through drip. Mulching conserves 40% moisture and reduces irrigation frequency by 30%.",
          stage6: "Trellising using bamboo poles and nylon net at 2m height supports vines, improves air circulation, and fruit quality. Training vines on trellis prevents fruit contact with soil, reducing disease incidence and producing straight, uniform fruits preferred in market.",
          stage7: "Basal application of well-decomposed FYM at 10 tons/ha and vermicompost at 2 tons/ha during bed preparation. Liquid manures including jeevamrit and panchagavya applied weekly through drip after flowering at 3% concentration for enhanced fruiting.",
          stage8: "Hand pollination in early morning hours (6-8 AM) if natural pollinator activity low. Male flowers identified by slender stalks, female flowers by small ovary behind flower. One male flower used to pollinate 2-3 female flowers for optimum fruit set.",
          stage9: "Integrated pest management includes neem oil 2% spray for beetles and aphids, installation of yellow sticky traps for whitefly. Downy mildew controlled by sour buttermilk spray at 10% dilution weekly. Field sanitation removes affected plant parts.",
          stage10: "Harvesting at 50-70 days, regular picking every 2-3 days when fruits reach marketable size (15-20cm) before seeds harden. Harvesting done with sharp knife leaving small stalk during cool morning hours. Grading and packing yields 15-20 tons/ha."
        },
        water: 'Medium', 
        temp: '24-30°C', 
        duration: '50-70 days', 
        soil: 'Sandy soil', 
        fertilizer: 'NPK 60:40:40', 
        yield: '15-20 tons/ha' 
      }
    ],
    black: [
      { 
        id: 12, 
        name: 'Cotton', 
        image: cropImages.cotton, 
        titleDescription: 'Cotton is the premier natural fiber crop thriving in deep black soils, with organic methods producing clean lint suitable for textile and handloom industries.',
        description: {
          stage1: "Land preparation begins with off-season deep plowing during summer using moldboard plow to 35cm depth, inverting black soil. Field exposed to solar radiation for 30 days, causing deep cracking which improves aeration and water infiltration. Disc harrowing 3-4 times after first rains.",
          stage2: "Desi cotton varieties like Kala cotton or organic certified hybrids selected for pest tolerance and local adaptation. Seed treatment with Trichoderma viride at 10g/kg, Pseudomonas at 10g/kg, and cow dung paste for 30 minutes ensures disease protection in heavy black soils.",
          stage3: "Sowing with onset of monsoon at 90x60cm spacing for hybrids, 60x30cm for desi varieties, at 4-5cm depth using seed drill. Two seeds per hill planted, thinned to one at 25 days. Seed rate of 15-18kg/ha for hybrids, 25-30kg/ha for desi varieties.",
          stage4: "Green manuring with sunn hemp sown 45 days before cotton and incorporated at flowering adds 3-4 tons green biomass. Basal application of FYM at 10 tons/ha, vermicompost at 2 tons/ha, neem cake at 250kg/ha, and rock phosphate at 200kg/ha during final land preparation.",
          stage5: "Intercropping with black gram or soybean in 1:2 ratio (2 rows cotton : 1 row intercrop) optimizes land use. Legumes fix 20-25kg nitrogen per hectare, provide additional yield, and their residue adds organic matter improving black soil structure.",
          stage6: "Thinning at 25 days retains one healthy seedling per hill. Gap filling maintains optimum population of 50,000-55,000 plants/ha for hybrids. Two hand weedings at 30 and 60 days after sowing combined with earthing up at 60 days for plant support.",
          stage7: "Irrigation management with critical stages at flowering (60-70 days), boll development (90-120 days), and boll opening (150-180 days). Black soils retain moisture longer, requiring 2-3 irrigations compared to 4-5 in light soils. Drainage channels essential during heavy rains.",
          stage8: "Jeevamrit application at 30, 60, and 90 days after sowing through irrigation water enhances soil biological activity in black soils. Panchagavya spray at 3% at flowering and boll development stages improves fiber quality and boll retention.",
          stage9: "Integrated pest management using pheromone traps for pink bollworm at 12/ha, installation of bird perches at 50/ha for natural pest control. Collection and destruction of affected squares and bolls. NPV spray at 250 LE/ha if bollworm crosses threshold.",
          stage10: "Harvesting at 150-180 days when bolls fully opened, in multiple pickings at 10-15 day intervals. Cotton dried on clean tarpaulins to 8-9% moisture. Grading removes stained and insect-damaged kapas. Storage in clean gunny bags yields 2-2.5 tons/ha seed cotton."
        },
        water: 'Medium', 
        temp: '25-35°C', 
        duration: '150-180 days', 
        soil: 'Black soil', 
        fertilizer: 'NPK 100:50:50', 
        yield: '2-2.5 tons/ha' 
      },
      { 
        id: 13, 
        name: 'Soybean', 
        image: cropImages.soybean, 
        titleDescription: 'Soybean is a protein-rich oilseed legume with nitrogen-fixing ability, ideally suited for black soils and central India\'s rainfed farming systems.',
        description: {
          stage1: "Land preparation begins with presowing irrigation if soil dry, followed by harrowing 2-3 times at proper moisture (15-20%) to achieve fine tilth. Black soils require timely operation when soil reaches working condition to avoid clod formation. Field leveled and opened with furrows at 45cm spacing.",
          stage2: "Seed selection of non-GMO desi varieties with 90% germination rate, adapted to local rainfall patterns. Seed treatment with Rhizobium japonicum and PSB cultures at 50g/kg seed each in 10% jaggery solution ensures effective biological nitrogen fixation in black soils.",
          stage3: "Seed treatment with Trichoderma viride at 10g/kg seed for 30 minutes controls charcoal rot and other soil-borne diseases common in soybeans. Cow dung slurry coating provides additional protection. Seeds shade dried for 2 hours before sowing for better establishment.",
          stage4: "Sowing with onset of monsoon at 45x5cm spacing using seed drill at 4-5cm depth. Seed rate of 60-70kg/ha for soybean in black soils. Uniform depth critical - too deep affects germination in heavy soils, too shallow exposes seeds to birds and ants.",
          stage5: "Basal application of well-decomposed FYM at 8 tons/ha, vermicompost at 1.5 tons/ha, and rock phosphate at 150kg/ha placed in furrows below seeds. Phosphorus essential for nodulation in soybeans. Organic matter improves black soil structure and water infiltration.",
          stage6: "Gap filling within 10 days maintains optimum plant population of 4-5 lakh plants/ha. Two intercultivations at 20 and 40 days after sowing using hand hoe control weeds and aerate heavy soils. Hand weeding removes weeds within rows missed by hoeing.",
          stage7: "Drainage channels prepared at 10m intervals before monsoon to remove excess water. Black soils prone to waterlogging require proper drainage during heavy rains. Intercropping with maize or sorghum in 2:1 ratio provides insurance against crop failure.",
          stage8: "Jeevamrit application at 30 and 50 days after sowing through foliar spray enhances nutrient availability in black soils. Panchagavya at 3% concentration at flowering improves pod setting and grain filling under rainfed conditions in central India.",
          stage9: "Integrated pest management includes yellow sticky traps for leaf miner and whitefly monitoring, installation of bird perches for natural pest control. Defoliators controlled by neem oil 2% spray only if economic threshold crossed.",
          stage10: "Harvesting at 90-120 days when pods turn brown with 15% moisture. Plants uprooted manually, sun-dried on threshing floors for 4-5 days to 10-12% moisture. Threshing using pedal thresher, winnowing, grading, and storage yields 1.5-2.5 tons/ha."
        },
        water: 'Medium', 
        temp: '25-30°C', 
        duration: '90-120 days', 
        soil: 'Black soil', 
        fertilizer: 'NPK 60:80:40', 
        yield: '1.5-2.5 tons/ha' 
      },
      { 
        id: 14, 
        name: 'Groundnut', 
        image: cropImages.groundnut, 
        titleDescription: 'Groundnut in black soils yields high-quality kernels with good oil content, requiring careful management of soil structure and drainage for peg penetration.',
        description: {
          stage1: "Land preparation begins with summer plowing using moldboard plow to 25cm depth, exposing black soil to solar radiation for 25-30 days. After first monsoon rains, harrowing 2-3 times achieves medium tilth without over-pulverizing. Ridges formed at 30cm spacing when soil reaches working condition.",
          stage2: "Seed selection of bold, mature kernels from disease-free pods, hand-shelled 2-3 days before sowing. Grading removes immature and damaged seeds. Seed treatment with Rhizobium and PSB cultures at 50g/kg seed each in 10% jaggery solution ensures effective nodulation.",
          stage3: "Seed treatment with Trichoderma viride at 10g/kg seed for 30 minutes controls Aspergillus and soil-borne diseases in black soils. Cow dung slurry coating with 5% panchagavya provides additional protection. Seeds shade dried for 2 hours before sowing.",
          stage4: "Sowing at 30x10cm spacing on ridge tops at 4-5cm depth. Two seeds per hill planted, thinned to one at 15 days. Seed rate of 120-140kg/ha. Black soils require shallower sowing (4cm) compared to sandy soils for better emergence through heavy soil.",
          stage5: "Basal application of well-decomposed FYM at 8 tons/ha, vermicompost at 1.5 tons/ha, and rock phosphate at 200kg/ha in furrows below seeds. Gypsum at 500kg/ha applied at peg initiation stage (35-40 days) provides calcium essential for pod development.",
          stage6: "Intercultivation with hand hoe at 20 and 40 days after sowing controls weeds and provides light earthing up. Second intercultivation coinciding with peg initiation (40 days) critical in black soils for facilitating peg penetration. Hand weeding removes within-row weeds.",
          stage7: "Drainage channels essential in black soils to prevent waterlogging during heavy rains. Groundnut sensitive to excess moisture, causing pod rot. Light earthing up improves drainage around plants. No irrigation required if monsoon normal, lifesaving at 10-12 day intervals if dry spell.",
          stage8: "Jeevamrit application at 30 and 50 days after sowing through irrigation water enhances soil biological activity. Neem cake at 250kg/ha at flowering reduces soil pest incidence in black soils. Foliar spray of panchagavya at 3% improves pod setting.",
          stage9: "Integrated pest management includes monitoring for tikka disease and leaf miner, controlled by neem oil 2% spray if needed. Field sanitation removes volunteer groundnut plants. Avoid irrigation during disease incidence to prevent spread.",
          stage10: "Harvesting at 100-120 days when 75% pods matured, at proper soil moisture when soil cracks but not too wet for easy uprooting. Pods sun-dried on mats for 5-6 days to 8% moisture. Grading removes immature pods. Storage yields 1.5-2 tons/ha."
        },
        water: 'Low', 
        temp: '25-30°C', 
        duration: '100-120 days', 
        soil: 'Black soil', 
        fertilizer: 'NPK 40:60:40', 
        yield: '1.5-2 tons/ha' 
      },
      { 
        id: 15, 
        name: 'Maize', 
        image: cropImages.maize, 
        titleDescription: 'Maize in deep black soils achieves impressive growth due to moisture and nutrient reserves, requiring proper drainage and timely operations for optimal yields.',
        description: {
          stage1: "Land preparation begins with deep summer plowing using moldboard plow to 30cm depth, exposing black soil to solar radiation for 20 days. Pre-monsoon harrowing 3-4 times at proper moisture (15-20%) achieves fine tilth without clod formation. Raised beds of 15cm height prepared for improved drainage in heavy soils.",
          stage2: "Seed selection of desi composite varieties with 90% germination rate, treated with Trichoderma viride at 10g/kg seed and Pseudomonas fluorescens at 10g/kg for 30 minutes. Cow dung slurry coating with 5% neem oil provides additional protection against soil-borne pathogens.",
          stage3: "Sowing with onset of monsoon on raised bed tops at 60x25cm spacing using manual dibbling at 4-5cm depth. Two seeds per hill planted to ensure germination, thinned to one healthy seedling at 15 days. Seed rate of 18-20kg/ha for composites.",
          stage4: "Basal application of well-decomposed FYM at 10 tons/ha, vermicompost at 2 tons/ha, and neem cake at 250kg/ha incorporated during final land preparation. Rock phosphate at 200kg/ha placed in furrows below seeds for phosphorus availability in black soils.",
          stage5: "Drainage channels prepared at 10m intervals before monsoon to remove excess water. Black soils prone to waterlogging require raised beds and proper drainage for maize. Intercropping with soybean at 1:2 ratio optimizes land use and provides nitrogen.",
          stage6: "Irrigation management with critical stages at tasseling, silking, and grain filling. Black soils retain moisture longer, requiring irrigation at 15-18 day intervals compared to 10-12 days in light soils. Drip irrigation saves 30% water with yield increase.",
          stage7: "Weed management through two hand weedings at 20 and 40 days after sowing combined with light earthing up. Intercultivation using bullock-drawn hoe between rows aerates heavy soils. Mulching with crop residue at 5 tons/ha between rows conserves moisture.",
          stage8: "Jeevamrit application at 30, 50, and 70 days after sowing through irrigation water enhances nutrient availability. Panchagavya at 3% concentration at tasseling and silking stages enhances pollination. Compost tea application during reproductive phase improves grain filling.",
          stage9: "Integrated pest management includes Trichogramma card installation at 50,000/ha for stem borer control, yellow sticky traps for aphids. Black soils with good structure reduce root lodging. Bird perches at 50/ha provide natural pest control through predatory birds.",
          stage10: "Harvesting at 100-110 days when husk turns brown and black layer forms at grain base. Cobs dehusked, sun-dried on raised platforms for 6-8 days to 15-16% moisture. Shelling using maize shelter, winnowing, and storage in moisture-proof bins yields 2.5-3 tons/ha."
        },
        water: 'Medium', 
        temp: '21-27°C', 
        duration: '90-110 days', 
        soil: 'Black soil', 
        fertilizer: 'NPK 80:40:40', 
        yield: '2.5-3 tons/ha' 
      }
    ],
    red: [
      { 
        id: 16, 
        name: 'Groundnut', 
        image: cropImages.groundnut, 
        titleDescription: 'Groundnut in red soils produces excellent quality kernels with good oil content, benefiting from well-drained conditions and warm, aerated growing environment.',
        description: {
          stage1: "Land preparation begins with summer plowing using moldboard plow to 25cm depth. Pre-monsoon harrowing 2-3 times achieves fine tilth in red soils. Field leveled and ridges formed at 30cm spacing using ridger. Red soils warm quickly, promoting early growth.",
          stage2: "Seed selection of bold, mature kernels from disease-free pods, hand-shelled 2-3 days before sowing. Grading removes immature and damaged seeds. Seed treatment with Rhizobium and PSB cultures at 50g/kg seed each in 10% jaggery solution ensures effective nodulation.",
          stage3: "Seed treatment with Trichoderma viride at 10g/kg seed for 30 minutes controls Aspergillus and soil-borne diseases. Cow dung slurry coating with 5% panchagavya provides additional protection. Seeds shade dried for 2 hours before sowing for better establishment.",
          stage4: "Sowing with onset of monsoon at 30x10cm spacing on ridge tops at 4-5cm depth. Two seeds per hill planted, thinned to one at 15 days. Seed rate of 120-140kg/ha. Red soils with good drainage allow precise depth control for uniform emergence.",
          stage5: "Basal application of well-decomposed FYM at 8 tons/ha, vermicompost at 1.5 tons/ha, and rock phosphate at 200kg/ha in furrows below seeds. Gypsum at 500kg/ha applied at peg initiation stage (35-40 days) provides calcium essential for pod development.",
          stage6: "Irrigation management with critical stages at flowering (25-30 days), peg formation (40-45 days), and pod development (60-75 days). Red soils drain quickly, requiring irrigation at 8-10 day intervals through sprinkler or drip if dry spell exceeds one week.",
          stage7: "Intercultivation with hand hoe at 20 and 40 days after sowing controls weeds and provides light earthing up. Second intercultivation coinciding with peg initiation facilitates peg penetration. Hand weeding removes weeds within rows missed by hoeing.",
          stage8: "Mulching with crop residue at 3 tons/ha between rows conserves moisture in red soils, reducing irrigation frequency. Straw mulch also suppresses weeds and adds organic matter improving water holding capacity over time in well-drained soils.",
          stage9: "Jeevamrit application at 30 and 50 days after sowing through irrigation water enhances soil biological activity. Foliar spray of panchagavya at 3% at flowering and 15 days after flowering improves pod setting and kernel quality in red soils.",
          stage10: "Harvesting at 100-120 days when 75% pods matured, indicated by yellowing leaves, hardened shells. Red soils allow easy uprooting at proper moisture. Pods sun-dried on mats for 5-6 days to 8% moisture. Grading and storage yields 1.5-2 tons/ha."
        },
        water: 'Low', 
        temp: '25-30°C', 
        duration: '100-120 days', 
        soil: 'Red soil', 
        fertilizer: 'NPK 40:60:40', 
        yield: '1.5-2 tons/ha' 
      },
      { 
        id: 17, 
        name: 'Maize', 
        image: cropImages.maize, 
        titleDescription: 'Maize in red soils achieves good yields due to excellent drainage and aeration, requiring adequate organic matter and timely irrigation for optimal growth.',
        description: {
          stage1: "Land preparation begins with deep summer plowing using moldboard plow to 30cm depth. Pre-monsoon harrowing 2-3 times achieves fine tilth. Red soils derived from granite provide excellent physical conditions. Field leveled and marked for row planting at 60cm spacing.",
          stage2: "Seed selection of desi composite varieties with 90% germination rate, treated with Trichoderma viride at 10g/kg seed and Pseudomonas fluorescens at 10g/kg for 30 minutes. Cow dung slurry coating provides additional protection and micronutrients.",
          stage3: "Sowing with onset of monsoon at 60x25cm spacing using manual dibbling at 4-5cm depth. Two seeds per hill planted to ensure germination, thinned to one healthy seedling at 15 days. Seed rate of 18-20kg/ha for composites in red soils.",
          stage4: "Basal application of well-decomposed FYM at 10 tons/ha, vermicompost at 2 tons/ha, and neem cake at 250kg/ha incorporated during final land preparation. Rock phosphate at 200kg/ha placed in furrows below seeds for phosphorus availability.",
          stage5: "Intercropping with cowpea or groundnut at 1:2 ratio in alternate rows optimizes land use. Legumes fix 20-25kg nitrogen per hectare, provide additional yield, and suppress weeds through ground coverage in well-drained red soils.",
          stage6: "Irrigation management with critical stages at tasseling, silking, and grain filling. Red soils drain quickly, requiring irrigation at 8-10 day intervals compared to 10-12 in loamy soils. Drip irrigation at 80% pan evaporation saves 30% water with yield increase.",
          stage7: "Weed management through two hand weedings at 20 and 40 days after sowing combined with light earthing up. Intercultivation using hand hoe between rows aerates red soils. Mulching with crop residue at 5 tons/ha between rows conserves moisture.",
          stage8: "Jeevamrit application at 30, 50, and 70 days after sowing through irrigation water enhances nutrient availability in red soils. Panchagavya at 3% concentration at tasseling and silking stages enhances pollination and grain filling.",
          stage9: "Integrated pest management includes Trichogramma card installation at 50,000/ha for stem borer control, yellow sticky traps for aphids. Red soils with good aeration promote healthy root growth reducing pest incidence. Bird perches at 50/ha.",
          stage10: "Harvesting at 90-110 days when husk turns brown and black layer forms at grain base. Cobs dehusked, sun-dried on raised platforms for 5-7 days to 15-16% moisture. Shelling using maize shelter, winnowing, and storage yields 2.5-3 tons/ha."
        },
        water: 'Medium', 
        temp: '21-27°C', 
        duration: '90-110 days', 
        soil: 'Red soil', 
        fertilizer: 'NPK 80:40:40', 
        yield: '2.5-3 tons/ha' 
      },
      { 
        id: 18, 
        name: 'Sorghum', 
        image: cropImages.sorghum, 
        titleDescription: 'Sorghum or jowar is a drought-tolerant staple grain and fodder crop, perfectly adapted to red soils and rainfed conditions of peninsular India.',
        description: {
          stage1: "Land preparation begins with one deep plowing using moldboard plow to 25cm depth during summer. After monsoon onset, harrowing 2-3 times achieves fine tilth. Red soils warm quickly, promoting early germination. Field leveled and opened with furrows at 45cm spacing using seed drill.",
          stage2: "Seed selection of desi sorghum varieties with 85% germination rate, adapted to local rainfall patterns. Seed treatment with Trichoderma viride at 10g/kg seed for 30 minutes controls grain mold and smut diseases. Cow dung slurry coating provides protection.",
          stage3: "Sowing with onset of monsoon at 45x15cm spacing using seed drill at 3-4cm depth. Two seeds per hill planted to ensure germination, thinned to one at 15 days. Seed rate of 8-10kg/ha for sorghum in red soils under rainfed conditions.",
          stage4: "Basal application of well-decomposed FYM at 6 tons/ha and vermicompost at 1 ton/ha placed in furrows below seeds. Rock phosphate at 150kg/ha provides phosphorus for root development in phosphorus-deficient red soils. Organic matter improves water holding capacity.",
          stage5: "Gap filling within 15 days maintains optimum population of 1.5 lakh plants/ha. Two intercultivations at 20 and 40 days after sowing using hand hoe control weeds and aerate red soils. Hand weeding removes weeds within rows missed by hoeing.",
          stage6: "No irrigation except lifesaving at critical stages - flowering and grain filling - in case of prolonged dry spells exceeding two weeks. Red soils drain quickly, requiring careful monitoring. Sorghum highly drought-tolerant due to deep root system.",
          stage7: "Thinning at 15 days maintains optimum plant population. Intercropping with pigeonpea or cowpea at 2:1 ratio optimizes land use and provides nitrogen fixation. Legumes add organic matter to red soils improving moisture retention over time.",
          stage8: "Jeevamrit application at 30 and 50 days after sowing through foliar spray enhances nutrient availability in red soils. Panchagavya at 3% concentration at flowering improves grain setting and filling under moisture stress conditions.",
          stage9: "Integrated pest management includes installation of bird perches at 50/ha for natural pest control, light traps for insects. Shoot fly controlled by seed treatment and removal of affected tillers. Field sanitation removes volunteer plants acting as pest hosts.",
          stage10: "Harvesting at 90-120 days when grains harden and straw dries, indicated by 18-20% moisture. Earheads cut with 15-20cm stalk, sun-dried on threshing floors for 3-4 days to 12% moisture. Threshing, winnowing yields 1-1.5 tons/ha grain plus 3-4 tons/ha dry fodder."
        },
        water: 'Low', 
        temp: '26-30°C', 
        duration: '90-120 days', 
        soil: 'Red soil', 
        fertilizer: 'NPK 80:40:40', 
        yield: '1-1.5 tons/ha' 
      },
      { 
        id: 19, 
        name: 'Pigeonpea', 
        image: cropImages.pigeonpea, 
        titleDescription: 'Pigeonpea or arhar is a deep-rooted protein-rich pulse crop, thriving in red soils with its drought tolerance and soil-enriching nitrogen fixation ability.',
        description: {
          stage1: "Land preparation begins with deep summer plowing using moldboard plow to 30cm depth, breaking hard pan. After monsoon onset, harrowing 2-3 times achieves fine tilth. Red soils with good drainage provide ideal conditions. Field leveled and opened with furrows at 90x30cm spacing.",
          stage2: "Seed selection of medium duration desi varieties with 85% germination rate, adapted to local conditions. Seed treatment with Rhizobium and PSB cultures at 50g/kg seed each in 10% jaggery solution ensures effective nitrogen fixation in red soils.",
          stage3: "Seed treatment with Trichoderma viride at 10g/kg seed for 30 minutes controls wilt and other soil-borne diseases. Cow dung slurry coating with 5% panchagavya provides additional protection. Seeds shade dried for 2 hours before sowing.",
          stage4: "Sowing with onset of monsoon at 90x30cm spacing using manual dibbling at 4-5cm depth. Two seeds per hill planted, thinned to one at 20 days. Seed rate of 15-20kg/ha for pigeonpea in red soils under rainfed conditions.",
          stage5: "Basal application of well-decomposed FYM at 8 tons/ha, vermicompost at 2 tons/ha, and rock phosphate at 200kg/ha placed in furrows below seeds. Phosphorus essential for nodulation in pigeonpea. Organic matter improves red soil structure.",
          stage6: "Intercropping with groundnut, soybean, or sorghum at 2:1 ratio (2 rows intercrop : 1 row pigeonpea) optimizes land use. Short duration intercrops harvested before pigeonpea canopy closure provide additional income and act as insurance.",
          stage7: "Gap filling within 20 days maintains optimum population of 35,000-40,000 plants/ha. Two hand weedings at 30 and 60 days after sowing combined with earthing up at 60 days for plant support. Red soils with good drainage allow easy weeding.",
          stage8: "No irrigation required in rainfed conditions, pigeonpea highly drought-tolerant due to deep taproot accessing subsoil moisture. Critical stages flowering and pod development, lifesaving irrigation if severe drought occurs through furrow method.",
          stage9: "Jeevamrit application at flowering and pod filling stages through foliar spray enhances nutrient availability. Integrated pest management includes bird perches at 50/ha, pheromone traps for pod borer at 12/ha, neem oil spray if threshold crossed.",
          stage10: "Harvesting at 120-180 days when 80% pods dried, plants cut at base. Sun drying on threshing floors for 5-7 days to 10-12% moisture. Threshing using sticks or pedal thresher, winnowing, grading, and storage yields 0.8-1.2 tons/ha."
        },
        water: 'Low', 
        temp: '25-35°C', 
        duration: '120-180 days', 
        soil: 'Red soil', 
        fertilizer: 'NPK 40:60:40', 
        yield: '0.8-1.2 tons/ha' 
      }
    ]
  },
  rabi: {
    loamy: [
      { 
        id: 20, 
        name: 'Wheat', 
        image: cropImages.wheat, 
        titleDescription: 'Wheat is India\'s premier rabi cereal, providing staple food for millions, with organic methods producing healthy grains rich in nutrients and flavor.',
        description: {
          stage1: "Land preparation begins with pre-sowing irrigation (palewa) 10-12 days before plowing to facilitate moisture for tillage. Field plowed with moldboard plow to 20-25cm depth followed by 3-4 harrowings to achieve fine tilth. Well-decomposed FYM at 10 tons/ha incorporated during last plowing.",
          stage2: "Desi wheat varieties like Lokwan or organic certified varieties selected for disease resistance and local adaptation. Seed treatment with Trichoderma viride at 10g/kg and Pseudomonas fluorescens at 10g/kg for 30 minutes ensures disease protection against seed-borne pathogens.",
          stage3: "Sowing with onset of winter from October-November at 22.5x5cm spacing using seed drill at 4-5cm depth. Line sowing facilitates intercultivation and irrigation management. Seed rate of 100-120kg/ha depending on variety and sowing time.",
          stage4: "Basal application of well-decomposed FYM at 10 tons/ha and vermicompost at 2 tons/ha incorporated during final land preparation. Neem cake at 250kg/ha applied for termite control. Rock phosphate at 200kg/ha provides phosphorus for root development.",
          stage5: "First irrigation at crown root initiation stage (21 days after sowing) critical for tillering. Second irrigation at tillering (45 days), third at flowering (70 days), fourth at grain filling (90 days). Irrigation scheduling based on critical growth stages.",
          stage6: "Jeevamrit application at 30, 60, and 90 days after sowing through irrigation water enhances nutrient availability and soil biological activity. Panchagavya spray at 3% at flowering and grain filling stages improves grain quality and weight.",
          stage7: "Weed management through two hand weedings at 30 and 60 days after sowing controls broadleaf and grassy weeds. Intercropping with mustard or gram in alternate rows (8:2 ratio) optimizes land use and provides additional income.",
          stage8: "Integrated pest management includes monitoring for termites using light traps, controlled by neem cake application at 250kg/ha at sowing. Aphids managed by installing yellow sticky traps and predatory ladybird beetle conservation.",
          stage9: "Grain filling stage (80-110 days) critical for yield formation. Adequate moisture essential. Foliar spray of compost tea at 90 days enhances grain weight. Lodging prevention through balanced nutrition and timely irrigation.",
          stage10: "Harvesting at 120-150 days when grains hard with 18-20% moisture, straw completely yellow. Manual harvesting using sickles, sun drying on threshing floors for 4-5 days to 12-14% moisture. Threshing, winnowing yields 2.8-3.5 tons/ha."
        },
        water: 'Medium', 
        temp: '10-15°C', 
        duration: '120-150 days', 
        soil: 'Loamy soil', 
        fertilizer: 'NPK 120:60:40', 
        yield: '2.8-3.5 tons/ha' 
      },
      { 
        id: 21, 
        name: 'Tomato', 
        image: cropImages.tomato, 
        titleDescription: 'Tomato is a high-value versatile vegetable crop, with organic methods producing flavorful fruits rich in lycopene and antioxidants for healthy diets.',
        description: {
          stage1: "Nursery preparation begins with raised beds of 1.2m width treated with Trichoderma. Seedbed mixture of 5 parts soil, 3 parts FYM, 2 parts vermicompost. Desi variety seeds treated with Trichoderma and Pseudomonas before sowing, covered with fine soil and straw mulch.",
          stage2: "Main field prepared with deep plowing using moldboard plow to 25cm depth followed by harrowing 2-3 times. Raised beds of 1.2m width and 20cm height prepared for good drainage. Basal incorporation of FYM at 15 tons/ha and vermicompost at 3 tons/ha.",
          stage3: "Seedlings ready for transplanting at 25-30 days with 4-5 true leaves. Transplanting at 60x45cm spacing for indeterminate varieties, 75x60cm for determinate. Planting in evening hours reduces transplanting shock. Drip irrigation with mulching using paddy straw.",
          stage4: "Staking using bamboo stakes or coir ropes at 15 days after transplanting supports plants and improves air circulation. Training and pruning remove side shoots (suckers) weekly for better fruit quality and size in indeterminate varieties.",
          stage5: "Jeevamrit and panchagavya application at 10-day intervals through drip irrigation from 15 days after transplanting. Foliar spray of vermiwash at 3% at flowering and fruit set stages enhances flowering and fruit development.",
          stage6: "Hand weeding at 20-day intervals keeps beds clean. Mulching with straw conserves moisture and prevents soil splash on fruits reducing disease incidence. Earthing up at 30 days provides additional root support.",
          stage7: "Integrated pest management includes neem oil 2% spray for sucking pests like aphids and whiteflies, installation of yellow sticky traps at 12/ha. Fruit borer controlled by NPV spray at 250 LE/ha and hand picking of affected fruits.",
          stage8: "Disease management through preventive sprays of sour buttermilk (10% dilution) for powdery mildew, Trichoderma spray for wilt control. Field sanitation removes affected plant parts. Crop rotation with legumes breaks disease cycles.",
          stage9: "Harvesting at breaker stage (first color appearance) for distant markets, red ripe for local markets. Regular picking every 4-5 days over 60-90 days duration. Harvesting during cool morning hours maintains fruit quality and shelf life.",
          stage10: "Grading by size and color, packing in ventilated crates with cushioning material. Storage in cool place (10-12°C) with 85-90% humidity. Average organic yield 20-25 tons/ha over extended harvesting period. After final harvest, plants composted."
        },
        water: 'Medium', 
        temp: '15-25°C', 
        duration: '90-120 days', 
        soil: 'Loamy soil', 
        fertilizer: 'NPK 80:60:60', 
        yield: '20-25 tons/ha' 
      },
      { 
        id: 22, 
        name: 'Chickpea', 
        image: cropImages.chickpea, 
        titleDescription: 'Chickpea or gram is India\'s premier protein-rich pulse, with organic farming methods preserving its nutritional quality and soil-enriching legume benefits.',
        description: {
          stage1: "Land preparation begins with pre-sowing irrigation to facilitate moisture for tillage. Field plowed with moldboard plow to 20cm depth followed by 2-3 harrowings to achieve fine tilth. Well-decomposed FYM at 8 tons/ha and vermicompost at 1.5 tons/ha incorporated during last plowing.",
          stage2: "Desi chickpea varieties selected for wilt tolerance and local adaptation. Seed treatment with Rhizobium and PSB cultures at 50g/kg seed each in 10% jaggery solution ensures effective biological nitrogen fixation in root nodules.",
          stage3: "Seed treatment with Trichoderma viride at 10g/kg seed for 30 minutes controls wilt and root rot diseases. Cow dung slurry coating provides additional protection. Seeds shade dried for 2 hours before sowing for better establishment.",
          stage4: "Sowing from October to November at 30x10cm spacing using seed drill at 8-10cm depth. Deep sowing ensures moisture access in surface-dry conditions. Seed rate of 75-80kg/ha for desi varieties under rainfed or irrigated conditions.",
          stage5: "Basal application of well-decomposed FYM at 8 tons/ha and vermicompost at 1.5 tons/ha in furrows below seeds. Rock phosphate at 150kg/ha provides phosphorus for nodulation. No nitrogen fertilizer needed due to biological nitrogen fixation.",
          stage6: "No irrigation required if soil moisture adequate from pre-sowing irrigation. One or two irrigations at flowering (45-50 days) and pod filling (70-80 days) stages in case of dry winter through furrow method. Drainage channels essential during unseasonal rains.",
          stage7: "Jeevamrit application at 30 and 60 days after sowing through foliar spray enhances nutrient availability and plant growth. Panchagavya spray at 3% at flowering improves pod setting and grain filling under moisture stress.",
          stage8: "Weed management through one hand weeding at 30 days after sowing controls early weed competition. Intercropping with wheat or mustard in 4:1 or 6:2 ratio optimizes land use and provides additional income and pest suppression.",
          stage9: "Integrated pest management includes monitoring for pod borer using pheromone traps at 5/ha, installation of bird perches at 50/ha for natural pest control. Neem oil 2% spray at flowering if pod borer incidence crosses economic threshold.",
          stage10: "Harvesting at 90-110 days when 80% pods matured, plants turn brown. Plants uprooted or cut at base, sun-dried on threshing floors for 5-7 days to 12% moisture. Threshing, winnowing, grading, and storage yields 1.2-1.8 tons/ha."
        },
        water: 'Low', 
        temp: '20-25°C', 
        duration: '90-110 days', 
        soil: 'Loamy soil', 
        fertilizer: 'NPK 20:60:40', 
        yield: '1.2-1.8 tons/ha' 
      },
      { 
        id: 23, 
        name: 'Mustard', 
        image: cropImages.mustard, 
        titleDescription: 'Mustard is India\'s premier rabi oilseed, with organic methods producing healthy oil-rich seeds and nutritious oilcake for sustainable farming systems.',
        description: {
          stage1: "Land preparation begins with pre-sowing irrigation to facilitate moisture for tillage. Field plowed with moldboard plow to 20cm depth followed by 2-3 harrowings to achieve fine tilth. Well-decomposed FYM at 8 tons/ha and vermicompost at 1.5 tons/ha incorporated during last plowing.",
          stage2: "Desi mustard varieties like Varuna or organic certified hybrids selected for disease resistance and local adaptation. Seed treatment with Trichoderma viride at 10g/kg seed for 30 minutes controls Alternaria blight and other seed-borne diseases.",
          stage3: "Sowing from October to November at 45x15cm spacing using seed drill at 3-4cm depth. Line sowing with seed drill facilitates intercultivation and irrigation management. Seed rate of 4-5kg/ha for pure crop under irrigated conditions.",
          stage4: "Basal application of neem cake at 250kg/ha along with well-decomposed FYM at 8 tons/ha and vermicompost at 1.5 tons/ha incorporated during final land preparation. Rock phosphate at 150kg/ha provides phosphorus for root development.",
          stage5: "Gap filling within 15 days maintains optimum population of 1.5-1.8 lakh plants/ha. One or two irrigations at flowering (40-45 days) and pod filling (70-80 days) stages if winter dry. Irrigation at critical stages essential for yield.",
          stage6: "Jeevamrit application at 30 and 60 days after sowing through irrigation water or foliar spray enhances nutrient availability. Panchagavya spray at 3% at flowering improves pod setting and oil content in seeds.",
          stage7: "Weed management through two hand weedings at 25 and 45 days after sowing controls early weed competition. Intercropping with wheat or gram in alternate rows (6:2 or 8:2 ratio) optimizes land use and provides additional income.",
          stage8: "Integrated pest management includes monitoring for aphids using yellow sticky traps at 12/ha, conservation of predatory ladybird beetles. Neem oil 2% spray at flowering if aphid population crosses economic threshold of 20-25 aphids/plant.",
          stage9: "Disease management includes removal of Alternaria blight affected leaves, field sanitation. Crop rotation with cereals breaks disease cycles. Avoid water stress during pod filling for oil content and yield.",
          stage10: "Harvesting at 90-120 days when 80% pods turn yellow, plants cut at base with sickles. Sun drying on threshing floors for 5-7 days to 8-10% moisture. Threshing, winnowing, grading, and storage yields 1-1.5 tons/ha."
        },
        water: 'Low', 
        temp: '10-25°C', 
        duration: '90-120 days', 
        soil: 'Loamy soil', 
        fertilizer: 'NPK 60:40:40', 
        yield: '1-1.5 tons/ha' 
      }
    ],
    clay: [
      { 
        id: 24, 
        name: 'Wheat', 
        image: cropImages.wheat, 
        titleDescription: 'Wheat in clay soils achieves higher yields due to moisture retention, requiring careful land preparation and timely operations for optimal organic production.',
        description: {
          stage1: "Land preparation begins with pre-sowing irrigation when clay soil reaches working condition (15-20% moisture). Deep plowing with moldboard plow to 25cm depth followed by 3-4 harrowings at proper moisture achieves good tilth without clod formation. Well-decomposed FYM at 12 tons/ha incorporated.",
          stage2: "Desi wheat varieties with strong straw selected to prevent lodging in fertile clay soils. Seed treatment with Trichoderma viride at 10g/kg and Pseudomonas fluorescens at 10g/kg for 30 minutes ensures disease protection against seed-borne pathogens.",
          stage3: "Sowing from October-November at 22.5x5cm spacing using seed drill at 4-5cm depth. Clay soils require slightly shallower sowing (4cm) compared to light soils for better emergence. Seed rate of 100-120kg/ha depending on variety.",
          stage4: "Basal application of well-decomposed FYM at 12 tons/ha and vermicompost at 2 tons/ha incorporated during final land preparation. Neem cake at 250kg/ha applied for termite control in heavy soils. Rock phosphate at 200kg/ha for phosphorus.",
          stage5: "First irrigation at crown root initiation stage (21 days) critical. Clay soils retain moisture longer, requiring 3-4 irrigations compared to 4-5 in light soils. Drainage channels prepared to remove excess water during unseasonal rains.",
          stage6: "Jeevamrit application at 30, 60, and 90 days after sowing through irrigation water enhances nutrient availability. Clay soils with high cation exchange capacity retain nutrients longer. Panchagavya spray at 3% at flowering improves grain quality.",
          stage7: "Weed management through one hand weeding at 30 days after sowing controls early weed competition. Clay soils with good structure allow proper root development and tillering. Intercropping with chickpea in alternate rows optimizes land use.",
          stage8: "Integrated pest management includes monitoring for termites using light traps, controlled by neem cake application. Clay soils with good moisture reduce pest incidence. Bird perches at 50/ha provide natural pest control.",
          stage9: "Grain filling stage (80-110 days) benefits from sustained moisture in clay soils. Foliar spray of compost tea at 90 days enhances grain weight. Lodging prevention through balanced nutrition avoiding excess nitrogen.",
          stage10: "Harvesting at 120-150 days when grains hard with 18-20% moisture. Manual harvesting using sickles, sun drying on threshing floors for 4-5 days to 12-14% moisture. Threshing, winnowing yields 3-3.8 tons/ha due to sustained moisture availability."
        },
        water: 'Medium', 
        temp: '10-15°C', 
        duration: '120-150 days', 
        soil: 'Clay soil', 
        fertilizer: 'NPK 120:60:40', 
        yield: '3-3.8 tons/ha' 
      },
      { 
        id: 25, 
        name: 'Chickpea', 
        image: cropImages.chickpea, 
        titleDescription: 'Chickpea in clay soils benefits from residual moisture, requiring careful drainage and proper seedbed preparation for successful organic pulse production.',
        description: {
          stage1: "Land preparation begins with pre-sowing irrigation if soil dry, followed by one deep plowing and harrowing 2-3 times at proper moisture (15-20%). Clay soils require timely operation to avoid clod formation. Field leveled and broad beds formed with drainage channels.",
          stage2: "Desi chickpea varieties selected for wilt tolerance and local adaptation to heavy soils. Seed treatment with Rhizobium and PSB cultures at 50g/kg seed each in 10% jaggery solution ensures effective biological nitrogen fixation in clay soils.",
          stage3: "Seed treatment with Trichoderma viride at 10g/kg seed for 30 minutes controls wilt and root rot diseases common in heavy soils. Cow dung slurry coating provides additional protection. Seeds shade dried for 2 hours before sowing.",
          stage4: "Sowing from October to November at 30x10cm spacing using seed drill at 8-10cm depth. Deep sowing in clay soils ensures moisture access. Seed rate of 75-80kg/ha. Clay soils retain moisture from pre-sowing irrigation, eliminating need for irrigation.",
          stage5: "Basal application of well-decomposed FYM at 8 tons/ha and vermicompost at 1.5 tons/ha in furrows below seeds. Rock phosphate at 150kg/ha provides phosphorus for nodulation. Drainage channels essential to prevent waterlogging during unseasonal rains.",
          stage6: "No irrigation required in clay soils due to residual moisture retention. Jeevamrit application at 30 and 60 days after sowing through foliar spray enhances nutrient availability. Panchagavya spray at 3% at flowering improves pod setting.",
          stage7: "Weed management through one hand weeding at 30 days after sowing controls early weed competition. Intercropping with safflower or linseed in 4:1 ratio optimizes land use and provides additional income in heavy soils.",
          stage8: "Integrated pest management includes monitoring for pod borer using pheromone traps at 5/ha, installation of bird perches at 50/ha. Clay soils with good structure promote healthy root growth reducing disease incidence.",
          stage9: "Pod filling stage (70-90 days) critical for yield. Adequate moisture from clay soils supports grain development. Field sanitation removes affected plant parts. Crop rotation with wheat breaks disease cycles.",
          stage10: "Harvesting at 90-110 days when 80% pods matured. Plants cut at base, sun-dried on threshing floors for 5-7 days to 12% moisture. Threshing, winnowing, grading, and storage yields 1.2-1.8 tons/ha. Soil structure improves through nitrogen fixation."
        },
        water: 'Low', 
        temp: '20-25°C', 
        duration: '90-110 days', 
        soil: 'Clay soil', 
        fertilizer: 'NPK 20:60:40', 
        yield: '1.2-1.8 tons/ha' 
      },
      { 
        id: 26, 
        name: 'Mustard', 
        image: cropImages.mustard, 
        titleDescription: 'Mustard in clay soils benefits from moisture reserves, requiring proper drainage and timely sowing for optimal organic oilseed production in heavy soils.',
        description: {
          stage1: "Land preparation begins with pre-sowing irrigation when clay soil reaches working condition. Field plowed 2-3 times with moldboard plow to 20cm depth followed by harrowing. Well-decomposed FYM at 8 tons/ha and vermicompost at 1.5 tons/ha incorporated during last plowing.",
          stage2: "Desi mustard varieties selected for disease resistance and local adaptation to heavy soils. Seed treatment with Trichoderma viride at 10g/kg seed for 30 minutes controls Alternaria blight and other seed-borne diseases.",
          stage3: "Sowing from October to November at 45x15cm spacing using seed drill at 3-4cm depth. Line sowing with seed drill facilitates intercultivation. Seed rate of 4-5kg/ha. Clay soils provide sustained moisture from pre-sowing irrigation.",
          stage4: "Basal application of neem cake at 250kg/ha along with well-decomposed FYM at 8 tons/ha and vermicompost at 1.5 tons/ha incorporated during final land preparation. Rock phosphate at 150kg/ha provides phosphorus for root development.",
          stage5: "Gap filling within 15 days maintains optimum population. Drainage channels essential to prevent waterlogging during unseasonal rains. Clay soils retain moisture longer, often requiring only 1 irrigation at pod filling stage if winter dry.",
          stage6: "Jeevamrit application at 30 and 60 days after sowing through foliar spray enhances nutrient availability in clay soils. Panchagavya spray at 3% at flowering improves pod setting and oil content in seeds.",
          stage7: "Weed management through one hand weeding at 25-30 days after sowing controls early weed competition. Intercropping with wheat or gram in alternate rows (6:2 ratio) optimizes land use in heavy soils.",
          stage8: "Integrated pest management includes monitoring for aphids using yellow sticky traps at 12/ha. Clay soils with good moisture reduce aphid incidence. Neem oil 2% spray at flowering if aphid population crosses threshold.",
          stage9: "Pod filling stage (70-90 days) critical for oil content. Adequate moisture from clay soils supports seed development. Field sanitation removes affected plant parts. Crop rotation with cereals breaks disease cycles.",
          stage10: "Harvesting at 90-120 days when 80% pods turn yellow. Plants cut at base, sun-dried on threshing floors for 5-7 days to 8-10% moisture. Threshing, winnowing, grading, and storage yields 1-1.5 tons/ha in clay soils."
        },
        water: 'Low', 
        temp: '10-25°C', 
        duration: '90-120 days', 
        soil: 'Clay soil', 
        fertilizer: 'NPK 60:40:40', 
        yield: '1-1.5 tons/ha' 
      },
      { 
        id: 27, 
        name: 'Barley', 
        image: cropImages.barley, 
        titleDescription: 'Barley is a hardy rabi cereal tolerant to salinity and drought, with organic methods producing grain for food, feed, and malting industries.',
        description: {
          stage1: "Land preparation begins with pre-sowing irrigation followed by one deep plowing with moldboard plow to 20cm depth and 2-3 harrowings at proper moisture. Clay soils require timely operation to avoid clod formation. Field leveled and opened with furrows at 22.5cm spacing.",
          stage2: "Six-row or two-row barley varieties selected for local adaptation and end use (food, feed, or malting). Seed treatment with Trichoderma viride at 10g/kg seed for 30 minutes controls smut and other seed-borne diseases.",
          stage3: "Sowing from October to November at 22.5x5cm spacing using seed drill at 4-5cm depth. Seed rate of 80-100kg/ha depending on variety and sowing time. Barley tolerates salinity better than wheat, suitable for problematic clay soils.",
          stage4: "Basal application of well-decomposed FYM at 8 tons/ha and vermicompost at 1.5 tons/ha incorporated during final land preparation. Rock phosphate at 150kg/ha provides phosphorus for root development in heavy soils.",
          stage5: "Irrigation management with critical stages at crown root initiation (21 days), tillering (45 days), and grain filling (80 days). Clay soils retain moisture longer, requiring only 2-3 irrigations compared to 3-4 in light soils.",
          stage6: "Jeevamrit application at 30 and 60 days after sowing through irrigation water enhances nutrient availability. Barley matures 15-20 days earlier than wheat, allowing timely sowing of summer crops. Panchagavya spray at 3% at flowering.",
          stage7: "Weed management through two hand weedings at 30 and 60 days after sowing controls weeds. Barley competitive against weeds due to rapid early growth. Intercropping with chickpea or lentils in alternate rows optimizes land use.",
          stage8: "Integrated pest management includes monitoring for aphids and termites using light traps, controlled by neem cake application at 250kg/ha at sowing. Barley less affected by pests compared to wheat in clay soils.",
          stage9: "Grain filling stage (70-90 days) benefits from sustained moisture in clay soils. Foliar spray of compost tea at 70 days enhances grain weight. Barley tolerant to moisture stress at later stages.",
          stage10: "Harvesting at 90-120 days when grains hard with 18-20% moisture. Manual harvesting using sickles, sun drying on threshing floors for 4-5 days to 12-14% moisture. Threshing, winnowing yields 2-2.5 tons/ha. Straw preferred cattle feed."
        },
        water: 'Low', 
        temp: '12-15°C', 
        duration: '90-120 days', 
        soil: 'Clay soil', 
        fertilizer: 'NPK 80:40:40', 
        yield: '2-2.5 tons/ha' 
      }
    ],
    sandy: [
      { 
        id: 28, 
        name: 'Groundnut', 
        image: cropImages.groundnut, 
        titleDescription: 'Rabi groundnut in sandy soils produces high-quality kernels with irrigation support, utilizing the soil\'s excellent drainage and aeration for peg penetration.',
        description: {
          stage1: "Land preparation begins with thorough plowing using moldboard plow to 25cm depth followed by harrowing 3-4 times to achieve fine tilth. Field leveled and ridges formed at 30cm spacing using ridger. Drip irrigation system installed before sowing for rabi crop.",
          stage2: "Bold variety seeds hand-shelled 2-3 days before sowing, graded removing immature seeds. Seed treatment with Rhizobium and PSB cultures at 50g/kg seed each in 10% jaggery solution ensures effective nodulation in sandy soils.",
          stage3: "Seed treatment with Trichoderma viride at 10g/kg seed for 30 minutes controls Aspergillus. Cow dung slurry coating with 5% panchagavya provides protection. Seeds shade dried for 2 hours before sowing during October-November.",
          stage4: "Sowing at 30x10cm spacing on ridge tops at 4-5cm depth. Two seeds per hill planted, thinned to one at 15 days. Seed rate of 120-140kg/ha. Sandy soils require slightly deeper sowing (5cm) for moisture access.",
          stage5: "Basal application of well-decomposed FYM at 10 tons/ha, vermicompost at 2 tons/ha, and neem cake at 250kg/ha in furrows below seeds. Gypsum at 500kg/ha applied at peg initiation stage (35-40 days) for calcium.",
          stage6: "Drip irrigation scheduled at 5-7 day intervals to maintain adequate soil moisture. Critical stages at flowering (25-30 days), peg formation (40-45 days), and pod development (60-75 days). Sandy soils drain quickly, requiring frequent light irrigations.",
          stage7: "Intercultivation with hand hoe at 20 and 40 days after sowing controls weeds and provides light earthing up. Second intercultivation coinciding with peg initiation facilitates peg penetration in sandy soils. Hand weeding removes within-row weeds.",
          stage8: "Mulching with straw between rows at 3 tons/ha conserves moisture in sandy soils, reducing irrigation frequency by 30%. Jeevamrit application at 30 and 50 days through drip enhances nutrient availability in well-drained soils.",
          stage9: "Integrated pest management includes monitoring for leaf miner using yellow sticky traps, tikka disease control through neem oil 2% spray at 15-day intervals if needed. Field sanitation removes volunteer plants.",
          stage10: "Harvesting at 100-120 days when 75% pods matured. Sandy soils allow easy uprooting at proper moisture. Pods sun-dried on mats for 5-6 days to 8% moisture. Grading, storage yields 1.5-2 tons/ha. Haulms provide protein-rich cattle feed."
        },
        water: 'Medium', 
        temp: '20-25°C', 
        duration: '100-120 days', 
        soil: 'Sandy soil', 
        fertilizer: 'NPK 40:60:40', 
        yield: '1.5-2 tons/ha' 
      },
      { 
        id: 29, 
        name: 'Carrot', 
        image: cropImages.carrot, 
        titleDescription: 'Carrot in sandy soils produces straight, well-shaped roots with excellent color and flavor, benefiting from loose soil structure and good drainage.',
        description: {
          stage1: "Land preparation begins with deep plowing using moldboard plow to 25cm depth followed by harrowing 3-4 times to achieve fine, loose tilth. Raised beds of 1.2m width and 20cm height prepared for good root development. Drip irrigation system installed.",
          stage2: "Desi carrot varieties selected for color, sweetness, and local adaptation. No seed treatment required as carrots direct seeded. Seeds mixed with fine sand (1:10 ratio) for uniform distribution during sowing.",
          stage3: "Sowing from October to November in rows at 30cm spacing on beds. Seeds placed 1-2cm deep, covered with fine soil and pressed gently. Seed rate of 4-5kg/ha for carrot in sandy soils under irrigation.",
          stage4: "Basal application of well-decomposed FYM at 15 tons/ha, vermicompost at 3 tons/ha, and wood ash at 500kg/ha incorporated during bed preparation. Organic matter in sandy soils improves water holding capacity and root quality.",
          stage5: "Drip irrigation with mulching using paddy straw conserves moisture in sandy soils. Sandy soils require irrigation at 2-3 day intervals. Mulching reduces irrigation frequency by 30% and prevents weed growth.",
          stage6: "Thinning at 25-30 days maintains 5-7cm spacing between plants for uniform root development. Overcrowding produces thin, forked roots. Hand weeding at 20-day intervals keeps beds clean in sandy soils.",
          stage7: "Jeevamrit and panchagavya application at 15-day intervals through drip irrigation enhances root development and sweetness. Foliar spray of vermiwash at 3% at 45 days improves root color and quality.",
          stage8: "Integrated pest management includes monitoring for leaf blight, controlled by sour buttermilk spray at 10% dilution weekly. Carrot fly managed by marigold intercropping as trap crop in sandy soils.",
          stage9: "Root development stage (60-90 days) critical for quality. Sandy soils allow unimpeded root growth producing straight marketable carrots. Adequate moisture essential through drip irrigation during this period.",
          stage10: "Harvesting at 90-110 days when roots reach marketable size (15-20cm length, 3-4cm diameter). Undercutting and pulling, tops trimmed leaving 2cm, roots washed, graded by size. Average organic yield 20-25 tons/ha."
        },
        water: 'Medium', 
        temp: '15-20°C', 
        duration: '90-110 days', 
        soil: 'Sandy soil', 
        fertilizer: 'NPK 60:80:80', 
        yield: '20-25 tons/ha' 
      },
      { 
        id: 30, 
        name: 'Onion', 
        image: cropImages.onion, 
        titleDescription: 'Onion in sandy soils produces well-shaped bulbs with good storage quality, utilizing the soil\'s excellent drainage for healthy bulb development.',
        description: {
          stage1: "Nursery preparation during September-October on raised beds of 1.2m width. Seedbed mixture of 5 parts soil, 3 parts FYM, 2 parts vermicompost treated with Trichoderma. Desi variety seeds sown in lines at 5cm spacing, covered with fine soil and straw mulch.",
          stage2: "Main field prepared with deep plowing using moldboard plow to 25cm depth followed by harrowing 3-4 times. Raised beds of 1.2m width and 20cm height prepared for good drainage in sandy soils. Drip irrigation system installed.",
          stage3: "Basal incorporation of well-decomposed FYM at 15 tons/ha, vermicompost at 3 tons/ha, neem cake at 500kg/ha, wood ash at 1 ton/ha during bed preparation. Sandy soils require higher organic matter for water retention.",
          stage4: "Seedlings ready for transplanting at 6-8 weeks with pencil thickness (4-5mm diameter). Transplanting at 15x10cm spacing on beds during October-November. Planting depth such that roots covered but neck exposed. Light irrigation after transplanting.",
          stage5: "Drip irrigation with mulching using paddy straw conserves moisture in sandy soils. Irrigation at 3-4 day intervals during vegetative growth (0-60 days), 5-6 day intervals during bulb development (60-100 days).",
          stage6: "Jeevamrit and panchagavya application at 15-day intervals through drip from 15 days after transplanting. Foliar spray of vermiwash at 3% at 45 and 60 days enhances bulb development and quality.",
          stage7: "Hand weeding at 20-day intervals critical as onions poor weed competitors in sandy soils. Mulching suppresses weeds and conserves moisture. Earthing up at 45 days provides support for bulb development.",
          stage8: "Integrated pest management includes monitoring for thrips using blue sticky traps at 12/ha, controlled by neem oil 2% spray at 15-day intervals if population crosses threshold of 10 thrips/plant.",
          stage9: "Bulb development stage (60-100 days) critical for yield. Adequate moisture essential through drip irrigation. Reduce irrigation 15 days before harvest for curing. Sandy soils produce well-shaped bulbs with good storage quality.",
          stage10: "Harvesting at 100-120 days when 50-60% neck fall occurs. Bulbs undercut and left in field for 2-3 days curing. Tops trimmed leaving 2cm, bulbs graded, cured in shade for 7-10 days. Storage in mesh bags yields 15-20 tons/ha."
        },
        water: 'Medium', 
        temp: '13-25°C', 
        duration: '100-120 days', 
        soil: 'Sandy soil', 
        fertilizer: 'NPK 80:60:80', 
        yield: '15-20 tons/ha' 
      },
      { 
        id: 31, 
        name: 'Radish', 
        image: cropImages.radish, 
        titleDescription: 'Radish in sandy soils produces crisp, tender roots with mild flavor, utilizing loose soil structure for rapid, uniform root development without forking.',
        description: {
          stage1: "Land preparation begins with deep plowing using moldboard plow to 25cm depth followed by harrowing 3-4 times to achieve fine, loose tilth. Raised beds of 1.2m width and 20cm height prepared for easy root penetration. Drip irrigation system installed.",
          stage2: "Desi radish varieties selected for root size (30-40cm length), pungency level, and local adaptation. Seeds treated with Trichoderma at 5g/kg for 30 minutes for disease protection against damping off.",
          stage3: "Sowing from October to February in rows at 30cm spacing on beds. Seeds placed 1-2cm deep, covered with fine soil and pressed gently. Seed rate of 8-10kg/ha depending on variety. Quick maturity allows multiple sowings.",
          stage4: "Basal application of well-decomposed FYM at 12 tons/ha and vermicompost at 2 tons/ha incorporated during bed preparation. Wood ash at 500kg/ha provides potash for root development in sandy soils.",
          stage5: "Drip or sprinkler irrigation maintains soil moisture for continuous root growth. Sandy soils require irrigation at 2-3 day intervals. Mulching with straw conserves moisture and prevents soil crusting.",
          stage6: "Thinning at 15-20 days maintains 8-10cm spacing between plants for uniform root development. Overcrowding produces thin, forked roots. Hand weeding at 15-day intervals keeps beds clean in sandy soils.",
          stage7: "Jeevamrit application at 20 and 35 days after sowing through drip enhances root development and quality. Foliar spray of panchagavya at 3% at 30 days improves root size and tenderness.",
          stage8: "Integrated pest management includes monitoring for leaf spot and root maggots, managed by neem oil spray at 2ml/lit if needed. Crop rotation with leafy vegetables breaks pest cycles in sandy soils.",
          stage9: "Root development stage (30-50 days) critical for quality. Sandy soils allow unimpeded root elongation without resistance or forking. Adequate moisture essential through drip irrigation during this period.",
          stage10: "Harvesting at 45-60 days for early varieties, 60-70 days for main season when roots reach marketable size (30-35cm length, 4-5cm diameter). Undercutting and pulling, tops trimmed, roots washed, graded. Average yield 15-20 tons/ha."
        },
        water: 'Medium', 
        temp: '15-20°C', 
        duration: '60-70 days', 
        soil: 'Sandy soil', 
        fertilizer: 'NPK 60:60:60', 
        yield: '15-20 tons/ha' 
      }
    ],
    black: [
      { 
        id: 32, 
        name: 'Chickpea', 
        image: cropImages.chickpea, 
        titleDescription: 'Chickpea in black soils benefits from residual moisture, requiring careful drainage and proper seedbed preparation for successful organic pulse production.',
        description: {
          stage1: "Land preparation begins with pre-sowing irrigation if needed, followed by one deep plowing with moldboard plow to 20cm depth and harrowing 2-3 times at proper moisture (15-20%). Field leveled and broad beds formed with drainage channels along borders for excess water removal.",
          stage2: "Desi chickpea varieties selected for wilt tolerance and local adaptation to heavy soils. Seed treatment with Rhizobium and PSB cultures at 50g/kg seed each in 10% jaggery solution ensures effective biological nitrogen fixation in black soils.",
          stage3: "Seed treatment with Trichoderma viride at 10g/kg seed for 30 minutes controls wilt and root rot diseases common in heavy soils. Cow dung slurry coating provides additional protection. Seeds shade dried for 2 hours before sowing.",
          stage4: "Sowing from October to November at 30x10cm spacing using seed drill at 8-10cm depth. Deep sowing in black soils ensures moisture access from residual soil moisture. Seed rate of 75-80kg/ha for desi varieties.",
          stage5: "Basal application of well-decomposed FYM at 8 tons/ha and vermicompost at 1.5 tons/ha in furrows below seeds. Rock phosphate at 150kg/ha provides phosphorus for nodulation. No irrigation needed due to residual moisture in black soils.",
          stage6: "Drainage channels essential to prevent waterlogging during unseasonal rains. Black soils retain moisture from pre-sowing irrigation, supporting crop growth through winter. Jeevamrit application at 30 and 60 days through foliar spray.",
          stage7: "Weed management through one hand weeding at 30 days after sowing controls early weed competition. Intercropping with safflower or linseed in 4:1 ratio optimizes land use and provides additional income in heavy soils.",
          stage8: "Integrated pest management includes monitoring for pod borer using pheromone traps at 5/ha, installation of bird perches at 50/ha. Black soils with good structure promote healthy root growth reducing disease incidence.",
          stage9: "Pod filling stage (70-90 days) critical for yield. Adequate moisture from black soils supports grain development. Field sanitation removes affected plant parts. Crop rotation with wheat breaks disease cycles.",
          stage10: "Harvesting at 90-110 days when 80% pods matured. Plants cut at base, sun-dried on threshing floors for 5-7 days to 12% moisture. Threshing, winnowing, grading, and storage yields 1.2-1.8 tons/ha. Soil structure improves through nitrogen fixation."
        },
        water: 'Low', 
        temp: '20-25°C', 
        duration: '90-110 days', 
        soil: 'Black soil', 
        fertilizer: 'NPK 20:60:40', 
        yield: '1.2-1.8 tons/ha' 
      },
      { 
        id: 33, 
        name: 'Wheat', 
        image: cropImages.wheat, 
        titleDescription: 'Wheat in black soils achieves high yields through residual moisture utilization, requiring proper land preparation and timely sowing for organic production.',
        description: {
          stage1: "Land preparation begins with pre-sowing irrigation when black soil reaches working condition (15-20% moisture). Deep plowing with moldboard plow to 25cm depth followed by 3-4 harrowings at proper moisture achieves good tilth without clod formation. Well-decomposed FYM at 12 tons/ha incorporated.",
          stage2: "Desi wheat varieties with strong straw selected to prevent lodging in fertile black soils. Seed treatment with Trichoderma viride at 10g/kg and Pseudomonas fluorescens at 10g/kg for 30 minutes ensures disease protection against seed-borne pathogens.",
          stage3: "Sowing from October-November at 22.5x5cm spacing using seed drill at 4-5cm depth. Black soils provide sustained moisture from pre-sowing irrigation. Seed rate of 100-120kg/ha depending on variety and sowing time.",
          stage4: "Basal application of well-decomposed FYM at 12 tons/ha and vermicompost at 2 tons/ha incorporated during final land preparation. Neem cake at 250kg/ha applied for termite control. Rock phosphate at 200kg/ha for phosphorus.",
          stage5: "First irrigation at crown root initiation stage (21 days) critical if winter dry. Black soils retain moisture longer, requiring only 2-3 irrigations compared to 4-5 in light soils. Drainage channels prepared to remove excess water during rains.",
          stage6: "Jeevamrit application at 30, 60, and 90 days after sowing through irrigation water enhances nutrient availability. Black soils with high cation exchange capacity retain nutrients longer. Panchagavya spray at 3% at flowering improves grain quality.",
          stage7: "Weed management through one hand weeding at 30 days after sowing controls early weed competition. Black soils with good structure allow proper root development and tillering. Intercropping with chickpea in alternate rows optimizes land use.",
          stage8: "Integrated pest management includes monitoring for termites using light traps, controlled by neem cake application. Black soils with good moisture reduce pest incidence. Bird perches at 50/ha provide natural pest control.",
          stage9: "Grain filling stage (80-110 days) benefits from sustained moisture in black soils. Foliar spray of compost tea at 90 days enhances grain weight. Lodging prevention through balanced nutrition avoiding excess nitrogen.",
          stage10: "Harvesting at 120-150 days when grains hard with 18-20% moisture. Manual harvesting using sickles, sun drying on threshing floors for 4-5 days to 12-14% moisture. Threshing, winnowing yields 2.8-3.5 tons/ha."
        },
        water: 'Medium', 
        temp: '10-15°C', 
        duration: '120-150 days', 
        soil: 'Black soil', 
        fertilizer: 'NPK 120:60:40', 
        yield: '2.8-3.5 tons/ha' 
      },
      { 
        id: 34, 
        name: 'Mustard', 
        image: cropImages.mustard, 
        titleDescription: 'Mustard in black soils benefits from moisture reserves, requiring proper drainage and timely sowing for optimal organic oilseed production in heavy soils.',
        description: {
          stage1: "Land preparation begins with pre-sowing irrigation when black soil reaches working condition. Field plowed 2-3 times with moldboard plow to 20cm depth followed by harrowing. Well-decomposed FYM at 8 tons/ha and vermicompost at 1.5 tons/ha incorporated during last plowing.",
          stage2: "Desi mustard varieties selected for disease resistance and local adaptation to heavy soils. Seed treatment with Trichoderma viride at 10g/kg seed for 30 minutes controls Alternaria blight and other seed-borne diseases.",
          stage3: "Sowing from October to November at 45x15cm spacing using seed drill at 3-4cm depth. Line sowing facilitates intercultivation. Seed rate of 4-5kg/ha. Black soils provide sustained moisture from pre-sowing irrigation.",
          stage4: "Basal application of neem cake at 250kg/ha along with well-decomposed FYM at 8 tons/ha and vermicompost at 1.5 tons/ha incorporated during final land preparation. Rock phosphate at 150kg/ha provides phosphorus for root development.",
          stage5: "Gap filling within 15 days maintains optimum population. Drainage channels essential to prevent waterlogging during unseasonal rains. Black soils retain moisture longer, often requiring only 1 irrigation at pod filling stage if winter dry.",
          stage6: "Jeevamrit application at 30 and 60 days after sowing through foliar spray enhances nutrient availability in black soils. Panchagavya spray at 3% at flowering improves pod setting and oil content in seeds.",
          stage7: "Weed management through one hand weeding at 25-30 days after sowing controls early weed competition. Intercropping with wheat or gram in alternate rows (6:2 ratio) optimizes land use in heavy soils.",
          stage8: "Integrated pest management includes monitoring for aphids using yellow sticky traps at 12/ha. Black soils with good moisture reduce aphid incidence. Neem oil 2% spray at flowering if aphid population crosses threshold.",
          stage9: "Pod filling stage (70-90 days) critical for oil content. Adequate moisture from black soils supports seed development. Field sanitation removes affected plant parts. Crop rotation with cereals breaks disease cycles.",
          stage10: "Harvesting at 90-120 days when 80% pods turn yellow. Plants cut at base, sun-dried on threshing floors for 5-7 days to 8-10% moisture. Threshing, winnowing, grading, and storage yields 1-1.5 tons/ha in black soils."
        },
        water: 'Low', 
        temp: '10-25°C', 
        duration: '90-120 days', 
        soil: 'Black soil', 
        fertilizer: 'NPK 60:40:40', 
        yield: '1-1.5 tons/ha' 
      },
      { 
        id: 35, 
        name: 'Linseed', 
        image: cropImages.linseed, 
        titleDescription: 'Linseed or flaxseed is a nutritious oilseed crop adapted to black soils, with organic methods producing omega-3 rich seeds for health and industry.',
        description: {
          stage1: "Land preparation begins with pre-sowing irrigation followed by one deep plowing with moldboard plow to 20cm depth and 2-3 harrowings at proper moisture. Field leveled and opened with furrows at 30cm spacing. Well-decomposed FYM at 6 tons/ha incorporated.",
          stage2: "Desi linseed varieties selected for oil content, disease resistance, and local adaptation to heavy soils. Seed treatment with Trichoderma viride at 10g/kg seed for 30 minutes controls wilt and other seed-borne diseases.",
          stage3: "Sowing from October to November at 30x5cm spacing using seed drill at 2-3cm depth. Shallow sowing essential for uniform emergence in black soils. Seed rate of 20-25kg/ha for linseed under rainfed conditions.",
          stage4: "Basal application of well-decomposed FYM at 6 tons/ha and vermicompost at 1 ton/ha incorporated during final land preparation. Rock phosphate at 100kg/ha provides phosphorus for root development in black soils.",
          stage5: "No irrigation required in black soils due to residual moisture retention from pre-sowing irrigation. Drainage channels essential to prevent waterlogging during unseasonal rains. Black soils support crop through winter.",
          stage6: "Jeevamrit application at 30 and 60 days after sowing through foliar spray enhances nutrient availability in black soils. Panchagavya spray at 3% at flowering improves capsule setting and oil content in seeds.",
          stage7: "Weed management through one hand weeding at 30 days after sowing controls early weed competition. Intercropping with chickpea or wheat in 4:1 ratio optimizes land use and provides additional income.",
          stage8: "Integrated pest management includes monitoring for aphids using yellow sticky traps at 12/ha. Linseed less affected by pests in black soils. Neem oil 2% spray at flowering if aphid population crosses threshold.",
          stage9: "Capsule filling stage (70-90 days) critical for oil content. Adequate moisture from black soils supports seed development. Field sanitation removes affected plant parts. Crop rotation with cereals breaks disease cycles.",
          stage10: "Harvesting at 100-120 days when 80% capsules turn brown. Plants uprooted or cut at base, sun-dried on threshing floors for 5-7 days to 8-10% moisture. Threshing, winnowing, grading yields 0.8-1.2 tons/ha."
        },
        water: 'Low', 
        temp: '10-25°C', 
        duration: '100-120 days', 
        soil: 'Black soil', 
        fertilizer: 'NPK 60:40:40', 
        yield: '0.8-1.2 tons/ha' 
      }
    ],
    red: [
      { 
        id: 36, 
        name: 'Tomato', 
        image: cropImages.tomato, 
        titleDescription: 'Tomato in red soils produces flavorful fruits with good disease resistance, benefiting from excellent drainage and warm conditions during rabi season.',
        description: {
          stage1: "Nursery preparation during September on raised beds of 1.2m width treated with Trichoderma. Seedbed mixture of 5 parts soil, 3 parts FYM, 2 parts vermicompost. Desi variety seeds treated with Trichoderma and Pseudomonas before sowing, covered with fine soil and straw mulch.",
          stage2: "Main field prepared with deep plowing using moldboard plow to 25cm depth followed by harrowing 2-3 times. Red soils with excellent drainage require raised beds of 1.2m width and 20cm height. Drip irrigation system installed.",
          stage3: "Basal incorporation of well-decomposed FYM at 15 tons/ha, vermicompost at 3 tons/ha, neem cake at 500kg/ha during bed preparation. Red soils benefit from higher organic matter for water retention.",
          stage4: "Seedlings ready for transplanting at 25-30 days with 4-5 true leaves during October. Transplanting at 60x45cm spacing for indeterminate varieties. Planting in evening hours reduces transplanting shock. Drip irrigation with mulching.",
          stage5: "Staking using bamboo stakes at 15 days after transplanting supports plants and improves air circulation. Training and pruning remove side shoots weekly for better fruit quality in red soils with good drainage.",
          stage6: "Jeevamrit and panchagavya application at 10-day intervals through drip from 15 days after transplanting. Foliar spray of vermiwash at 3% at flowering and fruit set stages enhances flowering and fruit development.",
          stage7: "Hand weeding at 20-day intervals keeps beds clean. Red soils with good drainage allow easy weeding. Mulching with straw conserves moisture and prevents soil splash on fruits reducing disease incidence.",
          stage8: "Integrated pest management includes neem oil 2% spray for sucking pests, installation of yellow sticky traps at 12/ha. Fruit borer controlled by NPV spray at 250 LE/ha and hand picking of affected fruits.",
          stage9: "Disease management through preventive sprays of sour buttermilk (10% dilution) for powdery mildew. Red soils with good drainage reduce root diseases. Field sanitation removes affected plant parts.",
          stage10: "Harvesting at breaker stage for distant markets, red ripe for local markets. Regular picking every 4-5 days over 60-90 days. Grading, packing yields 20-25 tons/ha. Red soils produce healthy crops with minimal disease pressure."
        },
        water: 'Medium', 
        temp: '15-25°C', 
        duration: '90-120 days', 
        soil: 'Red soil', 
        fertilizer: 'NPK 80:60:60', 
        yield: '20-25 tons/ha' 
      },
      { 
        id: 37, 
        name: 'Onion', 
        image: cropImages.onion, 
        titleDescription: 'Onion in red soils produces well-shaped bulbs with excellent storage quality, utilizing good drainage and aeration for healthy bulb development.',
        description: {
          stage1: "Nursery preparation during September-October on raised beds of 1.2m width. Seedbed mixture of 5 parts soil, 3 parts FYM, 2 parts vermicompost treated with Trichoderma. Desi variety seeds sown in lines at 5cm spacing, covered with fine soil and straw mulch.",
          stage2: "Main field prepared with deep plowing using moldboard plow to 25cm depth followed by harrowing 3-4 times. Raised beds of 1.2m width and 20cm height prepared for excellent drainage in red soils. Drip irrigation system installed.",
          stage3: "Basal incorporation of well-decomposed FYM at 15 tons/ha, vermicompost at 3 tons/ha, neem cake at 500kg/ha, wood ash at 1 ton/ha during bed preparation. Red soils require organic matter for water retention.",
          stage4: "Seedlings ready for transplanting at 6-8 weeks with pencil thickness during October-November. Transplanting at 15x10cm spacing on beds. Planting depth such that roots covered but neck exposed. Light irrigation after transplanting.",
          stage5: "Drip irrigation with mulching using paddy straw conserves moisture in red soils. Irrigation at 3-4 day intervals during vegetative growth (0-60 days), 5-6 day intervals during bulb development (60-100 days).",
          stage6: "Jeevamrit and panchagavya application at 15-day intervals through drip from 15 days after transplanting. Foliar spray of vermiwash at 3% at 45 and 60 days enhances bulb development and quality in red soils.",
          stage7: "Hand weeding at 20-day intervals critical as onions poor weed competitors. Red soils with good drainage allow easy weeding. Mulching suppresses weeds and conserves moisture. Earthing up at 45 days provides support.",
          stage8: "Integrated pest management includes monitoring for thrips using blue sticky traps at 12/ha, controlled by neem oil 2% spray at 15-day intervals if population crosses threshold of 10 thrips/plant.",
          stage9: "Bulb development stage (60-100 days) critical for yield. Red soils with good drainage produce well-shaped bulbs with good storage quality. Reduce irrigation 15 days before harvest for curing.",
          stage10: "Harvesting at 100-120 days when 50-60% neck fall occurs. Bulbs undercut and left in field for 2-3 days curing. Tops trimmed, bulbs graded, cured in shade for 7-10 days. Storage yields 15-20 tons/ha."
        },
        water: 'Medium', 
        temp: '13-25°C', 
        duration: '100-120 days', 
        soil: 'Red soil', 
        fertilizer: 'NPK 80:60:80', 
        yield: '15-20 tons/ha' 
      },
      { 
        id: 38, 
        name: 'Chilli', 
        image: cropImages.chilli, 
        titleDescription: 'Chilli in red soils produces pungent fruits with good color, benefiting from excellent drainage and warm conditions essential for quality spice production.',
        description: {
          stage1: "Nursery preparation during September-October on raised beds of 1.2m width. Seedbed mixture of 5 parts soil, 3 parts FYM, 2 parts vermicompost treated with Trichoderma. Desi chilli seeds treated with Trichoderma before sowing.",
          stage2: "Main field prepared with deep plowing using moldboard plow to 25cm depth followed by harrowing 2-3 times. Raised beds of 1.2m width and 20cm height prepared for excellent drainage in red soils. Drip irrigation system installed.",
          stage3: "Basal incorporation of well-decomposed FYM at 15 tons/ha, vermicompost at 3 tons/ha, neem cake at 500kg/ha during bed preparation. Red soils benefit from organic matter for water and nutrient retention.",
          stage4: "Seedlings ready for transplanting at 35-40 days with 4-5 true leaves during October-November. Transplanting at 60x45cm spacing on beds. Planting in evening hours reduces transplanting shock. Drip irrigation with mulching.",
          stage5: "Staking using bamboo stakes at 20 days after transplanting supports plants in red soils. Training improves air circulation. Jeevamrit and panchagavya application at 15-day intervals through drip from 15 days after transplanting.",
          stage6: "Hand weeding at 20-day intervals keeps beds clean. Red soils with good drainage allow easy weeding. Mulching with straw conserves moisture and prevents soil splash on fruits reducing disease incidence.",
          stage7: "Integrated pest management includes monitoring for thrips and mites using blue sticky traps at 12/ha, controlled by neem oil 2% spray at 15-day intervals. Fruit borer controlled by NPV spray and hand picking.",
          stage8: "Disease management includes removal of affected plant parts, field sanitation. Red soils with good drainage reduce root diseases. Crop rotation with cereals breaks disease cycles.",
          stage9: "Flowering and fruiting stage (60-120 days) critical for yield. Adequate moisture through drip essential. Red soils produce chillies with good color development and pungency levels due to well-drained conditions.",
          stage10: "Harvesting green for vegetable use at 40-50 days after transplanting, red for spice at 70-80 days. Regular picking every 7-10 days over 4-5 months. Grading yields 10-15 tons/ha green, 1.5-2 tons/ha dried."
        },
        water: 'Medium', 
        temp: '20-25°C', 
        duration: '120-150 days', 
        soil: 'Red soil', 
        fertilizer: 'NPK 80:60:60', 
        yield: '10-15 tons/ha' 
      },
      { 
        id: 39, 
        name: 'Chickpea', 
        image: cropImages.chickpea, 
        titleDescription: 'Chickpea in red soils produces quality protein-rich grains, utilizing good drainage and aeration for healthy root development and nitrogen fixation.',
        description: {
          stage1: "Land preparation begins with pre-sowing irrigation to facilitate moisture for tillage. Field plowed with moldboard plow to 20cm depth followed by 2-3 harrowings to achieve fine tilth. Well-decomposed FYM at 8 tons/ha and vermicompost at 1.5 tons/ha incorporated during last plowing.",
          stage2: "Desi chickpea varieties selected for wilt tolerance and local adaptation to red soils. Seed treatment with Rhizobium and PSB cultures at 50g/kg seed each in 10% jaggery solution ensures effective biological nitrogen fixation.",
          stage3: "Seed treatment with Trichoderma viride at 10g/kg seed for 30 minutes controls wilt and root rot diseases. Cow dung slurry coating provides additional protection. Seeds shade dried for 2 hours before sowing.",
          stage4: "Sowing from October to November at 30x10cm spacing using seed drill at 8-10cm depth. Deep sowing ensures moisture access. Seed rate of 75-80kg/ha. Red soils with good drainage prevent root diseases.",
          stage5: "Basal application of well-decomposed FYM at 8 tons/ha and vermicompost at 1.5 tons/ha in furrows below seeds. Rock phosphate at 150kg/ha provides phosphorus for nodulation in red soils.",
          stage6: "One or two irrigations at flowering (45-50 days) and pod filling (70-80 days) stages if winter dry. Red soils drain quickly, requiring irrigation at critical stages. Jeevamrit application at 30 and 60 days through foliar spray.",
          stage7: "Weed management through one hand weeding at 30 days after sowing controls early weed competition. Intercropping with mustard or safflower in 4:1 ratio optimizes land use and provides additional income.",
          stage8: "Integrated pest management includes monitoring for pod borer using pheromone traps at 5/ha, installation of bird perches at 50/ha. Red soils with good drainage promote healthy root growth reducing disease incidence.",
          stage9: "Pod filling stage (70-90 days) critical for yield. Adequate moisture essential through irrigation if dry winter. Field sanitation removes affected plant parts. Crop rotation with cereals breaks disease cycles.",
          stage10: "Harvesting at 90-110 days when 80% pods matured. Plants cut at base, sun-dried on threshing floors for 5-7 days to 12% moisture. Threshing, winnowing, grading yields 1.2-1.8 tons/ha in red soils."
        },
        water: 'Low', 
        temp: '20-25°C', 
        duration: '90-110 days', 
        soil: 'Red soil', 
        fertilizer: 'NPK 20:60:40', 
        yield: '1.2-1.8 tons/ha' 
      }
    ]
  }
};

  useEffect(() => {
    if (!soilType || !season) {
      navigate('/');
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const crops = cropsDatabase[season]?.[soilType] || [];
      setFilteredCrops(crops);
      setLoading(false);
    }, 500);
  }, [soilType, season, navigate]);

  const handleCropClick = (crop) => {
    navigate(`/crop/${crop.id}`, { state: { crop } });
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Finding best crops for your farm...</p>
      </div>
    );
  }

  return (
    <div className="crops-page">
      <div className="crops-header">
        <button onClick={() => navigate('/')} className="back-btn">
          <FaArrowLeft /> Back
        </button>
        <h1 className="crops-title">
          <FaSeedling className="crops-title-icon" />
          Recommended Crops
        </h1>
        <div className="selection-info">
          <span className="info-badge soil-badge">{soilType?.charAt(0).toUpperCase() + soilType?.slice(1)} Soil</span>
          <span className="info-badge season-badge">{season?.charAt(0).toUpperCase() + season?.slice(1)} Season</span>
        </div>
      </div>

      {filteredCrops.length === 0 ? (
        <div className="no-crops">
          <h2>No crops found for this combination</h2>
          <p>Try selecting different soil type or season</p>
          <button onClick={() => navigate('/')} className="btn-primary">
            Go Back
          </button>
        </div>
      ) : (
        <div className="crops-grid">
          {filteredCrops.map((crop) => (
            <div key={crop.id} className="crop-card">
              <div 
                className="crop-image"
                style={{ backgroundImage: `url(${crop.image})` }}
              >
                <div className="crop-overlay">
                  <button 
                    onClick={() => handleCropClick(crop)}
                    className="view-details-btn"
                  >
                    <FaInfoCircle /> View Details
                  </button>
                </div>
              </div>
              <div className="crop-info">
                <h3 className="crop-name">{crop.name}</h3>
                <p className="crop-description">{crop.titleDescription}</p>
                <div className="crop-quick-info">
                  <span className="quick-info-item">🌡️ {crop.temp}</span>
                  <span className="quick-info-item">💧 {crop.water}</span>
                  <span className="quick-info-item">⏱️ {crop.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Crops;