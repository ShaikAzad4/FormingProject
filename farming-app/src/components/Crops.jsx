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
          stage1: ` Getting the Land Ready
The work starts right after the last harvest. Your goal is to feed the soil before you feed the plant.

 Grow Green Manure (Optional but Highly Recommended)
Right after harvesting the previous crop, sow a fast-growing crop like Dhaincha or Sunhemp in the field. Let it grow for about 45 days until it starts flowering. Then, plough it directly into the field. This green matter rots and becomes food for the soil, adding nitrogen naturally. It is like adding a rich compost to your field.

 First Ploughing
Plough the field when there is some moisture in the soil. This turns the green manure under and helps the soil breathe. Let the ploughed field sit in the sun for a week or two.

 Puddling and Adding Basal Manure
Now, fill the field with water and plough it again to make a soft, muddy puddle. While doing this, spread a good base of organic manure. For one acre, a good mixture is:

4 to 5 trolleys of well-decomposed Farm Yard Manure (cow dung compost) or Vermicompost.

20 kg of Neem Cake (this also helps control soil pests).

200 litres of Jeevamruth. This is a liquid "probiotic" for the soil that you can make at home. It adds millions of good microbes to the soil.
Level the field nicely so the water spreads evenly.`,
          stage2: `Preparing the Nursery (Seedling Bed)
You don't sow rice directly in the big field. You first grow small plants in a nursery.

 Choose and Treat Your Seeds
Good seeds make a good crop. First, test your seeds. Take a bucket of water and add a handful of salt. Put your seeds in. The hollow seeds that float are useless. Remove them. The sound, heavy seeds that sink are the good ones. Wash these good seeds in fresh water.

 Treat the Seeds
Soak the good seeds overnight in a mixture of water, cow dung, and a little jaggery (gur). This protects the young seedlings from diseases. In the morning, drain the water and pile the seeds in a corner, covered with a gunny bag. Keep them moist. In about 24 hours, you will see small white sprouts coming out. They are now ready to sow.

 Sow the Nursery Bed
Prepare a small, raised bed near a water source. Mix soil and compost well. Spread the sprouted seeds thickly on this bed. Do not bury them deep; just press them gently into the soil. Cover with a thin layer of paddy straw to keep them moist. Water the bed daily. The seedlings will be ready in about 15-20 days.`,
          stage3: `Transplanting (Moving Seedlings to the Main Field)
When the seedlings are 15-20 days old (about the height of a pencil) and have 3-4 leaves, it is time to move them to the main field.

 Follow the "SRI Method" for Best Results
Do not plant old seedlings. Do not plant them in bunches. The best organic method is:

Plant them young: Only use 15-day-old seedlings.

Plant them shallow: Make a shallow hole and place the root gently. Do not push the root deep into the mud. The root should be placed just below the surface, pointing downwards.

Plant them singly: Put only one seedling per hill, not a bunch. It might look thin now, but it will grow into a big plant with many tillers.

Give them space: Plant the seedlings in a grid pattern, keeping a distance of about 10 inches by 10 inches (25cm x 25cm) between each plant. This lets air and sunlight reach every plant.

 Plant on the Bunds
On the small mud walls (bunds) surrounding your field, plant a few marigold flowers. These attract good insects and keep pests away from your rice.
`,
          stage4: `Taking Care of the Growing Crop
For the next three months, your job is to help the plants grow strong by managing water, weeds, and food naturally.

 Water Management
Do not keep the field flooded all the time. Rice is not a water plant; it just needs moist soil.

After transplanting, keep just a thin layer of water for one week to help them settle.

For the next few weeks, let the water dry out until the soil cracks a little, then flood it again with a shallow layer. This wetting and drying makes the roots go deep and strong.

During flowering, keep a little water.

Stop watering completely about 15-20 days before harvest.

 Weeding and Aeration
Weeds will compete with your crop. You need to remove them, but in a way that also helps the rice.

Use a Cono-weeder. This is a special tool that you push between the rows. It uproots the weeds and churns up the soil, giving air to the roots. This is very important.

Do this weeding/hoeing three times: first at 15 days after transplanting, again at 30 days, and a final time at 45 days.

This is also the best time to apply more liquid organic fertilizers. After weeding, when the soil is open, the roots can easily absorb the food you give.

 Giving Liquid Food (Foliar Sprays)
Apart from the compost in the soil, give your plants a boost by spraying natural tonics on their leaves.

Jeevamruth: Apply this to the soil on the 15th and 30th day. It feeds the soil microbes.

Fish Amino Acid (FAA): If you have access to fish waste, ferment it with jaggery. Spray this on the 30th day for a quick nitrogen boost. It makes the plants dark green and vigorous.

Fermented Fruit Juice (FFJ): Make this from ripe pumpkins or other sweet fruits. Spray it just when the flowering starts (around 60-70 days) to get more grains.
`,
          stage5: `Natural Pest and Disease Control
If you have followed the steps above (good soil, wide spacing, healthy plants), pests will be much less of a problem. The field will also be full of spiders and ladybugs that eat the pests. But if you see an attack, here is what to do.

 Use Biological Controls
If you see insects that lay eggs on leaves (like stem borers), use Tricho-cards. These are small cards with eggs of a friendly wasp. Pin these cards on leaves around the field. When the wasps hatch, they will kill the pest eggs. This is nature's own pest control.

 Use Botanical Sprays (Homemade Pesticides)
If pests like leaf folder or gundi bug increase too much, do not use chemical poisons. Make a natural spray at home.

Neem Spray: Soak 5 kg of neem seeds or leaves in water overnight, filter it, and spray. This is a very effective natural pesticide.

Garlic-Chilli Spray: Grind 1 kg of garlic and 500g of green chillies. Mix in 10 litres of water and a little soap. Filter and spray. This repels many insects.
`,
          stage6: `Harvesting and Storing
 When to Harvest
Watch the field. When 80% of the grains turn golden and are hard, and the straw is turning yellow, it is time to harvest. Do not wait too long, or the grains will start falling off.

 Harvesting and Threshing
Cut the plants close to the ground. Let them dry in the sun for a day. Then, thresh them to separate the grain from the straw. You can do this by hand, by bullocks, or by a machine.

 Drying the Grain
This is a very important step for storing rice.

Spread the paddy (the grain with the husk) on a clean mat or floor in the sun.

Dry it for 2-3 days, turning it frequently.

Make sure it is completely dry. You can test it by biting a grain. It should break with a "crack" and not squash.

 Storing
Once the grain is fully dry, put it in clean gunny bags or a storage bin. Store it in a clean, dry place, off the ground. If you are keeping seeds for next year, you can dry neem leaves and mix them with the grain to keep insects away.

Once the harvest is done, the cycle begins again. You can bring in some cows to graze the leftover straw, and their dung will fertilize the field for the next season.
`,
          
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
          stage1: `Land Preparation
Maize needs a fine, clean seedbed because the seeds are planted at a shallow depth and must sprout quickly to beat the weeds.

Step 1.1: Understand Your Field Type
Maize does not like wet feet. If your field holds water or gets waterlogged, the roots will rot and the plants will turn yellow. Choose a field that drains well. If your soil is heavy, you may need to plant on raised beds or ridges so the water can run off.

Step 1.2: Early Tillage to Break Pest Cycles
Start preparing the land well before planting. Do an early ploughing, then leave the field for some weeks. This does two things: it allows birds to eat exposed grubs and cutworms, and it gives weed seeds time to sprout so you can kill them later.

Step 1.3: Create a Weed-Free Seedbed
Maize is very sensitive to weeds in its first weeks. About a month before planting, incorporate any crop residue or manure. Then, just before planting, do a final light tillage. The goal is to have a smooth, clean field with no weeds already growing. When you plant into a clean field, your maize gets a head start.

Step 1.4: Consider Living Mulch (Optional)
If you have experience, you can try planting maize into a living mulch. This means you first establish a low-growing legume like certain types of clover. Then you plant the maize directly into this living ground cover. The clover protects the soil, suppresses weeds, and adds nitrogen. However, this method requires careful management and is not for beginners .
`,
          stage2: `Seed Selection and Treatment
Maize seed is large and full of food for the young plant. Choosing the right seed and treating it well is critical.

Step 2.1: Choose Non-GMO, Vigorous Hybrids
Do not use genetically modified seed. Look for hybrids that are known for "early vigor." This means they sprout fast and grow quickly in the first few weeks. Early vigor is the most important trait for organic maize because it helps the crop shade out weeds .

Step 2.2: Match Maturity to Your Season
Select a hybrid with a maturity that fits your growing season. Very long-duration hybrids that take a long time to mature may get attacked by late-season pests. Medium-maturity hybrids that finish before the worst pests arrive are often a safer choice .

Step 2.3: Test Your Own Varieties
Seed company trials are often done with chemicals. The best way to know what works on your farm is to test a few different hybrids yourself. Plant a few rows of each variety side by side in the same field. Watch which ones emerge fastest, which ones stand up best against wind, and which ones give you the most grain at harvest .

Step 2.4: Treat Seeds with Care
Maize seeds can rot in cold, wet soil. Treat your seeds before planting to protect them.

Dust the seeds with Trichoderma powder, a friendly fungus that fights off rotting fungi in the soil.

Some farmers coat the seeds with a thin layer of cow dung slurry to protect them and provide a little food right at germination.
`,
          stage3: `Planting
Step 3.1: Wait for Warm Soil
Do not rush to plant maize as soon as the weather turns warm. If the soil is still cold, the seeds will sit there and rot or be eaten by insects. Wait until the soil has warmed up well and you have had a few warm days in a row. Warm soil means fast germination .

Step 3.2: Plant Shallow for Fast Emergence
Maize seeds should be planted at a shallow depth, just enough to cover them with moist soil. Planting too deep is a common mistake. Deep planting means the seedling takes too long to reach the surface, and by then the weeds are already ahead. In most soils, a shallow planting depth is sufficient .

Step 3.3: Plant in Rows That Suit Your Weeder
Think about how you will remove weeds later. The rows must be wide enough for your wheel hoe or cultivator to pass through without damaging the crop. Space the rows so that you can run your equipment between them .

Step 3.4: Plant a Little Thicker
In organic farming, you may lose a few plants to pests or slight weed pressure. To account for this, plant your seeds a little closer together than conventional farmers do. A slightly higher plant population also helps the canopy close faster, shading the ground and stopping weeds .
`,
          stage4: ` Field Management During Growth
Maize grows through clear stages: first the seedling, then the rapid growth phase, then tasseling and silking, and finally grain fill. Each stage needs specific care.

Step 4.1: The Critical First Weeks
The first month after planting is when you must be most active. Maize does not compete well with weeds when it is small. You must keep the field clean during this period. Once the maize is knee-high and growing fast, it will start to shade the ground and weeds will become less of a problem .

Step 4.2: Mechanical Weeding
You cannot use herbicide sprays. Instead, you use tools.

Tine Weeder: When the maize is very small, you can run a tine weeder over the field. The flexible tines disturb tiny weed seedlings between the rows without hurting the maize .

Inter-row Cultivator: As the maize grows taller, use a cultivator or hoe to cut weeds between the rows. This also breaks the soil surface, letting air in.

Do this work on a sunny day so the uprooted weeds dry up and die quickly.

Step 4.3: Earthing Up
When the maize is about knee-high, do the first earthing up. Pull a little soil from between the rows up around the base of the plants. This does three things:

It buries small weeds near the plants.

It encourages the maize to send out extra roots from the base, making the plant stronger.

It provides support so the plants do not fall over when the wind blows.

Step 4.4: Deep Placement of Fertilizer
Maize has a big appetite, especially for nitrogen. But organic manures release their nutrients slowly. To give the plant food right where it needs it, you can place nutrient-rich material deep in the soil near the roots.

You can make small balls or pellets of concentrated organic manure mixed with things like neem cake, rock phosphate, and composted manure.

At planting time, or just after, place these balls in the soil at a depth of a few inches, close to where the maize roots will grow.

Deep placement puts the food right in the root zone, reduces loss, and feeds the plant steadily throughout its growth .

Step 4.5: Watching for Fall Armyworm
The biggest pest of maize now is fall armyworm. This caterpillar hides in the whorl (the center of the plant where new leaves come out) and eats the growing point. You must watch for it.

4.5.1. Spot the Damage
Look at the leaves. If you see small, round holes or windows where the caterpillar has eaten, or if you see wet, messy frass (droppings) in the whorl, you have armyworm. If you see this, you must act.

4.5.2. Use Botanicals in the Whorl
The caterpillar hides deep in the whorl, so spraying from above may not reach it. You need to get the treatment inside.

Collect leaves of plants like Tithonia (wild sunflower) or neem. Dry them in the shade, then grind them into a fine powder.

Mix this powder with water and a little soap, and let it soak overnight.

Pour this mixture directly into the whorl of each affected plant, or spray with a strong stream aimed into the center.

Farmers in Africa have found that botanical sprays made from local plants can be just as effective as chemicals against fall armyworm .

4.5.3. Use Ash or Sand
A traditional method is to put a pinch of wood ash or fine sand into the whorl. The grit irritates the caterpillar and the ash dries it out.

4.5.4. Encourage Natural Enemies
Avoid spraying anything that kills beneficial insects. If you have flowering plants around your field, they will attract wasps and flies that are natural enemies of the armyworm.

Step 4.6: Pollination is a Critical Time
Maize is pollinated by wind. The tassels at the top release pollen, which must fall onto the silks sticking out of each developing cob. Each silk connects to one kernel. If a silk does not get pollen, that kernel will not form.

During this time, do not do anything that damages the tassels or silks.

Stress from lack of water during pollination can cause poor grain fill. If the weather is very dry, try to irrigate during this critical week when the silks are fresh.
`,
          stage5: `Harvesting
Harvesting maize at the right time and with the right moisture is important for both grain quality and safe storage.

Step 5.1: Let the Field Dry
As the maize matures, the husks will turn brown and dry, and the grain will harden. You can leave the maize standing in the field to dry naturally. In some regions, farmers cut the stalks and stack them to dry further.

Step 5.2: Check Grain Moisture
The grain should be hard enough that you cannot easily sink your fingernail into it. It should feel dry and sound hard when you bite it. Harvesting too wet leads to mold in storage.

Step 5.3: Remove Husks
If you are harvesting cobs, remove the dry husks in the field. This allows the cobs to dry further and removes places for insects to hide.

Step 5.4: Shell or Store on the Cob
You can either remove the grain from the cob (shelling) or store the cobs whole. Many small farmers prefer to store on the cob because the cob itself provides some protection.
`,
          stage6: `Post-Harvest and Storage
This is a stage where maize is unique. Stored maize is highly vulnerable to the maize weevil, a small beetle that can destroy an entire harvest in a few months if not controlled. In organic farming, you cannot use chemical fumigants.

Step 6.1: Dry, Dry, Dry
The most important rule for storing maize is to dry it thoroughly. Weevils cannot thrive in grain that is very dry. Spread the grain in the sun for several days. Turn it often. The grain must be so dry that it cracks when you bite it, not squashes.

Step 6.2: Use Botanical Powders in Storage
You can mix natural plant powders with the stored grain to repel or kill weevils. This is a traditional practice that works.

Collect citrus peels (orange or lemon peels) and dry them completely in the shade. Grind them into a coarse powder.

Collect neem leaves or moringa leaves, dry them, and grind them into powder.

Mix these powders thoroughly with the grain before storing. The strong smell repels weevils, and the fine particles can get into their bodies and kill them .

Step 6.3: Store in Airtight Containers
Weevils need air to live. If you can store your maize in airtight containers, the weevils will suffocate. This can be done with metal drums, sealed plastic drums, or special airtight grain bags. If you use bags, make sure they are completely sealed and kept off the ground on pallets or wooden planks.

Step 6.4: Do Not Mix Old and New Grain
Never store freshly harvested, dried maize on top of grain left from last year. Any weevils hiding in the old grain will quickly infest the new grain. Always clean out your storage containers thoroughly before adding new grain.

Step 6.5: Check Regularly
Even with all precautions, check your stored grain every few weeks. Put your hand deep into the grain and feel for heat. Heat is a sign of insect activity. If you find weevils, you may need to re-sun the grain and re-treat it with botanical powders.

By following these stages, you can grow healthy maize naturally, protect it from the fall armyworm in the field, and keep it safe from weevils in storage without using any chemicals.
`,
          
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
          stage1: ` Land Preparation
Groundnut sends its pods into the soil to mature. If the soil is hard or forms a crust, the pegs cannot enter and you will get empty pods. The land must be prepared with this in mind.

Step 1.1: Choose the Right Soil
Groundnut needs soil that is loose and well-drained. It does not like waterlogging at all. If water stands in the field, the pods will rot. Choose a field with deep soil that is not too heavy with clay.

Step 1.2: Deep Ploughing but Not Too Fine
Plough the field deeply to break any hard pans. However, do not over-plough to make the soil very fine powder. Groundnut actually prefers a little firmness in the seedbed. The goal is loose soil below for roots and pods, but slightly firm soil above for the seed to sit properly.

Step 1.3: Add Well-Rotted Manure Only
Add farmyard manure or compost during land preparation. But the manure must be very well decomposed. Fresh or half-rotten manure can cause the pods to rot later because it continues to decompose and generates heat. Spread the manure and mix it well into the soil.

Step 1.4: Form Flat Beds or Ridges
Depending on your soil and water, prepare either flat beds or shallow ridges. In heavy soil, ridges are better so water does not collect around the base. In light soil, flat beds are fine. The surface should be smooth and level.
`,
          stage2: `Seed Selection and Treatment
Groundnut seed is the kernel inside the pod. The seed is living and must be handled carefully. Damaged seeds will not germinate well.

Step 2.1: Select Whole Pods or Kernels Carefully
If you are saving your own seed, select pods from healthy plants only. The pods should be well-filled, not shriveled. If you are buying seed, get certified seed of a variety that does well in your area.

Step 2.2: Shell Only When Planting
Do not shell the pods too far in advance. Shell the groundnuts only a day or two before planting. Once shelled, the seed loses moisture and vigor quickly. Shell carefully by hand or with a gentle machine so the seed coat (the thin red or pink skin) does not peel off or crack. If the seed coat is damaged, the seed may rot.

Step 2.3: Treat with Rhizobium (The Most Important Step)
Groundnut has a special relationship with bacteria called Rhizobium that live on its roots. These bacteria take nitrogen from the air and give it to the plant. In return, the plant gives the bacteria food. This is called nitrogen fixation.

Even if your soil has Rhizobium naturally, it is always good to treat the seeds with a fresh Rhizobium culture before planting. This ensures millions of the right bacteria are right there on the seed, ready to infect the roots and form nodules.

Purchase the correct Rhizobium culture for groundnut.

Make a sugar solution or use gum arabic as a sticker.

Mix the culture with the sticker and coat the seeds gently.

Dry the seeds in shade for a short time and plant immediately.

Do not mix treated seeds with bare hands for long; the bacteria are living things.

Step 2.4: Trichoderma Treatment for Seed Rot
Groundnut seeds can rot in the soil if conditions are wet or cold. Treat the seeds with Trichoderma, a friendly fungus that protects against rotting fungi. This can be mixed with the Rhizobium treatment, but check the compatibility of the products.

Step 2.5: Treat with Cow Dung Slurry
A traditional method is to soak the seeds in a thin slurry of cow dung and water overnight. This provides a coating that protects the seed and gives it a little food at germination. This can be done along with Rhizobium treatment.
`,
          stage3: ` Planting
Step 3.1: Plant at the Right Time for Pegging
Groundnut needs warm weather but also needs moisture at the time of pegging (when the flower stalk bends and enters the soil). If you plant too early or too late, the pegging stage may hit a dry spell and the pods will not form. Time your planting so that the pegging stage gets moisture.

Step 3.2: Plant at Correct Depth
Plant the seeds at a medium depth, not too shallow and not too deep. A depth of about two inches is generally good. If planted too deep, the seedling struggles to emerge. If too shallow, the seed may dry out or be eaten by birds.

Step 3.3: Maintain Spacing for Pegging
Give the plants enough space. If they are too crowded, the pegs will tangle and many will not enter the soil. The spacing depends on your variety. Bushy varieties need more space. The rows should be wide enough for you to move and do weeding without disturbing the pegs later.

Step 3.4: Do Not Plant Too Thick
Unlike maize where you plant a little thicker to account for losses, groundnut should be planted at the recommended spacing. Overcrowding leads to more disease and less pod formation.
`,
          stage4: `Field Management During Growth
Groundnut grows through stages: first the seedling, then vegetative growth, then flowering and pegging, and finally pod filling. Each stage needs specific care.

Step 4.1: Weed Management in the First Month
Groundnut cannot compete with weeds in the first month, especially until the canopy covers the ground. Weeds will steal light, water, and nutrients.

Do the first weeding about three weeks after sowing, before the weeds get big.

Use a hoe or cultivator carefully. Do not go too deep near the plants, as you may damage young roots.

Do a second weeding before the plants start flowering heavily. Once pegging starts, you must stop all deep cultivation.

Step 4.2: The Critical Pegging Stage
When the plant flowers, the flower stalk elongates and bends down to enter the soil. This is called a peg. The peg must actually penetrate the soil to form a pod. This is a unique feature of groundnut.

Stop all soil disturbance once pegging starts. If you hoe or cultivate now, you will cut the pegs and lose the pods.

If the soil surface becomes hard and crusted, the pegs cannot enter. Light irrigation or light mulching can help keep the surface soft.

Earthing up is not done in groundnut like in sugarcane or maize. You do not pull soil to the plants. You leave the soil surface smooth so pegs can enter easily.

Step 4.3: Water Management at Pegging
The pegging stage is the most water-sensitive. If the soil is too dry at this time, the pegs will not enter, or the young pods will abort. Ensure there is sufficient moisture in the soil when the flowers appear and the pegs start forming.

Give water if there is no rain during flowering and pegging.

Do not flood the field. Just moisten the soil.

After the pods have entered and started filling, you can reduce water slightly, but do not let the soil become bone dry.

Step 4.4: Gypsum Application at Flowering
Groundnut needs calcium for pod development, but here is the special part: the pod absorbs calcium directly from the soil through its shell. Calcium does not move from the leaves to the pods. So the calcium must be present in the soil where the pods are forming.

At the start of flowering, before pegging begins, apply gypsum (a natural mineral) on top of the soil around the plants.

The gypsum supplies calcium to the developing pods. This is a critical step for getting well-filled pods, not empty shells.

Gypsum also supplies sulfur, which groundnut needs.

Step 4.5: Managing Leaf Spots
Groundnut is very prone to leaf spots. These are fungal diseases that cause spots on leaves, leading to defoliation (leaves falling early). If leaves fall, the plant cannot fill the pods.

4.5.1. Look for Spots Early
Walk through the field regularly. Look at the lower leaves first. If you see small spots with yellow halos, leaf spot has started.

4.5.2. Preventive Sprays
Once leaf spot starts, it spreads fast. Preventive measures are better.

Spray a solution of sour buttermilk and water. Buttermilk contains beneficial microbes that can suppress leaf spot fungi. Spraying this at intervals after flowering helps keep leaves healthy.

Spray neem-based solutions. Neem has fungicidal properties.

If you have access to Trichoderma, you can spray a Trichoderma solution on the leaves. Trichoderma can also fight leaf spot fungi.

4.5.3. Keep Air Moving
If the crop is too dense, air does not circulate and humidity stays high, encouraging leaf spot. Proper spacing at planting helps prevent this.

Step 4.6: Pest Management

4.6.1. Aphids and Rosette Disease
Aphids are small insects that suck sap from tender shoots. In groundnut, they are dangerous because they transmit a virus called Rosette. Rosette disease stunts the plant and can cause complete yield loss.

Watch for aphids on the growing tips and under leaves.

If you see aphids, spray neem solution or garlic-chilli solution to control them.

Remove any plant that shows Rosette symptoms (yellow, stunted, bushy appearance) immediately and destroy it. This stops the disease from spreading to healthy plants.

4.6.2. Termites
Termites can damage roots and also bore into pods, making holes. These holes let in fungi that produce aflatoxin.

Incorporate crop residues into the soil well before planting. As they decompose, they produce heat that repels termites.

Healthy, vigorous plants resist termite attack better.

If termite mounds are present in the field, they may need to be dealt with by removing the queen, but this is expert work.

4.6.3. Leaf Miner
Sometimes, small caterpillars mine inside the leaves, creating white trails. This reduces the leaf area for photosynthesis.

If you see leaf miner damage, monitor closely. Often, natural predators will control them.

In severe cases, neem spray can help.

Step 4.7: Encouraging Natural Enemies
Avoid any spray that kills beneficial insects. Ladybugs, hoverflies, spiders, and predatory wasps all help control pests in groundnut. If you have flowering plants around your field, these beneficial insects will come and stay.
`,
          stage5: `Harvesting
Harvesting groundnut at the right time is critical. Too early, and the pods are immature and shrivel when dried. Too late, and the pods may sprout in the ground, or be attacked by pests and fungi.

Step 5.1: Know When the Crop is Mature
Unlike other crops, groundnut does not mature all at once. Some pods may be ready while others are still developing. However, you look for general signs:

The leaves turn yellow and the older leaves start to drop.

The inside of the pod shell develops dark markings or color.

The kernels are plump and have the characteristic color of the variety (pink, red, or brown).

You can dig up a few sample plants and check the pods. If most are well-filled and the inside of the shell has darkened, it is time to harvest.

Step 5.2: Check Soil Moisture Before Harvest
If the soil is too dry and hard, the pods will break off and be left in the ground when you pull the plants. If the soil is too wet, the pods will be muddy and stick together. The best time is when the soil is slightly moist but not wet.

Step 5.3: Digging, Not Pulling
Do not just pull the plants by hand, especially in dry soil. The stems may break and the pods will stay in the ground. Use a hoe or a groundnut digger to loosen the soil underneath the plants first. Then lift the plants gently and shake off the soil.

Step 5.4: Stacking for Curing
After lifting, the plants with pods attached are stacked in small piles or placed on racks in the field. The leaves still have moisture and will continue to feed the pods for a short time. This is called curing. Leave them like this for a few days to dry partially.

Step 5.5: Picking the Pods
After curing, pick the pods from the plants. Remove any soil clumps stuck to the pods. Discard any pods that are damaged, diseased, or rotting.
`,
          stage6: `Post-Harvest and Storage
This is the most critical stage for groundnut because of aflatoxin. Aflatoxin is a poison produced by a fungus (Aspergillus) that grows on groundnuts when they are not dried properly or are stored in damp conditions. Aflatoxin is dangerous to humans and animals, and if your groundnuts have high aflatoxin, they will be rejected in the market.

Step 6.1: Dry Immediately and Thoroughly
Drying is the only way to prevent aflatoxin. The fungus cannot grow if the nuts are dry.

Spread the pods in a thin layer on clean mats, tarpaulins, or a clean cemented floor. Never dry directly on bare soil, as soil contains the fungus and adds moisture.

Turn the pods frequently so all sides dry evenly.

Dry in the sun for several days until the pods are completely dry. The kernels inside should rattle when you shake the pod.

Test by biting a kernel. It should be hard and brittle, not soft or chewy.

Step 6.2: Store as Pods, Not Kernels
Groundnuts store much better inside the shell. The pod is a natural protection. If you store as kernels (shelled), they are exposed to air, moisture, and pests, and they will go bad quickly.

Store only fully dried pods.

Do not shell until you are ready to sell, plant, or eat.

Step 6.3: Use Clean Storage Containers
Use clean gunny bags, or better, airtight containers. If using bags, store them on pallets or wooden planks off the ground. Keep them away from walls that may get damp.

Step 6.4: Do Not Mix Old and New
Never mix newly harvested, dried groundnuts with old stock from last year. Any pests or fungus in the old stock will immediately infect the new stock.

Step 6.5: Check Storage Regularly
Check your stored groundnuts every few weeks. Feel for any heat or moisture. Look for any signs of mold (greenish or blackish growth) on pods. If you find mold, you must re-dry the pods in the sun immediately and remove any affected pods.

Step 6.6: Shell Only When Needed
Just before selling or planting, shell the pods. Shelling damages the seed coat slightly, and after shelling, the kernels will not store long. Shell only the quantity you need immediately.

By following these stages, you can grow healthy groundnuts naturally, get well-filled pods, and protect your harvest from the hidden danger of aflatoxin without using any chemicals.
`,
          
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
          stage1: ` Getting the Land Ready
The work starts right after the last harvest. Your goal is to feed the soil before you feed the plant.

 Grow Green Manure (Optional but Highly Recommended)
Right after harvesting the previous crop, sow a fast-growing crop like Dhaincha or Sunhemp in the field. Let it grow for about 45 days until it starts flowering. Then, plough it directly into the field. This green matter rots and becomes food for the soil, adding nitrogen naturally. It is like adding a rich compost to your field.

 First Ploughing
Plough the field when there is some moisture in the soil. This turns the green manure under and helps the soil breathe. Let the ploughed field sit in the sun for a week or two.

 Puddling and Adding Basal Manure
Now, fill the field with water and plough it again to make a soft, muddy puddle. While doing this, spread a good base of organic manure. For one acre, a good mixture is:

4 to 5 trolleys of well-decomposed Farm Yard Manure (cow dung compost) or Vermicompost.

20 kg of Neem Cake (this also helps control soil pests).

200 litres of Jeevamruth. This is a liquid "probiotic" for the soil that you can make at home. It adds millions of good microbes to the soil.
Level the field nicely so the water spreads evenly.`,
          stage2: `Preparing the Nursery (Seedling Bed)
You don't sow rice directly in the big field. You first grow small plants in a nursery.

 Choose and Treat Your Seeds
Good seeds make a good crop. First, test your seeds. Take a bucket of water and add a handful of salt. Put your seeds in. The hollow seeds that float are useless. Remove them. The sound, heavy seeds that sink are the good ones. Wash these good seeds in fresh water.

 Treat the Seeds
Soak the good seeds overnight in a mixture of water, cow dung, and a little jaggery (gur). This protects the young seedlings from diseases. In the morning, drain the water and pile the seeds in a corner, covered with a gunny bag. Keep them moist. In about 24 hours, you will see small white sprouts coming out. They are now ready to sow.

 Sow the Nursery Bed
Prepare a small, raised bed near a water source. Mix soil and compost well. Spread the sprouted seeds thickly on this bed. Do not bury them deep; just press them gently into the soil. Cover with a thin layer of paddy straw to keep them moist. Water the bed daily. The seedlings will be ready in about 15-20 days.`,
          stage3: `Transplanting (Moving Seedlings to the Main Field)
When the seedlings are 15-20 days old (about the height of a pencil) and have 3-4 leaves, it is time to move them to the main field.

 Follow the "SRI Method" for Best Results
Do not plant old seedlings. Do not plant them in bunches. The best organic method is:

Plant them young: Only use 15-day-old seedlings.

Plant them shallow: Make a shallow hole and place the root gently. Do not push the root deep into the mud. The root should be placed just below the surface, pointing downwards.

Plant them singly: Put only one seedling per hill, not a bunch. It might look thin now, but it will grow into a big plant with many tillers.

Give them space: Plant the seedlings in a grid pattern, keeping a distance of about 10 inches by 10 inches (25cm x 25cm) between each plant. This lets air and sunlight reach every plant.

 Plant on the Bunds
On the small mud walls (bunds) surrounding your field, plant a few marigold flowers. These attract good insects and keep pests away from your rice.`,
          stage4: `Taking Care of the Growing Crop
For the next three months, your job is to help the plants grow strong by managing water, weeds, and food naturally.

 Water Management
Do not keep the field flooded all the time. Rice is not a water plant; it just needs moist soil.

After transplanting, keep just a thin layer of water for one week to help them settle.

For the next few weeks, let the water dry out until the soil cracks a little, then flood it again with a shallow layer. This wetting and drying makes the roots go deep and strong.

During flowering, keep a little water.

Stop watering completely about 15-20 days before harvest.

 Weeding and Aeration
Weeds will compete with your crop. You need to remove them, but in a way that also helps the rice.

Use a Cono-weeder. This is a special tool that you push between the rows. It uproots the weeds and churns up the soil, giving air to the roots. This is very important.

Do this weeding/hoeing three times: first at 15 days after transplanting, again at 30 days, and a final time at 45 days.

This is also the best time to apply more liquid organic fertilizers. After weeding, when the soil is open, the roots can easily absorb the food you give.

 Giving Liquid Food (Foliar Sprays)
Apart from the compost in the soil, give your plants a boost by spraying natural tonics on their leaves.

Jeevamruth: Apply this to the soil on the 15th and 30th day. It feeds the soil microbes.

Fish Amino Acid (FAA): If you have access to fish waste, ferment it with jaggery. Spray this on the 30th day for a quick nitrogen boost. It makes the plants dark green and vigorous.

Fermented Fruit Juice (FFJ): Make this from ripe pumpkins or other sweet fruits. Spray it just when the flowering starts (around 60-70 days) to get more grains.`,
          stage5: `Natural Pest and Disease Control
If you have followed the steps above (good soil, wide spacing, healthy plants), pests will be much less of a problem. The field will also be full of spiders and ladybugs that eat the pests. But if you see an attack, here is what to do.

 Use Biological Controls
If you see insects that lay eggs on leaves (like stem borers), use Tricho-cards. These are small cards with eggs of a friendly wasp. Pin these cards on leaves around the field. When the wasps hatch, they will kill the pest eggs. This is nature's own pest control.

 Use Botanical Sprays (Homemade Pesticides)
If pests like leaf folder or gundi bug increase too much, do not use chemical poisons. Make a natural spray at home.

Neem Spray: Soak 5 kg of neem seeds or leaves in water overnight, filter it, and spray. This is a very effective natural pesticide.

Garlic-Chilli Spray: Grind 1 kg of garlic and 500g of green chillies. Mix in 10 litres of water and a little soap. Filter and spray. This repels many insects.`,
          stage6: `Harvesting and Storing
 When to Harvest
Watch the field. When 80% of the grains turn golden and are hard, and the straw is turning yellow, it is time to harvest. Do not wait too long, or the grains will start falling off.

 Harvesting and Threshing
Cut the plants close to the ground. Let them dry in the sun for a day. Then, thresh them to separate the grain from the straw. You can do this by hand, by bullocks, or by a machine.

 Drying the Grain
This is a very important step for storing rice.

Spread the paddy (the grain with the husk) on a clean mat or floor in the sun.

Dry it for 2-3 days, turning it frequently.

Make sure it is completely dry. You can test it by biting a grain. It should break with a "crack" and not squash.

 Storing
Once the grain is fully dry, put it in clean gunny bags or a storage bin. Store it in a clean, dry place, off the ground. If you are keeping seeds for next year, you can dry neem leaves and mix them with the grain to keep insects away.

Once the harvest is done, the cycle begins again. You can bring in some cows to graze the leftover straw, and their dung will fertilize the field for the next season.`,
          
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
          stage1: `Land Preparation
Soybean needs a firm, smooth seedbed. Unlike crops that need deep, fluffy soil, soybean prefers the soil to be settled so the seeds are all planted at the same depth and emerge together.

Step 1.1: Start with Good Drainage
Soybean absolutely cannot stand waterlogged roots. If water stands in the field, the plants turn yellow and may die. The very first requirement is a field that drains well. If your field has low spots where water collects, you must either improve the drainage or choose a different field.

Step 1.2: Prepare a Stale Seedbed
A very effective method for soybean is to prepare a stale seedbed. This means you prepare the field completely, including ploughing and levelling, well before planting. Then you wait. Any weed seeds in the top layer will germinate. Just before planting, you do one very shallow, quick tillage to kill those tiny weed seedlings. Then you plant immediately into a clean, weed-free field. This gives your soybeans a huge head start.

Step 1.3: Create a Smooth, Firm Surface
After final ploughing, use a leveller or roller to make the field surface very smooth and slightly firm. A smooth surface is important because soybeans are planted at a shallow depth. If the field is rough and cloddy, some seeds will be planted too deep and some too shallow, and they will not emerge at the same time. Uniform emergence is critical for soybean success.

Step 1.4: Warm Up the Soil
Soybean is a warm-season crop. Do not be in a hurry to plant when the weather first turns warm. Wait until the soil has warmed up thoroughly. Planting into cold soil causes the seeds to rot or germinate slowly, and they will be weak and easily overtaken by weeds.
.`,
          stage2: `Seed Selection and Inoculation
The most important step in organic soybean farming happens before the seed even goes into the ground. This is the inoculation step, which is unique to legumes like soybean.

Step 2.1: Choose Non-GMO Varieties
Do not use genetically modified seed. Select conventional varieties that are known to do well in your area. Look for varieties that have some natural resistance to diseases common in your region.

Step 2.2: Match Maturity to Your Season
Soybean varieties come in different maturity groups. Some mature early, some late. Choose a variety that fits your growing season length. Early-maturing varieties can sometimes escape late-season pests, but they may also be shorter and not shade the ground as well. Medium-maturing varieties that produce a tall, bushy plant with good canopy cover are often best for organic systems because they smother weeds.

Step 2.3: The Critical Inoculation Step
Soybean needs a specific bacteria called Bradyrhizobium to form nodules on its roots and fix nitrogen. This bacteria may not be present in your soil, especially if soybean has not been grown there recently. Even if it is present, the native strains may not be the most effective ones.

You must treat your soybean seed with the correct inoculant just before planting.

Purchase fresh, high-quality soybean inoculant from a trusted source. Old or heat-damaged inoculant will not work.

The inoculant is a powder containing millions of live bacteria.

Just before planting, moisten the seeds slightly with water or a sugar solution.

Sprinkle the inoculant powder over the moist seeds and mix gently until all seeds are coated. The coating may look black or grey.

Plant immediately. The bacteria are alive and will die if left in the sun or heat for too long.

This step is cheap insurance. Inoculated soybeans will have big, healthy, pink nodules on their roots. Pink color inside the nodule means it is working. Without inoculation, the plants may turn yellow and struggle from nitrogen deficiency.

Step 2.4: Plant a Little Extra
Some of your seeds may not survive due to soil conditions or the mechanical weeding that comes after planting. To account for this, plant at a higher seed rate than you would for conventional farming. A thicker stand means the canopy will close faster and shade out weeds.
.`,
          stage3: `Planting
Step 3.1: Time Planting for Warmth and Moisture
Plant when the soil is warm and there is good moisture for germination. If you can time planting just before a gentle rain, that is ideal. The seeds will germinate quickly and emerge with vigor. Fast emergence is the best defense against early weeds.

Step 3.2: Plant at Consistent Shallow Depth
Soybean seeds should be planted at a consistent, shallow depth. If planted too deep, they may not emerge. If planted too shallow, they may dry out. A uniform depth across the whole field ensures that all plants emerge at the same time. When all plants are the same size, they form a uniform canopy that shades weeds effectively.

Step 3.3: Use Narrow Rows
Row spacing is very important for organic soybean. The rows should be narrow enough that the plants from adjacent rows touch each other and shade the ground completely. This shading is your main weed control. When the canopy closes and the ground goes dark, weed seeds cannot germinate.

However, the rows must not be so narrow that you cannot get between them to weed if necessary. There is a balance. Rows that are close together but still allow a wheel hoe or cultivator to pass through are ideal.

Step 3.4: Planting into a Cover Crop (Optional Advanced Method)
Some experienced farmers plant soybean directly into a standing crop of rye. The rye is planted the previous fall and grows tall in spring. Just as the rye starts to flower, it is rolled down with a heavy roller, creating a thick mat of straw on the soil surface. Soybean is then planted through this mat. The rye straw acts as a natural mulch, suppressing weeds all season long.

This method is advanced and not for beginners. It requires getting the rye planting and rolling timing exactly right. If done incorrectly, the rye may regrow or the mulch may be too thin to stop weeds. But when it works, it can eliminate the need for most weeding.
`,
          stage4: ` Field Management During Growth
Soybean has a critical period in the first month when it must be kept weed-free. After the canopy closes, the crop largely takes care of itself.

Step 4.1: Blind Weeding Before Emergence
Because you prepared a smooth seedbed and planted at a uniform depth, you know approximately when the soybeans will emerge. A few days before they are due to pop out of the ground, you can do a very shallow weeding pass. This is called blind weeding.

You use a light tool like a tine weeder or a rotary hoe that scratches the soil surface. This kills tiny weed seedlings that have germinated but not yet emerged. The soybean seeds are planted deeper and are not harmed. This pass can be done even when you don't see any weeds yet, as a preventive measure.

Step 4.2: Post-Emergence Weeding
Once the soybeans have emerged and have developed their first rough leaves, there is a period when you cannot weed because the young plants are fragile. Wait until they are well-established, with several sets of leaves.

Then, you can resume weeding. Use a tine weeder or a cultivator between the rows. The goal is to keep the field clean until the soybean plants grow large enough that their leaves touch across the rows. Once the canopy closes, the shade will stop most weeds.

Step 4.3: The Critical Canopy Closure
Watch your field carefully. The day the soybean canopy closes completely, with leaves from adjacent rows touching and shading the ground, is a day of celebration. From this point on, weeds will have a very hard time growing. Your main weeding work is done for the season. The crop has become its own weed suppressant.

Step 4.4: Pest Watching
Soybean can be attacked by various insects, but a healthy, vigorous crop in a diverse farm environment often has few problems. Walk through your field regularly and look for damage.

4.4.1. Look for Defoliators
Some caterpillars and beetles eat soybean leaves. If you see holes in leaves, identify the pest first. Often, the damage is not severe enough to affect yield. Natural predators like ladybugs, spiders, and predatory wasps will usually keep them in check if you have flowering borders around your field.

4.4.2. Watch for Pod Feeders
Later in the season, some insects may attack the developing pods. Stink bugs and pod borers can be a problem. If you see them, monitor closely. Healthy plants can tolerate some damage.

4.4.3. Use Botanical Sprays if Needed
If a pest outbreak becomes severe, you can use neem-based sprays. Neem disrupts the feeding and growth of many insects. Spray in the evening to avoid harming bees and other beneficial insects.

Step 4.5: Recognizing Healthy Nodules
About a month after planting, gently dig up a few soybean plants. Look at the roots. You should see small round nodules attached to the roots. Slice a few open with your fingernail. If they are pink or red inside, your inoculation worked perfectly. The bacteria are actively fixing nitrogen. If the nodules are green, white, or brown inside, they are not working well. This tells you that your inoculation may have failed, and you need to pay extra attention to crop nutrition next time.
.`,
          stage5: `Harvesting
Harvesting soybean is different from other grains because the pods sit low on the plant. You must be careful not to leave the bottom pods in the field.

Step 5.1: Watch for Maturity
Soybeans are ready to harvest when the leaves have turned yellow and dropped, and the pods have turned brown or tan. The beans inside will rattle when you shake the pod. They should be hard and not dent when you press them with your fingernail.

Step 5.2: Dealing with Late Weeds
Sometimes, even with good management, late-season weeds may still be present at harvest. Green weeds can cause problems by wrapping around machinery and adding moisture to the harvested grain.

If you have a lot of green weeds at harvest time, you have an option. You can wait for a heavy frost to kill and dry the weeds. Or, you can cut the crop first with a swather. Swathing means cutting the soybean plants and laying them in windrows to dry for a few days before combining. This allows the weeds to dry down and makes combining much easier and cleaner.

Step 5.3: Harvest Close to the Ground
Soybean pods grow all the way down the stem, sometimes very close to the soil. Set your combine header as low as possible to catch these bottom pods. Losing the bottom pods is a common source of yield loss.

Step 5.4: Handle Gently
Soybeans are fragile. If the combine is set too aggressively, it can crack the beans. Cracked beans are worth less and do not store well. Adjust your machine to be gentle.
.`,
          stage6: `Post-Harvest and Storage
Soybean storage requires attention to moisture. Soybeans are more sensitive than some other grains.

Step 6.1: Dry Immediately
Soybeans must be dried to a safe moisture level for storage as soon as possible after harvest. If left in a pile while wet, they will heat up and spoil quickly.

Spread the beans in thin layers and dry them in the sun or use a gentle dryer if you have one. The drying temperature must be kept low. High heat damages the soybean protein and makes the beans less valuable.

Step 6.2: Test for Moisture
The beans need to be dry enough that they are hard and cannot be dented with a fingernail. For long-term storage, they must be very dry.

Step 6.3: Keep Cool and Dry in Storage
Store soybeans in clean, dry containers or bins. Protect them from moisture and from rodents. Keep the storage area cool. Warm temperatures can cause the beans to deteriorate over time.

Step 6.4: Do Not Store Damaged Beans
If your harvest includes many cracked or split beans, consider using them first or selling them soon after harvest. Damaged beans do not store well and are more prone to mold and insect attack.

Step 6.5: Plan Your Rotation
After harvesting soybeans, you have a great opportunity. Soybeans leave behind nitrogen in the soil from their root nodules. The following crop will benefit from this leftover nitrogen. Plan your crop rotation so that a heavy-feeding crop follows your soybeans to take advantage of this natural fertility.

By following these stages, you can grow healthy soybeans naturally, harness the power of nitrogen-fixing bacteria to feed your crop, use the plant's own canopy to control weeds, and store your harvest safely without using any chemicals.
.`,
          
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
          stage1: `Land Preparation
Maize needs a fine, clean seedbed because the seeds are planted at a shallow depth and must sprout quickly to beat the weeds.

Step 1.1: Understand Your Field Type
Maize does not like wet feet. If your field holds water or gets waterlogged, the roots will rot and the plants will turn yellow. Choose a field that drains well. If your soil is heavy, you may need to plant on raised beds or ridges so the water can run off.

Step 1.2: Early Tillage to Break Pest Cycles
Start preparing the land well before planting. Do an early ploughing, then leave the field for some weeks. This does two things: it allows birds to eat exposed grubs and cutworms, and it gives weed seeds time to sprout so you can kill them later.

Step 1.3: Create a Weed-Free Seedbed
Maize is very sensitive to weeds in its first weeks. About a month before planting, incorporate any crop residue or manure. Then, just before planting, do a final light tillage. The goal is to have a smooth, clean field with no weeds already growing. When you plant into a clean field, your maize gets a head start.

Step 1.4: Consider Living Mulch (Optional)
If you have experience, you can try planting maize into a living mulch. This means you first establish a low-growing legume like certain types of clover. Then you plant the maize directly into this living ground cover. The clover protects the soil, suppresses weeds, and adds nitrogen. However, this method requires careful management and is not for beginners.`,
          stage2: `Seed Selection and Treatment
Maize seed is large and full of food for the young plant. Choosing the right seed and treating it well is critical.

Step 2.1: Choose Non-GMO, Vigorous Hybrids
Do not use genetically modified seed. Look for hybrids that are known for "early vigor." This means they sprout fast and grow quickly in the first few weeks. Early vigor is the most important trait for organic maize because it helps the crop shade out weeds .

Step 2.2: Match Maturity to Your Season
Select a hybrid with a maturity that fits your growing season. Very long-duration hybrids that take a long time to mature may get attacked by late-season pests. Medium-maturity hybrids that finish before the worst pests arrive are often a safer choice .

Step 2.3: Test Your Own Varieties
Seed company trials are often done with chemicals. The best way to know what works on your farm is to test a few different hybrids yourself. Plant a few rows of each variety side by side in the same field. Watch which ones emerge fastest, which ones stand up best against wind, and which ones give you the most grain at harvest .

Step 2.4: Treat Seeds with Care
Maize seeds can rot in cold, wet soil. Treat your seeds before planting to protect them.

Dust the seeds with Trichoderma powder, a friendly fungus that fights off rotting fungi in the soil.

Some farmers coat the seeds with a thin layer of cow dung slurry to protect them and provide a little food right at germination.`,
          stage3: `Planting
Step 3.1: Wait for Warm Soil
Do not rush to plant maize as soon as the weather turns warm. If the soil is still cold, the seeds will sit there and rot or be eaten by insects. Wait until the soil has warmed up well and you have had a few warm days in a row. Warm soil means fast germination .

Step 3.2: Plant Shallow for Fast Emergence
Maize seeds should be planted at a shallow depth, just enough to cover them with moist soil. Planting too deep is a common mistake. Deep planting means the seedling takes too long to reach the surface, and by then the weeds are already ahead. In most soils, a shallow planting depth is sufficient .

Step 3.3: Plant in Rows That Suit Your Weeder
Think about how you will remove weeds later. The rows must be wide enough for your wheel hoe or cultivator to pass through without damaging the crop. Space the rows so that you can run your equipment between them .

Step 3.4: Plant a Little Thicker
In organic farming, you may lose a few plants to pests or slight weed pressure. To account for this, plant your seeds a little closer together than conventional farmers do. A slightly higher plant population also helps the canopy close faster, shading the ground and stopping weeds.`,
          stage4: `Field Management During Growth
Maize grows through clear stages: first the seedling, then the rapid growth phase, then tasseling and silking, and finally grain fill. Each stage needs specific care.

Step 4.1: The Critical First Weeks
The first month after planting is when you must be most active. Maize does not compete well with weeds when it is small. You must keep the field clean during this period. Once the maize is knee-high and growing fast, it will start to shade the ground and weeds will become less of a problem .

Step 4.2: Mechanical Weeding
You cannot use herbicide sprays. Instead, you use tools.

Tine Weeder: When the maize is very small, you can run a tine weeder over the field. The flexible tines disturb tiny weed seedlings between the rows without hurting the maize .

Inter-row Cultivator: As the maize grows taller, use a cultivator or hoe to cut weeds between the rows. This also breaks the soil surface, letting air in.

Do this work on a sunny day so the uprooted weeds dry up and die quickly.

Step 4.3: Earthing Up
When the maize is about knee-high, do the first earthing up. Pull a little soil from between the rows up around the base of the plants. This does three things:

It buries small weeds near the plants.

It encourages the maize to send out extra roots from the base, making the plant stronger.

It provides support so the plants do not fall over when the wind blows.

Step 4.4: Deep Placement of Fertilizer
Maize has a big appetite, especially for nitrogen. But organic manures release their nutrients slowly. To give the plant food right where it needs it, you can place nutrient-rich material deep in the soil near the roots.

You can make small balls or pellets of concentrated organic manure mixed with things like neem cake, rock phosphate, and composted manure.

At planting time, or just after, place these balls in the soil at a depth of a few inches, close to where the maize roots will grow.

Deep placement puts the food right in the root zone, reduces loss, and feeds the plant steadily throughout its growth .

Step 4.5: Watching for Fall Armyworm
The biggest pest of maize now is fall armyworm. This caterpillar hides in the whorl (the center of the plant where new leaves come out) and eats the growing point. You must watch for it.

4.5.1. Spot the Damage
Look at the leaves. If you see small, round holes or windows where the caterpillar has eaten, or if you see wet, messy frass (droppings) in the whorl, you have armyworm. If you see this, you must act.

4.5.2. Use Botanicals in the Whorl
The caterpillar hides deep in the whorl, so spraying from above may not reach it. You need to get the treatment inside.

Collect leaves of plants like Tithonia (wild sunflower) or neem. Dry them in the shade, then grind them into a fine powder.

Mix this powder with water and a little soap, and let it soak overnight.

Pour this mixture directly into the whorl of each affected plant, or spray with a strong stream aimed into the center.

Farmers in Africa have found that botanical sprays made from local plants can be just as effective as chemicals against fall armyworm .

4.5.3. Use Ash or Sand
A traditional method is to put a pinch of wood ash or fine sand into the whorl. The grit irritates the caterpillar and the ash dries it out.

4.5.4. Encourage Natural Enemies
Avoid spraying anything that kills beneficial insects. If you have flowering plants around your field, they will attract wasps and flies that are natural enemies of the armyworm.

Step 4.6: Pollination is a Critical Time
Maize is pollinated by wind. The tassels at the top release pollen, which must fall onto the silks sticking out of each developing cob. Each silk connects to one kernel. If a silk does not get pollen, that kernel will not form.

During this time, do not do anything that damages the tassels or silks.

Stress from lack of water during pollination can cause poor grain fill. If the weather is very dry, try to irrigate during this critical week when the silks are fresh.`,
          stage5: `Harvesting
Harvesting maize at the right time and with the right moisture is important for both grain quality and safe storage.

Step 5.1: Let the Field Dry
As the maize matures, the husks will turn brown and dry, and the grain will harden. You can leave the maize standing in the field to dry naturally. In some regions, farmers cut the stalks and stack them to dry further.

Step 5.2: Check Grain Moisture
The grain should be hard enough that you cannot easily sink your fingernail into it. It should feel dry and sound hard when you bite it. Harvesting too wet leads to mold in storage.

Step 5.3: Remove Husks
If you are harvesting cobs, remove the dry husks in the field. This allows the cobs to dry further and removes places for insects to hide.

Step 5.4: Shell or Store on the Cob
You can either remove the grain from the cob (shelling) or store the cobs whole. Many small farmers prefer to store on the cob because the cob itself provides some protection.`,
          stage6: `Post-Harvest and Storage
This is a stage where maize is unique. Stored maize is highly vulnerable to the maize weevil, a small beetle that can destroy an entire harvest in a few months if not controlled. In organic farming, you cannot use chemical fumigants.

Step 6.1: Dry, Dry, Dry
The most important rule for storing maize is to dry it thoroughly. Weevils cannot thrive in grain that is very dry. Spread the grain in the sun for several days. Turn it often. The grain must be so dry that it cracks when you bite it, not squashes.

Step 6.2: Use Botanical Powders in Storage
You can mix natural plant powders with the stored grain to repel or kill weevils. This is a traditional practice that works.

Collect citrus peels (orange or lemon peels) and dry them completely in the shade. Grind them into a coarse powder.

Collect neem leaves or moringa leaves, dry them, and grind them into powder.

Mix these powders thoroughly with the grain before storing. The strong smell repels weevils, and the fine particles can get into their bodies and kill them .

Step 6.3: Store in Airtight Containers
Weevils need air to live. If you can store your maize in airtight containers, the weevils will suffocate. This can be done with metal drums, sealed plastic drums, or special airtight grain bags. If you use bags, make sure they are completely sealed and kept off the ground on pallets or wooden planks.

Step 6.4: Do Not Mix Old and New Grain
Never store freshly harvested, dried maize on top of grain left from last year. Any weevils hiding in the old grain will quickly infest the new grain. Always clean out your storage containers thoroughly before adding new grain.

Step 6.5: Check Regularly
Even with all precautions, check your stored grain every few weeks. Put your hand deep into the grain and feel for heat. Heat is a sign of insect activity. If you find weevils, you may need to re-sun the grain and re-treat it with botanical powders.

By following these stages, you can grow healthy maize naturally, protect it from the fall armyworm in the field, and keep it safe from weevils in storage without using any chemicals`,
          
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
          stage1: `Land Preparation
Bananas are not like annual crops. They will occupy the same piece of land for many years, as the plant continually regenerates from suckers. Getting the land ready properly at the beginning is essential for long-term success.

Step 1.1: Choose the Right Location
Bananas need a warm, sheltered location. They are very sensitive to strong winds, which can tear their large leaves and even uproot the plants or snap the heavy fruiting stems. Choose a field that is protected from wind, or plan to plant a windbreak of taller, stronger trees around the boundary. Bananas also need plenty of sunlight and a reliable source of water, either from rainfall or irrigation .

Step 1.2: Understand the Soil Requirements
Bananas are heavy feeders and need deep, rich, well-drained soil. The soil must be loose and fertile, with plenty of organic matter. Most importantly, the soil must drain well. Banana roots are shallow and fleshy, and they absolutely cannot tolerate waterlogging. If water stands in the field, the roots will rot and the plant will die. If your soil is heavy, you may need to plant on raised beds or mounds to ensure good drainage .

Step 1.3: Deep Ploughing and Subsoiling
Before planting, the land must be deeply prepared. Banana roots need to spread wide and deep. Do a very deep ploughing, and if possible, use a subsoiler to break any hard pans deep in the soil. This allows roots to penetrate deeply and access nutrients and moisture from a large volume of soil.

Step 1.4: Add Massive Amounts of Organic Matter
Because bananas will be in the ground for years, the soil must be enriched from the start. Spread a heavy layer of well-decomposed farmyard manure, compost, or any available organic matter over the field and mix it into the soil during final ploughing. Some farmers dig planting holes much larger than the root ball and fill them with a mixture of topsoil and compost to give the plant a huge reservoir of food from day one .

Step 1.5: Dig Large Planting Holes
Bananas are usually planted in large, individual holes. The hole should be wide and deep enough to accommodate the root system without crowding. A common practice is to dig a hole that is quite large in diameter and depth . The topsoil removed from the hole is mixed with well-rotted manure or compost and then used to refill the hole around the plant. This creates a soft, rich environment for the young roots to explore.

Step 1.6: Plan Your Spacing
Bananas need enough space to grow without competing. The exact spacing depends on your variety and the fertility of your soil. In general, give each plant enough room so that when fully grown, their leaves just touch but do not heavily shade each other. Wider spacing allows more light and air movement, which reduces disease .

Step 1.7: Install Drainage and Irrigation
Before planting, plan your water management. Bananas need plenty of water, but they cannot stand wet roots. Dig deep drainage channels around the field to carry away excess water during heavy rains. If possible, install a drip irrigation system to provide consistent moisture directly to the root zone without wetting the leaves . Some farmers also dig trenches to capture and hold runoff water, which can then be used for irrigation during dry spells .

Step 1.8: Prepare the Holes in Advance
If you are digging individual holes, it is best to dig them well before planting, especially if you are adding manure. This allows the soil to settle and the manure to begin integrating with the soil. The holes should be refilled with the enriched soil mixture, leaving a slight mound to prevent water from collecting around the stem .
.`,
          stage2: `Selection of Planting Material
Bananas are not grown from seed. They are grown from suckers or tissue culture plantlets. The quality of your planting material determines the health and productivity of your plantation for years to come.

Step 2.1: Understand the Types of Planting Material
There are two main types of planting material for bananas:

Suckers: These are shoots that grow from the underground stem of a mature plant. They are the traditional planting material. Sword suckers, which have narrow leaves and a well-developed corm (the underground stem), are the best type. They are vigorous and will establish quickly .

Tissue Culture Plantlets: These are plants produced in a laboratory from a small piece of banana tissue. They are disease-free, uniform, and grow very fast because they are free from any soil-borne diseases. They are more expensive but often worth the investment for a new plantation .

Step 2.2: Select Disease-Free Material
If you are using suckers, obtain them only from a healthy, high-yielding plantation that shows no signs of disease. Look for plants with no wilting, no yellowing, and no signs of pests like weevils. If you are buying tissue culture plantlets, buy from a reputable source that guarantees they are disease-free .

Step 2.3: Prepare Suckers Before Planting
If using sword suckers, they need to be prepared. The large roots are trimmed back, and the top of the pseudostem (the false stem made of leaf sheaths) is cut off, leaving a shorter stump. This reduces water loss and forces the plant to focus on establishing new roots. The corm is checked for any signs of weevil damage or rot, and if found, the sucker is discarded .

Step 2.4: Treat Planting Material Naturally
Before planting, suckers can be treated to protect them from soil-borne pests and diseases. A common organic treatment is to dip the corm in a solution of cow dung and water, which provides a protective coating and some nutrients. Some farmers also dip the corm in a Trichoderma solution to protect against fungal diseases .
.`,
          stage3: `Planting
Step 3.1: Time Your Planting
Bananas can be planted at the start of the rainy season, which gives the young plants plenty of moisture to establish. In some regions, they are also planted in the autumn. The key is to plant when the soil is moist and the temperatures are warm, so the plants establish quickly .

Step 3.2: Plant at the Correct Depth
The depth of planting is critical. If planted too deep, the growing point may rot. If planted too shallow, the plant may not be stable and may fall over. The general rule is to plant so that the upper part of the corm is just below the soil surface, with the top of the growing point at ground level. The soil should be firmed around the plant, but not compacted .

Step 3.3: Orient the Sucker Correctly
If you are planting a sucker, there is a front and a back. The side where the sucker was attached to the mother plant has a scar. This side should face in one direction, often the direction from which you expect the next generation of suckers to grow. This helps keep the mat (the clump of plants) organized and prevents the plants from growing into each other .

Step 3.4: Water Immediately
After planting, give each plant a generous amount of water to settle the soil around the roots and eliminate air pockets. This is called the planting water and is essential for good establishment.

Step 3.5: Mulch Heavily
As soon as you plant, apply a thick layer of mulch around each plant. Use any available organic material: dried leaves, straw, grass cuttings, or banana leaves themselves. Mulch is critical for bananas . It:

Conserves soil moisture, which bananas desperately need.

Suppresses weeds, which compete with the young plants.

Adds organic matter to the soil as it decomposes.

Keeps the soil cool, which encourages root growth.

Prevents soil from splashing onto the leaves, which reduces disease.
.`,
          stage4: `Field Management During Growth
Banana is a unique crop because you are not managing a single plant, but a mat of plants at different stages: the mother plant that will fruit soon, a follower sucker that will fruit next, and a second sucker for the future. This is called the "mother, father, and son" system .

Step 4.1: Understanding the Mat
When a banana plant fruits and is harvested, it dies. But before it dies, it produces suckers. A healthy mat should have three generations of plants at the same time:

The mother (the large plant that will fruit soon or has just been harvested).

The father (a younger, vigorous sucker that will be the next to fruit).

The son (a small sucker that will fruit after the father).
Managing these three generations is the key to continuous production.

Step 4.2: De-suckering
Banana plants produce many suckers, far more than you need. If you leave them all, they will compete and you will get many small, weak bunches instead of a few large, healthy ones. De-suckering is the practice of removing excess suckers .

Select the one or two best suckers to keep as the followers. Choose vigorous, well-placed suckers with sword leaves.

Remove all other suckers regularly. This can be done by cutting them off below ground level or by carefully destroying their growing point.

De-suckering is done several times during the life of the plantation. Keeping only the chosen followers ensures that all the plant's energy goes into producing large bunches.

Step 4.3: Leaf Pruning or Trimming
Banana leaves are huge, and the plant produces many of them. However, old, dry, or diseased leaves are no longer useful and can actually harm the plant .

Regularly remove old, dry leaves that are hanging down and no longer green. Cut them off close to the pseudostem.

If you see leaves with brown spots or edges from diseases like Sigatoka, trim off the affected parts, leaving as much green leaf as possible.

Good leaf pruning improves air circulation through the plantation, which reduces humidity and the spread of fungal diseases. It also lets sunlight reach the lower parts of the plant and the suckers.

Do not remove too many green leaves. The plant needs leaves to feed the developing bunch. A general rule is to leave a certain number of healthy, functional leaves on the plant until the bunch is harvested .

Step 4.4: Water Management
Bananas are thirsty plants. They need a consistent supply of moisture throughout their life .

During dry periods, irrigate regularly. Drip irrigation is best because it delivers water directly to the root zone without wetting the leaves .

The mulch you applied earlier will help retain this moisture.

The most critical time for water is during bunch development. If the plant suffers drought stress while the bunch is forming, the fingers will be small and the bunch will be poor.

Avoid over-watering and ensure good drainage. Wet roots are deadly.

Step 4.5: Nutrition and Feeding
Bananas are heavy feeders. They need a steady supply of nutrients to produce large bunches .

Compost and Manure: Apply well-decomposed farmyard manure or compost around the base of each plant regularly. This can be done two or three times a year . The manure feeds the soil, which in turn feeds the plants.

Liquid Feeds: You can also apply liquid organic fertilizers like compost tea, fermented plant juices, or diluted cow urine. These provide a quick nutrient boost, especially during rapid growth and bunch filling.

Mulch Decomposition: As the thick mulch layer breaks down, it continually adds nutrients to the soil. This is one of the most important sources of nutrition in an organic banana system.

Returning Residue: After harvesting, chop up the pseudostem of the harvested mother plant and spread it around the mat as mulch and compost. It contains a lot of nutrients that can be recycled back into the soil .

Step 4.6: Weed Management
The thick mulch layer will suppress most weeds, but some will still appear.

Hand-pull any weeds that grow through the mulch. Do not use a hoe near the surface, as banana roots are shallow and easily damaged .

Keep the area around the base of the plants clean.

Step 4.7: Propping
When the bunch develops, it can become very heavy. Some varieties need support to prevent the pseudostem from bending or breaking under the weight of the bunch.

Use a forked stick or a bamboo pole to prop up the stem just below the bunch. This is called propping.

Place the prop securely so it takes the weight of the bunch and prevents the plant from falling over, especially in wind.

Step 4.8: Removing the Male Bud (De-budding)
After the female flowers have set fruit, the banana bunch continues to grow with a long, dark-colored male bud at the end. This bud serves no purpose once the fruit is set and only drains energy from the plant .

Once you see that the last hand of bananas has formed and there are no more female flowers, cut off the male bud. This is called de-budding or "removing the bell."

Cut it off cleanly with a sharp knife. This redirects the plant's energy into filling the existing fruit.

Step 4.9: Trimming the Bunch (Removing Fingers)
For premium quality, some farmers remove the last hand or two of bananas at the bottom of the bunch. They also remove the very last finger on each hand, the "bell finger" .

These fingers are often smaller and may not develop fully. Removing them early in the bunch's development allows the remaining fingers to grow larger and more uniform.

This practice is optional but common for market-focused farmers who want the best-looking bunches.

Step 4.10: Pest Management

*4.10.1. Banana Weevil - The Most Serious Pest*
The banana weevil is a small beetle whose larvae bore into the corm (the underground stem), destroying the plant's ability to take up water and nutrients. It is a major threat .

Clean Planting Material: Always use clean, weevil-free suckers.

Field Sanitation: Keep the field free of old banana debris where weevils can hide.

Trapping: Cut pieces of old pseudostem and place them as traps between plants. Weevils are attracted to them and can be collected and destroyed.

Natural Pesticides: A traditional and effective organic weevil control is a fermented mixture. Mix red pepper, tobacco leaves, ash, and human or cow urine, and let it ferment for a few weeks. Apply this mixture around the base of the plant, near the corm, to repel and kill weevils .

4.10.2. Nematodes
These are microscopic worms that attack the roots, causing the plant to topple over. Healthy, organic soil with lots of organic matter encourages beneficial organisms that suppress nematodes. Adding plenty of compost is the best defense.

4.10.3. Aphids
Aphids can transmit a serious viral disease called bunchy top.

Control aphids by spraying neem-based solutions or insecticidal soap.

Encourage natural predators like ladybugs by planting flowering plants around the field.

Step 4.11: Disease Management

4.11.1. Sigatoka Leaf Spot
This is a fungal disease that causes spots on leaves, eventually killing the leaf tissue. It reduces the plant's ability to feed the bunch .

Good Air Flow: Proper spacing and regular leaf pruning allow air to circulate, reducing humidity and the spread of the disease.

Remove Infected Leaves: Cut off leaves with significant spotting. For leaves with only a few spots, you can trim off the affected parts, leaving the rest of the green leaf .

Resistant Varieties: If the disease is severe in your area, consider planting varieties that are more resistant to Sigatoka .

4.11.2. Panama Wilt (Fusarium Wilt)
This is a soil-borne disease that causes the plant to wilt and die. It is devastating because it remains in the soil for many years. The best control is prevention .

Use Disease-Free Planting Material: This is the most important step.

Do Not Move Infected Soil: Avoid moving soil from infected areas to clean areas.

Remove Infected Plants: If a plant shows signs of wilting (yellowing leaves that split and droop), dig it up completely and destroy it. Do not compost it.

Crop Rotation: If the disease appears, you may need to abandon that field for bananas for many years and grow other crops.

4.11.3. Viral Diseases (Bunchy Top, Mosaic)
These are spread by aphids and by using infected planting material. Infected plants are stunted and produce poor fruit.

Use Clean Planting Material: This is the only real control.

Rogue Infected Plants: If you see a plant with strange, bunched-up leaves at the top (bunchy top), dig it up and destroy it immediately to prevent spread.

.`,
          stage5: ` Harvesting
Harvesting bananas is different from other crops. They are almost always harvested green and allowed to ripen elsewhere. The bunch is cut from the plant, which will then be chopped down to make way for the next generation.

Step 5.1: Know When to Harvest
Knowing the right time to harvest takes experience. The bunch should be mature but still completely green. Signs of maturity include:

The angles on the fingers (the ridges) become less sharp and more rounded.

The flower remnants at the tip of the fruit dry up easily.

The color of the fruit changes from a very dark green to a lighter, brighter green.

Experienced farmers also know the number of weeks from flowering to harvest for their variety.

Step 5.2: Harvest Carefully
Harvesting requires two people.

One person makes a cut partway through the pseudostem, causing the plant to bend over gently so the bunch is within reach.

The second person supports the weight of the bunch.

The bunch stalk is cut with a sharp knife.

The bunch is then carried, never dropped, to a collection point .

Step 5.3: Handle with Extreme Care
Bananas bruise very easily. Any bruise will turn black and rot later, ruining the fruit's market value.

The inside of the bunch stalk is often used as a handle, but the fruit itself must never be gripped.

Bunches should be carried on padded shoulders or placed in padded baskets or containers .

They should never be thrown or dropped.

Step 5.4: Cutting Up the Bunch
At the packing shed, the large bunch is cut into smaller hands (clusters of fingers) for sale.

Hands are cut from the main stalk using clean, sharp knives.

They are washed in clean water to remove any latex or dirt.

They are then graded, with damaged or blemished fingers removed.

The hands are carefully packed into boxes or baskets for transport.

Step 5.5: Post-Harvest Care
To prevent crown rot (a fungal disease that attacks the cut end of the hand), organic farmers may use natural treatments. A common method is to dip the cut ends in a citric acid solution or a solution of beneficial microbes that suppress rot fungi .

Step 5.6: After Harvest - Cut Down the Mother Plant
Once the bunch is harvested, the mother plant has served its purpose. It is cut down to ground level. The pseudostem can be chopped into pieces and spread around the mat as mulch, returning its nutrients to the soil. This clears space and light for the follower sucker you selected earlier, which is now growing rapidly and will be the next to fruit.

By following these stages, you can establish a healthy, productive banana plantation naturally, manage the unique cycle of mother plants and suckers, and harvest sweet, high-quality fruit without using any chemicals
.`,
          
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
          stage1: `Land Preparation
Millets are mostly grown as rainfed crops during the monsoon season. The land must be prepared to catch and hold every drop of rain, and to give the small seeds a fine, firm seedbed.

Step 1.1: Choose the Right Field
Millets can grow on a wide range of soils, from very poor and sandy to highly fertile loams . The most important requirement is that the soil must be well-drained. Millets cannot tolerate waterlogging. Sandy loam and light soils with proper drainage are considered best . The soil should not be too acidic; a neutral to slightly alkaline pH is preferred. If your soil is very acidic, you may need to apply lime well before planting to reduce the acidity .

Step 1.2: Protect the Soil from the Start
The soils where millets are grown are often sandy and prone to erosion by wind and water. From the very beginning, you must think about protecting your soil. If your field is on a slope, plant your rows across the slope, not up and down. This helps hold water and soil in place. You can also dig trenches and build small bunds along the contour lines to stop water from running off and carrying away your topsoil .

Step 1.3: Deep Ploughing Once in a While
Millets send their roots deep into the soil. Start with a deep ploughing using a soil-turning plough. This breaks any hard pans or compacted layers below the surface, allowing roots to penetrate deeply and access moisture stored in the subsoil .

Step 1.4: Create a Fine, Firm Seedbed
After deep ploughing, do two or three harrowings or ploughings with a country plough to pulverize the soil . After each ploughing, do planking. Planking means dragging a heavy wooden plank over the field to break clods and level the surface. The goal is a seedbed that is fine and firm, not too fluffy. A firm seedbed ensures that all the small millet seeds are planted at a uniform depth and have good contact with the soil.

Step 1.5: Add Organic Manure
During the final ploughing, spread well-decomposed farmyard manure or compost over the field and mix it into the soil. Millets have modest nutrient needs compared to other grains, but they respond well to added fertility . The manure should be well-rotted, not fresh. If you have limited manure, you can increase its effectiveness by applying it in bands or in the furrows where the millet will be planted, rather than spreading it everywhere .

Step 1.6: Level the Field
A well-leveled field ensures that rainwater spreads evenly and does not collect in low spots. Use a leveller to make the field as flat as possible. If water collects in some areas, those millet plants will suffer.

Step 1.7: Consider Forming Ridges or Flat Beds
For irrigated millet, you can form ridges and furrows. For rainfed millet, a flat bed system is usually sufficient . The key is to ensure good drainage and even water distribution.
`,
          stage2: `Seed Selection and Treatment
Millet seeds are small, and every seed must become a strong plant. The quality of your seed and how you treat it before planting makes a big difference.

Step 2.1: Choose the Right Type and Variety
There are many different types of millet, and within each type, there are many varieties. Choose a type that is suited to your region and your needs. Some varieties mature early, some take longer. Some are better for grain, some for fodder. Contact your local agriculture department to find a high-yielding variety appropriate for your area . If you are in an area with low and erratic rainfall, choose a drought-tolerant variety.

Step 2.2: Obtain Good Quality Seed
Use certified seed from a reliable source, or save your own seed from a healthy, disease-free crop. The seeds should be plump, uniform in size, and free from damage or discoloration.

Step 2.3: Test Seed Viability
A simple way to check if your seed is good is to take a handful of seeds and place them on a wet cloth. Roll the cloth and keep it moist for a few days. After that, open it and see how many seeds have started sprouting. If most have sprouted, your seed is good.

Step 2.4: Dry Seeds in the Sun
Before treatment, spread the seeds in the sun for a day or two. This warms them, kills some surface germs, and improves germination .

Step 2.5: Salt Water Treatment for Seed Selection
A traditional method to select healthy, heavy seeds is to prepare a salt solution. Mix salt in water. Put the millet seeds in this solution. The hollow, light seeds will float and can be removed and discarded. The heavy, sound seeds that sink are the ones to keep. After this test, wash the good seeds thoroughly in fresh water to remove all the salt .

Step 2.6: Treat with Trichoderma
Millet seeds can rot in the soil if conditions are wet. Mix the seeds with Trichoderma powder, a friendly fungus that lives on the seed coat and protects it from soil fungi that cause rot. Moisten the seeds slightly with water, then add the powder and mix until all seeds are coated.

Step 2.7: Treat with Bio-Fertilizer
Millet grows better when beneficial bacteria live around its roots. Treat the seeds with Azospirillum, a bio-fertilizer that helps the roots access nitrogen from the air . This can be done at the same time as the Trichoderma treatment. Some farmers also use a phosphorus-solubilizing fungus called Aspergillus awamouri . Dry the treated seeds in the shade for a short time and plant them as soon as possible.

Step 2.8: Traditional Treatments
Some farmers treat seeds with a mixture of cow dung and cow urine, which provides a protective coating and some nutrients. This is a simple and effective traditional method.
`,
          stage3: ` Planting
Planting at the right time and in the right way determines whether your millet will thrive or struggle through the season.

Step 3.1: Time Your Planting Correctly
Millets are warm-season crops. In most regions, they are planted at the beginning of the monsoon season, from late June to July . Some types can also be planted in January-February . Wait until the first good soaking rain has arrived and the soil is moist to a good depth. Planting into good moisture ensures rapid germination and vigorous early growth.

Step 3.2: Plant at the Right Depth
Millet seeds are small and should not be planted too deep. A shallow planting depth of about one to two inches is ideal . If planted too deep, the seedling may not have enough energy to reach the surface. If planted too shallow, the seed may dry out.

Step 3.3: Line Sowing is Best
Sowing in straight lines using a seed drill or by dropping seeds in furrows opened by a country plough is much better than broadcasting . Line sowing ensures uniform depth and spacing, makes weeding easier, and gives each plant an equal chance to grow. It also allows for targeted application of manure or fertilizer.

Step 3.4: Maintain Proper Spacing
The space between rows and between plants depends on the type of millet, the fertility of your soil, and whether it is rainfed or irrigated.

Between Rows: For most millets, rows should be spaced so that there is enough room for the plants to grow without competing too much for moisture. A spacing of about 12 to 20 inches between rows is common .

Between Plants: Within the row, plants should be spaced a few inches apart, about 4 to 6 inches .
If plants are too crowded, they will compete and yields will suffer. If too spaced out, weeds will take over.

Step 3.5: Plant a Little Extra
Some seeds may not germinate due to soil conditions or pests. To account for this, plant a slightly higher seed rate. If all seeds germinate, you can thin out the extra plants later.

Step 3.6: Cover the Seeds
After dropping the seeds, cover them with soil. This can be done by passing a light plank over the field or by using a small country plough to push soil back into the furrows. The covering should be uniform so that all seeds emerge at the same time.

Step 3.7: Consider Transplanting for Some Types
For some millet types like kodo millet, you can raise seedlings in a nursery for three to four weeks and then transplant them into the field. This gives the crop a head start and can lead to higher yields . Transplant two seedlings per hill at the recommended spacing.

`,
          stage4: ` Field Management During Growth
Millets are low-maintenance crops once established, but they need attention at certain stages, especially for weed control.

Step 4.1: Watch for Emergence
The seeds will sprout and emerge within about a week, depending on soil temperature and moisture . Walk through the field after emergence and look for any gaps. If there are large gaps, you may need to replant those spots, but this is difficult after the crop has started.

Step 4.2: The Critical First Month - Weed Management
Weeds are the biggest enemy of millets . Millet seedlings are small and grow slowly at first, so weeds can easily overtake them. Weeds compete for nutrients, moisture, sunlight, and space, resulting in reduced yields. They also harbor insect pests and diseases . You must keep the field clean during the first month.

First Weeding: Do the first weeding about three weeks after sowing, or as soon as you see weeds emerging. Use a hoe or cultivator between the rows. This cuts the weeds and also breaks any crust on the soil surface, helping rainwater penetrate .

Second Weeding: A second weeding may be needed about two weeks after the first. By this time, the millet plants should be growing rapidly.

Hand Weeding: Remove weeds that are growing very close to the millet plants by hand.

Number of Weedings: For line-sown millet, two intercultivations and one round of hand weeding are usually sufficient . For broadcasted crops, you may need two rounds of hand weeding.

Step 4.3: Thinning
If your plants are too crowded because you planted thickly, thin them out during the first weeding. Remove the weaker seedlings, leaving the stronger ones with enough space. Thinning within the first two weeks is compulsory for good crop growth .

Step 4.4: Water Management
Millets are drought-tolerant and need very little water. They are dry land crops, and unnecessary irrigation should be avoided . However, if you have irrigation available and there is a prolonged dry spell, providing sufficient soil moisture at three critical stages can significantly increase yields:

Tillering stage (when the plant is producing multiple shoots)

Flowering stage (when the heads are emerging)

Grain filling stage (when the grains are developing) 

If you irrigate, do not over-water. Millets cannot stand waterlogging.

Step 4.5: Nutrition and Feeding
Millets have modest nutrient needs, but they respond well to added fertility. If you applied farmyard manure at planting, that may be sufficient. However, if your soil is poor, you can give a top dressing of compost or liquid manure during the growing season.

Side-dressing: Place compost or well-decomposed manure along the sides of the rows and gently work it into the soil, then water.

Liquid Feeds: You can also apply liquid organic fertilizers like compost tea, fermented plant juices, or diluted cow urine. These provide a quick nutrient boost, especially during rapid growth.

Step 4.6: Pest Management

Millets do not suffer from many pests, but there are a few to watch for.

4.6.1. Shoot Fly
Shoot fly is a common pest that attacks young millet plants. The maggot enters the growing shoot and kills it, causing "dead heart." The central leaf dries up and can be easily pulled out.

Early Sowing: Planting at the right time, at the onset of the monsoon, helps the crop establish quickly and escape shoot fly damage .

Higher Seed Rate: Using a slightly higher seed rate and then removing damaged seedlings at thinning time can help .

Remove Affected Plants: If you see dead hearts, pull out those affected plants and destroy them. This removes the pest from the field.

4.6.2. Stem Borer
Stem borer caterpillars bore into the stem, causing dead hearts and weakening the plant.

Look for small pinholes in leaves, which are the first sign of borer damage.

If you see dead hearts, cut off the affected plant below the damage and destroy it.

4.6.3. Natural Pest Control
Maintain flowering plants on field borders. These attract beneficial insects like ladybugs, lacewings, and parasitic wasps that help control pests. You can also set up light traps in the field at night to attract and kill adult insects .

Step 4.7: Disease Management

4.7.1. Downy Mildew and Ergot
These are fungal diseases that can affect millets. Downy mildew causes strange growth, and ergot produces a sticky fluid on the heads.

Prevention: The best control is prevention through crop rotation and using treated seeds.

Remove Infected Plants: If you see diseased plants, remove them immediately and destroy them to prevent spread.

4.7.2. Smut
Smut is a disease that turns grains into black, powdery masses.

Seed Treatment: Treating seeds with Trichoderma helps prevent smut.

Crop Rotation: Do not grow millets in the same field year after year .

4.7.3. General Disease Prevention

Good Air Flow: Proper spacing and weed control help air circulate through the crop, reducing humidity and the risk of fungal diseases.

Do Not Work in Wet Fields: Avoid walking through or working in the field when the plants are wet, as this can spread diseases.
`,
          stage5: `Harvesting
Millets mature quickly, usually within three to four months after planting, depending on the type and variety.

Step 5.1: Know When the Crop is Mature
Millets are ready for harvest when the leaves turn yellowish and present a nearly dried-up appearance. The grains become hard and firm . For pearl millet, a sure sign of maturity is when you see a black spot at the bottom of the grain where it attaches to the head . The heads will have turned from green to brown.

Step 5.2: Test Grain Moisture
Bite a few grains from different heads. They should be very hard and should crack, not squash. If they are still soft, wait longer. The best time to harvest is when the grain moisture content has dropped .

Step 5.3: Harvest in Stages
Because heads on tillers may mature at slightly different times, you can harvest in stages. Go through the field and cut only the mature heads. Leave the green ones to mature further. This takes more time but gives you better quality grain.

Step 5.4: Cut the Heads
The usual practice is to cut the ear heads first and the stalks later . Use a sharp sickle or knife to cut the mature heads. Leave a small portion of the stem attached to make handling easier. Collect the heads in clean baskets or gunny bags. Do not throw them on the ground, as this causes grain loss.

Step 5.5: Cut the Stalks for Fodder
After all the grain heads are harvested, the remaining stalks are valuable cattle feed. Millet stover is nutritious and relished by animals. Cut the stalks close to the ground, let them dry in the field for about a week, then bundle them for storage .
`,
          stage6: `Post-Harvest and Storage
Step 6.1: Dry the Heads Thoroughly
Spread the harvested heads on clean mats, tarpaulins, or a clean cemented floor. Spread them in a thin layer so air can circulate. Turn them daily so they dry evenly. Dry them in the sun for several days until the grain is completely dry .

Step 6.2: Test Grain Dryness
Take a handful of grain from different heads. Bite it. It should be very hard and should crack, not squash. If it still has any softness, dry longer. Grain at or below a certain moisture level is considered dry for storage .

Step 6.3: Thresh the Grain
Once the heads are completely dry, separate the grain. This can be done by beating the heads with sticks on a clean floor, by having bullocks walk on them, or by using a threshing machine. If using a machine, adjust it gently so it does not crack the grain.

Step 6.4: Winnow the Grain
After threshing, the grain is mixed with chaff, broken pieces of head, and dust. On a breezy day, winnow the mixture by dropping it from a height using a winnowing fan or basket. The wind blows away the light chaff, and the clean, heavy grain falls straight down.

Step 6.5: Dry the Grain Again
Even after threshing and winnowing, the grain may still have some moisture. Spread the clean grain in a thin layer in the sun for another day or two to ensure it is perfectly dry. This final drying is critical for safe storage.

Step 6.6: Prepare Storage Containers
Clean your storage containers or gunny bags thoroughly. If reusing old bags, make sure they are completely clean and dry. It is very important to use clean sacks that have not been used for synthetic fertilizers or any chemicals . Do not leave any old grain inside, as it may contain hidden insects.

Step 6.7: Mix with Natural Protectants
If you store grain in bags or bins, mix in some dried neem leaves or other aromatic leaves that repel insects. Make sure the leaves are completely dry before mixing.

Step 6.8: Store Off the Ground
If using gunny bags, store them on wooden pallets or planks raised off the ground. Do not let the bags touch the wall, as walls can get damp. Keep the storage area clean, dry, and well-ventilated.

Step 6.9: Store Fodder Separately
Store the dried millet stalks in a dry place, off the ground. Cover the top to protect from rain. This fodder will be valuable feed for your cattle during the dry months.

Step 6.10: Check Storage Periodically
Check your stored grain every few weeks. Put your hand deep into the grain and feel for any heat or moisture. Look for any signs of insects or mold. If you find any problems, re-dry the grain in the sun immediately.

By following these stages, you can grow healthy millets naturally, work with their unique drought-tolerant nature, protect your soil from erosion, and harvest good grain and nutritious fodder without using any chemicals.
`,
          
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
          stage1: `Land Preparation
Groundnut sends its pods into the soil to mature. If the soil is hard or forms a crust, the pegs cannot enter and you will get empty pods. The land must be prepared with this in mind.

Step 1.1: Choose the Right Soil
Groundnut needs soil that is loose and well-drained. It does not like waterlogging at all. If water stands in the field, the pods will rot. Choose a field with deep soil that is not too heavy with clay.

Step 1.2: Deep Ploughing but Not Too Fine
Plough the field deeply to break any hard pans. However, do not over-plough to make the soil very fine powder. Groundnut actually prefers a little firmness in the seedbed. The goal is loose soil below for roots and pods, but slightly firm soil above for the seed to sit properly.

Step 1.3: Add Well-Rotted Manure Only
Add farmyard manure or compost during land preparation. But the manure must be very well decomposed. Fresh or half-rotten manure can cause the pods to rot later because it continues to decompose and generates heat. Spread the manure and mix it well into the soil.

Step 1.4: Form Flat Beds or Ridges
Depending on your soil and water, prepare either flat beds or shallow ridges. In heavy soil, ridges are better so water does not collect around the base. In light soil, flat beds are fine. The surface should be smooth and level.
`,
          stage2: `Seed Selection and Treatment
Groundnut seed is the kernel inside the pod. The seed is living and must be handled carefully. Damaged seeds will not germinate well.

Step 2.1: Select Whole Pods or Kernels Carefully
If you are saving your own seed, select pods from healthy plants only. The pods should be well-filled, not shriveled. If you are buying seed, get certified seed of a variety that does well in your area.

Step 2.2: Shell Only When Planting
Do not shell the pods too far in advance. Shell the groundnuts only a day or two before planting. Once shelled, the seed loses moisture and vigor quickly. Shell carefully by hand or with a gentle machine so the seed coat (the thin red or pink skin) does not peel off or crack. If the seed coat is damaged, the seed may rot.

Step 2.3: Treat with Rhizobium (The Most Important Step)
Groundnut has a special relationship with bacteria called Rhizobium that live on its roots. These bacteria take nitrogen from the air and give it to the plant. In return, the plant gives the bacteria food. This is called nitrogen fixation.

Even if your soil has Rhizobium naturally, it is always good to treat the seeds with a fresh Rhizobium culture before planting. This ensures millions of the right bacteria are right there on the seed, ready to infect the roots and form nodules.

Purchase the correct Rhizobium culture for groundnut.

Make a sugar solution or use gum arabic as a sticker.

Mix the culture with the sticker and coat the seeds gently.

Dry the seeds in shade for a short time and plant immediately.

Do not mix treated seeds with bare hands for long; the bacteria are living things.

Step 2.4: Trichoderma Treatment for Seed Rot
Groundnut seeds can rot in the soil if conditions are wet or cold. Treat the seeds with Trichoderma, a friendly fungus that protects against rotting fungi. This can be mixed with the Rhizobium treatment, but check the compatibility of the products.

Step 2.5: Treat with Cow Dung Slurry
A traditional method is to soak the seeds in a thin slurry of cow dung and water overnight. This provides a coating that protects the seed and gives it a little food at germination. This can be done along with Rhizobium treatment.
`,
          stage3: `Planting
Step 3.1: Plant at the Right Time for Pegging
Groundnut needs warm weather but also needs moisture at the time of pegging (when the flower stalk bends and enters the soil). If you plant too early or too late, the pegging stage may hit a dry spell and the pods will not form. Time your planting so that the pegging stage gets moisture.

Step 3.2: Plant at Correct Depth
Plant the seeds at a medium depth, not too shallow and not too deep. A depth of about two inches is generally good. If planted too deep, the seedling struggles to emerge. If too shallow, the seed may dry out or be eaten by birds.

Step 3.3: Maintain Spacing for Pegging
Give the plants enough space. If they are too crowded, the pegs will tangle and many will not enter the soil. The spacing depends on your variety. Bushy varieties need more space. The rows should be wide enough for you to move and do weeding without disturbing the pegs later.

Step 3.4: Do Not Plant Too Thick
Unlike maize where you plant a little thicker to account for losses, groundnut should be planted at the recommended spacing. Overcrowding leads to more disease and less pod formation.
`,
          stage4: `Sowing with onset of monsoon at 30x10cm spacing on ridge tops at 4-5cm depth. Two seeds per hill planted, thinned to one at 15 days. Seed rate of 120-140kg/ha for bold varieties. Sandy soils require slightly deeper sowing (5cm) for moisture access Field Management During Growth
Groundnut grows through stages: first the seedling, then vegetative growth, then flowering and pegging, and finally pod filling. Each stage needs specific care.

Step 4.1: Weed Management in the First Month
Groundnut cannot compete with weeds in the first month, especially until the canopy covers the ground. Weeds will steal light, water, and nutrients.

Do the first weeding about three weeks after sowing, before the weeds get big.

Use a hoe or cultivator carefully. Do not go too deep near the plants, as you may damage young roots.

Do a second weeding before the plants start flowering heavily. Once pegging starts, you must stop all deep cultivation.

Step 4.2: The Critical Pegging Stage
When the plant flowers, the flower stalk elongates and bends down to enter the soil. This is called a peg. The peg must actually penetrate the soil to form a pod. This is a unique feature of groundnut.

Stop all soil disturbance once pegging starts. If you hoe or cultivate now, you will cut the pegs and lose the pods.

If the soil surface becomes hard and crusted, the pegs cannot enter. Light irrigation or light mulching can help keep the surface soft.

Earthing up is not done in groundnut like in sugarcane or maize. You do not pull soil to the plants. You leave the soil surface smooth so pegs can enter easily.

Step 4.3: Water Management at Pegging
The pegging stage is the most water-sensitive. If the soil is too dry at this time, the pegs will not enter, or the young pods will abort. Ensure there is sufficient moisture in the soil when the flowers appear and the pegs start forming.

Give water if there is no rain during flowering and pegging.

Do not flood the field. Just moisten the soil.

After the pods have entered and started filling, you can reduce water slightly, but do not let the soil become bone dry.

Step 4.4: Gypsum Application at Flowering
Groundnut needs calcium for pod development, but here is the special part: the pod absorbs calcium directly from the soil through its shell. Calcium does not move from the leaves to the pods. So the calcium must be present in the soil where the pods are forming.

At the start of flowering, before pegging begins, apply gypsum (a natural mineral) on top of the soil around the plants.

The gypsum supplies calcium to the developing pods. This is a critical step for getting well-filled pods, not empty shells.

Gypsum also supplies sulfur, which groundnut needs.

Step 4.5: Managing Leaf Spots
Groundnut is very prone to leaf spots. These are fungal diseases that cause spots on leaves, leading to defoliation (leaves falling early). If leaves fall, the plant cannot fill the pods.

4.5.1. Look for Spots Early
Walk through the field regularly. Look at the lower leaves first. If you see small spots with yellow halos, leaf spot has started.

4.5.2. Preventive Sprays
Once leaf spot starts, it spreads fast. Preventive measures are better.

Spray a solution of sour buttermilk and water. Buttermilk contains beneficial microbes that can suppress leaf spot fungi. Spraying this at intervals after flowering helps keep leaves healthy.

Spray neem-based solutions. Neem has fungicidal properties.

If you have access to Trichoderma, you can spray a Trichoderma solution on the leaves. Trichoderma can also fight leaf spot fungi.

4.5.3. Keep Air Moving
If the crop is too dense, air does not circulate and humidity stays high, encouraging leaf spot. Proper spacing at planting helps prevent this.

Step 4.6: Pest Management

4.6.1. Aphids and Rosette Disease
Aphids are small insects that suck sap from tender shoots. In groundnut, they are dangerous because they transmit a virus called Rosette. Rosette disease stunts the plant and can cause complete yield loss.

Watch for aphids on the growing tips and under leaves.

If you see aphids, spray neem solution or garlic-chilli solution to control them.

Remove any plant that shows Rosette symptoms (yellow, stunted, bushy appearance) immediately and destroy it. This stops the disease from spreading to healthy plants.

4.6.2. Termites
Termites can damage roots and also bore into pods, making holes. These holes let in fungi that produce aflatoxin.

Incorporate crop residues into the soil well before planting. As they decompose, they produce heat that repels termites.

Healthy, vigorous plants resist termite attack better.

If termite mounds are present in the field, they may need to be dealt with by removing the queen, but this is expert work.

4.6.3. Leaf Miner
Sometimes, small caterpillars mine inside the leaves, creating white trails. This reduces the leaf area for photosynthesis.

If you see leaf miner damage, monitor closely. Often, natural predators will control them.

In severe cases, neem spray can help.

Step 4.7: Encouraging Natural Enemies
Avoid any spray that kills beneficial insects. Ladybugs, hoverflies, spiders, and predatory wasps all help control pests in groundnut. If you have flowering plants around your field, these beneficial insects will come and stay.
`,
          stage5: `Harvesting
Harvesting groundnut at the right time is critical. Too early, and the pods are immature and shrivel when dried. Too late, and the pods may sprout in the ground, or be attacked by pests and fungi.

Step 5.1: Know When the Crop is Mature
Unlike other crops, groundnut does not mature all at once. Some pods may be ready while others are still developing. However, you look for general signs:

The leaves turn yellow and the older leaves start to drop.

The inside of the pod shell develops dark markings or color.

The kernels are plump and have the characteristic color of the variety (pink, red, or brown).

You can dig up a few sample plants and check the pods. If most are well-filled and the inside of the shell has darkened, it is time to harvest.

Step 5.2: Check Soil Moisture Before Harvest
If the soil is too dry and hard, the pods will break off and be left in the ground when you pull the plants. If the soil is too wet, the pods will be muddy and stick together. The best time is when the soil is slightly moist but not wet.

Step 5.3: Digging, Not Pulling
Do not just pull the plants by hand, especially in dry soil. The stems may break and the pods will stay in the ground. Use a hoe or a groundnut digger to loosen the soil underneath the plants first. Then lift the plants gently and shake off the soil.

Step 5.4: Stacking for Curing
After lifting, the plants with pods attached are stacked in small piles or placed on racks in the field. The leaves still have moisture and will continue to feed the pods for a short time. This is called curing. Leave them like this for a few days to dry partially.

Step 5.5: Picking the Pods
After curing, pick the pods from the plants. Remove any soil clumps stuck to the pods. Discard any pods that are damaged, diseased, or rotting.
`,
          stage6: `Post-Harvest and Storage
This is the most critical stage for groundnut because of aflatoxin. Aflatoxin is a poison produced by a fungus (Aspergillus) that grows on groundnuts when they are not dried properly or are stored in damp conditions. Aflatoxin is dangerous to humans and animals, and if your groundnuts have high aflatoxin, they will be rejected in the market.

Step 6.1: Dry Immediately and Thoroughly
Drying is the only way to prevent aflatoxin. The fungus cannot grow if the nuts are dry.

Spread the pods in a thin layer on clean mats, tarpaulins, or a clean cemented floor. Never dry directly on bare soil, as soil contains the fungus and adds moisture.

Turn the pods frequently so all sides dry evenly.

Dry in the sun for several days until the pods are completely dry. The kernels inside should rattle when you shake the pod.

Test by biting a kernel. It should be hard and brittle, not soft or chewy.

Step 6.2: Store as Pods, Not Kernels
Groundnuts store much better inside the shell. The pod is a natural protection. If you store as kernels (shelled), they are exposed to air, moisture, and pests, and they will go bad quickly.

Store only fully dried pods.

Do not shell until you are ready to sell, plant, or eat.

Step 6.3: Use Clean Storage Containers
Use clean gunny bags, or better, airtight containers. If using bags, store them on pallets or wooden planks off the ground. Keep them away from walls that may get damp.

Step 6.4: Do Not Mix Old and New
Never mix newly harvested, dried groundnuts with old stock from last year. Any pests or fungus in the old stock will immediately infect the new stock.

Step 6.5: Check Storage Regularly
Check your stored groundnuts every few weeks. Feel for any heat or moisture. Look for any signs of mold (greenish or blackish growth) on pods. If you find mold, you must re-dry the pods in the sun immediately and remove any affected pods.

Step 6.6: Shell Only When Needed
Just before selling or planting, shell the pods. Shelling damages the seed coat slightly, and after shelling, the kernels will not store long. Shell only the quantity you need immediately.

By following these stages, you can grow healthy groundnuts naturally, get well-filled pods, and protect your harvest from the hidden danger of aflatoxin without using any chemicals.
`,
          
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
          stage1: ` Land Preparation
Watermelons are sensitive plants that need warm, well-prepared soil. Getting the land ready properly is the first step to a successful crop.

Step 1.1: Choose the Right Location
Watermelons need full sun—the more, the better. They will not produce sweet fruit in shade. Choose a field that gets sunlight all day long and is sheltered from strong winds, which can tangle and damage the vines. The field should also have a reliable source of water for irrigation, especially during flowering and fruit development .

Step 1.2: Understand the Soil Requirements
Watermelons grow best in sandy loam soil that is deep, well-drained, and rich in organic matter. The soil pH should be neutral, not too acidic and not too alkaline . Heavy clay soils that hold water are not suitable because watermelons absolutely cannot tolerate wet roots. If your soil is heavy, you can plant on raised beds or mounds to improve drainage .

Step 1.3: Plan Your Rotation
Watermelons should not be grown in the same field year after year. They are susceptible to soil-borne diseases that build up over time. Rotate with crops from different families, such as grains or legumes, to break disease cycles and maintain soil health. A good rotation is to follow watermelons with a legume cover crop that will add nitrogen to the soil .

Step 1.4: Prepare the Soil Well in Advance
Start by ploughing the field deeply to break any hard pans and allow the deep taproots to penetrate. If possible, prepare the soil a month before planting. Spread a generous layer of well-decomposed farmyard manure or compost over the field and mix it into the soil. Watermelons are heavy feeders and need plenty of organic matter .

Step 1.5: Create Raised Beds or Mounds
In most regions, watermelons are planted on raised beds or individual mounds. This improves drainage and allows the soil to warm up faster in spring. If you are using raised beds, make them wide enough to accommodate the vines. If using mounds, space them well apart according to the needs of your variety. For smaller or bush varieties, mounds can be closer together .

Step 1.6: Consider Plastic Mulch
Many organic watermelon farmers use plastic mulch, especially in cooler regions. Black plastic mulch warms the soil, conserves moisture, suppresses weeds, and keeps the fruits clean. If you use plastic mulch, lay it at least a week before planting to allow the soil to warm up. Biodegradable plastic mulches are also available for organic production .

Step 1.7: Install Drip Irrigation
Before planting, set up a drip irrigation system. Drip irrigation delivers water directly to the root zone without wetting the leaves, which helps prevent diseases. It also conserves water and makes it easy to apply liquid fertilizers later. Lay the drip tape or tubes along the rows where the plants will go .
`,
          stage2: `Seed Selection and Treatment
Choosing the right seed is critical. Watermelon seeds are available in many varieties, including seeded and seedless types, and different sizes and colors.

Step 2.1: Choose the Right Variety
There are many types of watermelon. Some are large, some are small "icebox" types like Sugar Baby, and some are seedless. Choose a variety that suits your market and your growing conditions. If you have a short growing season, choose an early-maturing variety. If you are growing in a small space, choose a compact or bush variety . In colder regions, select varieties that are known to perform well in your climate .

Step 2.2: Obtain Untreated Seed
For organic farming, you must use seeds that have not been treated with chemical fungicides. Many commercial seeds are coated with pink, red, green, or blue fungicide treatments. These cannot be used. Ask for untreated seed or certified organic seed from a reliable supplier .

Step 2.3: Select Healthy Seeds
If you are saving your own seed, select seeds only from healthy, disease-free fruits. The seeds should be plump, uniform in size, and free from cracks or damage.

Step 2.4: Treat Seeds with Trichoderma
Watermelon seeds can rot in cool, wet soil. Treat the seeds with Trichoderma powder, a friendly fungus that protects against soil-borne diseases. Moisten the seeds slightly, then add the powder and mix until all seeds are coated. Plant them as soon as possible after treatment .

Step 2.5: Consider Grafted Seedlings (Optional)
In areas with serious soil-borne disease problems, some organic farmers use grafted watermelon plants. The watermelon variety is grafted onto a resistant rootstock from a related plant. This is an advanced technique, but it can provide excellent disease protection .
`,
          stage3: `Planting
Watermelons are warm-season crops. They absolutely cannot tolerate cold.

Step 3.1: Wait for Warm Soil
Do not plant too early. Watermelon seeds will rot in cold, wet soil, and young plants will be stunted by cold temperatures. Wait until the soil has warmed up thoroughly and all danger of frost has passed. The soil should be warm to the touch . In many regions, this is well after the last frost date.

Step 3.2: Start Seeds Indoors or Direct Sow?
In short-season areas, it is best to start seeds indoors in pots or trays, about three to four weeks before you plan to transplant. Use deep pots or cells (like 24-cell trays) to allow room for root development. Keep them warm, around 80-90 degrees, for good germination .

In long-season areas, you can sow seeds directly in the field once the soil is warm. Plant two or three seeds per hill or planting hole, about an inch deep. Later, you will thin to the strongest one or two seedlings .

Step 3.3: Harden Off Seedlings
If you started plants indoors, they must be hardened off before transplanting. This means gradually exposing them to outdoor conditions for about a week before planting. Reduce water slightly and move them outside for increasing periods each day. This toughens them up and reduces transplant shock .

Step 3.4: Space Plants Properly
Watermelon vines need plenty of room to spread. The exact spacing depends on your variety. For standard vining types, space plants about three to four feet apart within the row, and rows six to eight feet apart. For smaller or bush varieties, spacing can be closer. If you are growing on mounds, space the mounds several feet apart in each direction .

Step 3.5: Transplant with Care
Transplant on a cloudy day or in the late afternoon to avoid stressing the plants. Water the seedlings well before transplanting. Dig a hole in the prepared bed or mound, place the seedling, and firm the soil around it. Water immediately after planting to settle the soil .

Step 3.6: Use Row Covers for Early Protection
In cooler regions or for the earliest planting, you can use floating row covers. These lightweight fabric covers protect young plants from cold, wind, and insects like cucumber beetles. Place them over the plants immediately after transplanting, supported by wire hoops to keep the fabric off the leaves. Remove the covers when the plants start flowering so that bees can pollinate the flowers .
`,
          stage4: `Field Management During Growth
Watermelons have a long growing season, and they need consistent care.

Step 4.1: Water Management
Watermelons need consistent moisture throughout the growing season, but they do not like wet feet.

Young Plants: Water regularly to help them establish.

Flowering and Fruit Development: This is the most critical time for water. Keep the soil consistently moist. If the plant suffers drought stress during fruit development, the fruits may be small or misshapen.

As Fruits Mature: Reduce watering when the fruits are getting close to harvest. Too much water at this stage can dilute the sugar and reduce sweetness.

Method: Drip irrigation is best because it keeps the foliage dry. If you water by overhead sprinklers, do it early in the day so the leaves can dry before night .

Step 4.2: Mulching
Mulch is very beneficial for watermelons. If you are not using plastic mulch, apply a thick layer of organic mulch like straw, dried leaves, or grass clippings around the plants after the soil has warmed up. Mulch:

Conserves soil moisture.

Suppresses weeds.

Keeps the fruits clean and off the bare soil.

Prevents soil from splashing onto the leaves, which reduces disease.
For straw mulch, apply a thick layer, several inches deep, to effectively suppress weeds .

Step 4.3: Weed Management
Weeds compete with watermelons for water and nutrients. Control weeds by:

Mechanical Cultivation: Use a hoe or cultivator between the rows before the vines start to run. Once the vines cover the ground, you cannot cultivate without damaging them .

Hand Weeding: Remove weeds that grow close to the plants by hand.

Mulch: A thick layer of straw mulch will suppress most weeds.
After the vines run across the rows, organic growers often just let the weeds grow. It doesn't matter if there are weeds at harvest time, as long as there are also plenty of marketable melons .

Step 4.4: Training Vines
Watermelon vines will naturally spread along the ground. However, if you are short on space, you can train them up a strong trellis. This is called vertical growing. The vines need to be tied to the trellis gently. As the fruits develop, you must support them with slings made from cloth or netting, otherwise the weight will pull them off the vine. Trellising improves air circulation and saves space .

Step 4.5: Pruning and Fruit Selection
To get the best quality fruits, you may need to prune the vines and select which fruits to keep.

For large-fruited varieties, keep only one or two fruits per vine. Remove any extra female flowers or tiny fruits. This concentrates the plant's energy into producing fewer but larger melons.

For small-fruited varieties, you can keep more fruits per vine, maybe three or four .

When the plant has set the desired number of fruits and they are growing well, you can snip off the end of the vine to stop it from growing longer. This directs all the energy into the existing fruits .

Step 4.6: Nutrition and Feeding
Watermelons are heavy feeders and need a steady supply of nutrients.

Basal Dressing: The compost or manure you added at planting provides a good base.

Top Dressing: Starting about a week after transplanting, apply liquid organic fertilizer every week or two until the fruits are fully grown. This can be compost tea, fermented plant juice, diluted fish emulsion, or a solution made from soaked peanut cake or oilseed cake .

Side Dressing: You can also apply dry organic fertilizer (like a balanced mix of composted manure, bone meal, and natural potassium sources) by placing it along the sides of the plants and watering it in. Do this a couple of times during the growing season .

Step 4.7: Pest Management

Watermelons are not heavily attacked by insects compared to some other crops, but there are a few to watch for .

4.7.1. Cucumber Beetles
These small, striped or spotted beetles can attack young seedlings and also feed on flowers, interfering with fruit set. They can also spread bacterial diseases, though watermelons are resistant to bacterial wilt .

Row Covers: Floating row covers placed over young plants physically exclude the beetles. Remove covers at flowering.

Reflective Mulch: Aluminum or red plastic mulch can repel cucumber beetles.

Natural Sprays: If you find more than a couple of beetles per plant on young seedlings, you can spray with pyrethrum or spinosad, which are allowed in organic farming .

4.7.2. Aphids
Aphids are small, soft-bodied insects that cluster on new growth and under leaves. They can transmit viruses .

Row Covers: These also exclude aphids from young plants.

Natural Predators: Encourage ladybugs and lacewings by planting flowers around the field.

Natural Sprays: Insecticidal soap, neem oil, or garlic sprays can control aphids if they become a problem .

4.7.3. Spider Mites
In hot, dry weather, tiny spider mites can infest the undersides of leaves, causing them to turn yellow and dry up.

Water Sprays: A strong spray of water can knock them off.

Natural Sprays: Horticultural oil or insecticidal soap can help.

Predator Mites: You can purchase and release predator mites, but this is expensive.

Rain: A good heavy rain is the best control for spider mites .

Step 4.8: Disease Management

Disease prevention is the goal in organic farming. Healthy, unstressed plants are less likely to get sick .

4.8.1. Prevention Practices

Crop Rotation: Do not plant watermelons in the same field more than once every few years.

Good Air Flow: Proper spacing and trellising allow air to circulate, reducing humidity and fungal diseases.

Drip Irrigation: Keeps foliage dry.

Disease-Resistant Varieties: Choose varieties that are resistant to common diseases in your area .

Balanced Soil Fertility: Soil that is too rich or too poor in nutrients can lead to disease. Follow soil test recommendations.

4.8.2. Powdery Mildew
This fungal disease appears as white, powdery spots on leaves. It can be controlled with sprays of sulfur or potassium bicarbonate, but be careful: sulfur can damage some melon varieties (phytotoxicity). Bacillus subtilis products can also help .

4.8.3. Downy Mildew
This causes yellow spots on leaves that eventually turn brown. It is favored by wet conditions. Some biological products containing Pseudomonas can offer some control .

4.8.4. Phytophthora
This is a serious soil-borne disease that causes fruit rot. It is worse in wet conditions. Rotation and good drainage are the only preventions. Avoid planting in fields with a history of Phytophthora .

Step 4.9: Pollination
Watermelons need bees to pollinate the flowers. Male flowers appear first, then female flowers (with a tiny fruit at the base). Bees must visit both to transfer pollen. This is why you must remove row covers when flowering starts. To attract bees, you can plant flowering plants around your field. Avoid spraying any insecticides during the day when bees are active .
`,
          stage5: `Harvesting
Knowing when a watermelon is ripe is a skill that takes practice. Unlike many fruits, watermelons do not continue to ripen after they are picked. You must harvest them at the perfect moment .

Step 5.1: Look for Ripeness Indicators
There are several signs that a watermelon is ready to harvest. Look for at least two of these indicators:

Tendril Dryness: The small, curly tendril closest to the melon on the vine turns brown and dries up. This is one of the most reliable signs .

Ground Spot Color: The spot where the melon rests on the ground turns from white to a creamy yellow .

Sound: When you tap the melon, a ripe one makes a deep, hollow "thump" or "poink" sound. An unripe one sounds more solid and high-pitched. This takes experience to learn .

Skin Appearance: The surface becomes dull and less shiny, and it may feel rougher.

Step 5.2: Check the Days to Maturity
Know the expected number of days from planting to harvest for your variety. Small types may mature in about 75-85 days from transplanting, while large types may take 95-100 days. Use this as a guide, but always check the physical signs .

Step 5.3: Harvest with Care
Use a sharp knife or pruners to cut the melon from the vine. Leave a short piece of stem attached to the fruit. Do not pull or twist the melon, as this can damage the vine and the fruit.

Step 5.4: Handle Gently
Watermelons bruise easily. Handle them with care. Do not drop or throw them. Place them gently in collection bins or baskets.

Step 5.5: Harvest at the Right Time of Day
Harvest in the cool of the morning if possible, and keep the melons out of direct sun. This preserves their quality.
`,
          stage6: `Post-Harvest and Storage
Step 6.1: Clean in the Field
If you used straw mulch, the melons should be clean. Brush off any soil or straw before moving them. If washing is necessary, use clean water with a sanitizer like hydrogen peroxide, and do not dunk the melons in cold water, as this can force pathogens inside .

Step 6.2: Sort and Grade
Sort your melons by size and quality. Remove any that are damaged, misshapen, or show signs of rot. Uniform, blemish-free melons will fetch the best price. Commercial melons are often graded by count per bin (like 36s, 45s, 60s) .

Step 6.3: Store Properly
Watermelons store best at a cool temperature, around 50-60 degrees, with high humidity. Do not store them below about 45 degrees for more than a few days, or they will suffer chilling injury, which ruins the texture and flavor .

Step 6.4: Protect from Ethylene
Watermelons are sensitive to ethylene gas, which is given off by some fruits like apples and bananas during storage. Ethylene causes watermelons to soften. Store them away from ethylene-producing crops and ensure good air exchange .

Step 6.5: Market Soon
Watermelons are best when sold and consumed soon after harvest. They do not have a long storage life compared to some other crops.

By following these stages, you can grow sweet, healthy watermelons naturally, manage pests and diseases through prevention and cultural practices, and harvest perfectly ripe fruit without using any chemicals.
`,
          
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
          stage1: `Land Preparation
Cucumbers are sensitive to cold and need well-prepared, warm soil to thrive.

Step 1.1: Choose the Right Location
Cucumbers need full sun and warmth. Select a field that gets sunlight all day and is sheltered from strong winds, which can damage the vines. The location should also have a reliable source of water, as cucumbers need consistent moisture . They are not suited to high mountain climates or very dry seasons .

Step 1.2: Understand the Soil Requirements
Cucumbers grow best in soil that is rich in organic matter, with good drainage and the ability to hold moisture . Sandy loam soils that are slightly acidic to neutral are ideal . The soil must be well-drained because cucumber roots cannot tolerate waterlogging. If your soil is heavy, you can plant on raised beds to improve drainage.

Step 1.3: Prepare the Soil in Advance
Start by ploughing the field deeply to loosen the soil and allow roots to penetrate easily. Spread a generous layer of well-decomposed farmyard manure or compost over the field and mix it into the soil during ploughing. Cucumbers are heavy feeders and need plenty of organic matter .

Step 1.4: Create Raised Beds
In many regions, cucumbers are planted on raised beds. This allows the soil to warm up faster in spring and provides good drainage. The beds should be wide enough to accommodate the vines or a trellis system. Leave pathways between beds for walking and harvesting .

Step 1.5: Plan Your Rotation
Cucumbers should not be grown in the same field year after year. They are susceptible to soil-borne diseases that build up over time. Rotate with crops from different families to break disease cycles . Good rotations include following cucumbers with grains or legumes. Some farmers also practice soil solarization during the summer months between crops to reduce soil-borne diseases .

Step 1.6: Set Up Drip Irrigation
Before planting, install a drip irrigation system. Drip irrigation delivers water directly to the root zone without wetting the leaves . This is the most important practice for preventing leaf diseases, which are a major problem in cucumbers. If possible, use black plastic mulch or biodegradable mulch along with drip irrigation to warm the soil and suppress weeds .
`,
          stage2: `Seed Selection and Treatment
Cucumber seeds are relatively large and easy to handle. Choosing the right variety and treating the seeds properly gives your crop a healthy start.

Step 2.1: Choose the Right Variety
There are many types of cucumbers. Some are long and thin for slicing fresh, some are short and blocky for pickling, and some are "burpless" with thin skins . There are also parthenocarpic varieties that set fruit without pollination, which are good for greenhouses where bees may not enter . Choose a variety that suits your market and your growing conditions. Vining varieties need trellising, while bush types take less space.

Step 2.2: Obtain Untreated Seed
For organic farming, you must use seeds that have not been treated with chemical fungicides. Ask for untreated seed or certified organic seed from a reliable supplier . If you save your own seed, select seeds only from healthy, disease-free fruits.

Step 2.3: Select Full, Healthy Seeds
Choose seeds that are plump, uniform in size, and free from cracks or damage. A simple way to check seed quality is to place seeds in water; good seeds will sink, while hollow or damaged seeds will float.

Step 2.4: Treat Seeds with Hot Water
A traditional method to disinfect cucumber seeds is hot water treatment. Soak the seeds in warm water, then in slightly hotter water for a specific time, stirring constantly to prevent scalding . This kills any disease organisms on the seed coat. After treatment, soak the seeds in clean water, then drain and keep them in a warm, moist place for sprouting .

Step 2.5: Treat with Trichoderma
For extra protection against soil-borne diseases, treat the seeds with Trichoderma powder, a friendly fungus. Moisten the seeds slightly, then add the powder and mix until all seeds are coated. Plant them as soon as possible after treatment.

Step 2.6: Start Seeds Indoors or Direct Sow
In short-season areas or for earlier harvests, start seeds indoors in pots or trays, about three to four weeks before you plan to transplant . Use deep containers to allow room for root development. Use a light, fine growing medium mixed with compost. Keep them warm for good germination .

In long-season areas, you can sow seeds directly in the field once the soil is warm. Plant two or three seeds per hill or planting hole, about half an inch deep . Later, you will thin to the strongest one or two seedlings.
`,
          stage3: `Planting
Cucumbers are warm-season crops. They absolutely cannot tolerate cold.

Step 3.1: Wait for Warm Soil
Do not plant too early. Cucumber seeds will rot in cold, wet soil, and young plants will be stunted by cold temperatures. Wait until the soil has warmed up thoroughly and all danger of frost has passed .

Step 3.2: Harden Off Seedlings
If you started plants indoors, they must be hardened off before transplanting. This means gradually exposing them to outdoor conditions for about a week before planting. Reduce water slightly and move them outside for increasing periods each day .

Step 3.3: Space Plants Properly
Cucumber vines need space to spread, especially if they are growing on the ground. For vining types, space plants about 12 inches apart within the row, and rows five to six feet apart . If you are growing on trellises, you can space plants closer together because the vines will grow upward.

Step 3.4: Transplant with Care
Transplant on a cloudy day or in the late afternoon to avoid stressing the plants. Water the seedlings well before transplanting. Dig a hole in the prepared bed, place the seedling, and firm the soil around it. Water immediately after planting to settle the soil .

Step 3.5: Plant at the Right Depth
Plant at the same depth the seedlings were growing in their pots. Do not bury the stem too deep, as this can cause rotting. If using plastic mulch, plant through holes made in the plastic.

Step 3.6: Use Row Covers for Early Protection
In cooler regions or for the earliest planting, you can use floating row covers. These lightweight fabric covers protect young plants from cold and insects. Place them over the plants immediately after transplanting. Remove the covers when the plants start flowering so that bees can pollinate the flowers .
`,
          stage4: `Field Management During Growth
Cucumbers grow quickly and need consistent care throughout the season.

Step 4.1: Water Management
Consistent moisture is critical for cucumbers. If the soil dries out, the fruits can become bitter or misshapen.

Young Plants: Water regularly to help them establish.

Growing Season: Water slowly in the morning or early afternoon, avoiding the leaves . Drip irrigation or soaker hoses are best because they keep the foliage dry .

Critical Periods: The most critical time for water is during flowering and fruit development.

Method: Never let the soil become bone dry, but also do not over-water. Cucumbers cannot stand wet feet.

Step 4.2: Mulching
Mulch is very beneficial for cucumbers. If you are not using plastic mulch, apply a thick layer of organic mulch like straw, dried leaves, or grass clippings around the plants after the soil has warmed up. Research has shown that organic mulches like fresh clover biomass can positively influence cucumber growth and yield when applied early in the season . Mulch:

Conserves soil moisture.

Suppresses weeds.

Keeps the fruits clean and off the bare soil.

Prevents soil from splashing onto the leaves, which reduces disease.

Step 4.3: Weed Management
Weeds compete with cucumbers for water and nutrients. Control weeds by:

Mechanical Cultivation: Use a hoe or cultivator between the rows before the vines start to run.

Hand Weeding: Remove weeds that grow close to the plants by hand.

Mulch: A thick layer of organic mulch will suppress most weeds.

Step 4.4: Trellising and Vine Training
Cucumbers are natural climbers and growing them on trellises has many advantages . A trellis can be made from stakes and strings, fencing, or netting. In commercial production, vines are trained to grow up strings attached to an overhead wire .

Benefits of Trellising: Removes vines from the ground, reduces disease, keeps fruits clean and straight, makes harvesting easier, and saves space .

Training: As the vines grow, gently guide them to the trellis and tie them loosely if needed. Once they start climbing, they will attach with tendrils.

Pruning: Some growers remove the first few female flowers to allow the plant to grow stronger before fruiting. Lateral vines may be pruned to encourage main stem growth . When the vine reaches the top of the trellis, you can pinch off the growing tip to encourage side branches.

Step 4.5: Thinning
If you planted multiple seeds per hill and all germinated, thin to the strongest one or two seedlings per hill when they have their first true leaves . This prevents crowding and gives each plant enough space.

Step 4.6: Nutrition and Feeding
Cucumbers are heavy feeders and need a steady supply of nutrients.

Basal Dressing: The compost or manure you added at planting provides a good base.

Top Dressing: During the growing season, you can apply liquid organic fertilizer every few weeks. This can be compost tea, fermented plant juice, or diluted fish emulsion.

Side Dressing: You can also apply dry organic fertilizer by placing it along the sides of the plants and watering it in.

Nutrient Monitoring: As fruits begin to set and grow, nutrient levels in the soil decrease, and additional fertilizer may be needed .

Step 4.7: Understanding Pollination
Most cucumber varieties need bees for pollination. Both male and female flowers must be blooming at the same time . Male flowers usually appear first, then female flowers follow. If your plants are not setting fruit, it may be a pollination issue, often because there are not enough bees, or the weather is too cold or rainy for bees to fly. Be patient; pollination will improve as more flowers open .

For parthenocarpic (seedless) varieties grown in greenhouses, pollination is not needed, and bees should actually be kept out to prevent pollination, which can cause misshapen, seedy fruits .

Step 4.8: Pest Management

4.8.1. Regular Monitoring
Walk through your field regularly and look under leaves for insects. Early detection is key.

4.8.2. Common Pests

Cucumber Beetles: These small, striped or spotted beetles can attack young plants and spread bacterial wilt.

Aphids: Small insects that cluster on new growth. Spray with a strong stream of water or use insecticidal soap.

Spider Mites: In hot, dry weather, tiny mites can infest leaves, causing them to turn yellow.

Natural Predators: Encourage ladybugs, lacewings, and other beneficial insects by planting flowers around the field.

4.8.3. Organic Controls

Row Covers: Protect young plants from insect attack.

Neem Spray: Can help control many pests.

Oriental Herbal Nutrient: Some organic farms use fermented herbal nutrient solutions to control pests .

Step 4.9: Disease Management

Disease prevention is the goal. Healthy, unstressed plants are less likely to get sick.

4.9.1. Prevention Practices

Drip Irrigation: Keeps foliage dry, preventing most fungal diseases .

Good Air Flow: Proper spacing and trellising allow air to circulate.

Crop Rotation: Do not plant cucumbers in the same field more than once every few years.

Resistant Varieties: Choose varieties with resistance to common diseases.

Mulch: Prevents soil from splashing onto leaves.

Remove Diseased Leaves: If you see leaves with spots, remove them promptly.

4.9.2. Common Diseases

Powdery Mildew: White, powdery spots on leaves. Can be controlled with sulfur or bicarbonate sprays.

Downy Mildew: Yellow spots on leaves that turn brown. Favored by wet conditions.

Bacterial Wilt: Spread by cucumber beetles; plants wilt and die. Control the beetles to prevent the disease.

Damping Off: A fungal disease that kills seedlings. Prevent by using sterile soil and not over-watering .

4.9.3. Baking Soda Spray
An all-purpose mixture of water, baking soda, a drop of liquid soap, and a drop of mineral oil sprayed on both sides of leaves every few days can discourage some diseases .
`,
          stage5: ` Harvesting
Cucumbers grow fast. Once they start producing, you must harvest regularly to keep the plants productive.

Step 5.1: Know When to Harvest
Cucumbers are usually harvested when they are immature, before the seeds inside are fully developed . For fresh eating, harvest when the fruits are still straight, uniformly green, firm, and crisp . For pickling, harvest when they are smaller. The time from planting to harvest is typically about one to two months, depending on the variety and conditions .

Step 5.2: Harvest Frequently
Once fruit bearing begins, pick daily . Frequent harvesting encourages the plant to produce more flowers and fruits. If fruits are left on the vine to mature (turn yellow and large), the plant will stop producing.

Step 5.3: Cut, Don't Pull
Use a sharp knife or clippers to cut the stem above the fruit . Pulling the fruit can damage the vine. Leave a short piece of stem attached to the cucumber if desired.

Step 5.4: Handle Gently
Cucumbers bruise easily. Handle them with care. Place them gently in collection bins, not thrown.

Step 5.5: Harvest in the Morning
Harvest in the cool of the morning when fruits are crisp and full of water. Keep harvested cucumbers out of direct sun to prevent wilting .
`,
          stage6: ` Post-Harvest and Storage
Step 6.1: Sort and Grade
Sort your cucumbers by size, shape, and quality. Remove any that are yellow, misshapen, or damaged. Uniform, straight, dark green fruits will fetch the best price.

Step 6.2: Keep Cool
Cucumbers are mostly water and lose moisture quickly after harvest. Keep them in a cool, shaded place. If possible, move them to a cool storage area quickly to preserve quality. The optimal storage temperature is cool but not cold, with high humidity .

Step 6.3: Prevent Chilling Injury
Do not store cucumbers at very cold temperatures for more than a few days, or they will suffer chilling injury, which causes water-soaked spots and rotting.

Step 6.4: Protect from Ethylene
Cucumbers are sensitive to ethylene gas, which is given off by some fruits like ripe tomatoes and apples. Ethylene causes cucumbers to turn yellow and deteriorate quickly . Store them away from ethylene-producing crops.

Step 6.5: Market Soon
Cucumbers are best when sold and consumed soon after harvest. They do not have a long storage life. In some commercial operations, cucumbers are individually shrink-wrapped to prevent moisture loss and extend shelf life .

Step 6.6: Saving Seeds
If you want to save seeds for next season, allow some cucumbers to remain on the vine until they are fully mature and turn yellow . Split the ripe cucumber lengthwise, scoop out the seeds, and ferment them in water for a few days. The good seeds will settle to the bottom. Rinse, dry thoroughly, and store in an airtight container in a cool place .

By following these stages, you can grow crisp, healthy cucumbers naturally, manage pests and diseases through prevention and cultural practices, and harvest a bountiful crop without using any chemicals.
`,
          
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
          stage1: ` Land Preparation
Carrots are different from other crops because the harvest grows inside the soil. If the soil is not prepared perfectly, the carrots will be forked, stunted, or misshapen.

Step 1.1: Choose the Right Field
Carrots grow best in deep, loose, well-drained sandy loam soil . The soil must be free of rocks, stones, clods, and any debris that could obstruct the growing root . Heavy clay soils or soils that crust over will produce short, forked, or deformed carrots . The soil pH should be slightly acidic to neutral .

Step 1.2: Deep Soil Preparation
Because carrots will grow deep into the soil, you must prepare the soil deeply. Till or dig the soil to a good depth, loosening it thoroughly . Break up any hard pans or compacted layers below the surface. This creates deep channels for the carrot roots to grow straight down . Some farmers use a chisel plow, keyline plow, or broadfork to achieve this depth .

Step 1.3: Create a Fine, Clod-Free Seedbed
After deep tillage, prepare the soil to a fine tilth . This means breaking all clods into small, fine particles. The seedbed must be smooth and level. Any remaining clods or lumps will cause the carrots to fork or bend as they grow. A rototiller or field cultivator with a crumbling roller can be used to create this fine seedbed .

Step 1.4: Add Organic Matter Carefully
Carrots need organic matter, but it must be well-decomposed. Fresh manure or raw organic matter will cause the roots to fork and grow hairy side roots . Use only well-aged compost or vermicompost, mixed thoroughly into the soil . Some sources recommend avoiding nitrogen-rich materials like fresh manure altogether, as excess nitrogen causes forked roots .

Step 1.5: Consider Raised Beds
In many regions, carrots are planted on raised beds. Raised beds provide deeper loose soil, better drainage, and faster warming in spring . In hills or cooler areas, form raised beds of modest height, with a convenient width and length . In plains, ridges and furrows may be formed at the appropriate spacing .

Step 1.6: Pre-Plant Weed Control
Weeds are a major challenge in carrots because carrots germinate slowly and do not compete well. Before planting, you can use a stale seedbed technique. Prepare the field, water it lightly, and allow weed seeds to germinate. Then use shallow cultivation or flame weeding to kill those tiny weeds just before planting . This gives your carrots a head start.

Step 1-7: Plan Your Rotation
Carrots should not be grown in the same field year after year. They are susceptible to soil-borne diseases and nematodes that build up over time. Follow a crop rotation, planting carrots in the same field only once every few years . Good rotations include following carrots with grains or legumes.
`,
          stage2: `Seed Selection and Treatment
Carrot seeds are small and slow to germinate. Choosing good seed and treating it properly helps ensure a successful stand.

Step 2.1: Choose the Right Variety
There are many types of carrots suited for different purposes and soil types .

Nantes type: Cylindrical, blunt-tipped carrots known for excellent flavor and quality. Good for most conditions .

Danvers type: Conical, thick carrots that are hardy and tolerant of heavier soils .

Chantenay type: Short, stout roots that perform well in shallower or heavier soils .

Imperator type: Long, slender carrots with high sugar content. These need the deepest, loosest soil .

Paris Market type: Round, palm-sized carrots that grow well in poor or rocky soil .

Choose a variety suited to your soil type and market. For hills, varieties like Ooty-1, Early Nantes, and New Koroda are recommended. For plains, India Gold, Pusa Kesar, and Half Long Danvers are suitable .

Step 2.2: Obtain Quality Seed
Use fresh seed from a reliable source. Carrot seed viability declines with age. Organic farmers must use untreated seed or certified organic seed . Pelleted seed is available and makes precision seeding easier, but ensure any coating is approved for organic production .

Step 2.3: Speed Up Germination
Carrot seeds are slow to germinate, taking up to three weeks . To speed up germination, you can soak the seeds in water for several hours or overnight before planting . This hydrates the seed and gives it a head start.

Step 2.4: Treat Seeds with Trichoderma
To protect young seedlings from soil-borne diseases, treat the seeds with Trichoderma viride powder, a friendly fungus. Mix the seeds with a 5% Trichoderma solution before sowing . This is an effective organic seed treatment.

Step 2.5: Cow Pat Pit Treatment
A traditional biodynamic treatment is to soak the seeds in cow pat pit solution. Prepare a solution of cow pat pit in water and soak the seeds for a full day before sowing . This is believed to enhance germination and plant health.

Step 2.6: Mix Seeds with Sand for Even Sowing
Because carrot seeds are tiny and difficult to sow evenly, mix the seeds with sand before planting. A common practice is to mix one part seed with several parts sand . This helps distribute the seeds more uniformly along the row.
`,
          stage3: `Planting
Carrots are always direct-seeded. They do not transplant well because disturbing the root causes forking.

Step 3.1: Plant at the Right Time
Carrots are a cool-season crop . In plains, the recommended sowing time is during the cooler months, often August . In hills at higher elevations, carrots can be grown throughout the year with assured irrigation . At medium elevations, sowing from July to February is suitable . Soil temperatures for germination should be cool but not freezing .

Step 3.2: Prepare Rows or Beds
Mark rows with the appropriate spacing between them . For raised beds, you can create multiple lines per bed . Ensure the soil surface is smooth and fine.

Step 3.3: Sow Seeds at Proper Depth
Sow carrot seeds shallowly. The recommended depth is about half an inch, or just enough to cover the seeds with fine soil . In heavy soils or cold weather, plant shallower. In sandy soils or warm weather, you can plant slightly deeper . Do not plant too deep, or the seeds may not emerge.

Step 3.4: Sow at Proper Density
Sow seeds at a density that will give you a good stand without excessive crowding. A common rate is a certain amount of seed per area . Many farmers sow a little thicker to account for poor germination, then thin later. Precision seeders are valuable tools for achieving uniform spacing and avoiding the need for thinning .

Step 3.5: Cover Seeds Gently
Cover the seeds lightly with fine soil or compost . Do not pack the soil down heavily. The goal is good seed-to-soil contact without creating a crust.

Step 3.6: Keep Soil Moist During Germination
Consistent moisture is essential for uniform emergence . Carrots take one to three weeks to germinate, and the soil must remain moist during this entire period . If the soil surface dries out or forms a crust, the seeds will not emerge. Water gently with a fine spray to avoid washing seeds away . Some farmers cover the seeded area with paper, fabric, or row covers to conserve moisture and prevent crusting .

Step 3.7: Use Row Covers
In cooler regions or for early plantings, floating row covers can be used to protect young seedlings and speed growth .
`,
          stage4: `Field Management During Growth
Carrots need careful attention, especially in the first few weeks.

Step 4.1: Thinning
When the seedlings are a few inches tall, they must be thinned . Overcrowded carrots will be small and twisted. Thin to the proper spacing between plants . For hills, a wider spacing may be used; for plains, a closer spacing is common . Thinning can be done by pulling the extra seedlings, or by clipping the tops with scissors to avoid disturbing the roots of the remaining plants .

Step 4.2: Water Management
Consistent moisture is critical for carrots. Fluctuations in watering cause cracking, poor quality, and rough roots .

Germination and Early Growth: Keep soil evenly moist.

Root Development: As roots enlarge, water less often but more deeply to encourage roots to grow downward .

Later Growth: Toward maturity, reduce watering slightly, but do not let the soil become bone dry.

Amount: Carrots need a consistent supply of water throughout the season . Drip irrigation or overhead irrigation can be used, but if using overhead, water early in the day so foliage dries before night .

Step 4.3: Mulching
Apply a thin layer of organic mulch such as straw, dried leaves, or grass clippings around the seedlings after thinning . Mulch:

Conserves soil moisture.

Suppresses weeds.

Regulates soil temperature.

Prevents soil from crusting.

Keeps the carrot shoulders from turning green if they protrude from the soil .

Step 4.4: Weed Management
Weeds are the biggest challenge in organic carrots because carrots are slow to germinate and do not compete well . A combination of methods is needed.

Pre-Plant Stale Seedbed: As described earlier, this gives a head start.

Flame Weeding: Some farmers use flame weeders just before carrots emerge, killing weed seedlings without disturbing the soil .

Mechanical Cultivation: Use shallow cultivation between rows with basket weeders, tine weeders, or small hoes . Be careful not to damage carrot roots.

Hand Weeding: Inevitably, some hand weeding will be needed to remove weeds growing close to the carrots .

Step 4.5: Earthing Up
On the day of thinning, usually about a month after sowing, earthing up should be done . This means pulling a little soil up around the base of the plants to cover any exposed shoulders. If carrot shoulders are exposed to light, they will turn green and become bitter.

Step 4.6: Nutrition and Feeding
Carrots are light to moderate feeders . Excess nitrogen causes lush tops but forked, hairy roots .

Basal Dressing: The compost and organic amendments added at planting provide most of the needed nutrients .

Biofertilizers: Azospirillum and Phosphobacteria can be applied at the time of land preparation to enhance nutrient availability .

Liquid Feeds: During growth, foliar sprays of panchagavya, vermiwash, or other liquid organic fertilizers can be applied at intervals to boost plant health and root development .

Horn Silica: A biodynamic preparation called horn silica can be sprayed later in the season to increase yield and quality .

Step 4.7: Pest Management
Carrots are not heavily attacked by pests, but some problems can occur .

4.7.1. Carrot Rust Fly
This is a common pest whose larvae tunnel into the roots. Use floating row covers to physically exclude the adult flies . Practice crop rotation.

4.7.2. Aphids
Small insects that cluster on new growth. Spray with a strong stream of water, insecticidal soap, or neem oil .

4.7.3. Nematodes (Root Knot)
These microscopic worms cause galls on roots, stunting plants and reducing quality.

Crop Rotation: Do not plant carrots in the same field more than once every few years .

Marigold: Growing marigold in the field once every two years helps suppress nematodes .

Neem Cake: Application of neem cake at sowing time helps control nematodes .

Paecilomyces: Application of the beneficial fungus Paecilomyces lilacinus before sowing can also help .

Step 4.8: Disease Management

4.8.1. Leaf Spot
Fungal leaf spots can affect carrot foliage.

Prevention: Ensure good air circulation and avoid wetting leaves.

Trichoderma and Pseudomonas: Application of Trichoderma viride and Pseudomonas fluorescens at land preparation helps suppress soil-borne diseases .

Botanical Sprays: Foliar sprays of Manchurian tea filtrates or Dasagavya at intervals from one month after sowing can help control leaf spot .

4.8.2. Fungal Diseases in Storage
Proper curing and storage conditions prevent post-harvest rots. Ensure carrots are dry before storage and maintain high humidity with good air circulation.
`,
          stage5: `Harvesting
Carrots can be harvested at any size, from baby carrots to full maturity.

Step 5.1: Know When to Harvest
Carrots are usually ready for harvest two to three months after sowing, depending on the variety and growing conditions . The best harvest period for optimal taste and texture lasts about a few weeks . After that, roots may lose quality.

Step 5.2: Check for Maturity
To check if carrots are ready, brush aside the soil at the base of the leaves and look at the shoulder (top) of the root. It should be the expected size and color for your variety . Refer to your seed packet for the mature size.

Step 5.3: Harvest on Time
Carrots harvested after a light frost are often sweeter . However, do not leave them in the ground too long after maturity, or they may become woody or crack.

Step 5.4: Loosen the Soil First
Before pulling, loosen the soil gently with a digging fork or hand fork . Insert the fork away from the row to avoid piercing the roots. Then grasp the carrot at the base of the greens and pull gently.

Step 5.5: Handle with Care
Carrots bruise easily. Handle them gently. Do not throw or drop them. Remove the green tops soon after harvest, as the leaves continue to draw moisture from the root, causing wilting.

Step 5.6: Harvest in Cool Conditions
Harvest in the cool of the morning if possible, and keep harvested carrots out of direct sun to prevent wilting.
`,
          stage6: `Post-Harvest and Storage
Step 6.1: Remove Tops
Cut or twist off the green tops, leaving a small amount of stem if desired. Tops left on will cause the carrots to wilt rapidly .

Step 6.2: Sort and Grade
Sort carrots by size, shape, and quality. Remove any that are forked, cracked, misshapen, or damaged. Uniform, straight, brightly colored carrots will fetch the best price.

Step 6.3: Washing
Carrots can be sold dirty or washed. Washing improves appearance but can sometimes lead to decay if the carrots are bruised . If washing, use clean water, and dry them thoroughly before storage. Some growers wash only just before sale.

Step 6.4: Cool Immediately
Prompt post-harvest cooling is essential for long-term storage . Cool carrots as quickly as possible after harvest to remove field heat.

Step 6.5: Storage Conditions
Carrots store best at very cool temperatures with extremely high humidity . Under ideal conditions, they can last for several months . They are generally stored in sealed plastic bags or containers to conserve moisture . For shorter storage, they can be kept in the refrigerator crisper drawer for several weeks .

Step 6.6: Alternative Storage Methods
For longer storage without refrigeration, carrots can be layered in damp sand in a cool, root cellar-like environment . They can also be dried or frozen for preservation .

Step 6.7: Check Stored Carrots
If storing for long periods, check periodically for any signs of rot and remove affected roots promptly.

By following these stages, you can grow sweet, straight, healthy carrots naturally, manage the unique challenges of root crop production, and harvest a bountiful crop without using any chemicals.
`,
          
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
          stage1: `Land Preparation
Soybean needs a firm, smooth seedbed. Unlike crops that need deep, fluffy soil, soybean prefers the soil to be settled so the seeds are all planted at the same depth and emerge together.

Step 1.1: Start with Good Drainage
Soybean absolutely cannot stand waterlogged roots. If water stands in the field, the plants turn yellow and may die. The very first requirement is a field that drains well. If your field has low spots where water collects, you must either improve the drainage or choose a different field.

Step 1.2: Prepare a Stale Seedbed
A very effective method for soybean is to prepare a stale seedbed. This means you prepare the field completely, including ploughing and levelling, well before planting. Then you wait. Any weed seeds in the top layer will germinate. Just before planting, you do one very shallow, quick tillage to kill those tiny weed seedlings. Then you plant immediately into a clean, weed-free field. This gives your soybeans a huge head start.

Step 1.3: Create a Smooth, Firm Surface
After final ploughing, use a leveller or roller to make the field surface very smooth and slightly firm. A smooth surface is important because soybeans are planted at a shallow depth. If the field is rough and cloddy, some seeds will be planted too deep and some too shallow, and they will not emerge at the same time. Uniform emergence is critical for soybean success.

Step 1.4: Warm Up the Soil
Soybean is a warm-season crop. Do not be in a hurry to plant when the weather first turns warm. Wait until the soil has warmed up thoroughly. Planting into cold soil causes the seeds to rot or germinate slowly, and they will be weak and easily overtaken by weeds.
`,
          stage2: ` Seed Selection and Inoculation
The most important step in organic soybean farming happens before the seed even goes into the ground. This is the inoculation step, which is unique to legumes like soybean.

Step 2.1: Choose Non-GMO Varieties
Do not use genetically modified seed. Select conventional varieties that are known to do well in your area. Look for varieties that have some natural resistance to diseases common in your region.

Step 2.2: Match Maturity to Your Season
Soybean varieties come in different maturity groups. Some mature early, some late. Choose a variety that fits your growing season length. Early-maturing varieties can sometimes escape late-season pests, but they may also be shorter and not shade the ground as well. Medium-maturing varieties that produce a tall, bushy plant with good canopy cover are often best for organic systems because they smother weeds.

Step 2.3: The Critical Inoculation Step
Soybean needs a specific bacteria called Bradyrhizobium to form nodules on its roots and fix nitrogen. This bacteria may not be present in your soil, especially if soybean has not been grown there recently. Even if it is present, the native strains may not be the most effective ones.

You must treat your soybean seed with the correct inoculant just before planting.

Purchase fresh, high-quality soybean inoculant from a trusted source. Old or heat-damaged inoculant will not work.

The inoculant is a powder containing millions of live bacteria.

Just before planting, moisten the seeds slightly with water or a sugar solution.

Sprinkle the inoculant powder over the moist seeds and mix gently until all seeds are coated. The coating may look black or grey.

Plant immediately. The bacteria are alive and will die if left in the sun or heat for too long.

This step is cheap insurance. Inoculated soybeans will have big, healthy, pink nodules on their roots. Pink color inside the nodule means it is working. Without inoculation, the plants may turn yellow and struggle from nitrogen deficiency.

Step 2.4: Plant a Little Extra
Some of your seeds may not survive due to soil conditions or the mechanical weeding that comes after planting. To account for this, plant at a higher seed rate than you would for conventional farming. A thicker stand means the canopy will close faster and shade out weeds.
`,
          stage3: `Planting
Step 3.1: Time Planting for Warmth and Moisture
Plant when the soil is warm and there is good moisture for germination. If you can time planting just before a gentle rain, that is ideal. The seeds will germinate quickly and emerge with vigor. Fast emergence is the best defense against early weeds.

Step 3.2: Plant at Consistent Shallow Depth
Soybean seeds should be planted at a consistent, shallow depth. If planted too deep, they may not emerge. If planted too shallow, they may dry out. A uniform depth across the whole field ensures that all plants emerge at the same time. When all plants are the same size, they form a uniform canopy that shades weeds effectively.

Step 3.3: Use Narrow Rows
Row spacing is very important for organic soybean. The rows should be narrow enough that the plants from adjacent rows touch each other and shade the ground completely. This shading is your main weed control. When the canopy closes and the ground goes dark, weed seeds cannot germinate.

However, the rows must not be so narrow that you cannot get between them to weed if necessary. There is a balance. Rows that are close together but still allow a wheel hoe or cultivator to pass through are ideal.

Step 3.4: Planting into a Cover Crop (Optional Advanced Method)
Some experienced farmers plant soybean directly into a standing crop of rye. The rye is planted the previous fall and grows tall in spring. Just as the rye starts to flower, it is rolled down with a heavy roller, creating a thick mat of straw on the soil surface. Soybean is then planted through this mat. The rye straw acts as a natural mulch, suppressing weeds all season long.

This method is advanced and not for beginners. It requires getting the rye planting and rolling timing exactly right. If done incorrectly, the rye may regrow or the mulch may be too thin to stop weeds. But when it works, it can eliminate the need for most weeding.
`,
          stage4: `Field Management During Growth
Soybean has a critical period in the first month when it must be kept weed-free. After the canopy closes, the crop largely takes care of itself.

Step 4.1: Blind Weeding Before Emergence
Because you prepared a smooth seedbed and planted at a uniform depth, you know approximately when the soybeans will emerge. A few days before they are due to pop out of the ground, you can do a very shallow weeding pass. This is called blind weeding.

You use a light tool like a tine weeder or a rotary hoe that scratches the soil surface. This kills tiny weed seedlings that have germinated but not yet emerged. The soybean seeds are planted deeper and are not harmed. This pass can be done even when you don't see any weeds yet, as a preventive measure.

Step 4.2: Post-Emergence Weeding
Once the soybeans have emerged and have developed their first rough leaves, there is a period when you cannot weed because the young plants are fragile. Wait until they are well-established, with several sets of leaves.

Then, you can resume weeding. Use a tine weeder or a cultivator between the rows. The goal is to keep the field clean until the soybean plants grow large enough that their leaves touch across the rows. Once the canopy closes, the shade will stop most weeds.

Step 4.3: The Critical Canopy Closure
Watch your field carefully. The day the soybean canopy closes completely, with leaves from adjacent rows touching and shading the ground, is a day of celebration. From this point on, weeds will have a very hard time growing. Your main weeding work is done for the season. The crop has become its own weed suppressant.

Step 4.4: Pest Watching
Soybean can be attacked by various insects, but a healthy, vigorous crop in a diverse farm environment often has few problems. Walk through your field regularly and look for damage.

4.4.1. Look for Defoliators
Some caterpillars and beetles eat soybean leaves. If you see holes in leaves, identify the pest first. Often, the damage is not severe enough to affect yield. Natural predators like ladybugs, spiders, and predatory wasps will usually keep them in check if you have flowering borders around your field.

4.4.2. Watch for Pod Feeders
Later in the season, some insects may attack the developing pods. Stink bugs and pod borers can be a problem. If you see them, monitor closely. Healthy plants can tolerate some damage.

4.4.3. Use Botanical Sprays if Needed
If a pest outbreak becomes severe, you can use neem-based sprays. Neem disrupts the feeding and growth of many insects. Spray in the evening to avoid harming bees and other beneficial insects.

Step 4.5: Recognizing Healthy Nodules
About a month after planting, gently dig up a few soybean plants. Look at the roots. You should see small round nodules attached to the roots. Slice a few open with your fingernail. If they are pink or red inside, your inoculation worked perfectly. The bacteria are actively fixing nitrogen. If the nodules are green, white, or brown inside, they are not working well. This tells you that your inoculation may have failed, and you need to pay extra attention to crop nutrition next time.
`,
          stage5: `Harvesting
Harvesting soybean is different from other grains because the pods sit low on the plant. You must be careful not to leave the bottom pods in the field.

Step 5.1: Watch for Maturity
Soybeans are ready to harvest when the leaves have turned yellow and dropped, and the pods have turned brown or tan. The beans inside will rattle when you shake the pod. They should be hard and not dent when you press them with your fingernail.

Step 5.2: Dealing with Late Weeds
Sometimes, even with good management, late-season weeds may still be present at harvest. Green weeds can cause problems by wrapping around machinery and adding moisture to the harvested grain.

If you have a lot of green weeds at harvest time, you have an option. You can wait for a heavy frost to kill and dry the weeds. Or, you can cut the crop first with a swather. Swathing means cutting the soybean plants and laying them in windrows to dry for a few days before combining. This allows the weeds to dry down and makes combining much easier and cleaner.

Step 5.3: Harvest Close to the Ground
Soybean pods grow all the way down the stem, sometimes very close to the soil. Set your combine header as low as possible to catch these bottom pods. Losing the bottom pods is a common source of yield loss.

Step 5.4: Handle Gently
Soybeans are fragile. If the combine is set too aggressively, it can crack the beans. Cracked beans are worth less and do not store well. Adjust your machine to be gentle.
`,
          stage6: `Post-Harvest and Storage
Soybean storage requires attention to moisture. Soybeans are more sensitive than some other grains.

Step 6.1: Dry Immediately
Soybeans must be dried to a safe moisture level for storage as soon as possible after harvest. If left in a pile while wet, they will heat up and spoil quickly.

Spread the beans in thin layers and dry them in the sun or use a gentle dryer if you have one. The drying temperature must be kept low. High heat damages the soybean protein and makes the beans less valuable.

Step 6.2: Test for Moisture
The beans need to be dry enough that they are hard and cannot be dented with a fingernail. For long-term storage, they must be very dry.

Step 6.3: Keep Cool and Dry in Storage
Store soybeans in clean, dry containers or bins. Protect them from moisture and from rodents. Keep the storage area cool. Warm temperatures can cause the beans to deteriorate over time.

Step 6.4: Do Not Store Damaged Beans
If your harvest includes many cracked or split beans, consider using them first or selling them soon after harvest. Damaged beans do not store well and are more prone to mold and insect attack.

Step 6.5: Plan Your Rotation
After harvesting soybeans, you have a great opportunity. Soybeans leave behind nitrogen in the soil from their root nodules. The following crop will benefit from this leftover nitrogen. Plan your crop rotation so that a heavy-feeding crop follows your soybeans to take advantage of this natural fertility.

By following these stages, you can grow healthy soybeans naturally, harness the power of nitrogen-fixing bacteria to feed your crop, use the plant's own canopy to control weeds, and store your harvest safely without using any chemicals.
`,
          
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
          stage1: `Land Preparation
Groundnut sends its pods into the soil to mature. If the soil is hard or forms a crust, the pegs cannot enter and you will get empty pods. The land must be prepared with this in mind.

Step 1.1: Choose the Right Soil
Groundnut needs soil that is loose and well-drained. It does not like waterlogging at all. If water stands in the field, the pods will rot. Choose a field with deep soil that is not too heavy with clay.

Step 1.2: Deep Ploughing but Not Too Fine
Plough the field deeply to break any hard pans. However, do not over-plough to make the soil very fine powder. Groundnut actually prefers a little firmness in the seedbed. The goal is loose soil below for roots and pods, but slightly firm soil above for the seed to sit properly.

Step 1.3: Add Well-Rotted Manure Only
Add farmyard manure or compost during land preparation. But the manure must be very well decomposed. Fresh or half-rotten manure can cause the pods to rot later because it continues to decompose and generates heat. Spread the manure and mix it well into the soil.

Step 1.4: Form Flat Beds or Ridges
Depending on your soil and water, prepare either flat beds or shallow ridges. In heavy soil, ridges are better so water does not collect around the base. In light soil, flat beds are fine. The surface should be smooth and level.`,
          stage2: `Seed Selection and Treatment
Groundnut seed is the kernel inside the pod. The seed is living and must be handled carefully. Damaged seeds will not germinate well.

Step 2.1: Select Whole Pods or Kernels Carefully
If you are saving your own seed, select pods from healthy plants only. The pods should be well-filled, not shriveled. If you are buying seed, get certified seed of a variety that does well in your area.

Step 2.2: Shell Only When Planting
Do not shell the pods too far in advance. Shell the groundnuts only a day or two before planting. Once shelled, the seed loses moisture and vigor quickly. Shell carefully by hand or with a gentle machine so the seed coat (the thin red or pink skin) does not peel off or crack. If the seed coat is damaged, the seed may rot.

Step 2.3: Treat with Rhizobium (The Most Important Step)
Groundnut has a special relationship with bacteria called Rhizobium that live on its roots. These bacteria take nitrogen from the air and give it to the plant. In return, the plant gives the bacteria food. This is called nitrogen fixation.

Even if your soil has Rhizobium naturally, it is always good to treat the seeds with a fresh Rhizobium culture before planting. This ensures millions of the right bacteria are right there on the seed, ready to infect the roots and form nodules.

Purchase the correct Rhizobium culture for groundnut.

Make a sugar solution or use gum arabic as a sticker.

Mix the culture with the sticker and coat the seeds gently.

Dry the seeds in shade for a short time and plant immediately.

Do not mix treated seeds with bare hands for long; the bacteria are living things.

Step 2.4: Trichoderma Treatment for Seed Rot
Groundnut seeds can rot in the soil if conditions are wet or cold. Treat the seeds with Trichoderma, a friendly fungus that protects against rotting fungi. This can be mixed with the Rhizobium treatment, but check the compatibility of the products.

Step 2.5: Treat with Cow Dung Slurry
A traditional method is to soak the seeds in a thin slurry of cow dung and water overnight. This provides a coating that protects the seed and gives it a little food at germination. This can be done along with Rhizobium treatment.`,
          stage3: `Planting
Step 3.1: Plant at the Right Time for Pegging
Groundnut needs warm weather but also needs moisture at the time of pegging (when the flower stalk bends and enters the soil). If you plant too early or too late, the pegging stage may hit a dry spell and the pods will not form. Time your planting so that the pegging stage gets moisture.

Step 3.2: Plant at Correct Depth
Plant the seeds at a medium depth, not too shallow and not too deep. A depth of about two inches is generally good. If planted too deep, the seedling struggles to emerge. If too shallow, the seed may dry out or be eaten by birds.

Step 3.3: Maintain Spacing for Pegging
Give the plants enough space. If they are too crowded, the pegs will tangle and many will not enter the soil. The spacing depends on your variety. Bushy varieties need more space. The rows should be wide enough for you to move and do weeding without disturbing the pegs later.

Step 3.4: Do Not Plant Too Thick
Unlike maize where you plant a little thicker to account for losses, groundnut should be planted at the recommended spacing. Overcrowding leads to more disease and less pod formation.`,
          stage4: `Sowing with onset of monsoon at 30x10cm spacing on ridge tops at 4-5cm depth. Two seeds per hill planted, thinned to one at 15 days. Seed rate of 120-140kg/ha for bold varieties. Sandy soils require slightly deeper sowing (5cm) for moisture access Field Management During Growth
Groundnut grows through stages: first the seedling, then vegetative growth, then flowering and pegging, and finally pod filling. Each stage needs specific care.

Step 4.1: Weed Management in the First Month
Groundnut cannot compete with weeds in the first month, especially until the canopy covers the ground. Weeds will steal light, water, and nutrients.

Do the first weeding about three weeks after sowing, before the weeds get big.

Use a hoe or cultivator carefully. Do not go too deep near the plants, as you may damage young roots.

Do a second weeding before the plants start flowering heavily. Once pegging starts, you must stop all deep cultivation.

Step 4.2: The Critical Pegging Stage
When the plant flowers, the flower stalk elongates and bends down to enter the soil. This is called a peg. The peg must actually penetrate the soil to form a pod. This is a unique feature of groundnut.

Stop all soil disturbance once pegging starts. If you hoe or cultivate now, you will cut the pegs and lose the pods.

If the soil surface becomes hard and crusted, the pegs cannot enter. Light irrigation or light mulching can help keep the surface soft.

Earthing up is not done in groundnut like in sugarcane or maize. You do not pull soil to the plants. You leave the soil surface smooth so pegs can enter easily.

Step 4.3: Water Management at Pegging
The pegging stage is the most water-sensitive. If the soil is too dry at this time, the pegs will not enter, or the young pods will abort. Ensure there is sufficient moisture in the soil when the flowers appear and the pegs start forming.

Give water if there is no rain during flowering and pegging.

Do not flood the field. Just moisten the soil.

After the pods have entered and started filling, you can reduce water slightly, but do not let the soil become bone dry.

Step 4.4: Gypsum Application at Flowering
Groundnut needs calcium for pod development, but here is the special part: the pod absorbs calcium directly from the soil through its shell. Calcium does not move from the leaves to the pods. So the calcium must be present in the soil where the pods are forming.

At the start of flowering, before pegging begins, apply gypsum (a natural mineral) on top of the soil around the plants.

The gypsum supplies calcium to the developing pods. This is a critical step for getting well-filled pods, not empty shells.

Gypsum also supplies sulfur, which groundnut needs.

Step 4.5: Managing Leaf Spots
Groundnut is very prone to leaf spots. These are fungal diseases that cause spots on leaves, leading to defoliation (leaves falling early). If leaves fall, the plant cannot fill the pods.

4.5.1. Look for Spots Early
Walk through the field regularly. Look at the lower leaves first. If you see small spots with yellow halos, leaf spot has started.

4.5.2. Preventive Sprays
Once leaf spot starts, it spreads fast. Preventive measures are better.

Spray a solution of sour buttermilk and water. Buttermilk contains beneficial microbes that can suppress leaf spot fungi. Spraying this at intervals after flowering helps keep leaves healthy.

Spray neem-based solutions. Neem has fungicidal properties.

If you have access to Trichoderma, you can spray a Trichoderma solution on the leaves. Trichoderma can also fight leaf spot fungi.

4.5.3. Keep Air Moving
If the crop is too dense, air does not circulate and humidity stays high, encouraging leaf spot. Proper spacing at planting helps prevent this.

Step 4.6: Pest Management

4.6.1. Aphids and Rosette Disease
Aphids are small insects that suck sap from tender shoots. In groundnut, they are dangerous because they transmit a virus called Rosette. Rosette disease stunts the plant and can cause complete yield loss.

Watch for aphids on the growing tips and under leaves.

If you see aphids, spray neem solution or garlic-chilli solution to control them.

Remove any plant that shows Rosette symptoms (yellow, stunted, bushy appearance) immediately and destroy it. This stops the disease from spreading to healthy plants.

4.6.2. Termites
Termites can damage roots and also bore into pods, making holes. These holes let in fungi that produce aflatoxin.

Incorporate crop residues into the soil well before planting. As they decompose, they produce heat that repels termites.

Healthy, vigorous plants resist termite attack better.

If termite mounds are present in the field, they may need to be dealt with by removing the queen, but this is expert work.

4.6.3. Leaf Miner
Sometimes, small caterpillars mine inside the leaves, creating white trails. This reduces the leaf area for photosynthesis.

If you see leaf miner damage, monitor closely. Often, natural predators will control them.

In severe cases, neem spray can help.

Step 4.7: Encouraging Natural Enemies
Avoid any spray that kills beneficial insects. Ladybugs, hoverflies, spiders, and predatory wasps all help control pests in groundnut. If you have flowering plants around your field, these beneficial insects will come and stay.`,
          stage5: `Basal application of well-decomposed FYM at 8 tons/ha, vermicompost at 1.5 tons/ha, and rock phosphate at 200kg/ha in furrows below seeds. Gypsum at 500kg/ha applied at peg initiation stage (35-40 days) provides calcium essential for pod developmentHarvesting
Harvesting groundnut at the right time is critical. Too early, and the pods are immature and shrivel when dried. Too late, and the pods may sprout in the ground, or be attacked by pests and fungi.

Step 5.1: Know When the Crop is Mature
Unlike other crops, groundnut does not mature all at once. Some pods may be ready while others are still developing. However, you look for general signs:

The leaves turn yellow and the older leaves start to drop.

The inside of the pod shell develops dark markings or color.

The kernels are plump and have the characteristic color of the variety (pink, red, or brown).

You can dig up a few sample plants and check the pods. If most are well-filled and the inside of the shell has darkened, it is time to harvest.

Step 5.2: Check Soil Moisture Before Harvest
If the soil is too dry and hard, the pods will break off and be left in the ground when you pull the plants. If the soil is too wet, the pods will be muddy and stick together. The best time is when the soil is slightly moist but not wet.

Step 5.3: Digging, Not Pulling
Do not just pull the plants by hand, especially in dry soil. The stems may break and the pods will stay in the ground. Use a hoe or a groundnut digger to loosen the soil underneath the plants first. Then lift the plants gently and shake off the soil.

Step 5.4: Stacking for Curing
After lifting, the plants with pods attached are stacked in small piles or placed on racks in the field. The leaves still have moisture and will continue to feed the pods for a short time. This is called curing. Leave them like this for a few days to dry partially.

Step 5.5: Picking the Pods
After curing, pick the pods from the plants. Remove any soil clumps stuck to the pods. Discard any pods that are damaged, diseased, or rotting.`,
          stage6: `Post-Harvest and Storage
This is the most critical stage for groundnut because of aflatoxin. Aflatoxin is a poison produced by a fungus (Aspergillus) that grows on groundnuts when they are not dried properly or are stored in damp conditions. Aflatoxin is dangerous to humans and animals, and if your groundnuts have high aflatoxin, they will be rejected in the market.

Step 6.1: Dry Immediately and Thoroughly
Drying is the only way to prevent aflatoxin. The fungus cannot grow if the nuts are dry.

Spread the pods in a thin layer on clean mats, tarpaulins, or a clean cemented floor. Never dry directly on bare soil, as soil contains the fungus and adds moisture.

Turn the pods frequently so all sides dry evenly.

Dry in the sun for several days until the pods are completely dry. The kernels inside should rattle when you shake the pod.

Test by biting a kernel. It should be hard and brittle, not soft or chewy.

Step 6.2: Store as Pods, Not Kernels
Groundnuts store much better inside the shell. The pod is a natural protection. If you store as kernels (shelled), they are exposed to air, moisture, and pests, and they will go bad quickly.

Store only fully dried pods.

Do not shell until you are ready to sell, plant, or eat.

Step 6.3: Use Clean Storage Containers
Use clean gunny bags, or better, airtight containers. If using bags, store them on pallets or wooden planks off the ground. Keep them away from walls that may get damp.

Step 6.4: Do Not Mix Old and New
Never mix newly harvested, dried groundnuts with old stock from last year. Any pests or fungus in the old stock will immediately infect the new stock.

Step 6.5: Check Storage Regularly
Check your stored groundnuts every few weeks. Feel for any heat or moisture. Look for any signs of mold (greenish or blackish growth) on pods. If you find mold, you must re-dry the pods in the sun immediately and remove any affected pods.

Step 6.6: Shell Only When Needed
Just before selling or planting, shell the pods. Shelling damages the seed coat slightly, and after shelling, the kernels will not store long. Shell only the quantity you need immediately.

By following these stages, you can grow healthy groundnuts naturally, get well-filled pods, and protect your harvest from the hidden danger of aflatoxin without using any chemicals.`,
          
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
          stage1: `Land Preparation
Maize needs a fine, clean seedbed because the seeds are planted at a shallow depth and must sprout quickly to beat the weeds.

Step 1.1: Understand Your Field Type
Maize does not like wet feet. If your field holds water or gets waterlogged, the roots will rot and the plants will turn yellow. Choose a field that drains well. If your soil is heavy, you may need to plant on raised beds or ridges so the water can run off.

Step 1.2: Early Tillage to Break Pest Cycles
Start preparing the land well before planting. Do an early ploughing, then leave the field for some weeks. This does two things: it allows birds to eat exposed grubs and cutworms, and it gives weed seeds time to sprout so you can kill them later.

Step 1.3: Create a Weed-Free Seedbed
Maize is very sensitive to weeds in its first weeks. About a month before planting, incorporate any crop residue or manure. Then, just before planting, do a final light tillage. The goal is to have a smooth, clean field with no weeds already growing. When you plant into a clean field, your maize gets a head start.

Step 1.4: Consider Living Mulch (Optional)
If you have experience, you can try planting maize into a living mulch. This means you first establish a low-growing legume like certain types of clover. Then you plant the maize directly into this living ground cover. The clover protects the soil, suppresses weeds, and adds nitrogen. However, this method requires careful management and is not for beginners .
`,
          stage2: `Seed Selection and Treatment
Maize seed is large and full of food for the young plant. Choosing the right seed and treating it well is critical.

Step 2.1: Choose Non-GMO, Vigorous Hybrids
Do not use genetically modified seed. Look for hybrids that are known for "early vigor." This means they sprout fast and grow quickly in the first few weeks. Early vigor is the most important trait for organic maize because it helps the crop shade out weeds .

Step 2.2: Match Maturity to Your Season
Select a hybrid with a maturity that fits your growing season. Very long-duration hybrids that take a long time to mature may get attacked by late-season pests. Medium-maturity hybrids that finish before the worst pests arrive are often a safer choice .

Step 2.3: Test Your Own Varieties
Seed company trials are often done with chemicals. The best way to know what works on your farm is to test a few different hybrids yourself. Plant a few rows of each variety side by side in the same field. Watch which ones emerge fastest, which ones stand up best against wind, and which ones give you the most grain at harvest .

Step 2.4: Treat Seeds with Care
Maize seeds can rot in cold, wet soil. Treat your seeds before planting to protect them.

Dust the seeds with Trichoderma powder, a friendly fungus that fights off rotting fungi in the soil.

Some farmers coat the seeds with a thin layer of cow dung slurry to protect them and provide a little food right at germination.
`,
          stage3: `Planting
Step 3.1: Wait for Warm Soil
Do not rush to plant maize as soon as the weather turns warm. If the soil is still cold, the seeds will sit there and rot or be eaten by insects. Wait until the soil has warmed up well and you have had a few warm days in a row. Warm soil means fast germination .

Step 3.2: Plant Shallow for Fast Emergence
Maize seeds should be planted at a shallow depth, just enough to cover them with moist soil. Planting too deep is a common mistake. Deep planting means the seedling takes too long to reach the surface, and by then the weeds are already ahead. In most soils, a shallow planting depth is sufficient .

Step 3.3: Plant in Rows That Suit Your Weeder
Think about how you will remove weeds later. The rows must be wide enough for your wheel hoe or cultivator to pass through without damaging the crop. Space the rows so that you can run your equipment between them .

Step 3.4: Plant a Little Thicker
In organic farming, you may lose a few plants to pests or slight weed pressure. To account for this, plant your seeds a little closer together than conventional farmers do. A slightly higher plant population also helps the canopy close faster, shading the ground and stopping weeds .
`,
          stage4: ` Field Management During Growth
Maize grows through clear stages: first the seedling, then the rapid growth phase, then tasseling and silking, and finally grain fill. Each stage needs specific care.

Step 4.1: The Critical First Weeks
The first month after planting is when you must be most active. Maize does not compete well with weeds when it is small. You must keep the field clean during this period. Once the maize is knee-high and growing fast, it will start to shade the ground and weeds will become less of a problem .

Step 4.2: Mechanical Weeding
You cannot use herbicide sprays. Instead, you use tools.

Tine Weeder: When the maize is very small, you can run a tine weeder over the field. The flexible tines disturb tiny weed seedlings between the rows without hurting the maize .

Inter-row Cultivator: As the maize grows taller, use a cultivator or hoe to cut weeds between the rows. This also breaks the soil surface, letting air in.

Do this work on a sunny day so the uprooted weeds dry up and die quickly.

Step 4.3: Earthing Up
When the maize is about knee-high, do the first earthing up. Pull a little soil from between the rows up around the base of the plants. This does three things:

It buries small weeds near the plants.

It encourages the maize to send out extra roots from the base, making the plant stronger.

It provides support so the plants do not fall over when the wind blows.

Step 4.4: Deep Placement of Fertilizer
Maize has a big appetite, especially for nitrogen. But organic manures release their nutrients slowly. To give the plant food right where it needs it, you can place nutrient-rich material deep in the soil near the roots.

You can make small balls or pellets of concentrated organic manure mixed with things like neem cake, rock phosphate, and composted manure.

At planting time, or just after, place these balls in the soil at a depth of a few inches, close to where the maize roots will grow.

Deep placement puts the food right in the root zone, reduces loss, and feeds the plant steadily throughout its growth .

Step 4.5: Watching for Fall Armyworm
The biggest pest of maize now is fall armyworm. This caterpillar hides in the whorl (the center of the plant where new leaves come out) and eats the growing point. You must watch for it.

4.5.1. Spot the Damage
Look at the leaves. If you see small, round holes or windows where the caterpillar has eaten, or if you see wet, messy frass (droppings) in the whorl, you have armyworm. If you see this, you must act.

4.5.2. Use Botanicals in the Whorl
The caterpillar hides deep in the whorl, so spraying from above may not reach it. You need to get the treatment inside.

Collect leaves of plants like Tithonia (wild sunflower) or neem. Dry them in the shade, then grind them into a fine powder.

Mix this powder with water and a little soap, and let it soak overnight.

Pour this mixture directly into the whorl of each affected plant, or spray with a strong stream aimed into the center.

Farmers in Africa have found that botanical sprays made from local plants can be just as effective as chemicals against fall armyworm .

4.5.3. Use Ash or Sand
A traditional method is to put a pinch of wood ash or fine sand into the whorl. The grit irritates the caterpillar and the ash dries it out.

4.5.4. Encourage Natural Enemies
Avoid spraying anything that kills beneficial insects. If you have flowering plants around your field, they will attract wasps and flies that are natural enemies of the armyworm.

Step 4.6: Pollination is a Critical Time
Maize is pollinated by wind. The tassels at the top release pollen, which must fall onto the silks sticking out of each developing cob. Each silk connects to one kernel. If a silk does not get pollen, that kernel will not form.

During this time, do not do anything that damages the tassels or silks.

Stress from lack of water during pollination can cause poor grain fill. If the weather is very dry, try to irrigate during this critical week when the silks are fresh.
`,
          stage5: `Harvesting
Harvesting maize at the right time and with the right moisture is important for both grain quality and safe storage.

Step 5.1: Let the Field Dry
As the maize matures, the husks will turn brown and dry, and the grain will harden. You can leave the maize standing in the field to dry naturally. In some regions, farmers cut the stalks and stack them to dry further.

Step 5.2: Check Grain Moisture
The grain should be hard enough that you cannot easily sink your fingernail into it. It should feel dry and sound hard when you bite it. Harvesting too wet leads to mold in storage.

Step 5.3: Remove Husks
If you are harvesting cobs, remove the dry husks in the field. This allows the cobs to dry further and removes places for insects to hide.

Step 5.4: Shell or Store on the Cob
You can either remove the grain from the cob (shelling) or store the cobs whole. Many small farmers prefer to store on the cob because the cob itself provides some protection.
`,
          stage6: `Post-Harvest and Storage
This is a stage where maize is unique. Stored maize is highly vulnerable to the maize weevil, a small beetle that can destroy an entire harvest in a few months if not controlled. In organic farming, you cannot use chemical fumigants.

Step 6.1: Dry, Dry, Dry
The most important rule for storing maize is to dry it thoroughly. Weevils cannot thrive in grain that is very dry. Spread the grain in the sun for several days. Turn it often. The grain must be so dry that it cracks when you bite it, not squashes.

Step 6.2: Use Botanical Powders in Storage
You can mix natural plant powders with the stored grain to repel or kill weevils. This is a traditional practice that works.

Collect citrus peels (orange or lemon peels) and dry them completely in the shade. Grind them into a coarse powder.

Collect neem leaves or moringa leaves, dry them, and grind them into powder.

Mix these powders thoroughly with the grain before storing. The strong smell repels weevils, and the fine particles can get into their bodies and kill them .

Step 6.3: Store in Airtight Containers
Weevils need air to live. If you can store your maize in airtight containers, the weevils will suffocate. This can be done with metal drums, sealed plastic drums, or special airtight grain bags. If you use bags, make sure they are completely sealed and kept off the ground on pallets or wooden planks.

Step 6.4: Do Not Mix Old and New Grain
Never store freshly harvested, dried maize on top of grain left from last year. Any weevils hiding in the old grain will quickly infest the new grain. Always clean out your storage containers thoroughly before adding new grain.

Step 6.5: Check Regularly
Even with all precautions, check your stored grain every few weeks. Put your hand deep into the grain and feel for heat. Heat is a sign of insect activity. If you find weevils, you may need to re-sun the grain and re-treat it with botanical powders.

By following these stages, you can grow healthy maize naturally, protect it from the fall armyworm in the field, and keep it safe from weevils in storage without using any chemicals.
`,
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
          stage1: `Land Preparation
Groundnut sends its pods into the soil to mature. If the soil is hard or forms a crust, the pegs cannot enter and you will get empty pods. The land must be prepared with this in mind.

Step 1.1: Choose the Right Soil
Groundnut needs soil that is loose and well-drained. It does not like waterlogging at all. If water stands in the field, the pods will rot. Choose a field with deep soil that is not too heavy with clay.

Step 1.2: Deep Ploughing but Not Too Fine
Plough the field deeply to break any hard pans. However, do not over-plough to make the soil very fine powder. Groundnut actually prefers a little firmness in the seedbed. The goal is loose soil below for roots and pods, but slightly firm soil above for the seed to sit properly.

Step 1.3: Add Well-Rotted Manure Only
Add farmyard manure or compost during land preparation. But the manure must be very well decomposed. Fresh or half-rotten manure can cause the pods to rot later because it continues to decompose and generates heat. Spread the manure and mix it well into the soil.

Step 1.4: Form Flat Beds or Ridges
Depending on your soil and water, prepare either flat beds or shallow ridges. In heavy soil, ridges are better so water does not collect around the base. In light soil, flat beds are fine. The surface should be smooth and level.`,
          stage2: `Seed Selection and Treatment
Groundnut seed is the kernel inside the pod. The seed is living and must be handled carefully. Damaged seeds will not germinate well.

Step 2.1: Select Whole Pods or Kernels Carefully
If you are saving your own seed, select pods from healthy plants only. The pods should be well-filled, not shriveled. If you are buying seed, get certified seed of a variety that does well in your area.

Step 2.2: Shell Only When Planting
Do not shell the pods too far in advance. Shell the groundnuts only a day or two before planting. Once shelled, the seed loses moisture and vigor quickly. Shell carefully by hand or with a gentle machine so the seed coat (the thin red or pink skin) does not peel off or crack. If the seed coat is damaged, the seed may rot.

Step 2.3: Treat with Rhizobium (The Most Important Step)
Groundnut has a special relationship with bacteria called Rhizobium that live on its roots. These bacteria take nitrogen from the air and give it to the plant. In return, the plant gives the bacteria food. This is called nitrogen fixation.

Even if your soil has Rhizobium naturally, it is always good to treat the seeds with a fresh Rhizobium culture before planting. This ensures millions of the right bacteria are right there on the seed, ready to infect the roots and form nodules.

Purchase the correct Rhizobium culture for groundnut.

Make a sugar solution or use gum arabic as a sticker.

Mix the culture with the sticker and coat the seeds gently.

Dry the seeds in shade for a short time and plant immediately.

Do not mix treated seeds with bare hands for long; the bacteria are living things.

Step 2.4: Trichoderma Treatment for Seed Rot
Groundnut seeds can rot in the soil if conditions are wet or cold. Treat the seeds with Trichoderma, a friendly fungus that protects against rotting fungi. This can be mixed with the Rhizobium treatment, but check the compatibility of the products.

Step 2.5: Treat with Cow Dung Slurry
A traditional method is to soak the seeds in a thin slurry of cow dung and water overnight. This provides a coating that protects the seed and gives it a little food at germination. This can be done along with Rhizobium treatment.`,
          stage3: `Planting
Step 3.1: Plant at the Right Time for Pegging
Groundnut needs warm weather but also needs moisture at the time of pegging (when the flower stalk bends and enters the soil). If you plant too early or too late, the pegging stage may hit a dry spell and the pods will not form. Time your planting so that the pegging stage gets moisture.

Step 3.2: Plant at Correct Depth
Plant the seeds at a medium depth, not too shallow and not too deep. A depth of about two inches is generally good. If planted too deep, the seedling struggles to emerge. If too shallow, the seed may dry out or be eaten by birds.

Step 3.3: Maintain Spacing for Pegging
Give the plants enough space. If they are too crowded, the pegs will tangle and many will not enter the soil. The spacing depends on your variety. Bushy varieties need more space. The rows should be wide enough for you to move and do weeding without disturbing the pegs later.

Step 3.4: Do Not Plant Too Thick
Unlike maize where you plant a little thicker to account for losses, groundnut should be planted at the recommended spacing. Overcrowding leads to more disease and less pod formation.`,
          stage4: `Sowing with onset of monsoon at 30x10cm spacing on ridge tops at 4-5cm depth. Two seeds per hill planted, thinned to one at 15 days. Seed rate of 120-140kg/ha for bold varieties. Sandy soils require slightly deeper sowing (5cm) for moisture access Field Management During Growth
Groundnut grows through stages: first the seedling, then vegetative growth, then flowering and pegging, and finally pod filling. Each stage needs specific care.

Step 4.1: Weed Management in the First Month
Groundnut cannot compete with weeds in the first month, especially until the canopy covers the ground. Weeds will steal light, water, and nutrients.

Do the first weeding about three weeks after sowing, before the weeds get big.

Use a hoe or cultivator carefully. Do not go too deep near the plants, as you may damage young roots.

Do a second weeding before the plants start flowering heavily. Once pegging starts, you must stop all deep cultivation.

Step 4.2: The Critical Pegging Stage
When the plant flowers, the flower stalk elongates and bends down to enter the soil. This is called a peg. The peg must actually penetrate the soil to form a pod. This is a unique feature of groundnut.

Stop all soil disturbance once pegging starts. If you hoe or cultivate now, you will cut the pegs and lose the pods.

If the soil surface becomes hard and crusted, the pegs cannot enter. Light irrigation or light mulching can help keep the surface soft.

Earthing up is not done in groundnut like in sugarcane or maize. You do not pull soil to the plants. You leave the soil surface smooth so pegs can enter easily.

Step 4.3: Water Management at Pegging
The pegging stage is the most water-sensitive. If the soil is too dry at this time, the pegs will not enter, or the young pods will abort. Ensure there is sufficient moisture in the soil when the flowers appear and the pegs start forming.

Give water if there is no rain during flowering and pegging.

Do not flood the field. Just moisten the soil.

After the pods have entered and started filling, you can reduce water slightly, but do not let the soil become bone dry.

Step 4.4: Gypsum Application at Flowering
Groundnut needs calcium for pod development, but here is the special part: the pod absorbs calcium directly from the soil through its shell. Calcium does not move from the leaves to the pods. So the calcium must be present in the soil where the pods are forming.

At the start of flowering, before pegging begins, apply gypsum (a natural mineral) on top of the soil around the plants.

The gypsum supplies calcium to the developing pods. This is a critical step for getting well-filled pods, not empty shells.

Gypsum also supplies sulfur, which groundnut needs.

Step 4.5: Managing Leaf Spots
Groundnut is very prone to leaf spots. These are fungal diseases that cause spots on leaves, leading to defoliation (leaves falling early). If leaves fall, the plant cannot fill the pods.

4.5.1. Look for Spots Early
Walk through the field regularly. Look at the lower leaves first. If you see small spots with yellow halos, leaf spot has started.

4.5.2. Preventive Sprays
Once leaf spot starts, it spreads fast. Preventive measures are better.

Spray a solution of sour buttermilk and water. Buttermilk contains beneficial microbes that can suppress leaf spot fungi. Spraying this at intervals after flowering helps keep leaves healthy.

Spray neem-based solutions. Neem has fungicidal properties.

If you have access to Trichoderma, you can spray a Trichoderma solution on the leaves. Trichoderma can also fight leaf spot fungi.

4.5.3. Keep Air Moving
If the crop is too dense, air does not circulate and humidity stays high, encouraging leaf spot. Proper spacing at planting helps prevent this.

Step 4.6: Pest Management

4.6.1. Aphids and Rosette Disease
Aphids are small insects that suck sap from tender shoots. In groundnut, they are dangerous because they transmit a virus called Rosette. Rosette disease stunts the plant and can cause complete yield loss.

Watch for aphids on the growing tips and under leaves.

If you see aphids, spray neem solution or garlic-chilli solution to control them.

Remove any plant that shows Rosette symptoms (yellow, stunted, bushy appearance) immediately and destroy it. This stops the disease from spreading to healthy plants.

4.6.2. Termites
Termites can damage roots and also bore into pods, making holes. These holes let in fungi that produce aflatoxin.

Incorporate crop residues into the soil well before planting. As they decompose, they produce heat that repels termites.

Healthy, vigorous plants resist termite attack better.

If termite mounds are present in the field, they may need to be dealt with by removing the queen, but this is expert work.

4.6.3. Leaf Miner
Sometimes, small caterpillars mine inside the leaves, creating white trails. This reduces the leaf area for photosynthesis.

If you see leaf miner damage, monitor closely. Often, natural predators will control them.

In severe cases, neem spray can help.

Step 4.7: Encouraging Natural Enemies
Avoid any spray that kills beneficial insects. Ladybugs, hoverflies, spiders, and predatory wasps all help control pests in groundnut. If you have flowering plants around your field, these beneficial insects will come and stay.`,
          stage5: `Basal application of well-decomposed FYM at 8 tons/ha, vermicompost at 1.5 tons/ha, and rock phosphate at 200kg/ha in furrows below seeds. Gypsum at 500kg/ha applied at peg initiation stage (35-40 days) provides calcium essential for pod developmentHarvesting
Harvesting groundnut at the right time is critical. Too early, and the pods are immature and shrivel when dried. Too late, and the pods may sprout in the ground, or be attacked by pests and fungi.

Step 5.1: Know When the Crop is Mature
Unlike other crops, groundnut does not mature all at once. Some pods may be ready while others are still developing. However, you look for general signs:

The leaves turn yellow and the older leaves start to drop.

The inside of the pod shell develops dark markings or color.

The kernels are plump and have the characteristic color of the variety (pink, red, or brown).

You can dig up a few sample plants and check the pods. If most are well-filled and the inside of the shell has darkened, it is time to harvest.

Step 5.2: Check Soil Moisture Before Harvest
If the soil is too dry and hard, the pods will break off and be left in the ground when you pull the plants. If the soil is too wet, the pods will be muddy and stick together. The best time is when the soil is slightly moist but not wet.

Step 5.3: Digging, Not Pulling
Do not just pull the plants by hand, especially in dry soil. The stems may break and the pods will stay in the ground. Use a hoe or a groundnut digger to loosen the soil underneath the plants first. Then lift the plants gently and shake off the soil.

Step 5.4: Stacking for Curing
After lifting, the plants with pods attached are stacked in small piles or placed on racks in the field. The leaves still have moisture and will continue to feed the pods for a short time. This is called curing. Leave them like this for a few days to dry partially.

Step 5.5: Picking the Pods
After curing, pick the pods from the plants. Remove any soil clumps stuck to the pods. Discard any pods that are damaged, diseased, or rotting.`,
          stage6: `Post-Harvest and Storage
This is the most critical stage for groundnut because of aflatoxin. Aflatoxin is a poison produced by a fungus (Aspergillus) that grows on groundnuts when they are not dried properly or are stored in damp conditions. Aflatoxin is dangerous to humans and animals, and if your groundnuts have high aflatoxin, they will be rejected in the market.

Step 6.1: Dry Immediately and Thoroughly
Drying is the only way to prevent aflatoxin. The fungus cannot grow if the nuts are dry.

Spread the pods in a thin layer on clean mats, tarpaulins, or a clean cemented floor. Never dry directly on bare soil, as soil contains the fungus and adds moisture.

Turn the pods frequently so all sides dry evenly.

Dry in the sun for several days until the pods are completely dry. The kernels inside should rattle when you shake the pod.

Test by biting a kernel. It should be hard and brittle, not soft or chewy.

Step 6.2: Store as Pods, Not Kernels
Groundnuts store much better inside the shell. The pod is a natural protection. If you store as kernels (shelled), they are exposed to air, moisture, and pests, and they will go bad quickly.

Store only fully dried pods.

Do not shell until you are ready to sell, plant, or eat.

Step 6.3: Use Clean Storage Containers
Use clean gunny bags, or better, airtight containers. If using bags, store them on pallets or wooden planks off the ground. Keep them away from walls that may get damp.

Step 6.4: Do Not Mix Old and New
Never mix newly harvested, dried groundnuts with old stock from last year. Any pests or fungus in the old stock will immediately infect the new stock.

Step 6.5: Check Storage Regularly
Check your stored groundnuts every few weeks. Feel for any heat or moisture. Look for any signs of mold (greenish or blackish growth) on pods. If you find mold, you must re-dry the pods in the sun immediately and remove any affected pods.

Step 6.6: Shell Only When Needed
Just before selling or planting, shell the pods. Shelling damages the seed coat slightly, and after shelling, the kernels will not store long. Shell only the quantity you need immediately.

By following these stages, you can grow healthy groundnuts naturally, get well-filled pods, and protect your harvest from the hidden danger of aflatoxin without using any chemicals.`,
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
          stage1: `Land Preparation
Maize needs a fine, clean seedbed because the seeds are planted at a shallow depth and must sprout quickly to beat the weeds.

Step 1.1: Understand Your Field Type
Maize does not like wet feet. If your field holds water or gets waterlogged, the roots will rot and the plants will turn yellow. Choose a field that drains well. If your soil is heavy, you may need to plant on raised beds or ridges so the water can run off.

Step 1.2: Early Tillage to Break Pest Cycles
Start preparing the land well before planting. Do an early ploughing, then leave the field for some weeks. This does two things: it allows birds to eat exposed grubs and cutworms, and it gives weed seeds time to sprout so you can kill them later.

Step 1.3: Create a Weed-Free Seedbed
Maize is very sensitive to weeds in its first weeks. About a month before planting, incorporate any crop residue or manure. Then, just before planting, do a final light tillage. The goal is to have a smooth, clean field with no weeds already growing. When you plant into a clean field, your maize gets a head start.

Step 1.4: Consider Living Mulch (Optional)
If you have experience, you can try planting maize into a living mulch. This means you first establish a low-growing legume like certain types of clover. Then you plant the maize directly into this living ground cover. The clover protects the soil, suppresses weeds, and adds nitrogen. However, this method requires careful management and is not for beginners .
`,
          stage2: `Seed Selection and Treatment
Maize seed is large and full of food for the young plant. Choosing the right seed and treating it well is critical.

Step 2.1: Choose Non-GMO, Vigorous Hybrids
Do not use genetically modified seed. Look for hybrids that are known for "early vigor." This means they sprout fast and grow quickly in the first few weeks. Early vigor is the most important trait for organic maize because it helps the crop shade out weeds .

Step 2.2: Match Maturity to Your Season
Select a hybrid with a maturity that fits your growing season. Very long-duration hybrids that take a long time to mature may get attacked by late-season pests. Medium-maturity hybrids that finish before the worst pests arrive are often a safer choice .

Step 2.3: Test Your Own Varieties
Seed company trials are often done with chemicals. The best way to know what works on your farm is to test a few different hybrids yourself. Plant a few rows of each variety side by side in the same field. Watch which ones emerge fastest, which ones stand up best against wind, and which ones give you the most grain at harvest .

Step 2.4: Treat Seeds with Care
Maize seeds can rot in cold, wet soil. Treat your seeds before planting to protect them.

Dust the seeds with Trichoderma powder, a friendly fungus that fights off rotting fungi in the soil.

Some farmers coat the seeds with a thin layer of cow dung slurry to protect them and provide a little food right at germination.
`,
          stage3: `Planting
Step 3.1: Wait for Warm Soil
Do not rush to plant maize as soon as the weather turns warm. If the soil is still cold, the seeds will sit there and rot or be eaten by insects. Wait until the soil has warmed up well and you have had a few warm days in a row. Warm soil means fast germination .

Step 3.2: Plant Shallow for Fast Emergence
Maize seeds should be planted at a shallow depth, just enough to cover them with moist soil. Planting too deep is a common mistake. Deep planting means the seedling takes too long to reach the surface, and by then the weeds are already ahead. In most soils, a shallow planting depth is sufficient .

Step 3.3: Plant in Rows That Suit Your Weeder
Think about how you will remove weeds later. The rows must be wide enough for your wheel hoe or cultivator to pass through without damaging the crop. Space the rows so that you can run your equipment between them .

Step 3.4: Plant a Little Thicker
In organic farming, you may lose a few plants to pests or slight weed pressure. To account for this, plant your seeds a little closer together than conventional farmers do. A slightly higher plant population also helps the canopy close faster, shading the ground and stopping weeds .
`,
          stage4: ` Field Management During Growth
Maize grows through clear stages: first the seedling, then the rapid growth phase, then tasseling and silking, and finally grain fill. Each stage needs specific care.

Step 4.1: The Critical First Weeks
The first month after planting is when you must be most active. Maize does not compete well with weeds when it is small. You must keep the field clean during this period. Once the maize is knee-high and growing fast, it will start to shade the ground and weeds will become less of a problem .

Step 4.2: Mechanical Weeding
You cannot use herbicide sprays. Instead, you use tools.

Tine Weeder: When the maize is very small, you can run a tine weeder over the field. The flexible tines disturb tiny weed seedlings between the rows without hurting the maize .

Inter-row Cultivator: As the maize grows taller, use a cultivator or hoe to cut weeds between the rows. This also breaks the soil surface, letting air in.

Do this work on a sunny day so the uprooted weeds dry up and die quickly.

Step 4.3: Earthing Up
When the maize is about knee-high, do the first earthing up. Pull a little soil from between the rows up around the base of the plants. This does three things:

It buries small weeds near the plants.

It encourages the maize to send out extra roots from the base, making the plant stronger.

It provides support so the plants do not fall over when the wind blows.

Step 4.4: Deep Placement of Fertilizer
Maize has a big appetite, especially for nitrogen. But organic manures release their nutrients slowly. To give the plant food right where it needs it, you can place nutrient-rich material deep in the soil near the roots.

You can make small balls or pellets of concentrated organic manure mixed with things like neem cake, rock phosphate, and composted manure.

At planting time, or just after, place these balls in the soil at a depth of a few inches, close to where the maize roots will grow.

Deep placement puts the food right in the root zone, reduces loss, and feeds the plant steadily throughout its growth .

Step 4.5: Watching for Fall Armyworm
The biggest pest of maize now is fall armyworm. This caterpillar hides in the whorl (the center of the plant where new leaves come out) and eats the growing point. You must watch for it.

4.5.1. Spot the Damage
Look at the leaves. If you see small, round holes or windows where the caterpillar has eaten, or if you see wet, messy frass (droppings) in the whorl, you have armyworm. If you see this, you must act.

4.5.2. Use Botanicals in the Whorl
The caterpillar hides deep in the whorl, so spraying from above may not reach it. You need to get the treatment inside.

Collect leaves of plants like Tithonia (wild sunflower) or neem. Dry them in the shade, then grind them into a fine powder.

Mix this powder with water and a little soap, and let it soak overnight.

Pour this mixture directly into the whorl of each affected plant, or spray with a strong stream aimed into the center.

Farmers in Africa have found that botanical sprays made from local plants can be just as effective as chemicals against fall armyworm .

4.5.3. Use Ash or Sand
A traditional method is to put a pinch of wood ash or fine sand into the whorl. The grit irritates the caterpillar and the ash dries it out.

4.5.4. Encourage Natural Enemies
Avoid spraying anything that kills beneficial insects. If you have flowering plants around your field, they will attract wasps and flies that are natural enemies of the armyworm.

Step 4.6: Pollination is a Critical Time
Maize is pollinated by wind. The tassels at the top release pollen, which must fall onto the silks sticking out of each developing cob. Each silk connects to one kernel. If a silk does not get pollen, that kernel will not form.

During this time, do not do anything that damages the tassels or silks.

Stress from lack of water during pollination can cause poor grain fill. If the weather is very dry, try to irrigate during this critical week when the silks are fresh.
`,
          stage5: `Harvesting
Harvesting maize at the right time and with the right moisture is important for both grain quality and safe storage.

Step 5.1: Let the Field Dry
As the maize matures, the husks will turn brown and dry, and the grain will harden. You can leave the maize standing in the field to dry naturally. In some regions, farmers cut the stalks and stack them to dry further.

Step 5.2: Check Grain Moisture
The grain should be hard enough that you cannot easily sink your fingernail into it. It should feel dry and sound hard when you bite it. Harvesting too wet leads to mold in storage.

Step 5.3: Remove Husks
If you are harvesting cobs, remove the dry husks in the field. This allows the cobs to dry further and removes places for insects to hide.

Step 5.4: Shell or Store on the Cob
You can either remove the grain from the cob (shelling) or store the cobs whole. Many small farmers prefer to store on the cob because the cob itself provides some protection.
`,
          stage6: `Post-Harvest and Storage
This is a stage where maize is unique. Stored maize is highly vulnerable to the maize weevil, a small beetle that can destroy an entire harvest in a few months if not controlled. In organic farming, you cannot use chemical fumigants.

Step 6.1: Dry, Dry, Dry
The most important rule for storing maize is to dry it thoroughly. Weevils cannot thrive in grain that is very dry. Spread the grain in the sun for several days. Turn it often. The grain must be so dry that it cracks when you bite it, not squashes.

Step 6.2: Use Botanical Powders in Storage
You can mix natural plant powders with the stored grain to repel or kill weevils. This is a traditional practice that works.

Collect citrus peels (orange or lemon peels) and dry them completely in the shade. Grind them into a coarse powder.

Collect neem leaves or moringa leaves, dry them, and grind them into powder.

Mix these powders thoroughly with the grain before storing. The strong smell repels weevils, and the fine particles can get into their bodies and kill them .

Step 6.3: Store in Airtight Containers
Weevils need air to live. If you can store your maize in airtight containers, the weevils will suffocate. This can be done with metal drums, sealed plastic drums, or special airtight grain bags. If you use bags, make sure they are completely sealed and kept off the ground on pallets or wooden planks.

Step 6.4: Do Not Mix Old and New Grain
Never store freshly harvested, dried maize on top of grain left from last year. Any weevils hiding in the old grain will quickly infest the new grain. Always clean out your storage containers thoroughly before adding new grain.

Step 6.5: Check Regularly
Even with all precautions, check your stored grain every few weeks. Put your hand deep into the grain and feel for heat. Heat is a sign of insect activity. If you find weevils, you may need to re-sun the grain and re-treat it with botanical powders.

By following these stages, you can grow healthy maize naturally, protect it from the fall armyworm in the field, and keep it safe from weevils in storage without using any chemicals.
`,
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
          stage1: `Land Preparation
Sorghum is a hardy crop that can grow in marginal conditions, but it responds well to good land preparation.

Step 1.1: Choose the Right Field
Sorghum can grow in a wide range of soils, from light sands to heavy clays . It tolerates slightly alkaline soils better than many crops. The most important requirement is good drainage. Sorghum cannot tolerate waterlogging or standing water. Choose a field that drains well and does not collect water after heavy rains.

Step 1.2: Understand the Soil pH
Sorghum grows best in soils that are neutral to slightly acidic . If your soil is very acidic, it can affect nutrient availability and plant growth. A soil test can tell you if you need to apply lime well before planting to adjust the pH.

Step 1.3: Deep Ploughing for Root Development
Sorghum sends its roots deep into the soil. Start with a deep ploughing using a soil-turning plough. This breaks any hard pans or compacted layers below the surface, allowing roots to penetrate deeply and access moisture stored in the subsoil . Deep ploughing also helps control perennial weeds.

Step 1.4: Create a Fine Seedbed
After deep ploughing, do two or three harrowings or ploughings with a country plough. After each ploughing, do planking. Planking means dragging a heavy wooden plank over the field to break clods and level the surface. The goal is a seedbed that is fine and firm, not too fluffy. A firm seedbed ensures good seed-to-soil contact and uniform germination.

Step 1.5: Add Organic Manure
During the final ploughing, spread well-decomposed farmyard manure or compost over the field and mix it into the soil. Sorghum responds well to organic matter, which helps the soil hold moisture during dry spells. The manure should be well-rotted, not fresh.

Step 1.6: Conserve Soil Moisture
In dryland areas where sorghum is grown on rainfall, water conservation is critical. If your field has a slope, plough across the slope (contour ploughing) to catch and hold rainwater. You can also dig small trenches or build bunds along the contour lines to stop water from running off.

Step 1.7: Level the Field
A well-leveled field ensures that rainwater spreads evenly and does not collect in low spots. Use a leveller to make the field as flat as possible.`,
          stage2: `Seed Selection and Treatment
Sorghum seed is relatively small, and choosing the right variety is critical for success.

Step 2.1: Choose the Right Type of Sorghum
There are several types of sorghum, each with a different purpose:

Grain Sorghum: Grown for its grain, used for human consumption or animal feed. The heads are usually compact.

Sweet Sorghum: Grown for its sweet juice, which can be used to make syrup or biofuel. The stalks are juicy and sweet.

Fodder Sorghum: Grown for animal forage. It produces lots of leafy growth.

Dual-Purpose Sorghum: Bred to produce both good grain and good fodder.

Choose a variety that suits your needs and your region's growing conditions.

Step 2.2: Understand Maturity Groups
Sorghum varieties mature at different rates. Some are early-maturing, which can escape late-season drought. Some are medium or late-maturing, which may yield more if the season is long enough. Choose a variety that fits your growing season length.

Step 2.3: Obtain Quality Seed
Use certified seed from a reliable source, or save your own seed from a healthy, disease-free crop. The seeds should be plump, uniform in size, and free from damage or discoloration.

Step 2.4: Test Seed Germination
A simple way to check if your seed is good is to take a handful of seeds and place them on a wet cloth. Roll the cloth and keep it moist for a few days. After that, open it and see how many seeds have started sprouting. If most have sprouted, your seed is good.

Step 2.5: Treat Seeds with Trichoderma
Sorghum seeds can be attacked by soil-borne fungi, especially in wet conditions. Treat the seeds with Trichoderma powder, a friendly fungus that lives on the seed coat and protects it from harmful fungi. Moisten the seeds slightly, then add the powder and mix until all seeds are coated.

Step 2.6: Treat with Azospirillum
Sorghum benefits from beneficial bacteria called Azospirillum that live around the roots and help the plant access nitrogen. Treat the seeds with Azospirillum culture just before planting. This can be done along with the Trichoderma treatment.

Step 2.7: Dry in Shade and Plant Soon
After treatment, dry the seeds in the shade for a short time and plant them as soon as possible. Do not leave treated seeds in the hot sun.`,
          stage3: `Planting
Planting at the right time and depth is critical for sorghum, especially in dryland conditions.

Step 3.1: Wait for the Right Soil Moisture
Sorghum is often planted at the beginning of the monsoon season. Wait until the first good soaking rain has arrived and the soil is moist to a good depth. Planting into good moisture ensures rapid germination and vigorous early growth.

Step 3.2: Plant at the Right Time of Year
In most regions, sorghum is planted with the onset of the monsoon, typically from June to July. In some areas with winter rains, it can also be planted in the rabi season. Planting too early or too late can expose the crop to pest pressure or drought at critical stages.

Step 3.3: Plant at the Right Depth
Plant sorghum seeds at a medium depth, about one to two inches deep . If planted too shallow, the seed may dry out or be eaten by birds. If planted too deep, the seedling may struggle to emerge. In sandy soils, plant slightly deeper; in heavy soils, plant shallower.

Step 3.4: Maintain Proper Spacing
Proper spacing ensures that each plant gets enough light, water, and nutrients.

Between Rows: Space rows according to your variety and the expected rainfall. In dry areas with low rainfall, give plants more space so they do not compete for moisture. In areas with good rainfall, rows can be closer together. A common spacing is about 18 inches between rows .

Between Plants: Within the row, space plants about 4 to 6 inches apart after thinning.

Step 3.5: Line Sowing is Best
Sowing in straight lines using a seed drill or by dropping seeds in furrows opened by a country plough is much better than broadcasting. Line sowing ensures uniform depth and spacing, makes weeding easier, and gives each plant an equal chance to grow.

Step 3.6: Plant a Little Extra
Some seeds may not germinate due to soil conditions or pests. To account for this, plant a slightly higher seed rate. If all seeds germinate, you can thin out the extra plants later.

Step 3.7: Cover the Seeds
After dropping the seeds, cover them with soil. This can be done by passing a light plank over the field or by using a small country plough to push soil back into the furrows.
`,
          stage4: `Field Management During Growth
Sorghum goes through distinct growth stages: seedling, vegetative growth, flowering, and grain filling. Each stage needs different attention.

Step 4.1: Watch for Emergence
The seeds will sprout and emerge within about a week to ten days, depending on soil temperature and moisture. Walk through the field after emergence and look for any gaps. If there are large gaps, you may need to replant those spots.

Step 4.2: The Unique Tillering Habit
One of the most important things to understand about sorghum is that it tillers. This means from the base of the main plant, several side shoots will grow. Each tiller can produce its own grain head. A single seed can give you multiple heads. This is why good spacing is so important. If plants are too crowded, tillering is reduced. If they have enough space, each plant produces more heads and more grain.

Step 4.3: First Weeding and Thinning
Weeds compete with young sorghum for moisture and nutrients. Do the first weeding about three to four weeks after sowing, before the weeds get big.

Use a hoe or cultivator between the rows.

At the same time, thin the plants to the desired spacing. Remove the weaker seedlings, leaving the strongest ones with enough space. This ensures that each remaining plant can tiller well.

Step 4.4: Second Weeding and Earthing Up
About two weeks after the first weeding, do a second weeding. At this time, also do a light earthing up. Pull a little soil from between the rows up around the base of the plants. This supports the plants, encourages more roots to form, and helps control late weeds.

Step 4.5: Water Management
Sorghum is drought-tolerant, but it responds well to irrigation at critical stages if water is available.

Young Plants: Keep soil moist to help them establish.

Vegetative Growth: Sorghum can tolerate dry spells better than most crops.

Critical Stages: The most water-sensitive stages are flowering and early grain filling. If you have irrigation, this is the time to use it.

Method: If irrigating, use furrow or drip irrigation. Avoid overhead irrigation that can wet the heads and encourage disease.

Stop Watering: Stop irrigation as the grain matures.

Step 4.6: Understanding Drought Dormancy
Sorghum has an amazing survival mechanism. If a dry spell comes and the soil moisture runs low, the plant can stop growing, its leaves will roll up, and it will wait. When rain comes again, it will unroll its leaves and resume growth. Do not panic if your sorghum field looks stressed during a dry spell. This is the plant's natural survival mechanism. It is not dying; it is waiting.

Step 4.7: Nutrition and Feeding
Sorghum has moderate nutrient needs.

Basal Dressing: The compost or manure you added at planting provides a good base.

Top Dressing: If your soil is poor, you can apply liquid organic fertilizer like compost tea or diluted cow urine during the vegetative growth stage.

Avoid Excess Nitrogen: Too much nitrogen can cause lush growth that is more susceptible to pests and lodging (falling over).

Step 4.8: Pest Management

4.8.1. Shoot Fly
Shoot fly is a common pest that attacks young sorghum plants. The maggot enters the growing shoot and kills it, causing "dead heart." The central leaf dries up and can be easily pulled out.

Early Sowing: Planting at the right time, at the onset of the monsoon, helps the crop establish quickly and escape shoot fly damage .

Seed Treatment: Some organic treatments can help repel shoot fly.

Remove Affected Plants: If you see dead hearts, pull out those affected plants and destroy them. This removes the pest from the field.

4.8.2. Stem Borer
Stem borer caterpillars bore into the stem, causing dead hearts and weakening the plant.

Look for small pinholes in leaves, which are the first sign of borer damage.

If you see dead hearts, cut off the affected plant below the damage and destroy it.

4.8.3. Sorghum Midge
This tiny insect attacks the flowering head. The larvae feed on developing grains, causing chaffy, empty heads.

Light Traps: Set up light traps in the field at night to attract and kill adult midges .

Neem Spray: If midge attack is seen, spray neem seed kernel extract on the heads.

4.8.4. Bird Damage
As the grain ripens, birds can be a serious problem. Traditional methods include posting someone in the field to scare birds, using reflective objects that flash in the sun, or planting a border of taller plants around the field.

4.8.5. Natural Pest Control
Maintain flowering plants on field borders to attract beneficial insects like ladybugs, lacewings, and parasitic wasps that help control pests.

Step 4.9: Disease Management

4.9.1. Grain Mold
If rains occur during flowering and grain filling, the grain can get moldy.

Early sowing helps ensure that grain filling happens after the heavy rains have stopped.

Growing varieties with open, loose panicles that dry quickly after rain can reduce mold.

4.9.2. Downy Mildew and Smut
These fungal diseases can affect sorghum.

Seed Treatment: Treating seeds with Trichoderma helps prevent these diseases.

Crop Rotation: Do not grow sorghum in the same field year after year .

Remove Infected Plants: If you see diseased plants, remove them immediately and destroy them.

4.9.3. Anthracnose
This fungal disease causes spots on leaves and stems.

Resistant Varieties: Choose resistant varieties if available.

Crop Rotation: Practice rotation.

Remove Crop Residue: After harvest, remove or incorporate crop residue to reduce disease carryover.

Step 4.10: Important Warning About Prussic Acid
Sorghum contains a compound that can turn into prussic acid (hydrogen cyanide) under certain conditions. This is especially important if you are grazing animals on the crop or feeding fresh fodder.

Risk Factors: The highest risk is in young, rapidly growing plants, and in plants stressed by drought or frost.

Management: Do not graze or cut for green fodder when plants are very young and succulent. If plants have been stressed by drought, wait after a rain before grazing. Ensiling (making silage) reduces the risk.
`,
          stage5: `Harvesting
Sorghum can be harvested for grain, for fodder, or both.

Step 5.1: Know When the Grain is Mature
The grain is ready to harvest when it is hard and cannot be dented with your fingernail. The heads will have turned from green to brown or tan. The grain moisture content should be low.

Step 5.2: Harvest at the Right Time
For grain sorghum, harvest when the grain is fully mature and dry. If you wait too long, birds and weather can cause losses.

Step 5.3: Cut the Heads
For grain harvest, cut the heads from the standing plants using a sharp sickle or knife. Leave a portion of the stem attached to make handling easier. Collect the heads in clean baskets or gunny bags.

Step 5.4: Cut the Stalks for Fodder
After removing the grain heads, the remaining stalks are valuable cattle feed. Cut the stalks close to the ground, let them dry in the field for a few days, then bundle them for storage. If you are growing sweet sorghum, the stalks can be harvested earlier for juice extraction.

Step 5.5: For Fodder Sorghum
If you are growing sorghum specifically for fodder, harvest the whole plant when it reaches the desired stage, usually around flowering or early grain fill for the best balance of yield and quality. Cut the plants close to the ground.

Step 5.6: Handle with Care
Do not throw the harvested heads on the ground roughly, as this can cause grain loss.

`,
          stage6: `Post-Harvest and Storage
Step 6.1: Dry the Heads
Spread the harvested heads on clean mats, tarpaulins, or a clean cemented floor. Spread them in a thin layer so air can circulate. Turn them daily so they dry evenly. Dry them in the sun for several days until the grain is completely dry.

Step 6.2: Test Grain Dryness
Take a handful of grain from different heads. Bite it. It should be very hard and should crack, not squash. If it still has any softness, dry longer.

Step 6.3: Thresh the Grain
Once the heads are completely dry, separate the grain. This can be done by beating the heads with sticks on a clean floor, by having bullocks walk on them, or by using a threshing machine. If using a machine, adjust it gently so it does not crack the grain.

Step 6.4: Winnow the Grain
After threshing, the grain is mixed with chaff, broken pieces of head, and dust. On a breezy day, winnow the mixture by dropping it from a height using a winnowing fan or basket. The wind blows away the light chaff, and the clean, heavy grain falls straight down.

Step 6.5: Dry the Grain Again
Spread the clean grain in a thin layer in the sun for another day or two to ensure it is perfectly dry. This final drying is essential for safe storage.

Step 6.6: Prepare Storage Containers
Clean your storage containers or gunny bags thoroughly. If reusing old bags, make sure they are completely clean and dry. Do not leave any old grain inside, as it may contain hidden insects.

Step 6.7: Mix with Natural Protectants
If you store grain in bags or bins, mix in some dried neem leaves or other aromatic leaves that repel insects. Make sure the leaves are completely dry before mixing.

Step 6.8: Store Off the Ground
If using gunny bags, store them on wooden pallets or planks raised off the ground. Do not let the bags touch the wall, as walls can get damp. Keep the storage area clean, dry, and well-ventilated.

Step 6.9: Store Fodder Separately
If you saved the stalks for fodder, store them in a dry place, off the ground. Cover the top to protect from rain. Good quality sorghum stover is nutritious and valuable feed for your cattle during the dry season.

Step 6.10: Check Storage Periodically
Check your stored grain every few weeks. Put your hand deep into the grain and feel for any heat or moisture. Look for any signs of insects or mold. If you find any problems, re-dry the grain in the sun immediately.

By following these stages, you can grow healthy sorghum naturally, work with its unique drought-tolerant nature, and harvest both good grain and nutritious fodder without using any chemicals.
`,
          
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
          stage1: `Land Preparation
Pigeonpea is a hardy crop that can grow in poor soils, but it responds well to good land preparation that allows its deep roots to develop.

Step 1.1: Choose the Right Field
Pigeonpea can grow on a wide range of soils, from sandy loams to heavy clays, as long as they are well-drained . It is very tolerant of poor, infertile soils and can even grow on degraded land . However, it absolutely cannot tolerate waterlogging or standing water. Choose a field that drains well. The ideal soil pH is neutral to slightly acidic, between a certain range .

Step 1.2: Deep Ploughing for Deep Roots
Pigeonpea sends a deep taproot into the soil, sometimes reaching several feet down. This deep root system is what makes it so drought-tolerant . Start with a deep ploughing using a soil-turning plough. This breaks any hard pans or compacted layers below the surface, allowing the taproot to penetrate deeply and access moisture and nutrients from the subsoil .

Step 1.3: Create a Fine Seedbed
After deep ploughing, do one or two harrowings or ploughings with a country plough to break clods and create a fine tilth. The seedbed should be smooth and level, but it does not need to be as fine as for small-seeded crops.

Step 1.4: Add Organic Manure
During the final ploughing, spread well-decomposed farmyard manure or compost over the field and mix it into the soil. Pigeonpea is a legume and can fix its own nitrogen, but it benefits from phosphorus and potassium provided by organic manure. Research has shown that organic formulations can significantly increase pigeonpea yield compared to no fertilizer . The manure should be well-rotted, not fresh.

Step 1.5: Consider Conservation Agriculture
Recent research suggests that conservation agriculture practices, such as permanent broad beds with residue retention, can significantly increase pigeonpea yield and profitability compared to conventional tillage . If possible, consider leaving crop residue on the surface and minimizing tillage to improve soil health and moisture conservation.

Step 1.6: Level the Field
A well-leveled field ensures that rainwater spreads evenly and does not collect in low spots. Use a leveller to make the field as flat as possible.

Step 1.7: Plan Your Rotation
Pigeonpea is often grown in rotation with other crops like wheat or vegetables . A good rotation helps break pest and disease cycles and takes advantage of the nitrogen left in the soil by the pigeonpea`,
          stage2: `Seed Selection and Treatment
Pigeonpea seed is relatively large. Choosing the right variety and treating the seed properly is essential for a good stand.

Step 2.1: Choose the Right Variety
There are many varieties of pigeonpea, with different maturity times and growth habits. Some mature quickly, in about four to five months, while others take six to eight months . Some have a compact growth habit, while others are spreading and can grow quite tall . Choose a variety that fits your growing season length and your needs. For example, some newer varieties are bred to mature in shorter rainy seasons and do not need fertilizer .

Step 2.2: Obtain Quality Seed
Use certified seed from a reliable source, or save your own seed from a healthy, disease-free crop. The seeds should be plump, uniform in size, and free from damage or discoloration. The recommended seed rate is about a certain amount per area, depending on your spacing .

Step 2.3: Soak Seeds Overnight
Pigeonpea seeds have a hard seed coat. Soaking the seeds in water overnight before planting will improve germination . Drain the water just before planting.

Step 2.4: Treat with Rhizobium Inoculant
Pigeonpea needs specific Rhizobium bacteria to form nodules on its roots and fix nitrogen from the air . These bacteria may not be present in your soil in sufficient numbers. Treat the seeds with the specific Rhizobium culture for pigeonpea just before planting. This ensures that millions of the right bacteria are right there on the seed, ready to infect the roots and form nitrogen-fixing nodules.

Step 2.5: Treat with Trichoderma
To protect young seedlings from soil-borne diseases like Fusarium wilt, treat the seeds with Trichoderma powder, a friendly fungus . This can be done along with the Rhizobium treatment.

Step 2.6: Dry in Shade and Plant Soon
After treatment, dry the seeds in the shade for a short time and plant them as soon as possible. Do not leave treated seeds in the hot sun.`,
          stage3: `Planting
Step 3.1: Plant at the Right Time
Pigeonpea is usually planted at the beginning of the rainy season . In most regions, this is with the onset of the monsoon. Planting at the right time ensures that the crop gets enough moisture to establish and mature before the dry season.

Step 3.2: Decide on Your Purpose
Your planting spacing depends on your primary goal :

If your main goal is soil restoration or biomass production: Plant closer together, with narrower spacing between rows and plants. This creates a dense stand that quickly covers the ground and produces lots of organic matter.

If your main goal is maximum grain production: Plant with wider spacing between rows to give each plant room to grow and produce many pods.

Step 3.3: Plant at the Right Depth
Plant pigeonpea seeds at a depth of about one to two inches . In heavy soils or if moisture is plentiful, plant shallower. In sandy soils or if moisture is limited, plant slightly deeper.

Step 3.4: Place Multiple Seeds per Hole
A common practice is to plant several seeds per hole or hill, usually about two to five seeds . This ensures good germination even if some seeds fail. Later, you will thin to the strongest one or two seedlings per hill.

Step 3.5: Maintain Proper Spacing
The exact spacing depends on your variety and purpose. For grain production, a common spacing is about three feet between rows and one to two feet between plants . For intercropping or soil restoration, spacing can be adjusted accordingly.

Step 3.6: Cover the Seeds
After dropping the seeds, cover them with soil and press gently to ensure good seed-to-soil contact. In dry conditions, firm the soil well to help draw moisture to the seed .
`,
          stage4: `Field Management During Growth
Pigeonpea grows slowly at first and is sensitive to weed competition in the early stages.

Step 4.1: Watch for Emergence
The seeds will sprout and emerge within about one to two weeks, depending on soil temperature and moisture . Walk through the field after emergence and look for any gaps.

Step 4.2: Thinning
When the seedlings are a few inches tall, about two to three weeks after emergence, thin them to the desired spacing . Remove the weaker seedlings, leaving the strongest one or two per hill. This ensures that each remaining plant has enough space to grow into a large, productive bush.

Step 4.3: First Weeding
Weeds compete with young pigeonpea for water and nutrients. Do the first weeding about three to four weeks after sowing, before the weeds get big . Use a hoe or cultivator between the rows. Be careful not to damage the young plants.

Step 4.4: Second Weeding
A second weeding is usually done about two weeks after the first . By this time, the pigeonpea plants should be growing rapidly and will soon shade the ground, suppressing further weed growth. Subsequent weeding will depend on the amount of rainfall and weed pressure .

Step 4.5: Water Management
Pigeonpea is very drought-tolerant once established, thanks to its deep taproot . It is usually grown as a rainfed crop and does not need irrigation. However, if there is a prolonged dry spell during flowering and pod filling, and if you have irrigation available, a single light irrigation can help. Avoid over-watering, as pigeonpea cannot stand wet feet.

Step 4.6: Understanding Nitrogen Fixation
About a month after planting, gently dig up a few pigeonpea plants and look at the roots. You should see small round nodules attached to the roots. Slice a few open with your fingernail. If they are pink or red inside, your inoculation worked perfectly, and the bacteria are actively fixing nitrogen from the air for the plant . This is a sign of a healthy crop.

Step 4.7: Nutrition and Feeding
If you applied compost or manure at planting, additional fertilizer may not be needed, especially if the plants are nodulating well. Pigeonpea is known for its ability to thrive in poor soils without fertilizer . However, if your soil is very poor, you can apply a side dressing of compost or liquid organic fertilizer during the vegetative growth stage.

Step 4.8: Pruning for Soil Restoration
If your primary goal is soil restoration, you can prune the plants at the start of the second rainy season, cutting them back to a height of about a foot and a half . Spread the pruned material on the ground as mulch, or use part of it for animal feed. The wood can be used for firewood . This pruning stimulates new growth and adds organic matter to the soil.

Step 4.9: Pest Management

*4.9.1. Pod Borers - The Most Serious Pest*
Pod borers are caterpillars that bore into the pods and eat the developing grains. They are the main pest of pigeonpea .

Monitoring: Walk through the field regularly during flowering and pod formation. Look for holes in pods or caterpillars on the plants.

Neem Spray: If you see pod borer damage, spray a neem-based solution on the plants. Neem repels and disrupts the feeding of many caterpillars.

Light Traps: Set up light traps in the field at night to attract and kill adult moths.

Encourage Natural Enemies: Maintain flowering plants on field borders to attract beneficial insects like parasitic wasps that attack pod borers.

4.9.2. Aphids and Thrips
These small insects can attack young growth and flowers . They suck sap and can transmit diseases.

Monitoring: Check plants regularly, especially new growth and flower buds.

Natural Sprays: Spray with a strong stream of water to knock them off, or use insecticidal soap or neem oil.

Natural Predators: Encourage ladybugs and lacewings.

4.9.3. Pod Fly
This insect lays eggs in young pods, and the maggots feed on the developing seeds.

Early Harvesting: Harvest pods promptly when they mature to reduce damage.

Neem Spray: Neem sprays can help repel the adult flies.

Step 4.10: Disease Management

4.10.1. Fusarium Wilt
This is a soil-borne fungal disease that causes plants to wilt and die . It is a serious problem in pigeonpea.

Prevention is Key: The best control is prevention through long crop rotations. Do not grow pigeonpea in the same field more than once every few years.

Resistant Varieties: Choose varieties that are resistant to wilt if available.

Remove Infected Plants: If you see a plant wilting and dying, pull it out and destroy it immediately. Do not compost it.

4.10.2. Powdery Mildew
This fungal disease appears as a white, powdery coating on leaves, especially late in the season .

Good Air Flow: Proper spacing and weed control help air circulate, reducing humidity.

Sulfur Spray: If severe, a sulfur-based spray approved for organic farming can be used.
`,
          stage5: `Harvesting
Pigeonpea is unique because the pods do not mature all at once. You may need to harvest in stages.

Step 5.1: Harvesting Green Pods
If you want to eat pigeonpea as a green vegetable, harvest the pods when they are fully filled but still green and tender . The seeds inside should be green and soft. Green pigeonpeas can be harvested fresh and used like fresh peas.

Step 5.2: Harvesting for Dry Grain
For dry grain, wait until most of the pods on the plant have turned brown and dry . The seeds inside will be hard and rattle when you shake the pod. Because pods mature at different times, you may need to harvest in stages, picking the dry pods first and leaving the green ones to mature further.

Step 5.3: Cut the Plants or Pick Pods
For a final harvest, you can cut the whole plants when most pods are dry. Cut the plants close to the ground using a sharp sickle. Let them dry in the field for a few days in small piles. Alternatively, you can pick only the dry pods, leaving the rest to mature.

Step 5.4: Threshing
Once the plants and pods are completely dry, thresh them to separate the grain. This can be done by beating the plants with sticks on a clean floor, by having bullocks walk on them, or by using a threshing machine.

Step 5.5: Winnowing
After threshing, the grain is mixed with chaff, broken pods, and dust. On a breezy day, winnow the mixture by dropping it from a height using a winnowing fan or basket. The wind blows away the light chaff, and the clean, heavy grain falls straight down.

Step 5.6: Drying the Grain
Spread the clean grain in a thin layer in the sun for several days to ensure it is perfectly dry. Bite a seed; it should be very hard and crack, not squash. Proper drying is essential for storage.
`,
          stage6: `Post-Harvest and Storage
Step 6.1: Storage Pests - Bruchids
The main pest of stored pigeonpea is the bruchid, a small beetle that lays eggs on the grain, and the larvae eat the inside of the seed . They can destroy a stored harvest in a few months if not controlled.

Step 6.2: Dry Grain Thoroughly
The first and most important defense against bruchids is to ensure the grain is completely dry before storage. Weevils cannot thrive in very dry grain.

Step 6.3: Mix with Natural Protectants
If you store grain in bags or bins, mix in some dried neem leaves or other aromatic leaves that repel insects. Some farmers also mix ash with the grain to deter weevils. Make sure the ash is cool and completely dry before mixing.

Step 6.4: Use Airtight Containers
Weevils need air to live. If you can store your pigeonpea in airtight containers, the weevils will suffocate. This can be done with metal drums, sealed plastic drums, or special airtight grain bags.

Step 6.5: Store Off the Ground
If using gunny bags, store them on wooden pallets or planks raised off the ground. Do not let the bags touch the wall, as walls can get damp. Keep the storage area clean, dry, and well-ventilated.

Step 6.6: Processing for Market
Pigeonpea can be sold as whole grain or processed into split pea (dal). Value addition, such as dehulling and splitting, can increase profitability . Farmers can organize into cooperatives for collective marketing and better price negotiation .

Step 6.7: Save Seed for Next Season
If you want to save your own seed for the next season, select the best, healthiest, and most uniform grains from your harvest. Store them separately in a clean, dry container. Treat them with Trichoderma and Rhizobium again before planting next year.

By following these stages, you can grow healthy pigeonpea naturally, work with its unique deep-rooted and nitrogen-fixing nature, and harvest good quality grain while improving your soil for future crops without using any chemicals.`,
          
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