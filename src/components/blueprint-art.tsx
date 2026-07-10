export function BlueprintArt() {
  return (
    <div className="blueprint-art" aria-hidden="true">
      <svg viewBox="0 0 760 610" fill="none">
        <defs>
          <linearGradient id="fade" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="var(--blueprint)" stopOpacity=".14" />
            <stop offset="1" stopColor="var(--blueprint)" stopOpacity=".02" />
          </linearGradient>
          <pattern id="minor-grid" width="22" height="22" patternUnits="userSpaceOnUse">
            <path d="M22 0H0V22" stroke="var(--blueprint)" strokeOpacity=".08" strokeWidth=".7" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="760" height="610" fill="url(#minor-grid)" />
        <path d="M75 510h610M125 548h510M380 84v485M83 474l297-192 297 192M130 474l250-161 250 161" stroke="var(--blueprint)" strokeOpacity=".2" />
        <g stroke="var(--accent)" strokeOpacity=".54" strokeWidth="1.25">
          <path d="M169 458 380 329l210 129v93H169v-93Z" />
          <path d="M218 428v123M278 391v160M342 351v200M416 351v200M480 391v160M540 428v123" />
          <path d="m169 458 211 47 210-47M169 504l211 47 210-47" />
          <path d="M218 428 380 465l160-37M278 391l102 23 100-23M342 351l38 9 36-9" />
          <path d="M169 458h421M169 504h421M169 551h421M380 329v222" />
          <path d="M218 428 342 351M278 391l-60 37M416 351l124 77M480 391l60 37" />
        </g>
        <g stroke="var(--blueprint)" strokeOpacity=".45" strokeWidth="1">
          <path d="M141 458h-37v93h37M111 458v93M102 458h18M102 551h18" />
          <path d="M169 575h421M169 563v22M590 563v22M169 571h421" />
          <path d="M677 474h27M677 551h27M694 474v77" />
          <circle cx="380" cy="329" r="5" />
          <path d="M369 329h22M380 318v22" />
        </g>
        <g fill="var(--blueprint)" fillOpacity=".62" fontFamily="var(--font-mono)" fontSize="11">
          <text x="73" y="508">24&apos;-0&quot;</text>
          <text x="350" y="595">48&apos;-0&quot;</text>
          <text x="705" y="517" transform="rotate(90 705 517)">ELEV. +0.00</text>
        </g>
        <g transform="translate(430 50)">
          <rect width="285" height="210" fill="white" fillOpacity=".92" stroke="var(--accent)" strokeOpacity=".38" />
          <path d="M0 26h285M18 13h2M25 13h2M32 13h2" stroke="var(--accent)" strokeOpacity=".45" />
          <g fill="var(--accent)" fillOpacity=".72" fontFamily="var(--font-mono)" fontSize="9">
            <text x="20" y="49">{"// BUILD BETTER. SHIP VALUE."}</text>
            <text x="20" y="75">class ProjectEstimator &#123;</text>
            <text x="32" y="94">scope = project.scope;</text>
            <text x="32" y="113">takeoff = parseDrawing();</text>
            <text x="32" y="132">estimate = buildEstimate();</text>
            <text x="20" y="151">&#125;</text>
            <text x="20" y="179">return estimate.total;</text>
          </g>
          <g stroke="var(--blueprint)" strokeOpacity=".32">
            <path d="M10 42h265M10 63h265M10 84h265M10 105h265M10 126h265M10 147h265M10 168h265M10 189h265" />
          </g>
        </g>
        <g transform="translate(581 288)">
          <rect width="126" height="82" fill="white" stroke="var(--blueprint)" strokeOpacity=".36" />
          <g fill="var(--blueprint)" fillOpacity=".67" fontFamily="var(--font-mono)" fontSize="8">
            <text x="14" y="22">PROJECT: DEVHUB</text>
            <text x="14" y="39">SHEET: 001</text>
            <text x="14" y="56">SCALE: NTS</text>
            <text x="14" y="73">BY: M.L.</text>
          </g>
        </g>
        <circle cx="708" cy="370" r="17" stroke="var(--accent)" strokeOpacity=".45" />
        <path d="M681 370h54M708 343v54" stroke="var(--accent)" strokeOpacity=".45" />
      </svg>
    </div>
  );
}
