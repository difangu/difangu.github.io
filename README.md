# World Happiness Report 2019
CS-498-Data-Visualization

In this final project, we will take the journey to look at The World Happiness Report 2019. Here is a brief official overview of World Happiness Report: 
"The World Happiness Report is a landmark survey of the state of global happiness that ranks 156 countries by how happy their citizens perceive themselves to be. This year’s World Happiness Report focuses on happiness and the community: how happiness has evolved over the past dozen years, with a focus on the technologies, social norms, conflicts and government policies that have driven those changes." 

* [Explore the My Website](https://difangu.github.io/)
* [Explore the Report](https://worldhappiness.report/ed/2019/)
* [Explore the Data](https://www.kaggle.com/unsdsn/world-happiness)

## Messaging:
Throughout the interactive slideshow, I tried to convey the message that there are some correlation and probably some causation between happiness score and factors associated with each country. For example, happier countries tend to have higher GDP per Capita. And it may make sense and I want my audience to explore them and draw the conclusion by themselves. It seems to have a more compact cluster among the happiest countries regarding the correlation between happiness score and factor. This might suggest that diminishing return of each factor contributing to happiness score. However, for the least happy countries, they tend to have looser correlation between factors and happiness score.

## Narrative Structure:
I used interactive slideshow to deliver the message. Users are allowed to interact some parts in each slide to dig deeper into each scene. For example, on the index page, users can hover their mouse over six factors to explore the definition for each of them; accordance has been built in the World Happiness Report over, encouraging users to click in and explore the full report. On the bar chart and scatter plots, users can turn off some bars to focus on analyzing one or comparing two of them. Hovering over some objects such as bars and circles will also pop up the tooltip to provide more detailed information about each observation, in this case, country. 

## Visual Structure:
Consistent visual structure has been applied across each scene. I used Sunlight Guideline, a data visualization artistic tool, as the reference for designing the whole project. All fonts are rendered in Font Georgia. Font size, background color, font color and line height also remain constant across each scene. 

The visual structure follows text-to-plot structure allowing our audiences to read the purpose of the scene first. So they are able to have a high-level intuition what they are going to observe and what ideas they are about to receive. Then they can explore each plot by themselves either exploring the visualization freely or reading some hints from the annotations including the tooltips, annotation and accordance. 
Arrow buttons have been added on each page in order to help our audiences navigate from the start of the scenes to the last scene. I intentionally did not allow users to jump between the scenes because order is particularly important in the interactive slideshow. 

The order of the slide show follows from easy to hard and high level to detail. Bar plot gives an overview about the average of each group. Then the first 3-D scatter plot demonstrates the correlation between group type vs. happiness score vs. factor. Then the second 4-D scatter plot demonstrates the correlation between group type vs. two factors vs. happiness score, which is the hardest part of the presentation as it involves tremendous amount of information.

## Annotations:
Annotations have been attached in three plots in order to provide helpful information and broaden audience's insight. Annotations are designed in gray color with certain degree of opacity. In this way, annotations will attract sufficient attention without disturbing the overall visual structure of each plot. All of annotations will not disappear or change in a single scene in order to maintain high visual consistency via different scenes. Another reason is due to the annotation tries to point out some common pattern existing in the scatter plots and bar charts even though the state has been changed. For example, in the scatter plots, annotations will point out the unique distribution among three happiness group. While the bar chart will point out the close difference of average score between two consecutive group in descending order. 

## Parameters:
There are three sets of parameters in 3 plots. In the bar chart, there are three switches to turn on and off the bars. When user checks the box, correspondent bar will show up; unchecking it will make it disappear. So user can compare two groups without interfering from the third group. In two scatter plots, both can change the desired variables. These parameters allow audiences to observe the correlation between two different factors. Finally, another example of parameter is in the scatterplot. 

## Triggers:
There are a dozen of triggers in the interactive slideshow. For example, changing variable in the scatterplots will cause animation of circles moving toward certain direction demonstrating potential pattern of correlation changes. Checkbox and dropdown menus are also triggers the show-up of the correspondent bars.
Accordance includes the checkbox in the bar chart. The shadowed area around the cover of World Happiness Report also implies to the user that the image is clickable. Dropdown menus in the scatter plot are also accordance. Low opacity of the circles and change color of bars implies to the user that tooltip is allowed in all of the plots.
