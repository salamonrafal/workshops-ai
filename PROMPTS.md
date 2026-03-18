# Prompts Used In This Session

1. `Zbuduj stronę startową "New Tab" (HTML/CSS/JS, bez frameworka).`

2. `Wymagania:
- zrób to w stylu Cyberpunka,
- duży zegar i data,
- pasek wyszukiwania (Google),
- sekcja "Top links" z 6 kafelkami,
- widget pogody (mock danych),
- tryb jasny/ciemny,
- responsywność mobile/desktop.
Pracuj iteracyjnie: najpierw szkic UI, potem styl, potem logika JS.
Po każdej iteracji pokaż diff i krótko opisz zmiany.`

3. `Przenieś blok z Top links pod panel z wyszukiwaniem aby panel z polem szukaj wypełniał całą przetrzeń roboczą. Panel Top links umieść po prawej stronie od panelu z pogodą.`

4. `- Panel szukania ma zająć całą przestrzeń roboczą,
- Panel z pogodą i panel z Top links mają być na dole i być koło siebie. Panel z Top links ma być po prawej stronie`

5. `Utwórz plik PROMPTS.md z listą promptów wykorzystanych w tej sesji`

6. `Podczas Code Review agent codex zwrócił poniższą treść:

.dashboard {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  align-items: start;
@chatgpt-codex-connector
chatgpt-codex-connector bot
9 minutes ago
P2 Badge Make the hero layout actually fill the remaining workspace

The latest prompt explicitly asks for the search panel area to occupy the full working space with the weather/top-links row sitting at the bottom (PROMPTS.md:16-19), but this grid never gets a viewport-based height. Because .dashboard is auto-height and the hero panel has no flex/min-height behavior, tall desktop windows still render the hero only as high as its content, leaving empty space below the whole dashboard instead of inside the search area.`

7. `Podczas Code Review agent codex zwrócił poniższą treść:

<div class="clock" aria-live="polite">20:48</div>
          <div class="date">Czwartek, 18 marca 2026</div>
@chatgpt-codex-connector
chatgpt-codex-connector bot
11 minutes ago
P3 Badge Remove the hard-coded clock and date placeholders

These fixed values are shown to every user on first paint, and they only become correct after script.js runs successfully. If the script is delayed, blocked, or errors out for any reason, the page permanently displays 20:48 and 18 marca 2026, which defeats the main purpose of a new-tab clock. Leaving the elements empty (or generating the initial values dynamically) avoids serving obviously incorrect information.`

8. `Edytuj plik PROMPTS.md o ostatnie prompty wykorzystanych. Ostatnio wykonane powinny być na dole strony`
