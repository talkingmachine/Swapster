
function Aside() {
  return (
    <div className="aside-wrapper">
      <section className="aside">
        <div className="aside__title">Читают сейчас</div>
        <svg className="aside__line-spacer" width={203} height={1} viewBox="0 0 203 1" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="0.5" x2={203} y2="0.5" stroke="#242547" /></svg>
        <ul className="aside__reading-now-list">
          <li className="reading-now-list__post">
            <a href="#" className="post__title">Подходы к определению правового статуса криптовалют в ведущих странах мира</a>
            <div className="post__stats-line">
              <div className="stats-line__views">
                <svg className="icon-eye" width={15} height={10} viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6.71128 0.0521882C4.66897 0.328104 2.46615 1.71081 0.569817 3.90711C0.0874372 4.46579 -0.000780954 4.63474 5.1817e-06 4.99854C0.000791318 5.36901 0.0912995 5.54362 0.570056 6.0981C1.89217 7.62931 3.42082 8.8123 4.88331 9.43595C6.79465 10.251 8.64432 10.1834 10.5565 9.2287C11.8823 8.56677 13.2353 7.47399 14.4082 6.1177C14.8484 5.60874 14.9384 5.46349 14.9868 5.18403C15.0302 4.93339 14.964 4.61364 14.8241 4.39804C14.6015 4.0551 13.6711 3.05983 13.0687 2.5202C12.2498 1.78663 11.4291 1.21477 10.5923 0.794765C9.26598 0.128945 7.97354 -0.118325 6.71128 0.0521882ZM8.04518 1.14559C8.7687 1.23702 9.32894 1.4132 10.078 1.78489C11.3212 2.4018 12.5496 3.41379 13.7985 4.85003L13.9228 4.99311L13.7792 5.1629C12.2743 6.94107 10.5749 8.17947 8.96715 8.66953C8.21991 8.8973 7.28714 8.94746 6.55552 8.7992C4.90098 8.46387 3.12127 7.30247 1.51007 5.50664C1.12066 5.07262 1.08142 5.01734 1.12141 4.95926C1.25471 4.76576 1.96394 4.00136 2.32208 3.6653C3.79133 2.28652 5.20047 1.46729 6.53843 1.21404C7.12236 1.10353 7.55624 1.08382 8.04518 1.14559ZM7.06549 2.53511C6.57576 2.62501 6.15569 2.85605 5.77123 3.24693C5.45893 3.56445 5.27928 3.85563 5.1493 4.25506C5.06939 4.50062 5.05879 4.58809 5.05879 5.00247C5.05879 5.41684 5.06939 5.50431 5.1493 5.74987C5.27925 6.14923 5.4589 6.44044 5.77123 6.75811C6.08357 7.07578 6.36989 7.25849 6.76255 7.39066C7.004 7.47194 7.08999 7.48271 7.49742 7.48271C7.90484 7.48271 7.99084 7.47194 8.23228 7.39066C8.62494 7.25849 8.91127 7.07578 9.2236 6.75811C9.53594 6.44044 9.71558 6.14923 9.84554 5.74987C9.92545 5.50431 9.93604 5.41684 9.93604 5.00247C9.93604 4.58809 9.92545 4.50062 9.84554 4.25506C9.71558 3.8557 9.53594 3.56449 9.2236 3.24682C8.74669 2.76177 8.25402 2.54002 7.59996 2.51603C7.40257 2.5088 7.16205 2.51739 7.06549 2.53511ZM8.05896 3.74473C8.36736 3.89154 8.56691 4.09115 8.71986 4.40593C8.84048 4.65414 8.84752 4.68699 8.84752 5.00247C8.84752 5.31794 8.84048 5.35079 8.71986 5.599C8.56612 5.91542 8.36822 6.11249 8.05045 6.26559C7.84397 6.36508 7.79106 6.37561 7.49742 6.37561C7.20378 6.37561 7.15087 6.36508 6.94439 6.26559C6.62662 6.11249 6.42872 5.91542 6.27498 5.599C6.15449 5.35107 6.14731 5.31766 6.14731 5.00427C6.14731 4.70357 6.15753 4.65028 6.25549 4.44C6.39283 4.14514 6.58837 3.92929 6.84342 3.79104C7.11266 3.6451 7.25997 3.61208 7.57429 3.6273C7.77944 3.63725 7.88871 3.6637 8.05896 3.74473Z" fill="#31325C" /></svg>
                  3.5
              </div>
              <div className="stats-line__likes">
                <svg className="icon-thumbs-up" width={9} height={11} viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.89296 0.0192096C4.69353 0.0721353 4.5064 0.236375 4.36109 0.486036C4.22351 0.722406 4.15706 0.945615 4.02046 1.63029C3.92777 2.09473 3.87671 2.23018 3.71634 2.43676C3.65206 2.51956 3.39249 2.87554 3.1395 3.22783C2.88652 3.58012 2.60783 3.94984 2.52018 4.04944L2.36086 4.23052L1.45729 4.23688L0.553748 4.24325L0.429575 4.30953C0.270516 4.39443 0.134236 4.54792 0.0588501 4.72706L0 4.86692V7.20029V9.53367L0.051174 9.65664C0.15925 9.91632 0.387223 10.1059 0.641107 10.1473C0.708588 10.1582 1.15594 10.1674 1.63524 10.1677L2.50668 10.1681L2.67189 10.222C2.76274 10.2517 3.08379 10.367 3.38531 10.4783C4.15626 10.7628 4.54641 10.8802 4.97419 10.9564C5.29412 11.0134 6.62714 11.0149 6.85193 10.9585C7.24658 10.8595 7.48421 10.7175 7.74297 10.4262C8.03216 10.1005 8.15904 9.77761 8.20349 9.2541C8.22148 9.04246 8.23024 9.00603 8.28678 8.90833C8.48867 8.55948 8.57017 8.22307 8.56251 7.7702C8.55871 7.54497 8.56139 7.52692 8.61812 7.39385C8.74834 7.08834 8.80389 6.63048 8.74855 6.31856L8.71995 6.15726L8.78376 6.02761C8.94397 5.70207 9.0129 5.36675 8.99803 4.9852C8.9804 4.53332 8.85747 4.23445 8.54687 3.8884C8.34222 3.66038 8.19112 3.55055 7.96252 3.46362C7.80997 3.40562 7.80884 3.40553 7.14621 3.39839C6.78126 3.39446 6.48267 3.38293 6.48267 3.37278C6.48267 3.36263 6.50079 3.30755 6.52294 3.25039C6.65964 2.89763 6.72814 2.57046 6.74379 2.1954C6.77767 1.3845 6.58508 0.752944 6.19365 0.391303C6.07823 0.284656 5.88376 0.171535 5.69979 0.103985C5.45371 0.0136396 5.06702 -0.0270064 4.89296 0.0192096ZM5.51657 0.919313C5.80655 1.03316 5.94046 1.29437 5.98581 1.8346C6.023 2.27758 5.97636 2.50943 5.71136 3.1983C5.52816 3.67455 5.47363 3.86492 5.44453 4.12953L5.4334 4.23088L6.55474 4.23705L7.6761 4.24325L7.80021 4.31C7.94361 4.38714 8.10779 4.56164 8.17241 4.70562C8.23206 4.83855 8.26523 5.03556 8.25096 5.17226C8.23649 5.31095 8.14835 5.58927 8.08064 5.71005C8.02679 5.80612 7.91906 5.90995 7.87319 5.90995C7.82196 5.90995 7.82081 5.93496 7.86836 6.01584C7.97793 6.20232 8.03849 6.52404 8.00867 6.76119C7.98562 6.94444 7.92826 7.09188 7.81362 7.26251L7.72122 7.40002L7.7655 7.53133C7.82992 7.72246 7.82603 8.01429 7.75635 8.21666C7.69534 8.39389 7.61274 8.53269 7.51644 8.61987L7.44404 8.6854L7.45259 8.96975C7.46185 9.27694 7.44056 9.42363 7.35775 9.6235C7.26216 9.85417 7.02095 10.0443 6.7309 10.1176C6.5129 10.1728 5.48129 10.1725 5.13649 10.1173C4.74877 10.0551 4.19953 9.89118 3.51344 9.63281C2.83032 9.37554 2.68919 9.33447 2.42026 9.31449L2.24363 9.30137V7.18629V5.07122H2.37445C2.4464 5.07122 2.53447 5.06017 2.57017 5.04664C2.78066 4.96692 3.14084 4.58962 3.51025 4.06189C3.92151 3.47437 4.06128 3.27985 4.22985 3.06043C4.5625 2.62737 4.61801 2.48487 4.80107 1.59408C4.88795 1.17134 4.93353 1.02424 5.01008 0.919743L5.06584 0.843591L5.23483 0.859333C5.32778 0.867979 5.45455 0.894968 5.51657 0.919313ZM1.32078 8.54701C1.35964 8.58243 1.40799 8.63636 1.42819 8.66686C1.47043 8.73056 1.49046 8.88254 1.47158 8.99596C1.45603 9.08921 1.34267 9.23808 1.25609 9.27889C1.10097 9.35204 0.903507 9.28197 0.802228 9.11784C0.75304 9.03809 0.744696 9.00487 0.744696 8.8885C0.744696 8.77198 0.752926 8.73925 0.80198 8.66082C0.926573 8.46159 1.16879 8.40845 1.32078 8.54701Z" fill="#31325C" /></svg>
                  350
                <span className="stats-added">(+45)</span>
              </div>
            </div>
            <svg className="aside__line-spacer" width={203} height={1} viewBox="0 0 203 1" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="0.5" x2={203} y2="0.5" stroke="#242547" /></svg>
          </li>
          <li className="reading-now-list__post">
            <a href="#" className="post__title">Подходы к определению правового статуса криптовалют в ведущих странах мира</a>
            <div className="post__stats-line">
              <div className="stats-line__views">
                <svg className="icon-eye" width={15} height={10} viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6.71128 0.0521882C4.66897 0.328104 2.46615 1.71081 0.569817 3.90711C0.0874372 4.46579 -0.000780954 4.63474 5.1817e-06 4.99854C0.000791318 5.36901 0.0912995 5.54362 0.570056 6.0981C1.89217 7.62931 3.42082 8.8123 4.88331 9.43595C6.79465 10.251 8.64432 10.1834 10.5565 9.2287C11.8823 8.56677 13.2353 7.47399 14.4082 6.1177C14.8484 5.60874 14.9384 5.46349 14.9868 5.18403C15.0302 4.93339 14.964 4.61364 14.8241 4.39804C14.6015 4.0551 13.6711 3.05983 13.0687 2.5202C12.2498 1.78663 11.4291 1.21477 10.5923 0.794765C9.26598 0.128945 7.97354 -0.118325 6.71128 0.0521882ZM8.04518 1.14559C8.7687 1.23702 9.32894 1.4132 10.078 1.78489C11.3212 2.4018 12.5496 3.41379 13.7985 4.85003L13.9228 4.99311L13.7792 5.1629C12.2743 6.94107 10.5749 8.17947 8.96715 8.66953C8.21991 8.8973 7.28714 8.94746 6.55552 8.7992C4.90098 8.46387 3.12127 7.30247 1.51007 5.50664C1.12066 5.07262 1.08142 5.01734 1.12141 4.95926C1.25471 4.76576 1.96394 4.00136 2.32208 3.6653C3.79133 2.28652 5.20047 1.46729 6.53843 1.21404C7.12236 1.10353 7.55624 1.08382 8.04518 1.14559ZM7.06549 2.53511C6.57576 2.62501 6.15569 2.85605 5.77123 3.24693C5.45893 3.56445 5.27928 3.85563 5.1493 4.25506C5.06939 4.50062 5.05879 4.58809 5.05879 5.00247C5.05879 5.41684 5.06939 5.50431 5.1493 5.74987C5.27925 6.14923 5.4589 6.44044 5.77123 6.75811C6.08357 7.07578 6.36989 7.25849 6.76255 7.39066C7.004 7.47194 7.08999 7.48271 7.49742 7.48271C7.90484 7.48271 7.99084 7.47194 8.23228 7.39066C8.62494 7.25849 8.91127 7.07578 9.2236 6.75811C9.53594 6.44044 9.71558 6.14923 9.84554 5.74987C9.92545 5.50431 9.93604 5.41684 9.93604 5.00247C9.93604 4.58809 9.92545 4.50062 9.84554 4.25506C9.71558 3.8557 9.53594 3.56449 9.2236 3.24682C8.74669 2.76177 8.25402 2.54002 7.59996 2.51603C7.40257 2.5088 7.16205 2.51739 7.06549 2.53511ZM8.05896 3.74473C8.36736 3.89154 8.56691 4.09115 8.71986 4.40593C8.84048 4.65414 8.84752 4.68699 8.84752 5.00247C8.84752 5.31794 8.84048 5.35079 8.71986 5.599C8.56612 5.91542 8.36822 6.11249 8.05045 6.26559C7.84397 6.36508 7.79106 6.37561 7.49742 6.37561C7.20378 6.37561 7.15087 6.36508 6.94439 6.26559C6.62662 6.11249 6.42872 5.91542 6.27498 5.599C6.15449 5.35107 6.14731 5.31766 6.14731 5.00427C6.14731 4.70357 6.15753 4.65028 6.25549 4.44C6.39283 4.14514 6.58837 3.92929 6.84342 3.79104C7.11266 3.6451 7.25997 3.61208 7.57429 3.6273C7.77944 3.63725 7.88871 3.6637 8.05896 3.74473Z" fill="#31325C" /></svg>
                  3.5
              </div>
              <div className="stats-line__likes">
                <svg className="icon-thumbs-up" width={9} height={11} viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.89296 0.0192096C4.69353 0.0721353 4.5064 0.236375 4.36109 0.486036C4.22351 0.722406 4.15706 0.945615 4.02046 1.63029C3.92777 2.09473 3.87671 2.23018 3.71634 2.43676C3.65206 2.51956 3.39249 2.87554 3.1395 3.22783C2.88652 3.58012 2.60783 3.94984 2.52018 4.04944L2.36086 4.23052L1.45729 4.23688L0.553748 4.24325L0.429575 4.30953C0.270516 4.39443 0.134236 4.54792 0.0588501 4.72706L0 4.86692V7.20029V9.53367L0.051174 9.65664C0.15925 9.91632 0.387223 10.1059 0.641107 10.1473C0.708588 10.1582 1.15594 10.1674 1.63524 10.1677L2.50668 10.1681L2.67189 10.222C2.76274 10.2517 3.08379 10.367 3.38531 10.4783C4.15626 10.7628 4.54641 10.8802 4.97419 10.9564C5.29412 11.0134 6.62714 11.0149 6.85193 10.9585C7.24658 10.8595 7.48421 10.7175 7.74297 10.4262C8.03216 10.1005 8.15904 9.77761 8.20349 9.2541C8.22148 9.04246 8.23024 9.00603 8.28678 8.90833C8.48867 8.55948 8.57017 8.22307 8.56251 7.7702C8.55871 7.54497 8.56139 7.52692 8.61812 7.39385C8.74834 7.08834 8.80389 6.63048 8.74855 6.31856L8.71995 6.15726L8.78376 6.02761C8.94397 5.70207 9.0129 5.36675 8.99803 4.9852C8.9804 4.53332 8.85747 4.23445 8.54687 3.8884C8.34222 3.66038 8.19112 3.55055 7.96252 3.46362C7.80997 3.40562 7.80884 3.40553 7.14621 3.39839C6.78126 3.39446 6.48267 3.38293 6.48267 3.37278C6.48267 3.36263 6.50079 3.30755 6.52294 3.25039C6.65964 2.89763 6.72814 2.57046 6.74379 2.1954C6.77767 1.3845 6.58508 0.752944 6.19365 0.391303C6.07823 0.284656 5.88376 0.171535 5.69979 0.103985C5.45371 0.0136396 5.06702 -0.0270064 4.89296 0.0192096ZM5.51657 0.919313C5.80655 1.03316 5.94046 1.29437 5.98581 1.8346C6.023 2.27758 5.97636 2.50943 5.71136 3.1983C5.52816 3.67455 5.47363 3.86492 5.44453 4.12953L5.4334 4.23088L6.55474 4.23705L7.6761 4.24325L7.80021 4.31C7.94361 4.38714 8.10779 4.56164 8.17241 4.70562C8.23206 4.83855 8.26523 5.03556 8.25096 5.17226C8.23649 5.31095 8.14835 5.58927 8.08064 5.71005C8.02679 5.80612 7.91906 5.90995 7.87319 5.90995C7.82196 5.90995 7.82081 5.93496 7.86836 6.01584C7.97793 6.20232 8.03849 6.52404 8.00867 6.76119C7.98562 6.94444 7.92826 7.09188 7.81362 7.26251L7.72122 7.40002L7.7655 7.53133C7.82992 7.72246 7.82603 8.01429 7.75635 8.21666C7.69534 8.39389 7.61274 8.53269 7.51644 8.61987L7.44404 8.6854L7.45259 8.96975C7.46185 9.27694 7.44056 9.42363 7.35775 9.6235C7.26216 9.85417 7.02095 10.0443 6.7309 10.1176C6.5129 10.1728 5.48129 10.1725 5.13649 10.1173C4.74877 10.0551 4.19953 9.89118 3.51344 9.63281C2.83032 9.37554 2.68919 9.33447 2.42026 9.31449L2.24363 9.30137V7.18629V5.07122H2.37445C2.4464 5.07122 2.53447 5.06017 2.57017 5.04664C2.78066 4.96692 3.14084 4.58962 3.51025 4.06189C3.92151 3.47437 4.06128 3.27985 4.22985 3.06043C4.5625 2.62737 4.61801 2.48487 4.80107 1.59408C4.88795 1.17134 4.93353 1.02424 5.01008 0.919743L5.06584 0.843591L5.23483 0.859333C5.32778 0.867979 5.45455 0.894968 5.51657 0.919313ZM1.32078 8.54701C1.35964 8.58243 1.40799 8.63636 1.42819 8.66686C1.47043 8.73056 1.49046 8.88254 1.47158 8.99596C1.45603 9.08921 1.34267 9.23808 1.25609 9.27889C1.10097 9.35204 0.903507 9.28197 0.802228 9.11784C0.75304 9.03809 0.744696 9.00487 0.744696 8.8885C0.744696 8.77198 0.752926 8.73925 0.80198 8.66082C0.926573 8.46159 1.16879 8.40845 1.32078 8.54701Z" fill="#31325C" /></svg>
                  350
                <span className="stats-added">(+45)</span>
              </div>
            </div>
            <svg className="aside__line-spacer" width={203} height={1} viewBox="0 0 203 1" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="0.5" x2={203} y2="0.5" stroke="#242547" /></svg>
          </li>
          <li className="reading-now-list__post">
            <a href="#" className="post__title">Подходы к определению правового статуса криптовалют в ведущих странах мира</a>
            <div className="post__stats-line">
              <div className="stats-line__views">
                <svg className="icon-eye" width={15} height={10} viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6.71128 0.0521882C4.66897 0.328104 2.46615 1.71081 0.569817 3.90711C0.0874372 4.46579 -0.000780954 4.63474 5.1817e-06 4.99854C0.000791318 5.36901 0.0912995 5.54362 0.570056 6.0981C1.89217 7.62931 3.42082 8.8123 4.88331 9.43595C6.79465 10.251 8.64432 10.1834 10.5565 9.2287C11.8823 8.56677 13.2353 7.47399 14.4082 6.1177C14.8484 5.60874 14.9384 5.46349 14.9868 5.18403C15.0302 4.93339 14.964 4.61364 14.8241 4.39804C14.6015 4.0551 13.6711 3.05983 13.0687 2.5202C12.2498 1.78663 11.4291 1.21477 10.5923 0.794765C9.26598 0.128945 7.97354 -0.118325 6.71128 0.0521882ZM8.04518 1.14559C8.7687 1.23702 9.32894 1.4132 10.078 1.78489C11.3212 2.4018 12.5496 3.41379 13.7985 4.85003L13.9228 4.99311L13.7792 5.1629C12.2743 6.94107 10.5749 8.17947 8.96715 8.66953C8.21991 8.8973 7.28714 8.94746 6.55552 8.7992C4.90098 8.46387 3.12127 7.30247 1.51007 5.50664C1.12066 5.07262 1.08142 5.01734 1.12141 4.95926C1.25471 4.76576 1.96394 4.00136 2.32208 3.6653C3.79133 2.28652 5.20047 1.46729 6.53843 1.21404C7.12236 1.10353 7.55624 1.08382 8.04518 1.14559ZM7.06549 2.53511C6.57576 2.62501 6.15569 2.85605 5.77123 3.24693C5.45893 3.56445 5.27928 3.85563 5.1493 4.25506C5.06939 4.50062 5.05879 4.58809 5.05879 5.00247C5.05879 5.41684 5.06939 5.50431 5.1493 5.74987C5.27925 6.14923 5.4589 6.44044 5.77123 6.75811C6.08357 7.07578 6.36989 7.25849 6.76255 7.39066C7.004 7.47194 7.08999 7.48271 7.49742 7.48271C7.90484 7.48271 7.99084 7.47194 8.23228 7.39066C8.62494 7.25849 8.91127 7.07578 9.2236 6.75811C9.53594 6.44044 9.71558 6.14923 9.84554 5.74987C9.92545 5.50431 9.93604 5.41684 9.93604 5.00247C9.93604 4.58809 9.92545 4.50062 9.84554 4.25506C9.71558 3.8557 9.53594 3.56449 9.2236 3.24682C8.74669 2.76177 8.25402 2.54002 7.59996 2.51603C7.40257 2.5088 7.16205 2.51739 7.06549 2.53511ZM8.05896 3.74473C8.36736 3.89154 8.56691 4.09115 8.71986 4.40593C8.84048 4.65414 8.84752 4.68699 8.84752 5.00247C8.84752 5.31794 8.84048 5.35079 8.71986 5.599C8.56612 5.91542 8.36822 6.11249 8.05045 6.26559C7.84397 6.36508 7.79106 6.37561 7.49742 6.37561C7.20378 6.37561 7.15087 6.36508 6.94439 6.26559C6.62662 6.11249 6.42872 5.91542 6.27498 5.599C6.15449 5.35107 6.14731 5.31766 6.14731 5.00427C6.14731 4.70357 6.15753 4.65028 6.25549 4.44C6.39283 4.14514 6.58837 3.92929 6.84342 3.79104C7.11266 3.6451 7.25997 3.61208 7.57429 3.6273C7.77944 3.63725 7.88871 3.6637 8.05896 3.74473Z" fill="#31325C" /></svg>
                  3.5
              </div>
              <div className="stats-line__likes">
                <svg className="icon-thumbs-up" width={9} height={11} viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.89296 0.0192096C4.69353 0.0721353 4.5064 0.236375 4.36109 0.486036C4.22351 0.722406 4.15706 0.945615 4.02046 1.63029C3.92777 2.09473 3.87671 2.23018 3.71634 2.43676C3.65206 2.51956 3.39249 2.87554 3.1395 3.22783C2.88652 3.58012 2.60783 3.94984 2.52018 4.04944L2.36086 4.23052L1.45729 4.23688L0.553748 4.24325L0.429575 4.30953C0.270516 4.39443 0.134236 4.54792 0.0588501 4.72706L0 4.86692V7.20029V9.53367L0.051174 9.65664C0.15925 9.91632 0.387223 10.1059 0.641107 10.1473C0.708588 10.1582 1.15594 10.1674 1.63524 10.1677L2.50668 10.1681L2.67189 10.222C2.76274 10.2517 3.08379 10.367 3.38531 10.4783C4.15626 10.7628 4.54641 10.8802 4.97419 10.9564C5.29412 11.0134 6.62714 11.0149 6.85193 10.9585C7.24658 10.8595 7.48421 10.7175 7.74297 10.4262C8.03216 10.1005 8.15904 9.77761 8.20349 9.2541C8.22148 9.04246 8.23024 9.00603 8.28678 8.90833C8.48867 8.55948 8.57017 8.22307 8.56251 7.7702C8.55871 7.54497 8.56139 7.52692 8.61812 7.39385C8.74834 7.08834 8.80389 6.63048 8.74855 6.31856L8.71995 6.15726L8.78376 6.02761C8.94397 5.70207 9.0129 5.36675 8.99803 4.9852C8.9804 4.53332 8.85747 4.23445 8.54687 3.8884C8.34222 3.66038 8.19112 3.55055 7.96252 3.46362C7.80997 3.40562 7.80884 3.40553 7.14621 3.39839C6.78126 3.39446 6.48267 3.38293 6.48267 3.37278C6.48267 3.36263 6.50079 3.30755 6.52294 3.25039C6.65964 2.89763 6.72814 2.57046 6.74379 2.1954C6.77767 1.3845 6.58508 0.752944 6.19365 0.391303C6.07823 0.284656 5.88376 0.171535 5.69979 0.103985C5.45371 0.0136396 5.06702 -0.0270064 4.89296 0.0192096ZM5.51657 0.919313C5.80655 1.03316 5.94046 1.29437 5.98581 1.8346C6.023 2.27758 5.97636 2.50943 5.71136 3.1983C5.52816 3.67455 5.47363 3.86492 5.44453 4.12953L5.4334 4.23088L6.55474 4.23705L7.6761 4.24325L7.80021 4.31C7.94361 4.38714 8.10779 4.56164 8.17241 4.70562C8.23206 4.83855 8.26523 5.03556 8.25096 5.17226C8.23649 5.31095 8.14835 5.58927 8.08064 5.71005C8.02679 5.80612 7.91906 5.90995 7.87319 5.90995C7.82196 5.90995 7.82081 5.93496 7.86836 6.01584C7.97793 6.20232 8.03849 6.52404 8.00867 6.76119C7.98562 6.94444 7.92826 7.09188 7.81362 7.26251L7.72122 7.40002L7.7655 7.53133C7.82992 7.72246 7.82603 8.01429 7.75635 8.21666C7.69534 8.39389 7.61274 8.53269 7.51644 8.61987L7.44404 8.6854L7.45259 8.96975C7.46185 9.27694 7.44056 9.42363 7.35775 9.6235C7.26216 9.85417 7.02095 10.0443 6.7309 10.1176C6.5129 10.1728 5.48129 10.1725 5.13649 10.1173C4.74877 10.0551 4.19953 9.89118 3.51344 9.63281C2.83032 9.37554 2.68919 9.33447 2.42026 9.31449L2.24363 9.30137V7.18629V5.07122H2.37445C2.4464 5.07122 2.53447 5.06017 2.57017 5.04664C2.78066 4.96692 3.14084 4.58962 3.51025 4.06189C3.92151 3.47437 4.06128 3.27985 4.22985 3.06043C4.5625 2.62737 4.61801 2.48487 4.80107 1.59408C4.88795 1.17134 4.93353 1.02424 5.01008 0.919743L5.06584 0.843591L5.23483 0.859333C5.32778 0.867979 5.45455 0.894968 5.51657 0.919313ZM1.32078 8.54701C1.35964 8.58243 1.40799 8.63636 1.42819 8.66686C1.47043 8.73056 1.49046 8.88254 1.47158 8.99596C1.45603 9.08921 1.34267 9.23808 1.25609 9.27889C1.10097 9.35204 0.903507 9.28197 0.802228 9.11784C0.75304 9.03809 0.744696 9.00487 0.744696 8.8885C0.744696 8.77198 0.752926 8.73925 0.80198 8.66082C0.926573 8.46159 1.16879 8.40845 1.32078 8.54701Z" fill="#31325C" /></svg>
                  350
                <span className="stats-added">(+45)</span>
              </div>
            </div>
            <svg className="aside__line-spacer" width={203} height={1} viewBox="0 0 203 1" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="0.5" x2={203} y2="0.5" stroke="#242547" /></svg>
          </li>
          <li className="reading-now-list__post">
            <a href="#" className="post__title">Подходы к определению правового статуса криптовалют в ведущих странах мира</a>
            <div className="post__stats-line">
              <div className="stats-line__views">
                <svg className="icon-eye" width={15} height={10} viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6.71128 0.0521882C4.66897 0.328104 2.46615 1.71081 0.569817 3.90711C0.0874372 4.46579 -0.000780954 4.63474 5.1817e-06 4.99854C0.000791318 5.36901 0.0912995 5.54362 0.570056 6.0981C1.89217 7.62931 3.42082 8.8123 4.88331 9.43595C6.79465 10.251 8.64432 10.1834 10.5565 9.2287C11.8823 8.56677 13.2353 7.47399 14.4082 6.1177C14.8484 5.60874 14.9384 5.46349 14.9868 5.18403C15.0302 4.93339 14.964 4.61364 14.8241 4.39804C14.6015 4.0551 13.6711 3.05983 13.0687 2.5202C12.2498 1.78663 11.4291 1.21477 10.5923 0.794765C9.26598 0.128945 7.97354 -0.118325 6.71128 0.0521882ZM8.04518 1.14559C8.7687 1.23702 9.32894 1.4132 10.078 1.78489C11.3212 2.4018 12.5496 3.41379 13.7985 4.85003L13.9228 4.99311L13.7792 5.1629C12.2743 6.94107 10.5749 8.17947 8.96715 8.66953C8.21991 8.8973 7.28714 8.94746 6.55552 8.7992C4.90098 8.46387 3.12127 7.30247 1.51007 5.50664C1.12066 5.07262 1.08142 5.01734 1.12141 4.95926C1.25471 4.76576 1.96394 4.00136 2.32208 3.6653C3.79133 2.28652 5.20047 1.46729 6.53843 1.21404C7.12236 1.10353 7.55624 1.08382 8.04518 1.14559ZM7.06549 2.53511C6.57576 2.62501 6.15569 2.85605 5.77123 3.24693C5.45893 3.56445 5.27928 3.85563 5.1493 4.25506C5.06939 4.50062 5.05879 4.58809 5.05879 5.00247C5.05879 5.41684 5.06939 5.50431 5.1493 5.74987C5.27925 6.14923 5.4589 6.44044 5.77123 6.75811C6.08357 7.07578 6.36989 7.25849 6.76255 7.39066C7.004 7.47194 7.08999 7.48271 7.49742 7.48271C7.90484 7.48271 7.99084 7.47194 8.23228 7.39066C8.62494 7.25849 8.91127 7.07578 9.2236 6.75811C9.53594 6.44044 9.71558 6.14923 9.84554 5.74987C9.92545 5.50431 9.93604 5.41684 9.93604 5.00247C9.93604 4.58809 9.92545 4.50062 9.84554 4.25506C9.71558 3.8557 9.53594 3.56449 9.2236 3.24682C8.74669 2.76177 8.25402 2.54002 7.59996 2.51603C7.40257 2.5088 7.16205 2.51739 7.06549 2.53511ZM8.05896 3.74473C8.36736 3.89154 8.56691 4.09115 8.71986 4.40593C8.84048 4.65414 8.84752 4.68699 8.84752 5.00247C8.84752 5.31794 8.84048 5.35079 8.71986 5.599C8.56612 5.91542 8.36822 6.11249 8.05045 6.26559C7.84397 6.36508 7.79106 6.37561 7.49742 6.37561C7.20378 6.37561 7.15087 6.36508 6.94439 6.26559C6.62662 6.11249 6.42872 5.91542 6.27498 5.599C6.15449 5.35107 6.14731 5.31766 6.14731 5.00427C6.14731 4.70357 6.15753 4.65028 6.25549 4.44C6.39283 4.14514 6.58837 3.92929 6.84342 3.79104C7.11266 3.6451 7.25997 3.61208 7.57429 3.6273C7.77944 3.63725 7.88871 3.6637 8.05896 3.74473Z" fill="#31325C" /></svg>
                  3.5
              </div>
              <div className="stats-line__likes">
                <svg className="icon-thumbs-up" width={9} height={11} viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.89296 0.0192096C4.69353 0.0721353 4.5064 0.236375 4.36109 0.486036C4.22351 0.722406 4.15706 0.945615 4.02046 1.63029C3.92777 2.09473 3.87671 2.23018 3.71634 2.43676C3.65206 2.51956 3.39249 2.87554 3.1395 3.22783C2.88652 3.58012 2.60783 3.94984 2.52018 4.04944L2.36086 4.23052L1.45729 4.23688L0.553748 4.24325L0.429575 4.30953C0.270516 4.39443 0.134236 4.54792 0.0588501 4.72706L0 4.86692V7.20029V9.53367L0.051174 9.65664C0.15925 9.91632 0.387223 10.1059 0.641107 10.1473C0.708588 10.1582 1.15594 10.1674 1.63524 10.1677L2.50668 10.1681L2.67189 10.222C2.76274 10.2517 3.08379 10.367 3.38531 10.4783C4.15626 10.7628 4.54641 10.8802 4.97419 10.9564C5.29412 11.0134 6.62714 11.0149 6.85193 10.9585C7.24658 10.8595 7.48421 10.7175 7.74297 10.4262C8.03216 10.1005 8.15904 9.77761 8.20349 9.2541C8.22148 9.04246 8.23024 9.00603 8.28678 8.90833C8.48867 8.55948 8.57017 8.22307 8.56251 7.7702C8.55871 7.54497 8.56139 7.52692 8.61812 7.39385C8.74834 7.08834 8.80389 6.63048 8.74855 6.31856L8.71995 6.15726L8.78376 6.02761C8.94397 5.70207 9.0129 5.36675 8.99803 4.9852C8.9804 4.53332 8.85747 4.23445 8.54687 3.8884C8.34222 3.66038 8.19112 3.55055 7.96252 3.46362C7.80997 3.40562 7.80884 3.40553 7.14621 3.39839C6.78126 3.39446 6.48267 3.38293 6.48267 3.37278C6.48267 3.36263 6.50079 3.30755 6.52294 3.25039C6.65964 2.89763 6.72814 2.57046 6.74379 2.1954C6.77767 1.3845 6.58508 0.752944 6.19365 0.391303C6.07823 0.284656 5.88376 0.171535 5.69979 0.103985C5.45371 0.0136396 5.06702 -0.0270064 4.89296 0.0192096ZM5.51657 0.919313C5.80655 1.03316 5.94046 1.29437 5.98581 1.8346C6.023 2.27758 5.97636 2.50943 5.71136 3.1983C5.52816 3.67455 5.47363 3.86492 5.44453 4.12953L5.4334 4.23088L6.55474 4.23705L7.6761 4.24325L7.80021 4.31C7.94361 4.38714 8.10779 4.56164 8.17241 4.70562C8.23206 4.83855 8.26523 5.03556 8.25096 5.17226C8.23649 5.31095 8.14835 5.58927 8.08064 5.71005C8.02679 5.80612 7.91906 5.90995 7.87319 5.90995C7.82196 5.90995 7.82081 5.93496 7.86836 6.01584C7.97793 6.20232 8.03849 6.52404 8.00867 6.76119C7.98562 6.94444 7.92826 7.09188 7.81362 7.26251L7.72122 7.40002L7.7655 7.53133C7.82992 7.72246 7.82603 8.01429 7.75635 8.21666C7.69534 8.39389 7.61274 8.53269 7.51644 8.61987L7.44404 8.6854L7.45259 8.96975C7.46185 9.27694 7.44056 9.42363 7.35775 9.6235C7.26216 9.85417 7.02095 10.0443 6.7309 10.1176C6.5129 10.1728 5.48129 10.1725 5.13649 10.1173C4.74877 10.0551 4.19953 9.89118 3.51344 9.63281C2.83032 9.37554 2.68919 9.33447 2.42026 9.31449L2.24363 9.30137V7.18629V5.07122H2.37445C2.4464 5.07122 2.53447 5.06017 2.57017 5.04664C2.78066 4.96692 3.14084 4.58962 3.51025 4.06189C3.92151 3.47437 4.06128 3.27985 4.22985 3.06043C4.5625 2.62737 4.61801 2.48487 4.80107 1.59408C4.88795 1.17134 4.93353 1.02424 5.01008 0.919743L5.06584 0.843591L5.23483 0.859333C5.32778 0.867979 5.45455 0.894968 5.51657 0.919313ZM1.32078 8.54701C1.35964 8.58243 1.40799 8.63636 1.42819 8.66686C1.47043 8.73056 1.49046 8.88254 1.47158 8.99596C1.45603 9.08921 1.34267 9.23808 1.25609 9.27889C1.10097 9.35204 0.903507 9.28197 0.802228 9.11784C0.75304 9.03809 0.744696 9.00487 0.744696 8.8885C0.744696 8.77198 0.752926 8.73925 0.80198 8.66082C0.926573 8.46159 1.16879 8.40845 1.32078 8.54701Z" fill="#31325C" /></svg>
                  350
                <span className="stats-added">(+45)</span>
              </div>
            </div>
            <svg className="aside__line-spacer" width={203} height={1} viewBox="0 0 203 1" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="0.5" x2={203} y2="0.5" stroke="#242547" /></svg>
          </li>
        </ul>
      </section>
    </div>
  );
}

export {Aside};