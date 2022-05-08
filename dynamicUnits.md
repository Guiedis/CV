html {
/_ font-size: 10px; _/
/_ size user settings / default size = x = percentage of user's browser font-size setting _/
/_ 10px / 16px = 0.625 = 62.5% _/
font-size: 62.5%;
}

body {
font-family: sans-serif;
line-height: 1;
font-weight: 400;
color: #555;
}

.test {
background-color: red;
/_ width: 1000px; _/
/_ max-width: 1000px; _/

max-width: 50rem; /_ rem: Root Element _/
padding: 4rem;
color: #fff;
font-size: 2rem;
}

/\*

--- 01 TYPOGRAPHY SYSTEM

      FONT SIZE SYSTEM (px)
        10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98

      FONT WEIGHTS:
        Default: 400
        Medium: 500
        Semi-Bold: 600
        Bold: 700

      LINE HEIGHTS:
        Default: 1
        Small: 1.05
        Medium: 1.2
        Paragraph: 1.6

--- 02 COLORS

      PRIMARY:
      Tints:
      Shades:
      Accents:
      Greys:

--- 05 SHADOWS

box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);

--- 06 BORDER RADIUS

      Default: 9px
      Medium: 11px

--- 07 WHITESPACE

      SPACING SYSTEM (px)
        2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128

\*/
