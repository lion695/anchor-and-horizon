## Performance Testing and Fixes

### Initial Lighthouse Results

During testing, Lighthouse reported a relatively low Performance score of **83**.

![Lighthouse Performance Score](documentation/optimization_and_fixes/low_performance_example.png)

To investigate the issue, I reviewed the Lighthouse recommendations and used the integrated AI assistant to identify potential improvements.

---

### Accessibility Improvements

One of the recommendations highlighted colour contrast issues affecting accessibility. To address this, I updated the styling of several interactive elements throughout the site, including:

- Navigation and action buttons
- Footer links
- Back-to-top button
- Form submit button

These changes improved colour contrast ratios and enhanced keyboard focus visibility, helping users navigate the site more effectively.

#### Button Styling Improvements

![Button Styling Fix](documentation/optimization_and_fixes/btn_styling_fix.png)

#### Accessibility Colour Adjustments

![Accessibility Styling Fix](documentation/optimization_and_fixes/styling_fix_acessability.png)

#### Footer Link Improvements

![Footer Links Fix](documentation/optimization_and_fixes/footer_links_fix.png)

#### Back-to-Top Button Improvements

![Back-to-Top Button Fix](documentation/optimization_and_fixes/btt_fix.png)

#### Back-to-Top Button Focus State

![Back-to-Top Button Focus State](documentation/optimization_and_fixes/btt_fix_focus.png)

#### Form Submit Button Consistency Update

To maintain a consistent design language across the site, the form submit button was also updated to match the revised styling.

![Submit Button Fix](documentation/optimization_and_fixes/submit_btn_fix.png)

While these accessibility improvements increased the Accessibility score, they had only a minor impact on the overall Performance score.

---

### Hero Image Optimisation

After further investigation, I realised the hero image could be contributing significantly to the reduced performance score. The image had originally been generated using ChatGPT and, while visually effective, had not been optimised for web delivery.

The image was reprocessed and converted into a more efficient format while maintaining visual quality. This reduced the file size considerably and improved loading performance.

---

### Final Lighthouse Results

Following the hero image optimisation, the site's Lighthouse Performance score increased from **83** to **97**.

![Improved Lighthouse Score](documentation/optimization_and_fixes/fix_after_optimizing.png)

### Outcome

The testing process highlighted the importance of both accessibility and image optimisation:

- Improved colour contrast across interactive elements.
- Enhanced keyboard focus visibility.
- Maintained consistent visual styling throughout the site.
- Reduced hero image file size without noticeable quality loss.
- Increased Lighthouse Performance score from **83** to **97**.

This optimisation significantly improved the overall user experience by reducing page load times and increasing Lighthouse performance metrics.

## Button Styling
Below are the changes made to the button styling to maintain consistency throughout the site and provide a more accessible and user-friendly experience.

- Changes made to both the header and hero section buttons for a more accessible contrast.
- Changes to the services cards for a better contrast.
- Changes to form signup button to keep with the styling of the rest of the page.

![screenshot](documentation\optimization_and_fixes\btn-change-1.png)

![screenshot](documentation\optimization_and_fixes\btn-hover-1.png)
![screenshot](documentation\optimization_and_fixes\btn-hover-2.png)



![screenshot](documentation\optimization_and_fixes\btn-change-2.png)
![screenshot](documentation\optimization_and_fixes\btn-hover-3.png)



![screenshot](documentation\optimization_and_fixes\btn-change-3.png)
![screenshot](documentation\optimization_and_fixes\btn-hover-4.png)



## Changes to the Footer

- Added responsive links to the footer to navigate athrough the page.
- Social media links added and color coded to match the site.
- Link to my GitHub account added.

![screenshot](footer-link-hover.png)

![screenshot](footer-social-hover.png) 
![screenshot](my-github-hover.png)

## HTML Validation

The examples below were taken from the source code of the deployed site on GitHub.