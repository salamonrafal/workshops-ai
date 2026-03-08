# Workshop: Budowa strony startowej przeglądarki z agentem Codex

Ten workshop pokazuje, jak wspólnie z AI (Codex) zbudować własną stronę startową (`New Tab`) i iteracyjnie ją rozwijać.

Czas trwania: **około 1,5 h (90 min)**

## Cel

Wspólnie z agentem Codex stworzyć stronę startową, która może zastąpić wbudowaną stronę nowej karty przeglądarki.

## Wymagania wstępne

- Konto GitHub
- Konto ChatGPT z dostępem do Codex
- Zainstalowany `git`
- Zainstalowany `node` i `npm`
- (Opcjonalnie, zalecane na Windows) WSL dla wygodniejszej pracy z CLI

## 1. Konfiguracja własnego repozytorium

W terminalu (PowerShell):

```powershell
mkdir codex-startpage-workshop
cd codex-startpage-workshop
git init
ni README.md
ni index.html
ni styles.css
ni script.js
git add .
git commit -m "init: workshop starter"
```

Następnie utwórz puste repo na GitHub i podłącz remote:

```powershell
git remote add origin https://github.com/<twoj_login>/<nazwa_repo>.git
git branch -M main
git push -u origin main
```

## 2. Połączenie repo z Codex

### Opcja A: Codex w przeglądarce (najprostsza na workshop)

1. Wejdź na: `https://chatgpt.com/codex`
2. Połącz konto GitHub
3. Wybierz swoje repozytorium
4. Utwórz środowisko (environment) i zacznij pracę

### Opcja B: Codex CLI (live coding lokalnie)

```powershell
npm i -g @openai/codex
cd codex-startpage-workshop
codex
```

Przy pierwszym uruchomieniu wykonasz logowanie kontem ChatGPT.

## 3. Pierwszy prompt do Codex

Wklej poniższy prompt w Codex (Web lub CLI):

```text
Zbuduj stronę startową "New Tab" (HTML/CSS/JS, bez frameworka).
Wymagania:
- duży zegar i data,
- pasek wyszukiwania (Google),
- sekcja "Top links" z 6 kafelkami,
- widget pogody (mock danych),
- tryb jasny/ciemny,
- responsywność mobile/desktop.
Pracuj iteracyjnie: najpierw szkic UI, potem styl, potem logika JS.
Po każdej iteracji pokaż diff i krótko opisz zmiany.
```

## 4. Plan workshopu (90 min)

1. **0-10 min**: Wprowadzenie
   - Cel i rezultat końcowy
   - Krótkie porównanie Codex Web vs Codex CLI
2. **10-25 min**: Setup
   - Przygotowanie repo
   - Połączenie z GitHub i Codex
3. **25-40 min**: Pierwszy prompt
   - Wygenerowanie szkieletu aplikacji
   - Omówienie pierwszego diffa
4. **40-65 min**: Iteracyjna praca z agentem
   - UI/UX, stylowanie, funkcjonalności
   - Poprawianie promptów i doprecyzowywanie wymagań
5. **65-78 min**: Debugging i testy scenariuszy
   - Sprawdzenie działania na mobile/desktop
   - Naprawa błędów i regresji
6. **78-86 min**: Final polish
   - Dostępność (a11y)
   - Podstawowe usprawnienia wydajności
7. **86-90 min**: Demo i podsumowanie
   - Krótkie prezentacje
   - Najlepsze praktyki promptowania

## 5. Checklist pre-workshop

- [ ] Każdy uczestnik ma konto GitHub i ChatGPT
- [ ] Node.js i Git są zainstalowane
- [ ] Repozytorium jest utworzone i wypchnięte na GitHub
- [ ] Uczestnicy mają przygotowany edytor kodu
- [ ] Prowadzący ma gotowy "plan B" (starter branch) na wypadek problemów

## 6. Dobre praktyki pracy z Codex podczas zajęć

- Definiuj wymagania w punktach i podawaj ograniczenia techniczne
- Proś o pracę iteracyjną i krótkie podsumowanie po każdej zmianie
- Wymagaj diffów oraz uzasadnienia decyzji technicznych
- Trzymaj się małych kroków i częstych checkpointów

## 7. Przydatne linki

- Codex get started: <https://openai.com/codex/get-started/>
- Codex CLI docs: <https://developers.openai.com/codex/cli>
- Codex cloud docs: <https://developers.openai.com/codex/cloud>
- Artykuł pomocy (dostęp i wymagania): <https://help.openai.com/en/articles/11369540/>
