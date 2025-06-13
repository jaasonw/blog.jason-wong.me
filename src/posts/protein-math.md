---
layout: post.liquid
title: Protein Math
date: 2025-06-13
---

Y’all heard of boy math, y’all heard of girl math, let’s talk some protein math if you don’t want people calling you slurs like “small”, “weak”, or “League of Legends player”. I wanna preface this by saying I am fat and my background was not in health / fitness or anything so take the information in this article as you will. However, I do know a thing or two about math and am very into seeing tables. I will try to cite a source from someone who isn't fat if that kind of thing matters to you. 

## What this article is

This article aims to dive into the topic of protein, specifically a high level overview of how to value shop to minmax protein to fit your goals. We’ll analyze a few foods to not necessarily make the case that you should or should not buy it, but to hopefully change the way you look at and shop for protein. 

**TLDR**: Feel free to skip to the bottom if you just care about the table without any commentary

## What this article is NOT

This article presents a mathematical approach to comparing protein sources but does not account for individual nutritional requirements. These are NOT meal plan or food recommendations. and just because something here has a big number, does not mean I specifically recommend it. This is just me aggregating nutrition labels into an Excel sheet and sorting. Protein needs vary significantly based on age, weight, activity level, fitness goals, medical conditions, and metabolic factors.

This article ONLY considers the raw macronutrient, calorie, and price numbers and does NOT consider factors like

- Protein bioavailability and absorption rates
- Essential amino acid profiles
- Micronutrient content (vitamins, minerals)
- Fiber content
- Food additives or processing methods
- Organic vs. conventional production

Consult with a healthcare professional or registered dietitian to determine your specific protein requirements.

## Some context / prerequisite knowledge

Before diving into the protein calculations, let's quickly establish some baseline nutrition concepts. I’ll try to speed run through this part as there’s plenty of literature on these topics that I will link in the sources

1. Food consists of 3 macronutrients that we care about: Carbs, Fat, and Protein. They all do different things for your body but obviously this article will focus on protein
2. To lose weight you need to be in a calorie deficit and to gain weight you need to be in a calorie surplus. There are calculators for this online
3. To build muscle you need 0.8 - 1 gram per pound of lean muscle mass. This can be hard to calculate so often times people will generalize it to 0.8 - 1 gram per pound of body weight instead. Of course, none of this matters though without regular resistance training to actually stimulate muscle growth. Protein is just the bricks, and excercise is the construction work you need to actually build the wall

Sources

1. [https://www.healthline.com/nutrition/what-are-macronutrients](https://www.healthline.com/nutrition/what-are-macronutrients)
2. [https://pubmed.ncbi.nlm.nih.gov/28630601/](https://pubmed.ncbi.nlm.nih.gov/28630601/)
3. [https://physiqonomics.com/fat-loss/](https://physiqonomics.com/fat-loss/)

## Variable 1: Cost

Now that we understand the fundamentals, let's examine our first key variable in protein math: cost efficiency. This section is going to look like a Costco/Kirkland glazefest but I swear, it is not my fault that Costco just makes their stuff cost less. One of the reasons Americans have an obesity problem is because junk food heavy in carbs and fat are cheap, whereas protein, whether through meat or other sources, will come at a premium. Something you often hear is something along the lines of “protein powder is too expensive, I’ll just get my protein through my food”. With an upfront cost of $60 a bag, it’s easy to say “wow that’s way too expensive”. Not so fast though, because what’s important to realize here is that you’re paying for every gram of protein whether you realize it or not. Let’s take a look at a few foods that are typically regarded as high protein and see how much the protein is really costing us. To do so, we want to find out exactly how much protein we’re getting for our dollars (grams per dollar) or how much each gram of protein really costs (dollars per gram), depending on how you prefer to look at it. The way to calculate this is simple:

$$
\frac{\text{cost per unit}}{(\text{grams of protein} * \text{servings per package}) } = \text{dollars per protein (grams)}
$$

Or the reciprocal

$$
\frac{(\text{grams of protein} * \text{servings per package}) }{\text{cost per unit}} = \text{protein (grams) per dollar}
$$

For my testing methodology, Ideally I would pick the median price I can find from the grocery stores I usually shop at since they’re the ones I’m familiar with, which is usually Costco, Ralphs/Kroger, or Aldi, but realistically I picked the one that presented the information on their website the best. Serving size will be derived from what is listed on the nutrition label and not necessarilly what is a sensible portion size for your individual needs. Additionally, I will be using the non discounted price as to not throw off the calculations with promotional pricing. Of course, this is all specific to my area and the time of writing, the point is not to definitively say that X is the best source of protein or anything, but rather to help guide purchasing decisions and go over how to properly calculate the real cost of your protein.

### Chicken Breast

If you’re looking for the most cost effective way to get your protein in, it really doesn’t get much better than chicken. Light or dark meat doesnt matter too much. Nutritionally, they’re about the same, light meat like chicken breast will typically be a little leaner where as dark meat like thighs will typically have a little bit more fat, so choose whichever you prefer, we’ll look at chicken breasts for this example. Grocery stores will typically sell meats by the pound so we’ll use 1 pound as our “serving” for these calculations but realistically, a whole pound of chicken will be about 4-5 servings.

Cost per unit: 3.99/lb

Protein per serving: 146g

Servings per package: 1

Cost of protein: \\$0.02/g (36.59g/\\$1.00)

### Lean (90/10) Ground beef

Again, stores will typically sell this by the pound so 1 pound will typically be about 4-5 servings. Not much to say here, it’s meat, it’s going to be a solid source of protein, albeit tends to be a bit pricier

Cost per unit: 6.69/lb

Protein per serving: 22g

Servings per package 4

Cost of protein: \\$0.08/g (13.15g/\\$1.00)

[https://www.ralphs.com/p/kroger-90-10-ground-beef-tray-1-lb/0001111060420](https://www.ralphs.com/p/kroger-90-10-ground-beef-tray-1-lb/0001111060420?fulfillment=PICKUP&searchType=default_search)

### Additional Meats

|  | Cost per package | Protein per Serving | Servings per Package | Cost of Protein (dollar/ gram) | Protein per Dollar (gram / dollar) |
| --- | --- | --- | --- | --- | --- |
| Chicken Breast | 3.99 | 146 | 1 | 0.03 | 36.59 |
| Egg Whites | 17.54 | 5 | 59 | 0.06 | 16.82 |
| 99/1 Ground Turkey | 7.99 | 28 | 4 | 0.07 | 14.02 |
| Canned Tuna | 1.69 | 23 | 1 | 0.07 | 13.61 |
| 85/15 Ground Pork | 5.99 | 20 | 4 | 0.07 | 13.36 |
| 90/10 Ground Beef | 6.69 | 22 | 4 | 0.08 | 13.15 |
| 93/7 Ground Turkey | 6.99 | 22 | 4 | 0.08 | 12.59 |
| Egg | 6.69 | 6 | 12 | 0.09 | 10.76 |
| Chicken Sausage | 5.79 | 14 | 4 | 0.10 | 9.67 |
| Canned Salmon | 21.99 | 17 | 12 | 0.11 | 9.28 |
| Kirkland Raw Shrimp | 16.95 | 22 | 7 | 0.11 | 9.09 |
| Pacific Gold Beef Jerky | 21.99 | 14 | 12 | 0.13 | 7.64 |
| Kroger Medium Raw Shrimp | 7.99 | 15 | 2.5 | 0.21 | 4.69 |
| Crab Claw Meat | 13.29 | 16 | 3 | 0.28 | 3.61 |

### Peanut butter

Looking at a natural peanut butter here with just peanuts sugar and oil. At ~4 cents per gram, this ends up being even cheaper than a lot of meats, but at 190 calories per serving, you’re not just getting protein, you’re also getting some fats and sugar, we’ll revisit this idea but something to keep in mind if your specific goals involve minimizing caloric intake.

Cost per unit: 3.99

Protein per serving: 7g

Servings per package: 14

Cost of protein: \\$0.04 (24.5g/\\$1.00)

[https://www.ralphs.com/p/jif-natural-creamy-peanut-butter/0005150025565](https://www.ralphs.com/p/jif-natural-creamy-peanut-butter/0005150025565)

### Vegetarian

I will be considering dairy to be vegetarian but just ignore the rows if this offends you. 

|  | **Cost per unit** | **Protein per Serving** | **Servings per Package** | **Cost of Protein (dollar/ gram)** | **Protein per Dollar (gram / dollar)** |
| --- | --- | --- | --- | --- | --- |
| Peanuts | 2.99 | 7 | 16 | 0.03 | 37.46 |
| Peanut Butter | 3.99 | 7 | 17 | 0.04 | 24.56 |
| Plain Nonfat Greek Yogurt | 3.99 | 17 | 5 | 0.05 | 21.30 |
| Grated Parmesan | 4.29 | 2 | 45 | 0.05 | 20.98 |
| Firm Tofu | 1.79 | 8 | 4.5 | 0.05 | 20.11 |
| Cottage Cheese | 3.79 | 12 | 6 | 0.05 | 19.00 |
| Canned Lentils | 1.59 | 7 | 3.5 | 0.06 | 15.41 |
| Quinoa | 4.19 | 5 | 10 | 0.08 | 11.93 |
| Almonds | 4.79 | 6 | 6 | 0.13 | 7.52 |
| Edamame | 2.99 | 7 | 2.5 | 0.17 | 5.85 |
| Baby Bella Mushrooms | 2.99 | 2 | 2.5 | 0.60 | 1.67 |

### Protein bars

I don’t have commentary to give on the rest of these, other than the fact that for some reason Kirkland sells a lot of things they call “Protein Bars” but at this point I hope you get the idea, let’s take a look at some protein bars. They call a lot of things “protein bars” though so keep all this in mind when shopping

|  | **Cost per package** | **Protein per Serving** | **Servings per Package** | **Cost of Protein (dollars/gram)** | **Protein per Dollar (gram/dollar)** |
| --- | --- | --- | --- | --- | --- |
| Kirkland Signature Chewy Protein Bar | 16.99 | 10 | 42 | 0.04 | 24.72 |
| Kirkland Signature Protein Bar 1 | 25.49 | 21 | 20 | 0.06 | 16.48 |
| Kirkland Signature Protein Bar 2 | 26.49 | 21 | 20 | 0.06 | 15.86 |
| Nature Valley | 18.99 | 10 | 30 | 0.06 | 15.80 |
| Robert Irvine Fit Crunch | 22.99 | 16 | 18 | 0.08 | 12.53 |
| Quest Nutrition Protein Bar | 23.49 | 20 | 12 | 0.10 | 10.22 |
| Pure Protein Chocolate Peanut Caramel | 8.49 | 20 | 4 | 0.11 | 9.42 |
| RXBAR | 20.99 | 12 | 14 | 0.12 | 8.00 |
| Kind Nut Bar (Peanut Butter) | 20.49 | 7 | 22 | 0.13 | 7.52 |

### So what about protein powder?

Hopefully now that we’ve shifted the focus away from flat dollar amount, let’s take a look at a few protein powders. Yes, I’ve included the trendy ones I keep seeing in my Instagram feed but keep in mind I have not factored in shipping costs for any of these 

|  | **Cost per package** | **Protein per Serving** | **Servings per Package** | **Cost of Protein (dollars/gram)** | **Protein per Dollar (gram/dollar)** |
| --- | --- | --- | --- | --- | --- |
| Kirkland Signature Whey | 54.99 | 25 | 70 | 0.03 | 31.82 |
| Optimum Gold Standard | 67.99 | 24 | 80 | 0.04 | 28.24 |
| Ascent Native Whey | 54.99 | 25 | 62 | 0.04 | 28.19 |
| Premier Protein Powder | 21.99 | 30 | 17 | 0.04 | 23.19 |
| Isopure | 54.99 | 25 | 50 | 0.04 | 22.73 |
| Ghost | 49.99 | 25 | 28 | 0.07 | 14.00 |
| Orgain | 30.98 | 21 | 20 | 0.07 | 13.56 |
| Boba Tea Protein | 49.99 | 25 | 25 | 0.08 | 12.50 |
| Lunar Lifts Nutrition | 35.99 | 26 | 15 | 0.09 | 10.84 |

### Okay but what if I just buy my protein powder already in the liquid? (Protein shakes)

Honestly, it’s not a bad idea but you will be paying a premium over mixing the stuff yourself, I will note that the Fairlife that Costco sells looks unusually cheap, so I’ve also included the Amazon price (at the time of writing, it changed when I refreshed the page) since not everyone has a Costco membership.

|  | **Cost per unit** | **Protein per Serving** | **Servings per Package** | **Cost of Protein (dollar/ gram)** | **Protein per Dollar (gram / dollar)** |
| --- | --- | --- | --- | --- | --- |
| Fairlife (Costco) | 38.99 | 30 | 30 | 0.04 | 23.08 |
| Orgain Protein Shake | 34.99 | 30 | 18 | 0.06 | 15.43 |
| Premier Protein Shake | 36.99 | 30 | 18 | 0.07 | 14.60 |
| Muscle Milk | 31.99 | 25 | 18 | 0.07 | 14.07 |
| Quest Protein Shake | 39.99 | 45 | 12 | 0.07 | 13.50 |
| Nurri Protein Shake | 26.99 | 30 | 12 | 0.07 | 13.34 |
| Fairlife (Amazon) | 37.50 | 30 | 12 | 0.10 | 9.60 |
| Ensure Original | 49.99 | 9 | 30 | 0.19 | 5.40 |

What you’ll notice throughout all this is that protein powder / shakes dont necessarily blow protein rich foods out of the water in terms of cost or anything. That is, the edge isn't so massive that you should feel like you’re missing out on gains without it. You don’t *need* to incorporate a protein shake into your nutrition plan if you have no problems meeting your protein goals with your existing meals. What these actually are is a good way to help meet your protein goals since a liquid tends to be easier to consume compared to solid food.

## Variable 2: Protein Density / Protein to Calorie Ratio

Depending on your caloric intake goals, you will probably find that eating a whole jar of peanut butter might not be a great way to meet your protein goals. At 190 calories and 7g protein a serving, hitting 150g will have you consuming 21 servings for 3990 calories and this is not even considering the sugar and oil you would be consuming in the process. To quantify this, we will want to ask the question “Of the calories I am consuming, how many of them are going to protein”, or in other words, we want to know the protein density of any given food, this will be defined as

$$
\frac{\text{grams of protein} * 4}{\text{calories}} * 100 = \text{protein density}
$$

From the 3 macronutrients, we know that

- Carbohydrates are 4 calories per gram
- Protein is 4 calories per gram
- Fat is 9 calories per gram

Source: [https://www.healthline.com/nutrition/what-are-macronutrients](https://www.healthline.com/nutrition/what-are-macronutrients)

Using this formula, we can calculate what the percentage of the calories in a given food are going to protein vs everything else so let’s apply this to some of the foods we discussed earlier

### Peanut Butter Part 2

As I’ve previously mentioned, despite peanut butter being a very cost effective way to get protein, it ends up not being very calorie efficient

Protein per serving: 7g

Calories per serving: 190

Protein density: 14.74%

### Chicken Breast Part 2

No surprises here, chicken is still overpowered for everything, we’re still using a pound as our “serving” size but it doesn’t matter for this calculation but chicken still a solid source of protein

Protein per serving: 146g

Calories per serving: 720

Protein Density: 81.11%

### Canned Tuna

If you’re looking for something pretty darn close to straight up pure protein per calorie you can take a look at canned tuna. I would **NOT** recommend it for both taste and mercury reasons but **THEORETICALLY**, consuming 6 cans of tuna to hit 150g of protein would only be 652 calories. But it’s a great way to add some volume and protein to let’s say a salad without adding too many calories

Protein per serving: 23g

Calories per serving: 100

Protein Density: 92.00%

### Canned Salmon

If you’re like me and you dont like canned tuna, I like the canned salmon that Costso sells. It comes close at 85% protein density and tastes better but it is more expensive 

Protein per serving: 17g

Calories per serving: 80

Protein Density: 85.00%

### Additional Meats

|  | **Protein per Serving** | **Calories per Serving** | **Protein Density** |
| --- | --- | --- | --- |
| Kirkland Raw Shrimp | 22 | 90 | 97.78% |
| 99/1 Ground Turkey | 28 | 120 | 93.33% |
| Canned Tuna | 23 | 100 | 92.00% |
| Crab Claw Meat | 16 | 70 | 91.43% |
| Canned Salmon | 17 | 80 | 85.00% |
| Chicken Breast | 146 | 720 | 81.11% |
| Egg Whites | 5 | 25 | 80.00% |
| Kroger Medium Raw Shrimp | 15 | 80 | 75.00% |
| Pacific Gold Beef Jerky | 14 | 90 | 62.22% |
| 93/7 Ground Turkey | 22 | 170 | 51.76% |
| 90/10 Ground Beef | 22 | 200 | 44.00% |
| Chicken Sausage | 14 | 150 | 37.33% |
| 85/15 Ground Pork | 20 | 240 | 33.33% |
| Egg | 6 | 78 | 30.77% |

### Vegetarian

|  | Protein per Serving | Calories per Serving | Protein Density |
| --- | --- | --- | --- |
| Plain Nonfat Greek Yogurt | 17 | 100 | 68.00% |
| Cottage Cheese | 12 | 90 | 53.33% |
| Grated Parmesan | 2 | 20 | 40.00% |
| Firm Tofu | 8 | 80 | 40.00% |
| Baby Bella Mushrooms | 2 | 20 | 40.00% |
| Edamame | 7 | 90 | 31.11% |
| Canned Lentils | 7 | 100 | 28.00% |
| Peanuts | 7 | 160 | 17.50% |
| Peanut Butter | 7 | 190 | 14.74% |
| Almonds | 6 | 170 | 14.12% |
| Quinoa | 5 | 160 | 12.50% |

### Protein Bars

|  | **Protein per Serving** | **Calories per Serving** | **Protein Density** |
| --- | --- | --- | --- |
| Quest Nutrition Protein Bar | 20 | 170 | 47.06% |
| Kirkland Signature Protein Bar 1 | 21 | 180 | 46.67% |
| Kirkland Signature Protein Bar 2 | 21 | 190 | 44.21% |
| Pure Protein Chocolate Peanut Caramel | 20 | 190 | 42.11% |
| Robert Irvine Fit Crunch | 16 | 240 | 26.67% |
| RXBAR | 12 | 210 | 22.86% |
| Kirkland Signature Chewy Protein Bar | 10 | 190 | 21.05% |
| Nature Valley | 10 | 190 | 21.05% |
| Kind Nut Bar (Peanut Butter) | 7 | 200 | 14.00% |

### Protein Powders

|  | Protein per Serving | Calories per Serving | Protein Density |
| --- | --- | --- | --- |
| Isopure | 25 | 110 | 90.91% |
| Ascent Native Whey | 25 | 120 | 83.33% |
| Ghost | 25 | 120 | 83.33% |
| Optimum Gold Standard | 24 | 120 | 80.00% |
| Premier Protein Powder | 30 | 150 | 80.00% |
| Lunar Lifts Nutrition | 26 | 133 | 78.20% |
| Kirkland Signature Whey | 25 | 130 | 76.92% |
| Boba Tea Protein | 25 | 150 | 66.67% |
| Orgain | 21 | 150 | 56.00% |

### Protein Shakes

|  | Protein per Serving | Calories per Serving | Protein Density |
| --- | --- | --- | --- |
| Fairlife | 30 | 150 | 80.00% |
| Nurri Protein Shake | 30 | 150 | 80.00% |
| Quest Protein Shake | 45 | 230 | 78.26% |
| Orgain Protein Shake | 30 | 160 | 75.00% |
| Premier Protein Shake | 30 | 160 | 75.00% |
| Muscle Milk | 25 | 160 | 62.50% |
| Ensure Original | 9 | 220 | 16.36% |

## Conclusion

For the most part I've focused on the whole foods, the base components of meals, to give you a rough ballpark idea of what processed foods like chicken nuggets might look like nutritionally compared to their pure protein sources. Theres a lot of products out there that are marketed a protein sources but rank pretty poorly in both metrics so hopefully this changes the way you go about value shopping beyond just looking at the price tag the next time you grocery shop. 

My main takeaways here are

1. In terms of cost for gram, protein powders tend to be some of the more cost effective options to get your protein in but they aren’t so much better than whole foods such that its a necessity, if you would rather eat your protein in the equivilent amount of chicken then it’s totally an option
2. If you’re looking to maximize the the protein you’re getting while minimizing caloric intake you’ll want to look at foods with a higher protein density
3. There’s no one size fits all solution and all of this depends on your own specific goals, dietary preferences, and budget

I’ll include the Excel spreadsheet I used to calculate all this so you can plug and play around with your own local pricing. If you enjoyed reading this or found the information helpful, consider donating at [https://jasonw.me/donate](https://jasonw.me/donate) 

## All at once

[Excel Spreadsheet Download](/assets/post-content/protein-math/protein.xlsx)

|  | Cost per package | Protein per Serving | Calories per Serving | Servings per Package | Cost of Protein (dollar/ gram) | Protein per Dollar (gram / dollar) | Protein Density |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Peanuts | 2.99 | 7 | 160 | 16 | 0.03 | 37.46 | 17.50% |
| Chicken Breast | 3.99 | 146 | 720 | 1 | 0.03 | 36.59 | 81.11% |
| Kirkland Signature Whey | 54.99 | 25 | 130 | 70 | 0.03 | 31.82 | 76.92% |
| Optimum Gold Standard | 67.99 | 24 | 120 | 80 | 0.04 | 28.24 | 80.00% |
| Ascent Native Whey | 54.99 | 25 | 120 | 62 | 0.04 | 28.19 | 83.33% |
| Kirkland Signature Chewy Protein Bar | 16.99 | 10 | 190 | 42 | 0.04 | 24.72 | 21.05% |
| Peanut Butter | 3.99 | 7 | 190 | 14 | 0.04 | 24.56 | 14.74% |
| Premier Protein Powder | 21.99 | 30 | 150 | 17 | 0.04 | 23.19 | 80.00% |
| Fairlife (Costco) | 38.99 | 30 | 150 | 30 | 0.04 | 23.08 | 80.00% |
| Isopure | 54.99 | 25 | 110 | 50 | 0.04 | 22.73 | 90.91% |
| Plain Nonfat Greek Yogurt | 3.99 | 17 | 100 | 5 | 0.05 | 21.30 | 68.00% |
| Grated Parmesan | 4.29 | 2 | 20 | 45 | 0.05 | 20.98 | 40.00% |
| Firm Tofu | 1.79 | 8 | 80 | 4.5 | 0.05 | 20.11 | 40.00% |
| Cottage Cheese | 3.79 | 12 | 90 | 6 | 0.05 | 19.00 | 53.33% |
| Egg Whites | 17.54 | 5 | 25 | 59 | 0.06 | 16.82 | 80.00% |
| Kirkland Signature Protein Bar 1 | 25.49 | 21 | 180 | 20 | 0.06 | 16.48 | 46.67% |
| Kirkland Signature Protein Bar 2 | 26.49 | 21 | 190 | 20 | 0.06 | 15.86 | 44.21% |
| Nature Valley | 18.99 | 10 | 190 | 30 | 0.06 | 15.80 | 21.05% |
| Orgain Protein Shake | 34.99 | 30 | 160 | 18 | 0.06 | 15.43 | 75.00% |
| Canned Lentils | 1.59 | 7 | 100 | 3.5 | 0.06 | 15.41 | 28.00% |
| Premier Protein Shake | 36.99 | 30 | 160 | 18 | 0.07 | 14.60 | 75.00% |
| 85/15 Ground Pork | 5.99 | 20 | 240 | 4 | 0.07 | 13.36 | 33.33% |
| Canned Tuna | 1.69 | 23 | 100 | 1 | 0.07 | 13.61 | 92.00% |
| 99/1 Ground Turkey | 7.99 | 28 | 120 | 4 | 0.07 | 14.02 | 93.33% |
| Muscle Milk | 31.99 | 25 | 160 | 18 | 0.07 | 14.07 | 62.50% |
| Ghost | 49.99 | 25 | 120 | 28 | 0.07 | 14.00 | 83.33% |
| Orgain | 30.98 | 21 | 150 | 20 | 0.07 | 13.56 | 56.00% |
| Quest Protein Shake | 39.99 | 45 | 230 | 12 | 0.07 | 13.50 | 78.26% |
| Nurri Protein Shake | 26.99 | 30 | 150 | 12 | 0.07 | 13.34 | 80.00% |
| Robert Irvine Fit Crunch | 22.99 | 16 | 240 | 18 | 0.08 | 12.53 | 26.67% |
| Boba Tea Protein | 49.99 | 25 | 150 | 25 | 0.08 | 12.50 | 66.67% |
| 93/7 Ground Turkey | 6.99 | 22 | 170 | 4 | 0.08 | 12.59 | 51.76% |
| 90/10 Ground Beef | 6.69 | 22 | 200 | 4 | 0.08 | 13.15 | 44.00% |
| Quinoa | 4.19 | 5 | 160 | 10 | 0.08 | 11.93 | 12.50% |
| Egg | 6.69 | 6 | 78 | 12 | 0.09 | 10.76 | 30.77% |
| Lunar Lifts Nutrition | 35.99 | 26 | 133 | 15 | 0.09 | 10.84 | 78.20% |
| Quest Nutrition Protein Bar | 23.49 | 20 | 170 | 12 | 0.10 | 10.22 | 47.06% |
| Chicken Sausage | 5.79 | 14 | 150 | 4 | 0.10 | 9.67 | 37.33% |
| Pure Protein Chocolate Peanut Caramel | 8.49 | 20 | 190 | 4 | 0.11 | 9.42 | 42.11% |
| Kirkland Raw Shrimp | 16.95 | 22 | 90 | 7 | 0.11 | 9.09 | 97.78% |
| Canned Salmon | 21.99 | 17 | 80 | 12 | 0.11 | 9.28 | 85.00% |
| RXBAR | 20.99 | 12 | 210 | 14 | 0.12 | 8.00 | 22.86% |
| Pacific Gold Beef Jerky | 21.99 | 14 | 90 | 12 | 0.13 | 7.64 | 62.22% |
| Kind Nut Bar (Peanut Butter) | 20.49 | 7 | 200 | 22 | 0.13 | 7.52 | 14.00% |
| Almonds | 4.79 | 6 | 170 | 6 | 0.13 | 7.52 | 14.12% |
| Edamame | 2.99 | 7 | 90 | 2.5 | 0.17 | 5.85 | 31.11% |
| Ensure Original | 49.99 | 9 | 220 | 30 | 0.19 | 5.40 | 16.36% |
| Kroger Medium Raw Shrimp | 7.99 | 15 | 80 | 2.5 | 0.21 | 4.69 | 75.00% |
| Crab Claw Meat | 13.29 | 16 | 70 | 3 | 0.28 | 3.61 | 91.43% |
| Baby Bella Mushrooms | 2.99 | 2 | 20 | 2.5 | 0.60 | 1.67 | 40.00% |
