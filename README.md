# Dummy Webshop
## Practice project for Vue learninig

### **_Introduction_**
After finishing The Net Ninja - Vue Beginner Tutorial, I was not fully ready to jump to my own big side-project. I needed to practice more, mainly the composition API and fetching data part. I found an a fake store API - where I could get the products and render it with Vue. I tried to add some functionality, like search by name or category

### **_Used Technologies_**
1. Vue 3 Js
2. Bootstrap 5
3. Fake store Api

**Aim of the Project**
It is a practice mini project to get more hands-on experience with Vue.

**Challenges within the Project**
Firstly, getting back to Bootstrap 5 was interesting. I got used to Tailwind Css, where I normally customized all the elements inside the html. Bootstrap, as we know, works in bigger "blocks" so I actually needed to write my own style here and there. It may sound bad, but I suffered a little to get the card bootstrap components same height.

Other big headache was to fetching data and rendering it. I wanted to have a filter option and my initial idea failed badly. 
First the page with the whole data loads in and then I wanted to have the filter options. Initial idea was that when the user clicks on the search button, the whole page re-routes (with router-link) to another view where I would fetch the filtered data and render it. The problem was I could not "send" the search option to the other view component. I user composition API (so setup) and I could not "send" the search option as props or as emit. I am still unsure how that can be achieved, but then I also realized I complicated things way too much.

I realized I could have just a simple click event on that search button, where I fetch the data again and I could give the search filters as a parameters to the same fetch function. Voila simple, easy and working good. 

## **_What have I learned_**
Vue and more Vue

## Deployed: 2022. October