const fs = require('fs');
const path = "c:/Users/Siddhi/Desktop/LAB_REPORTS/PawarLabs/index.html";
let html = fs.readFileSync(path, "utf8");

const headerJpgPath = 'c:/Users/Siddhi/Desktop/LAB_REPORTS/PawarLabs/header.jpg';
const headerBuf = fs.readFileSync(headerJpgPath);
const headerB64 = headerBuf.toString('base64');
const headerDataUrl = `data:image/jpeg;base64,${headerB64}`;

const biochemistryBlock = `
            <div class="report-paper hidden" id="biochemistryReportSheet">
              <div class="paper-header"
                style="margin-bottom:12px; border-radius:10px; overflow:hidden; box-shadow:0 4px 14px rgba(0,0,0,0.12);">
                <img id="bioLabLogo" src="${headerDataUrl}" alt="Lab Header"
                  style="width: 100%; height: auto; display: block; border-radius: 10px;">
              </div>

              <h2 style="text-align:center; color:#0d5db8; font-size:18px; font-weight:800; text-transform:uppercase; margin:8px 0 12px 0; letter-spacing:0.05em; border-bottom:2px solid #bfdbfe; padding-bottom:6px;">Biochemistry Report</h2>
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
                  <label for="bioSpeciesBreed">Species:</label>
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
                  <label for="bioBreedInput">Breed:</label>
                  <input type="text" class="live-edit" id="bioBreedInput" value="" placeholder="Enter breed">
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
  // Normalize CRLF to LF for matching
  const normalizedHtml = html.replace(/\r\n/g, "\n");
  const marker = `            </div>
          </div>
        </div>
      </div>
  </div>

  <div class="status-toast" id="statusToast">`;

  if (!normalizedHtml.includes(marker)) {
    console.error("Marker not found in normalized html");
    process.exit(1);
  }
  const updatedNormalized = normalizedHtml.replace(
    marker,
    `            </div>${biochemistryBlock}
          </div>
        </div>
      </div>
  </div>

  <div class="status-toast" id="statusToast">`
  );
  fs.writeFileSync(path, updatedNormalized, "utf8");
  console.log("Inserted biochemistry HTML successfully");
}
