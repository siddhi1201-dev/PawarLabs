const fs = require("fs");
const path = "c:/Users/Siddhi/Desktop/LAB_REPORTS/PawarLabs/index.html";
let html = fs.readFileSync(path, "utf8");

const biochemistryBlock = `
            <div class="report-paper hidden" id="biochemistryReportSheet">
              <div class="paper-header"
                style="display:flex; align-items:center; justify-content:space-between; padding:14px 16px; margin-bottom:12px; border-radius:12px; background:linear-gradient(120deg, #082f70 0%, #1254a2 47%, #2782db 100%); color:#fff; box-shadow:0 7px 18px rgba(8, 47, 112, 0.27);">
                <div
                  style="flex: 0 0 auto; display: flex; align-items: center; background: #fff; border-radius: 10px; padding: 4px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">
                  <img id="bioLabLogo" src="logo%20.jpeg" alt="Logo"
                    style="width: 100px; height: 100px; object-fit: contain; display: block;">
                </div>
                <div style="flex: 1 1 auto; text-align: center; padding: 0 12px;">
                  <h1
                    style="margin:0; font-family:Georgia, 'Times New Roman', serif; font-size:20px; color:#fff; font-weight:700; line-height:1.18; letter-spacing:0.01em; text-shadow:0 1px 3px rgba(0,0,0,0.2);">
                    Dr Pawar's Pet and Live Stock<br>Disease Diagnostic Lab</h1>
                  <p
                    style="margin: 4px 0 0 0; color: rgba(255,255,255,0.85); font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em;">
                    BIOCHEMISTRY PANEL REPORT</p>
                </div>
                <div
                  style="flex: 0 0 auto; text-align: right; font-size: 11px; color: rgba(255,255,255,0.9); line-height: 1.4; min-width: 140px;">
                  <strong style="color: #fff; font-size: 13px; text-shadow: 0 1px 2px rgba(0,0,0,0.2);">Dr.V.T.Pawar</strong><br>
                  <span style="font-size:10px; color:rgba(255,255,255,0.9);">Reg.No : MSVC,3875</span><br>
                  <span style="font-weight: 600;">M.V.Sc (Pathology)</span><br>
                  <span style="font-weight: 600; color: rgba(255,255,255,0.95);">📞 +91 9850509600</span>
                </div>
              </div>

              <div class="section-banner">Patient Details</div>
              <div class="demographics-grid">
                <div class="demo-item">
                  <label for="bioOwnerName">Name of Owner:</label>
                  <input type="text" class="live-edit" id="bioOwnerName" value="" placeholder="Enter owner name">
                </div>
                <div class="demo-item">
                  <label for="bioAddress">Address:</label>
                  <input type="text" class="live-edit" id="bioAddress" value="" placeholder="Enter address">
                </div>
                <div class="demo-item">
                  <label for="bioMobileNo">Mobile No:</label>
                  <input type="text" class="live-edit" id="bioMobileNo" value="" placeholder="Enter mobile number">
                </div>
                <div class="demo-item">
                  <label for="bioSpeciesBreed">Species / Breed:</label>
                  <select class="live-edit" id="bioSpeciesBreed">
                    <option value="" disabled selected>Select species</option>
                    <option value="BOVINE">BOVINE</option>
                    <option value="CANINE">CANINE</option>
                    <option value="FELINE">FELINE</option>
                    <option value="OVINE">OVINE</option>
                    <option value="CAPRINE">CAPRINE</option>
                    <option value="EQUINE">EQUINE</option>
                  </select>
                </div>
                <div class="demo-item">
                  <label for="bioDoctorName">Ref by DR:</label>
                  <input type="text" class="live-edit" id="bioDoctorName" value="" placeholder="Enter doctor name">
                </div>
                <div class="demo-item">
                  <label for="bioAge">Age / Sex:</label>
                  <div style="display: flex; gap: 5px; flex: 1;">
                    <input type="text" class="live-edit" id="bioAge" placeholder="Age" style="flex: 1;">
                    <select class="live-edit" id="bioSex" style="flex: 1;">
                      <option value="" disabled selected>Sex</option>
                      <option value="MALE">Male</option>
                      <option value="FEMALE">Female</option>
                    </select>
                  </div>
                </div>
                <div class="demo-item">
                  <label for="bioReportDate">Date:</label>
                  <input type="date" class="live-edit" id="bioReportDate">
                </div>
                <div class="demo-item" style="grid-column: 1 / -1;">
                  <label for="bioHistory">History:</label>
                  <input type="text" class="live-edit" id="bioHistory" value="" placeholder="Enter clinical history"
                    style="flex:1;">
                </div>
              </div>

              <div class="section-banner">Kit 1 — Liver, Renal &amp; Metabolic Panel</div>
              <table class="report-table">
                <thead>
                  <tr>
                    <th style="width:42%;">TEST NAME</th>
                    <th style="width:14%; text-align:center;">UNIT</th>
                    <th style="width:20%; text-align:center;">RESULT</th>
                    <th style="width:24%;">REFERRAL RANGE</th>
                  </tr>
                </thead>
                <tbody id="biochemistryKit1Body"></tbody>
              </table>

              <div class="section-banner">Kit 2 — Electrolytes Panel</div>
              <table class="report-table">
                <thead>
                  <tr>
                    <th style="width:42%;">TEST NAME</th>
                    <th style="width:14%; text-align:center;">UNIT</th>
                    <th style="width:20%; text-align:center;">RESULT</th>
                    <th style="width:24%;">REFERRAL RANGE</th>
                  </tr>
                </thead>
                <tbody id="biochemistryKit2Body"></tbody>
              </table>

              <div class="paper-footer-section" id="bioPaperFooterSection" style="margin-top:10px;">
                <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:4px;">
                  <div style="font-size:10px; color:#64748b;" id="bioReportGeneratedTime">
                    Report Generated: Live Preview
                  </div>
                  <div style="text-align:right; font-size:11px; color:#1e293b;">
                    <img class="bio-doctor-signature" src="pawarsign.png" alt="Dr VT Pawar Signature"
                      style="height:48px; width:auto; object-fit:contain; display:block; margin-left:auto; margin-bottom:4px;">
                    <strong style="color:#0d5db8; font-size:12px;">DR VT Pawar</strong><br>
                    <span style="font-size:11px;">M.V.Sc (Veterinary Pathology)</span><br>
                    <span style="font-size:10px; color:#475569;">Reg.No : MSVC,3875</span>
                  </div>
                </div>
                <div style="border-top:1px solid #cbd5e1; margin:4px 0 4px;"></div>
              </div>
            </div>`;

if (html.includes('id="biochemistryReportSheet"')) {
  console.log("Biochemistry sheet already exists");
} else {
  const marker = `            </div>
          </div>
        </div>
      </div>
  </div>

  <div class="status-toast" id="statusToast">`;
  if (!html.includes(marker)) {
    console.error("Marker not found");
    process.exit(1);
  }
  html = html.replace(
    marker,
    `            </div>${biochemistryBlock}
          </div>
        </div>
      </div>
  </div>

  <div class="status-toast" id="statusToast">`
  );
  fs.writeFileSync(path, html, "utf8");
  console.log("Inserted biochemistry HTML");
}
