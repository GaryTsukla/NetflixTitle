# Adjust Window Title on Netflix

This is a 5-minute extension I made for Firefox. 

I have a few tabs open for different shows on Netflix, and the tab's title is always "Netflix" instead of the show I'm watching. It's a little annoying because, sometimes, I can't remember which show is on which tab.

I made this quick extension, to change the tab's title to the title of the show.

Now I can see which tab is for which show, without having to click on it or work from my own memory.

# Problems

One of the issues I faced was the way Netflix displays the name of the show, on the webpage.

It's interesting that they actually delete elements completely, rather than just hiding them. This seems like a mistake, since it takes more resources on the client computer to create and destroy elements constantly. Hiding and showing the elements would probably provide better performance.

Unfortunately, this means getting the name of the show is actually really difficult because this information might not actually be available anywhere in the DOM.

When you first load the page, the title is in the DOM for a short time, but not immediately on load. So, in my script, I wait 5 seconds, then attempt to grab the title. This is the most reliable method I could find...

Unfortunately, in the case where you finish an episode, and it automatically loads the next episode, the title is not in the DOM (for the most part). In this case, the tab's title might get reset to Netflix or another string. In these instances, a quick refresh of the page fixes the issue, and I successfully get the title again.

# Conclusion

Since I can't hack into Netflix and force them to show the title haha, and the title is only available at random times, my solution here is the best I can do, without investing a lot more time into it.

I just wanted this to be a quick thing, but I could invest a lot more time looking into the DOM and finding awkward workarounds to detect the title whenever it appears on the screen. This would take a while though, maybe 1 or 2 hours.

I'm happy with this simple solution, for what is really just an issue of my personal convenience.