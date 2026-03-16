const STORAGE_KEY = "teamfund_state_v1";
const DB_NAME = "teamfund_app_db";
const DB_VERSION = 1;
const DB_STORE = "kv";
const DB_STATE_KEY = "state";
const MAX_FLYERS_PER_EVENT = 2;
const DEFAULT_TEAM_STATE = {
  name: "",
  division: "",
  hometown: "",
  coach: "",
  assistantCoach: "",
  teamManager: "",
  teamParent: "",
  goalTitle: "",
  goalAmount: 0,
  color1: "#ffffff",
  color2: "#ffffff",
  accent: "#ffffff",
  logoDataUrl: "",
  venmoQr: null,
  zelleQr: null,
};
const RESET_TEAM_STATE = {
  name: "",
  division: "",
  hometown: "",
  coach: "",
  assistantCoach: "",
  teamManager: "",
  teamParent: "",
  goalTitle: "",
  goalAmount: 0,
  color1: "#ffffff",
  color2: "#ffffff",
  accent: "#ffffff",
  logoDataUrl: "",
  venmoQr: null,
  zelleQr: null,
};

const state = {
  players: [],
  events: [],
  team: { ...DEFAULT_TEAM_STATE },
};

const $ = (id) => document.getElementById(id);
const teamForm = $("teamForm");
const editTeamBtn = $("editTeamBtn");
const cancelTeamBtn = $("cancelTeamBtn");
const resetTeamBtn = $("resetTeamBtn");
const teamModal = $("teamModal");
const teamNameEl = $("teamName");
const teamDivisionEl = $("teamDivision");
const teamHometownEl = $("teamHometown");
const coachNameEl = $("coachName");
const assistantCoachNameEl = $("assistantCoachName");
const teamManagerNameEl = $("teamManagerName");
const teamParentNameEl = $("teamParentName");
const teamColor1El = $("teamColor1");
const teamColor2El = $("teamColor2");
const teamAccentEl = $("teamAccentColor");
const teamLogoEl = $("teamLogo");
const logoFileNameEl = $("logoFileName");
const teamVenmoQrBtn = $("teamVenmoQrBtn");
const teamVenmoQrPreviewEl = $("teamVenmoQrPreview");
const teamVenmoQrFileEl = $("teamVenmoQrFile");
const teamZelleQrBtn = $("teamZelleQrBtn");
const teamZelleQrPreviewEl = $("teamZelleQrPreview");
const teamZelleQrFileEl = $("teamZelleQrFile");
const editTeamVenmoQrBtn = $("editTeamVenmoQrBtn");
const editTeamZelleQrBtn = $("editTeamZelleQrBtn");
const appHeaderTitleEl = $("appHeaderTitle");
const appHeaderSubtitleEl = $("appHeaderSubtitle");
const openGoalBtn = $("openGoalBtn");
const goalModal = $("goalModal");
const goalForm = $("goalForm");
const cancelGoalBtn = $("cancelGoalBtn");
const goalTitleInputEl = $("goalTitleInput");
const goalAmountInputEl = $("goalAmountInput");

const openRosterBtn = $("openRosterBtn");
const rosterModal = $("rosterModal");
const cancelRosterBtn = $("cancelRosterBtn");
const rosterModalTitle = $("rosterModalTitle");
const savePlayerBtn = $("savePlayerBtn");
const playerForm = $("playerForm");
const playerNameEl = $("playerName");
const playerNumberEl = $("playerNumber");
const contactNameEl = $("contactName");
const contactPhoneEl = $("contactPhone");
const playerPhotoEl = $("playerPhoto");
const cropPlayerPhotoBtn = $("cropPlayerPhotoBtn");
const playerPhotoFileNameEl = $("playerPhotoFileName");
const playerPhotoPreviewWrap = $("playerPhotoPreviewWrap");
const playerPhotoPreviewImg = $("playerPhotoPreviewImg");
const photoCropModal = $("photoCropModal");
const cropCanvas = $("cropCanvas");
const cropZoomEl = $("cropZoom");
const applyCropBtn = $("applyCropBtn");
const cancelCropBtn = $("cancelCropBtn");
const rosterList = $("rosterList");
const playerCountPill = $("playerCountPill");
const playerDetailModal = $("playerDetailModal");
const detailPlayerPhoto = $("detailPlayerPhoto");
const detailPlayerName = $("detailPlayerName");
const detailPlayerNumber = $("detailPlayerNumber");
const detailContactName = $("detailContactName");
const detailContactPhone = $("detailContactPhone");
const editPlayerFromDetailBtn = $("editPlayerFromDetailBtn");

const openEventBtn = $("openEventBtn");
const eventModal = $("eventModal");
const eventModalTitleEl = $("eventModalTitle");
const cancelEventBtn = $("cancelEventBtn");
const eventForm = $("eventForm");
const saveEventBtn = $("saveEventBtn");
const eventList = $("eventList");
const eventDetailModal = $("eventDetailModal");
const closeEventDetailBtn = $("closeEventDetailBtn");
const eventDetailTitleEl = $("eventDetailTitle");
const eventDetailBlockTitleEl = $("eventDetailBlockTitle");
const eventDetailMetaEl = $("eventDetailMeta");
const eventDetailSummaryEl = $("eventDetailSummary");
const eventDetailLeadEl = $("eventDetailLead");
const eventDetailDrawWrapEl = $("eventDetailDrawWrap");
const eventDetailDrawDateEl = $("eventDetailDrawDate");
const eventDetailDrawCountdownEl = $("eventDetailDrawCountdown");
const eventDetailNotesEl = $("eventDetailNotes");
const eventDetailFlyersEl = $("eventDetailFlyers");
const eventDetailTicketSalesWrap = $("eventDetailTicketSalesWrap");
const eventDetailTicketSummary = $("eventDetailTicketSummary");
const raffleTicketForm = $("raffleTicketForm");
const raffleBuyerNameEl = $("raffleBuyerName");
const raffleBuyerContactEl = $("raffleBuyerContact");
const raffleTicketPackageEl = $("raffleTicketPackage");
const raffleCustomTicketCountWrap = $("raffleCustomTicketCountWrap");
const raffleCustomTicketCountEl = $("raffleCustomTicketCount");
const raffleAmountPaidEl = $("raffleAmountPaid");
const raffleTicketSaveBtn = $("raffleTicketSaveBtn");
const raffleTicketCancelBtn = $("raffleTicketCancelBtn");
const eventDetailTicketSalesList = $("eventDetailTicketSalesList");
const eventDetailScheduleWrap = $("eventDetailScheduleWrap");
const eventDetailScheduleGrid = $("eventDetailScheduleGrid");
const eventDetailEditBtn = $("eventDetailEditBtn");
const eventDetailUpdateRaisedBtn = $("eventDetailUpdateRaisedBtn");
const eventDetailAddFlyerBtn = $("eventDetailAddFlyerBtn");
const eventDetailEndBtn = $("eventDetailEndBtn");
const eventDetailDeleteBtn = $("eventDetailDeleteBtn");
const slotAssignModal = $("slotAssignModal");
const slotAssignBackdrop = $("slotAssignBackdrop");
const slotAssignTitleEl = $("slotAssignTitle");
const slotAssignRosterEl = $("slotAssignRoster");
const slotAssignClearBtn = $("slotAssignClearBtn");
const slotAssignCancelBtn = $("slotAssignCancelBtn");
const slotAssignSaveBtn = $("slotAssignSaveBtn");
const appDialogModal = $("appDialogModal");
const appDialogBackdrop = $("appDialogBackdrop");
const appDialogTitleEl = $("appDialogTitle");
const appDialogMessageEl = $("appDialogMessage");
const appDialogInputWrapEl = $("appDialogInputWrap");
const appDialogInputLabelEl = $("appDialogInputLabel");
const appDialogInputFieldWrapEl = $("appDialogInputFieldWrap");
const appDialogInputEl = $("appDialogInput");
const appDialogInputPrefixEl = $("appDialogInputPrefix");
const appDialogInput2WrapEl = $("appDialogInput2Wrap");
const appDialogInput2LabelEl = $("appDialogInput2Label");
const appDialogInput2FieldWrapEl = $("appDialogInput2FieldWrap");
const appDialogInput2El = $("appDialogInput2");
const appDialogInput2PrefixEl = $("appDialogInput2Prefix");
const appDialogExtraBtn = $("appDialogExtraBtn");
const appDialogTertiaryBtn = $("appDialogTertiaryBtn");
const appDialogConfirmBtn = $("appDialogConfirmBtn");
const appDialogCancelBtn = $("appDialogCancelBtn");
const eventTypeEl = $("eventType");
const eventTitleEl = $("eventTitle");
const eventLeadNameEl = $("eventLeadName");
const eventLeadPhoneEl = $("eventLeadPhone");
const eventLeadEmailEl = $("eventLeadEmail");
const eventFlyersEl = $("eventFlyers");
const eventFlyersFileNameEl = $("eventFlyersFileName");
const eventFlyersPreviewEl = $("eventFlyersPreview");
const eventTypeDetailsEl = $("eventTypeDetails");
const flyerPreviewModal = $("flyerPreviewModal");
const flyerPreviewBackdrop = $("flyerPreviewBackdrop");
const closeFlyerPreviewBtn = $("closeFlyerPreviewBtn");
const flyerPreviewLargeImg = $("flyerPreviewLargeImg");
const flyerPreviewOverlayLogo = $("flyerPreviewOverlayLogo");
const flyerPreviewLargeFrame = $("flyerPreviewLargeFrame");
const flyerPreviewTitle = $("flyerPreviewTitle");
const calendarPopover = $("calendarPopover");
const calendarGrid = $("calendarGrid");
const calendarMonthLabel = $("calendarMonthLabel");
const calendarPrevBtn = $("calendarPrevBtn");
const calendarNextBtn = $("calendarNextBtn");
const calendarHelper = $("calendarHelper");
const calendarDoneBtn = $("calendarDoneBtn");

let editingPlayerIndex = null;
let selectedPlayerIndex = null;
let selectedPlayerAnchor = null;
let pendingPlayerPhotoDataUrl = "";
let rosterPreviewObjectUrl = "";
let calendarAnchorEl = null;
const calendarView = { year: 0, month: 0 };
const calendarDraft = { startDate: "", endDate: "" };
let eventFlyerPreviewUrls = [];
let editingEventId = null;
let editingEventRemovedFlyerIndices = new Set();
let eventFormRenderedType = "";
let selectedEventId = null;
let selectedSlotKey = "";
let slotAssignDraftNames = [];
let appDialogOnConfirm = null;
let appDialogOnCancel = null;
let appDialogOnExtra = null;
let appDialogOnTertiary = null;
let appDialogAllowBackdropClose = true;
let flyerPreviewRequestToken = 0;
let raffleCountdownTimer = 0;
let editingRaffleSaleId = null;
let stateDbPromise = null;
let stateSaveInFlight = false;
let stateSaveQueued = false;
let stateSaveWarned = false;

const cropState = { image: null, zoom: 1, baseScale: 1, offsetX: 0, offsetY: 0, dragging: false, lastX: 0, lastY: 0 };
const PDFJS_WORKER_SRC = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

const escapeHtml = (v) => String(v || "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
const formatMoney = (v) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 }).format(v || 0);
function parseMoneyInput(value) {
  const cleaned = String(value || "").replace(/[^0-9.-]/g, "");
  if (!cleaned || cleaned === "-" || cleaned === "." || cleaned === "-.") return 0;
  const parsed = Number(cleaned);
  return Number.isFinite(parsed) ? parsed : NaN;
}
function formatMoneyTypingValue(value, includeSymbol = true) {
  const raw = String(value || "");
  const negative = raw.trim().startsWith("-") ? "-" : "";
  const cleaned = raw.replace(/[^0-9.]/g, "");
  const parts = cleaned.split(".");
  const wholeRaw = parts.shift() || "";
  const decimalRaw = parts.join("").slice(0, 2);
  const hasDot = cleaned.includes(".");
  const normalizedWhole = wholeRaw.replace(/^0+(?=\d)/, "") || (wholeRaw || decimalRaw ? "0" : "");
  const wholeWithCommas = normalizedWhole ? normalizedWhole.replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "";
  const symbol = includeSymbol && (wholeWithCommas || decimalRaw || hasDot) ? "$" : "";
  const decimalPart = hasDot ? `.${decimalRaw}` : "";
  return `${negative}${symbol}${wholeWithCommas}${decimalPart}`;
}
function formatMoneyInputValue(value) {
  const parsed = parseMoneyInput(value);
  if (!Number.isFinite(parsed) || parsed <= 0) return "";
  return formatMoney(parsed);
}
function applyLiveMoneyFormatting(input, includeSymbol = true) {
  if (!input) return;
  input.inputMode = "decimal";
  input.value = formatMoneyTypingValue(input.value, includeSymbol);
  input.oninput = () => {
    input.value = formatMoneyTypingValue(input.value, includeSymbol);
  };
}
function mapSearchHref(query) {
  const clean = String(query || "").trim();
  if (!clean) return "#";
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clean)}`;
}
function mapLinkHtml(query, label = "") {
  const clean = String(query || "").trim();
  const safeLabel = escapeHtml(label || clean);
  if (!clean) return safeLabel;
  return `<a class="map-link" href="${mapSearchHref(clean)}" target="_blank" rel="noopener noreferrer">${safeLabel}</a>`;
}
function isAddressLike(text) {
  const v = String(text || "").trim();
  if (!v) return false;
  const hasNumberStreet = /\b\d{1,6}\s+[\w.'-]+(?:\s+[\w.'-]+){0,5}\s+(st|street|ave|avenue|rd|road|blvd|boulevard|ln|lane|dr|drive|way|pkwy|parkway|hwy|highway|ct|court|pl|place|trl|trail|cir|circle)\b/i.test(v);
  const hasCityState = /,\s*[\w.' -]+,\s*[A-Z]{2}\b/.test(v);
  return hasNumberStreet || hasCityState;
}
function linkifyAddressLines(text) {
  return String(text || "").split(/\r?\n/).map((line) => {
    const trimmed = line.trim();
    if (!trimmed) return "";
    return isAddressLike(trimmed) ? mapLinkHtml(trimmed) : escapeHtml(line);
  }).join("<br />");
}
function formatPhone(v) {
  const d = String(v || "").replace(/\D/g, "");
  const normalized = d.length === 11 && d.startsWith("1") ? d.slice(1) : d;
  if (normalized.length === 10) return `(${normalized.slice(0, 3)}) ${normalized.slice(3, 6)}-${normalized.slice(6)}`;
  return String(v || "").trim();
}
function getInitials(name, fallback = "P") {
  const initials = String(name || "").split(" ").filter(Boolean).slice(0, 2).map((x) => x[0].toUpperCase()).join("");
  return initials || fallback;
}
function parseIsoDate(iso) {
  const m = String(iso || "").match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!m) return null;
  const y = Number(m[1]);
  const mo = Number(m[2]) - 1;
  const d = Number(m[3]);
  const out = new Date(y, mo, d);
  if (out.getFullYear() !== y || out.getMonth() !== mo || out.getDate() !== d) return null;
  return out;
}
function openStateDb() {
  if (stateDbPromise) return stateDbPromise;
  stateDbPromise = new Promise((resolve, reject) => {
    if (!("indexedDB" in window)) {
      reject(new Error("indexeddb unavailable"));
      return;
    }
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(DB_STORE)) db.createObjectStore(DB_STORE);
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error || new Error("db open fail"));
  });
  return stateDbPromise;
}
function readStateFromDb() {
  return openStateDb().then((db) => new Promise((resolve, reject) => {
    const tx = db.transaction(DB_STORE, "readonly");
    const store = tx.objectStore(DB_STORE);
    const req = store.get(DB_STATE_KEY);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror = () => reject(req.error || new Error("db read fail"));
  }));
}
function writeStateToDb(snapshot) {
  return openStateDb().then((db) => new Promise((resolve, reject) => {
    const tx = db.transaction(DB_STORE, "readwrite");
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error || new Error("db write fail"));
    tx.objectStore(DB_STORE).put(snapshot, DB_STATE_KEY);
  }));
}
function applyParsedState(parsed) {
  if (!parsed || typeof parsed !== "object") return;
  state.players = Array.isArray(parsed.players) ? parsed.players.map((player) => ({
    ...player,
    contactPhone: formatPhone(player?.contactPhone || ""),
  })) : [];
  state.events = Array.isArray(parsed.events) ? parsed.events.map((e) => ({
    ...e,
    type: normalizeType(e.type),
    raisedSoFar: Number(e.raisedSoFar ?? e.amount ?? 0) || 0,
    lead: { name: e.lead?.name || e.contact || "", phone: formatPhone(e.lead?.phone || ""), email: e.lead?.email || "" },
    flyers: Array.isArray(e.flyers) ? e.flyers : [],
    details: e.details || {},
    isLive: e.isLive !== false,
  })) : [];
  syncAllRaisedTotals();
  state.team = { ...DEFAULT_TEAM_STATE, ...state.team, ...(parsed.team || {}) };
}
function resetAllData() {
  state.players = [];
  state.events = [];
  state.team = { ...RESET_TEAM_STATE };
  editingPlayerIndex = null;
  selectedPlayerIndex = null;
  selectedPlayerAnchor = null;
  selectedEventId = null;
  teamNameEl.value = state.team.name;
  teamDivisionEl.value = state.team.division;
  teamHometownEl.value = state.team.hometown;
  coachNameEl.value = state.team.coach;
  assistantCoachNameEl.value = state.team.assistantCoach;
  teamManagerNameEl.value = state.team.teamManager;
  teamParentNameEl.value = state.team.teamParent;
  teamColor1El.value = state.team.color1;
  teamColor2El.value = state.team.color2;
  teamAccentEl.value = state.team.accent;
  logoFileNameEl.textContent = "No file selected";
  teamLogoEl.value = "";
  goalTitleInputEl.value = "";
  goalAmountInputEl.value = "";
  playerForm.reset();
  eventForm.reset();
  eventList.innerHTML = "";
  rosterList.innerHTML = "";
  playerCountPill.textContent = "0 players";
  clearEventFlyerPreviews();
  setRosterPreview("");
  openPlayerDetail(false);
  openEventDetail(false);
  openGoal(false);
  openRoster(false);
  applyTheme();
  renderRoster();
  renderEvents();
  renderGoal();
  renderTeam();
  saveState();
}
async function persistStateSnapshot(snapshot) {
  try {
    await writeStateToDb(snapshot);
    stateSaveWarned = false;
    try { localStorage.removeItem(STORAGE_KEY); } catch (_e) {}
    return;
  } catch (_e) {}
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshot));
    stateSaveWarned = false;
  } catch (_e) {
    if (stateSaveWarned) return;
    stateSaveWarned = true;
    openAppDialog({
      title: "Storage Full",
      message: "Could not save all data. Try using smaller flyer images or removing older flyers/photos.",
      confirmLabel: "OK",
      showCancel: false,
    });
  }
}
function saveState() {
  if (stateSaveInFlight) {
    stateSaveQueued = true;
    return;
  }
  stateSaveInFlight = true;
  const snapshot = JSON.parse(JSON.stringify(state));
  persistStateSnapshot(snapshot).finally(() => {
    stateSaveInFlight = false;
    if (!stateSaveQueued) return;
    stateSaveQueued = false;
    saveState();
  });
}
async function loadState() {
  try {
    const dbState = await readStateFromDb();
    if (dbState && typeof dbState === "object") {
      applyParsedState(dbState);
      return;
    }
  } catch (_e) {}
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    applyParsedState(parsed);
    persistStateSnapshot(JSON.parse(JSON.stringify(state)));
  } catch (_e) {}
}
function formatDateLabel(iso) {
  const d = parseIsoDate(iso);
  if (!d) return "";
  return new Intl.DateTimeFormat("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" }).format(d);
}
function parseDateTimeValue(value) {
  const raw = String(value || "").trim();
  if (!raw) return null;
  const d = new Date(raw);
  if (Number.isNaN(d.getTime())) return null;
  return d;
}
function formatDateTimeLabel(value) {
  const d = parseDateTimeValue(value);
  if (!d) return "TBD";
  return new Intl.DateTimeFormat("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" }).format(d);
}
function formatCountdownFromMs(ms) {
  if (!Number.isFinite(ms)) return "Countdown unavailable";
  if (ms <= 0) return "Drawing time reached";
  const totalSeconds = Math.floor(ms / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${days}d ${hours}h ${minutes}m ${seconds}s remaining`;
}
function getSuggestedEventTitlePlaceholder(type) {
  const normalized = normalizeType(type);
  if (normalized === "canning") return "Weekend Canning Drive";
  if (normalized === "raffle") return "Team Prize Raffle";
  if (normalized === "restaurant_night") return "Dine to Donate Night";
  if (normalized === "merch") return "Team Spirit Wear Sale";
  if (normalized === "other") return "Community Car Wash Fundraiser";
  return "Community Car Wash Fundraiser";
}
function renderRaffleDrawInfo(event) {
  const raffle = normalizeType(event?.type) === "raffle";
  if (!raffle || !eventDetailDrawWrapEl || !eventDetailDrawDateEl || !eventDetailDrawCountdownEl) {
    eventDetailDrawWrapEl?.classList.add("is-hidden");
    return;
  }
  const drawingDate = event?.details?.drawingDate || "";
  const drawingAt = parseDateTimeValue(drawingDate);
  eventDetailDrawDateEl.textContent = formatDateTimeLabel(drawingDate);
  eventDetailDrawCountdownEl.textContent = drawingAt ? formatCountdownFromMs(drawingAt.getTime() - Date.now()) : "Set a drawing date to start countdown";
  eventDetailDrawWrapEl.classList.remove("is-hidden");
}
function stopRaffleCountdown() {
  if (!raffleCountdownTimer) return;
  clearInterval(raffleCountdownTimer);
  raffleCountdownTimer = 0;
}
function startRaffleCountdown() {
  stopRaffleCountdown();
  raffleCountdownTimer = window.setInterval(() => {
    if (eventDetailModal.classList.contains("is-hidden")) {
      stopRaffleCountdown();
      return;
    }
    const event = getEventById(selectedEventId);
    if (!event) {
      stopRaffleCountdown();
      return;
    }
    renderRaffleDrawInfo(event);
  }, 1000);
}
function formatTimeLabel(hhmm) {
  const m = String(hhmm || "").match(/^(\d{2}):(\d{2})$/);
  if (!m) return "";
  const d = new Date(2000, 0, 1, Number(m[1]), Number(m[2]));
  return new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit" }).format(d);
}
function timeToMinutes(hhmm) {
  const m = String(hhmm || "").match(/^(\d{2}):(\d{2})$/);
  if (!m) return -1;
  return (Number(m[1]) * 60) + Number(m[2]);
}
function minutesToTime(mins) {
  const safe = Math.max(0, mins % (24 * 60));
  const h = Math.floor(safe / 60);
  const m = safe % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}
function addHoursToTime(hhmm, hoursToAdd) {
  const m = String(hhmm || "").match(/^(\d{2}):(\d{2})$/);
  if (!m) return "";
  const hours = Number(m[1]);
  const mins = Number(m[2]);
  const total = (hours * 60 + mins + (hoursToAdd * 60)) % (24 * 60);
  const h = Math.floor((total + (24 * 60)) % (24 * 60) / 60);
  const min = total % 60;
  return `${String(h).padStart(2, "0")}:${String(min).padStart(2, "0")}`;
}
function isHttpUrl(value) {
  const v = String(value || "").trim();
  return /^https?:\/\//i.test(v);
}
function isImageLikeUrl(value) {
  const v = String(value || "").trim().toLowerCase();
  return v.startsWith("data:image/") || /\.(png|jpe?g|gif|webp|bmp|svg)(\?.*)?$/.test(v);
}
async function generateQrDataUrl(value) {
  if (!window.QRCode || typeof window.QRCode.toDataURL !== "function") throw new Error("QR generator unavailable");
  return window.QRCode.toDataURL(String(value || "").trim(), {
    errorCorrectionLevel: "H",
    margin: 1,
    width: 1200,
    color: {
      dark: "#000000",
      light: "#ffffff",
    },
  });
}
function getTeamPaymentLogoPath(key) {
  if (key === "venmoQr") return "./venmo-logo-49851.png";
  if (key === "zelleQr") return "./icons8-zelle-480.png";
  return "";
}
async function generateBrandedQrDataUrl(key, value) {
  return generateQrDataUrl(value);
}
function getTeamPaymentAsset(key) {
  const asset = state.team?.[key];
  if (asset && typeof asset === "object") {
    const type = asset.type === "generated" ? "generated" : asset.type === "url" ? "url" : "image";
    const value = String(asset.value || "").trim();
    const sourceUrl = String(asset.sourceUrl || "").trim();
    return value ? { type, value, sourceUrl } : null;
  }
  const legacy = String(asset || "").trim();
  if (!legacy) return null;
  return { type: legacy.startsWith("data:image/") ? "image" : "url", value: legacy, sourceUrl: "" };
}
function setTeamPaymentAsset(key, asset) {
  state.team[key] = asset && asset.value ? {
    type: asset.type === "generated" ? "generated" : asset.type === "url" ? "url" : "image",
    value: asset.value,
    sourceUrl: asset.sourceUrl || "",
  } : null;
}
function renderTeamPaymentCard(key, previewEl) {
  const asset = getTeamPaymentAsset(key);
  const logoPath = getTeamPaymentLogoPath(key);
  if (!previewEl) return;
  previewEl.classList.remove("qr-with-logo");
  if (!asset) {
    previewEl.innerHTML = logoPath ? `<img class="team-payment-empty-logo" src="${logoPath}" alt="" aria-hidden="true" />` : "+";
    return;
  }
  if (asset.type === "generated") {
    previewEl.classList.add("qr-with-logo");
    previewEl.innerHTML = `<img class="team-payment-qr-base" src="${asset.value}" alt="${escapeHtml(key)}" />${logoPath ? `<img class="team-payment-qr-logo" src="${logoPath}" alt="" aria-hidden="true" />` : ""}`;
    return;
  }
  if (asset.type === "image" || isImageLikeUrl(asset.value)) {
    previewEl.innerHTML = `<img src="${asset.value}" alt="${escapeHtml(key)}" />`;
    return;
  }
  previewEl.textContent = "URL";
}
function renderTeamPayments() {
  renderTeamPaymentCard("venmoQr", teamVenmoQrPreviewEl);
  renderTeamPaymentCard("zelleQr", teamZelleQrPreviewEl);
  if (editTeamVenmoQrBtn) editTeamVenmoQrBtn.textContent = getTeamPaymentAsset("venmoQr") ? "Edit Venmo QR" : "Add Venmo QR";
  if (editTeamZelleQrBtn) editTeamZelleQrBtn.textContent = getTeamPaymentAsset("zelleQr") ? "Edit Zelle QR" : "Add Zelle QR";
}
function openTeamPaymentPreview(key, title) {
  const asset = getTeamPaymentAsset(key);
  if (!asset?.value) return;
  const logoPath = asset.type === "generated" ? getTeamPaymentLogoPath(key) : "";
  openFlyerPreview(true, asset.value, title, "image/*", logoPath);
}
function handleTeamPaymentCardClick(key, title, fileEl) {
  if (getTeamPaymentAsset(key)?.value) {
    openTeamPaymentPreview(key, title);
    return;
  }
  promptTeamPaymentChoice(key, title, fileEl);
}
function promptTeamPaymentLink(key, label) {
  const current = getTeamPaymentAsset(key);
  openAppDialog({
    title: label,
    message: "Paste the QR image URL or payment page URL.",
    inputType: "text",
    inputLabel: "URL",
    inputValue: current?.type === "url" ? current.value : "https://www.",
    inputPlaceholder: "https://...",
    confirmLabel: "Save Link",
    cancelLabel: "Cancel",
    allowBackdropClose: false,
    onConfirm: async (value) => {
      const url = String(value || "").trim();
      if (!isHttpUrl(url)) {
        openAppDialog({ title: "Invalid URL", message: "Enter a full URL starting with http:// or https://.", confirmLabel: "OK", showCancel: false });
        return false;
      }
      try {
        const qrDataUrl = await generateBrandedQrDataUrl(key, url);
        setTeamPaymentAsset(key, { type: "generated", value: qrDataUrl, sourceUrl: url });
        renderTeam();
        saveState();
        return true;
      } catch (_e) {
        openAppDialog({ title: "QR Error", message: "Could not generate a QR code for that URL.", confirmLabel: "OK", showCancel: false });
        return false;
      }
    },
  });
}
function promptTeamPaymentChoice(key, label, fileEl) {
  const current = getTeamPaymentAsset(key);
  const isVenmo = key === "venmoQr";
  const defaultPrefix = isVenmo ? "https://account.venmo.com/u/" : "";
  const currentUrl = current?.type === "generated" ? current.sourceUrl : current?.type === "url" ? current.value : "";
  const currentValue = isVenmo && currentUrl.startsWith(defaultPrefix) ? currentUrl.slice(defaultPrefix.length) : (currentUrl || "");
  openAppDialog({
    title: label,
    message: isVenmo ? "Upload a QR image, enter a Venmo username, or paste a full URL below." : "Upload a QR image or paste a URL below.",
    inputType: "text",
    inputLabel: isVenmo ? "Username or URL" : "URL",
    inputPrefix: "",
    inputValue: currentValue,
    inputPlaceholder: isVenmo ? "username or https://account.venmo.com/u/username" : "https://www.example.com",
    confirmLabel: "Save Link",
    extraLabel: "Upload Picture",
    tertiaryLabel: current ? "Clear QR" : "",
    cancelLabel: "Cancel",
    allowBackdropClose: false,
    onConfirm: async (value) => {
      const raw = String(value || "").trim();
      const url = isVenmo && raw && !isHttpUrl(raw) ? `${defaultPrefix}${raw}` : raw;
      if (!isHttpUrl(url)) {
        openAppDialog({ title: "Invalid URL", message: "Enter a full URL starting with http:// or https://.", confirmLabel: "OK", showCancel: false });
        return false;
      }
      try {
        const qrDataUrl = await generateBrandedQrDataUrl(key, url);
        setTeamPaymentAsset(key, { type: "generated", value: qrDataUrl, sourceUrl: url });
        renderTeam();
        saveState();
        return true;
      } catch (_e) {
        openAppDialog({ title: "QR Error", message: "Could not generate a QR code for that URL.", confirmLabel: "OK", showCancel: false });
        return false;
      }
    },
    onCancel: () => {
      return true;
    },
    onExtra: () => {
      fileEl?.click();
      return true;
    },
    onTertiary: () => {
      setTeamPaymentAsset(key, null);
      renderTeam();
      saveState();
      return true;
    },
  });
}
function normalizeAssignedNames(value) {
  if (Array.isArray(value)) {
    const unique = new Set();
    value.forEach((name) => {
      const clean = String(name || "").trim();
      if (clean) unique.add(clean);
    });
    return Array.from(unique);
  }
  const single = String(value || "").trim();
  return single ? [single] : [];
}
function getSlotAssignedNames(assignments, slotKey) {
  if (!assignments || typeof assignments !== "object") return [];
  return normalizeAssignedNames(assignments[slotKey]);
}
function getSlotRaisedAmount(slotTotals, slotKey) {
  if (!slotTotals || typeof slotTotals !== "object") return 0;
  const n = Number(slotTotals[slotKey]);
  return Number.isFinite(n) && n > 0 ? n : 0;
}
function getCanningSlotTotalsSum(details) {
  const slotTotals = details?.slotTotals && typeof details.slotTotals === "object" ? details.slotTotals : {};
  return Object.values(slotTotals).reduce((sum, value) => {
    const n = Number(value);
    if (!Number.isFinite(n) || n <= 0) return sum;
    return sum + n;
  }, 0);
}
function syncCanningRaisedForEvent(event) {
  if (!event || normalizeType(event.type) !== "canning") return false;
  const next = getCanningSlotTotalsSum(event.details || {});
  const prev = Number(event.raisedSoFar) || 0;
  event.raisedSoFar = next;
  return next !== prev;
}
function getRaffleTicketPricing(details = {}) {
  const pricing = details?.ticketPricing && typeof details.ticketPricing === "object" ? details.ticketPricing : {};
  const one = Number(pricing.one);
  const five = Number(pricing.five);
  const ten = Number(pricing.ten);
  const custom = Number(pricing.custom);
  return {
    one: Number.isFinite(one) && one >= 0 ? one : 0,
    five: Number.isFinite(five) && five >= 0 ? five : 0,
    ten: Number.isFinite(ten) && ten >= 0 ? ten : 0,
    custom: Number.isFinite(custom) && custom >= 0 ? custom : 0,
  };
}
function getRaffleTicketSales(details = {}) {
  return Array.isArray(details?.ticketSales) ? details.ticketSales.map((sale) => ({
    id: sale?.id || crypto.randomUUID(),
    name: sale?.name || "",
    contact: sale?.contact || "",
    packageType: sale?.packageType === "custom" ? "custom" : String(sale?.packageType || "1"),
    ticketCount: Math.max(1, Number(sale?.ticketCount) || 1),
    amountPaid: Number(sale?.amountPaid) || 0,
    createdAt: sale?.createdAt || new Date().toISOString(),
  })) : [];
}
function getRafflePackagePrice(pricing, packageType) {
  if (packageType === "5") return Number(pricing?.five) || 0;
  if (packageType === "10") return Number(pricing?.ten) || 0;
  if (packageType === "custom") return Number(pricing?.custom) || 0;
  return Number(pricing?.one) || 0;
}
function getRafflePackageTicketCount(packageType, customCount = 1) {
  if (packageType === "5") return 5;
  if (packageType === "10") return 10;
  if (packageType === "custom") return Math.max(1, Number(customCount) || 1);
  return 1;
}
function getDefaultRaffleAmountPaid(pricing, packageType, customCount = 1) {
  const price = getRafflePackagePrice(pricing, packageType);
  const count = getRafflePackageTicketCount(packageType, customCount);
  return packageType === "custom" ? price * count : price;
}
function getRaffleTicketTotals(details = {}) {
  const ticketSales = getRaffleTicketSales(details);
  return ticketSales.reduce((acc, sale) => {
    acc.buyers += 1;
    acc.tickets += Math.max(1, Number(sale.ticketCount) || 1);
    acc.amount += Number(sale.amountPaid) || 0;
    return acc;
  }, { buyers: 0, tickets: 0, amount: 0 });
}
function syncRaffleRaisedForEvent(event) {
  if (!event || normalizeType(event.type) !== "raffle") return false;
  const details = event.details && typeof event.details === "object" ? event.details : {};
  details.ticketPricing = getRaffleTicketPricing(details);
  details.ticketSales = getRaffleTicketSales(details);
  event.details = details;
  const next = getRaffleTicketTotals(details).amount;
  const prev = Number(event.raisedSoFar) || 0;
  event.raisedSoFar = next;
  return next !== prev;
}
function syncAllRaisedTotals() {
  state.events.forEach((event) => {
    syncCanningRaisedForEvent(event);
    syncRaffleRaisedForEvent(event);
  });
}
function getIsoDateRange(startIso, endIso) {
  const start = parseIsoDate(startIso);
  const end = parseIsoDate(endIso);
  if (!start || !end || end < start) return [];
  const out = [];
  const cur = new Date(start);
  while (cur <= end) {
    out.push(`${cur.getFullYear()}-${String(cur.getMonth() + 1).padStart(2, "0")}-${String(cur.getDate()).padStart(2, "0")}`);
    cur.setDate(cur.getDate() + 1);
  }
  return out;
}
function normalizeType(type) {
  const v = String(type || "").toLowerCase().trim();
  return ({ canning: "canning", raffle: "raffle", merch: "merch", restaurant_night: "restaurant_night", other: "other", "restaurant night": "restaurant_night", "50/50": "raffle" }[v] || "other");
}
function typeLabel(type) {
  return ({ canning: "Canning", raffle: "Raffle", merch: "Merch", restaurant_night: "Restaurant Night", other: "Other" }[normalizeType(type)] || "Other");
}
function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(r.result || "");
    r.onerror = () => reject(new Error("read fail"));
    r.readAsDataURL(file);
  });
}
function loadImageFromSrc(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("image load fail"));
    img.src = src;
  });
}
function getPdfJsLib() {
  const lib = window.pdfjsLib;
  if (!lib || typeof lib.getDocument !== "function") return null;
  if (lib.GlobalWorkerOptions && !lib.GlobalWorkerOptions.workerSrc) lib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER_SRC;
  return lib;
}
function dataUrlToArrayBuffer(dataUrl) {
  const value = String(dataUrl || "");
  const match = value.match(/^data:.*?;base64,(.+)$/);
  if (!match) throw new Error("invalid data url");
  const binary = atob(match[1]);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
  return bytes.buffer;
}
async function renderPdfFirstPageDataUrlFromArrayBuffer(arrayBuffer) {
  const lib = getPdfJsLib();
  if (!lib) throw new Error("pdfjs unavailable");
  const loadingTask = lib.getDocument({ data: arrayBuffer });
  const pdf = await loadingTask.promise;
  const page = await pdf.getPage(1);
  const baseViewport = page.getViewport({ scale: 1 });
  const maxSide = 1800;
  const scale = Math.min(2.5, Math.max(1, maxSide / Math.max(baseViewport.width, baseViewport.height)));
  const viewport = page.getViewport({ scale });
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("canvas unavailable");
  canvas.width = Math.ceil(viewport.width);
  canvas.height = Math.ceil(viewport.height);
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  await page.render({ canvasContext: ctx, viewport }).promise;
  return canvas.toDataURL("image/jpeg", 0.92);
}
async function convertPdfSrcToPreviewImage(src) {
  let arrayBuffer;
  if (String(src || "").startsWith("data:")) {
    arrayBuffer = dataUrlToArrayBuffer(src);
  } else {
    const response = await fetch(src);
    arrayBuffer = await response.arrayBuffer();
  }
  return renderPdfFirstPageDataUrlFromArrayBuffer(arrayBuffer);
}
function isPdfLike(mime, src) {
  const m = String(mime || "").toLowerCase();
  const s = String(src || "").toLowerCase();
  return m.includes("pdf") || s.startsWith("data:application/pdf") || s.endsWith(".pdf");
}
async function resolveFlyerPreviewImageSrc(src, mime) {
  if (!src) return "";
  if (String(mime || "").startsWith("image/")) return src;
  if (isPdfLike(mime, src)) {
    try {
      return await convertPdfSrcToPreviewImage(src);
    } catch (_e) {
      return "";
    }
  }
  return "";
}
function renderEventFlyerThumb(button, src, mime, name) {
  const isPdf = isPdfLike(mime, src);
  button.className = "event-flyer-preview-btn";
  button.innerHTML = `<div class="event-flyer-preview-media"><div class="event-flyer-preview-placeholder">${isPdf ? "PDF" : "Preview"}</div>${isPdf ? '<span class="event-flyer-file-badge">PDF</span>' : ""}</div><span>${escapeHtml(name)}</span>`;
  resolveFlyerPreviewImageSrc(src, mime).then((imageSrc) => {
    if (!imageSrc || !button.isConnected) return;
    const mediaEl = button.querySelector(".event-flyer-preview-media");
    if (!mediaEl) return;
    mediaEl.innerHTML = `${isPdf ? '<span class="event-flyer-file-badge">PDF</span>' : ""}<img src="${imageSrc}" alt="${escapeHtml(name)} preview" />`;
  }).catch(() => {});
}
async function readEventFlyerDataUrl(file) {
  const isPdf = String(file?.type || "").toLowerCase().includes("pdf");
  if (isPdf) {
    try {
      const bytes = await file.arrayBuffer();
      return await renderPdfFirstPageDataUrlFromArrayBuffer(bytes);
    } catch (_e) {
      return readFileAsDataUrl(file);
    }
  }
  const isImage = String(file?.type || "").startsWith("image/");
  if (!isImage) return readFileAsDataUrl(file);
  const src = await readFileAsDataUrl(file);
  const img = await loadImageFromSrc(src);
  const maxSide = 1600;
  const scale = Math.min(1, maxSide / Math.max(img.width, img.height));
  const w = Math.max(1, Math.round(img.width * scale));
  const h = Math.max(1, Math.round(img.height * scale));
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (!ctx) return src;
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, w, h);
  ctx.drawImage(img, 0, 0, w, h);
  return canvas.toDataURL("image/jpeg", 0.84);
}

function applyTheme() {
  const clean = (hex, fallback) => (String(hex || "").length === 7 ? hex : fallback).replace("#", "");
  const c1 = clean(state.team.color1, "#17335f");
  const c2 = clean(state.team.color2, "#224a85");
  const ca = clean(state.team.accent, "#9bb4d8");
  document.documentElement.style.setProperty("--team-color1", `#${c1}`);
  document.documentElement.style.setProperty("--team-color2", `#${c2}`);
  document.documentElement.style.setProperty("--team-accent", `#${ca}`);
  document.documentElement.style.setProperty("--team1-rgb", `${parseInt(c1.slice(0, 2), 16)}, ${parseInt(c1.slice(2, 4), 16)}, ${parseInt(c1.slice(4, 6), 16)}`);
  document.documentElement.style.setProperty("--team2-rgb", `${parseInt(c2.slice(0, 2), 16)}, ${parseInt(c2.slice(2, 4), 16)}, ${parseInt(c2.slice(4, 6), 16)}`);
  document.documentElement.style.setProperty("--team-accent-rgb", `${parseInt(ca.slice(0, 2), 16)}, ${parseInt(ca.slice(2, 4), 16)}, ${parseInt(ca.slice(4, 6), 16)}`);
}

function anyModalOpen() { return !teamModal.classList.contains("is-hidden") || !goalModal.classList.contains("is-hidden") || !rosterModal.classList.contains("is-hidden") || !eventModal.classList.contains("is-hidden") || !eventDetailModal.classList.contains("is-hidden") || !slotAssignModal.classList.contains("is-hidden") || !appDialogModal.classList.contains("is-hidden") || !photoCropModal.classList.contains("is-hidden") || !flyerPreviewModal.classList.contains("is-hidden"); }
function syncBodyLock() { document.body.classList.toggle("modal-open", anyModalOpen()); }
function openTeam(open) { if (open) { teamNameEl.value = state.team.name; teamDivisionEl.value = state.team.division || ""; teamHometownEl.value = state.team.hometown || ""; coachNameEl.value = state.team.coach; assistantCoachNameEl.value = state.team.assistantCoach || ""; teamManagerNameEl.value = state.team.teamManager || ""; teamParentNameEl.value = state.team.teamParent || ""; teamColor1El.value = state.team.color1; teamColor2El.value = state.team.color2; teamAccentEl.value = state.team.accent; logoFileNameEl.textContent = "No file selected"; teamLogoEl.value = ""; } teamModal.classList.toggle("is-hidden", !open); syncBodyLock(); }
function openGoal(open) {
  if (open) {
    goalTitleInputEl.value = state.team.goalTitle || "";
    goalAmountInputEl.value = formatMoneyInputValue(state.team.goalAmount);
  }
  goalModal.classList.toggle("is-hidden", !open);
  syncBodyLock();
}
function openRoster(open) { rosterModal.classList.toggle("is-hidden", !open); syncBodyLock(); }
function openEvent(open) { eventModal.classList.toggle("is-hidden", !open); syncBodyLock(); }
function openEventDetail(open) {
  eventDetailModal.classList.toggle("is-hidden", !open);
  if (!open) {
    selectedEventId = null;
    resetRaffleTicketForm();
    openSlotAssign(false);
    stopRaffleCountdown();
  }
  syncBodyLock();
}
function openSlotAssign(open) {
  slotAssignModal.classList.toggle("is-hidden", !open);
  if (!open) {
    selectedSlotKey = "";
    slotAssignDraftNames = [];
  }
  syncBodyLock();
}
function syncDialogInputPrefixSpacing(wrapEl, prefixEl, inputEl) {
  if (!wrapEl || !prefixEl || !inputEl) return;
  if (!wrapEl.classList.contains("has-prefix")) {
    inputEl.style.paddingLeft = "";
    return;
  }
  const prefixWidth = Math.ceil(prefixEl.getBoundingClientRect().width);
  inputEl.style.paddingLeft = `${prefixWidth + 20}px`;
}
function openAppDialog(config) {
  appDialogTitleEl.textContent = config?.title || "Message";
  appDialogMessageEl.textContent = config?.message || "";
  const inputMode = config?.inputType === "number" || config?.inputType === "text";
  const input2Mode = config?.input2Type === "number" || config?.input2Type === "text";
  const inputPrefix = inputMode ? (config?.inputPrefix || "") : "";
  const input2Prefix = input2Mode ? (config?.input2Prefix || "") : "";
  appDialogInputWrapEl.classList.toggle("is-hidden", !inputMode);
  if (appDialogInputLabelEl) appDialogInputLabelEl.textContent = config?.inputLabel || "Value";
  if (appDialogInputFieldWrapEl) appDialogInputFieldWrapEl.classList.toggle("has-prefix", !!inputPrefix);
  if (appDialogInputPrefixEl) appDialogInputPrefixEl.textContent = inputPrefix;
  appDialogInputEl.type = inputPrefix === "$" ? "text" : (config?.inputType || "text");
  appDialogInputEl.value = inputPrefix === "$" ? formatMoneyTypingValue(config?.inputValue, false) : (config?.inputValue ?? "");
  appDialogInputEl.inputMode = inputPrefix === "$" || config?.inputType === "number" ? "decimal" : "text";
  appDialogInputEl.placeholder = config?.inputPlaceholder || "";
  appDialogInputEl.oninput = null;
  appDialogInput2WrapEl.classList.toggle("is-hidden", !input2Mode);
  if (appDialogInput2LabelEl) appDialogInput2LabelEl.textContent = config?.input2Label || "Value";
  if (appDialogInput2FieldWrapEl) appDialogInput2FieldWrapEl.classList.toggle("has-prefix", !!input2Prefix);
  if (appDialogInput2PrefixEl) appDialogInput2PrefixEl.textContent = input2Prefix;
  appDialogInput2El.type = input2Prefix === "$" ? "text" : (config?.input2Type || "text");
  appDialogInput2El.value = input2Prefix === "$" ? formatMoneyTypingValue(config?.input2Value, false) : (config?.input2Value ?? "");
  appDialogInput2El.inputMode = input2Prefix === "$" || config?.input2Type === "number" ? "decimal" : "text";
  appDialogInput2El.placeholder = config?.input2Placeholder || "";
  appDialogInput2El.oninput = null;
  if (inputPrefix === "$") applyLiveMoneyFormatting(appDialogInputEl, false);
  if (input2Prefix === "$") applyLiveMoneyFormatting(appDialogInput2El, false);
  appDialogConfirmBtn.textContent = config?.confirmLabel || "OK";
  appDialogCancelBtn.textContent = config?.cancelLabel || "Cancel";
  if (appDialogExtraBtn) {
    appDialogExtraBtn.textContent = config?.extraLabel || "More";
    appDialogExtraBtn.classList.toggle("is-hidden", !config?.extraLabel);
  }
  if (appDialogTertiaryBtn) {
    appDialogTertiaryBtn.textContent = config?.tertiaryLabel || "Other";
    appDialogTertiaryBtn.classList.toggle("is-hidden", !config?.tertiaryLabel);
  }
  appDialogCancelBtn.classList.toggle("is-hidden", config?.showCancel === false);
  appDialogOnConfirm = typeof config?.onConfirm === "function" ? config.onConfirm : null;
  appDialogOnCancel = typeof config?.onCancel === "function" ? config.onCancel : null;
  appDialogOnExtra = typeof config?.onExtra === "function" ? config.onExtra : null;
  appDialogOnTertiary = typeof config?.onTertiary === "function" ? config.onTertiary : null;
  appDialogAllowBackdropClose = config?.allowBackdropClose !== false;
  appDialogModal.classList.remove("is-hidden");
  syncBodyLock();
  syncDialogInputPrefixSpacing(appDialogInputFieldWrapEl, appDialogInputPrefixEl, appDialogInputEl);
  syncDialogInputPrefixSpacing(appDialogInput2FieldWrapEl, appDialogInput2PrefixEl, appDialogInput2El);
  if (inputMode) appDialogInputEl.focus();
  else if (input2Mode) appDialogInput2El.focus();
}
function closeAppDialog(runCancel = false) {
  if (runCancel && appDialogOnCancel) appDialogOnCancel();
  appDialogOnConfirm = null;
  appDialogOnCancel = null;
  appDialogOnExtra = null;
  appDialogOnTertiary = null;
  appDialogAllowBackdropClose = true;
  appDialogModal.classList.add("is-hidden");
  syncBodyLock();
}
function openCrop(open) { photoCropModal.classList.toggle("is-hidden", !open); syncBodyLock(); }
function openPlayerDetail(open) { playerDetailModal.classList.toggle("is-hidden", !open); }
async function openFlyerPreview(open, src = "", title = "Flyer Preview", mime = "image/*", overlayLogoSrc = "") {
  if (open) {
    const requestToken = ++flyerPreviewRequestToken;
    if (flyerPreviewOverlayLogo) {
      flyerPreviewOverlayLogo.classList.toggle("is-hidden", !overlayLogoSrc);
      if (overlayLogoSrc) flyerPreviewOverlayLogo.src = overlayLogoSrc;
      else flyerPreviewOverlayLogo.removeAttribute("src");
    }
    flyerPreviewLargeFrame.removeAttribute("src");
    flyerPreviewLargeFrame.classList.add("is-hidden");
    flyerPreviewLargeImg.classList.remove("is-hidden");
    flyerPreviewLargeImg.removeAttribute("src");
    flyerPreviewTitle.textContent = title || "Flyer Preview";
    flyerPreviewModal.classList.remove("is-hidden");
    syncBodyLock();
    const imageSrc = await resolveFlyerPreviewImageSrc(src, mime);
    if (requestToken !== flyerPreviewRequestToken || flyerPreviewModal.classList.contains("is-hidden")) return;
    if (imageSrc) flyerPreviewLargeImg.src = imageSrc;
  } else {
    flyerPreviewRequestToken += 1;
    flyerPreviewLargeImg.removeAttribute("src");
    flyerPreviewLargeFrame.removeAttribute("src");
    flyerPreviewLargeImg.classList.remove("is-hidden");
    flyerPreviewLargeFrame.classList.add("is-hidden");
    if (flyerPreviewOverlayLogo) {
      flyerPreviewOverlayLogo.classList.add("is-hidden");
      flyerPreviewOverlayLogo.removeAttribute("src");
    }
    flyerPreviewTitle.textContent = "Flyer Preview";
  }
  if (!open) flyerPreviewModal.classList.toggle("is-hidden", !open);
  syncBodyLock();
}

function renderTeam() {
  $("coachNameValue").textContent = state.team.coach || "Not set";
  const assistantCoach = String(state.team.assistantCoach || "").trim();
  const teamManager = String(state.team.teamManager || "").trim();
  const teamParent = String(state.team.teamParent || "").trim();
  const teamName = String(state.team.name || "").trim();
  const teamDivision = String(state.team.division || "").trim();
  const teamHometown = String(state.team.hometown || "").trim();
  const subtitleParts = [teamDivision, teamHometown].filter(Boolean);
  if (appHeaderTitleEl) appHeaderTitleEl.textContent = teamName || "TeamFund";
  if (appHeaderSubtitleEl) appHeaderSubtitleEl.textContent = subtitleParts.length ? subtitleParts.join(" • ") : "Team-first fundraising dashboard";
  $("assistantCoachValue").textContent = assistantCoach || "Not set";
  $("teamManagerValue").textContent = teamManager || "Not set";
  $("teamParentValue").textContent = teamParent || "Not set";
  $("assistantCoachRow").classList.toggle("is-hidden", !assistantCoach);
  $("teamManagerRow").classList.toggle("is-hidden", !teamManager);
  $("teamParentRow").classList.toggle("is-hidden", !teamParent);
  renderTeamPayments();
  const headerLogoLayer = $("headerLogoLayer");
  const headerLogo = $("headerLogo");
  const logoWatermark = $("logoWatermark");
  if (state.team.logoDataUrl) {
    headerLogo.src = state.team.logoDataUrl;
    logoWatermark.src = state.team.logoDataUrl;
    headerLogoLayer.classList.remove("is-hidden");
    logoWatermark.classList.remove("is-hidden");
  } else {
    headerLogo.removeAttribute("src");
    logoWatermark.removeAttribute("src");
    headerLogoLayer.classList.add("is-hidden");
    logoWatermark.classList.add("is-hidden");
  }
}

function getTotalRaised() { return state.events.reduce((sum, e) => sum + (Number(e.raisedSoFar) || 0), 0); }
function getTopMoneyMaker() { return state.events.length ? [...state.events].sort((a, b) => (b.raisedSoFar || 0) - (a.raisedSoFar || 0))[0] : null; }
function renderGoal() {
  syncAllRaisedTotals();
  const total = getTotalRaised();
  const goal = Number(state.team.goalAmount) || 0;
  const percent = goal > 0 ? (total / goal) * 100 : 0;
  $("goalHeaderTitle").textContent = state.team.goalTitle || "Goal";
  $("goalRemainingLine").textContent = `${formatMoney(total)} / ${formatMoney(goal)}`;
  $("progressBar").style.width = `${Math.min(percent, 100)}%`;
  $("percentPill").textContent = `${Math.round(percent)}%`;
  const top = getTopMoneyMaker();
  $("topMoneyMaker").textContent = top ? `${top.title} (${formatMoney(top.raisedSoFar)})` : "No events yet";
}

function setRosterPreview(src) {
  if (!src) {
    if (rosterPreviewObjectUrl) { URL.revokeObjectURL(rosterPreviewObjectUrl); rosterPreviewObjectUrl = ""; }
    playerPhotoPreviewWrap.classList.add("is-hidden");
    playerPhotoPreviewImg.removeAttribute("src");
    return;
  }
  playerPhotoPreviewImg.src = src;
  playerPhotoPreviewWrap.classList.remove("is-hidden");
}
function fillPlayerForm(index) {
  const p = state.players[index];
  if (!p) return;
  editingPlayerIndex = index;
  rosterModalTitle.textContent = "Edit Player";
  savePlayerBtn.textContent = "Save Changes";
  playerNameEl.value = p.name || "";
  playerNumberEl.value = p.number || "";
  contactNameEl.value = p.contactName || "";
  contactPhoneEl.value = p.contactPhone || "";
  playerPhotoEl.value = "";
  playerPhotoFileNameEl.textContent = p.photoDataUrl ? "Current photo on file" : "No file selected";
  pendingPlayerPhotoDataUrl = "";
  setRosterPreview(p.photoDataUrl || "");
}
function renderRoster() {
  rosterList.innerHTML = "";
  state.players.forEach((p, idx) => {
    const initials = getInitials(p.name, "P");
    const avatar = p.photoDataUrl ? `<img src="${p.photoDataUrl}" alt="${escapeHtml(p.name)} photo" />` : `<span>${initials}</span>`;
    const li = document.createElement("li");
    li.className = "player-pill";
    li.innerHTML = `<button type="button" class="player-pill-head"><span class="player-avatar">${avatar}</span><strong>${escapeHtml(p.name || "")}${p.number ? ` #${escapeHtml(p.number)}` : ""}</strong></button>`;
    li.querySelector(".player-pill-head").addEventListener("click", (e) => {
      selectedPlayerIndex = idx;
      selectedPlayerAnchor = e.currentTarget;
      detailPlayerPhoto.innerHTML = p.photoDataUrl ? `<img src="${p.photoDataUrl}" alt="${escapeHtml(p.name)} large photo" />` : `<span>${initials}</span>`;
      detailPlayerName.textContent = p.name || "-";
      detailPlayerNumber.textContent = p.number ? `#${p.number}` : "-";
      detailContactName.textContent = p.contactName || "-";
      detailContactPhone.textContent = formatPhone(p.contactPhone || "");
      openPlayerDetail(true);
      positionPlayerDetail();
    });
    rosterList.appendChild(li);
  });
  playerCountPill.textContent = `${state.players.length} player${state.players.length === 1 ? "" : "s"}`;
  updateRosterListScrollState();
}
function positionPlayerDetail() {
  if (playerDetailModal.classList.contains("is-hidden") || !selectedPlayerAnchor) return;
  const a = selectedPlayerAnchor.getBoundingClientRect();
  const p = playerDetailModal.getBoundingClientRect();
  const m = 12;
  let left = a.right + 10;
  let top = a.top;
  if (left + p.width > window.innerWidth - m) left = a.left - p.width - 10;
  if (left < m) left = m;
  if (top + p.height > window.innerHeight - m) top = window.innerHeight - p.height - m;
  if (top < m) top = m;
  playerDetailModal.style.left = `${left}px`;
  playerDetailModal.style.top = `${top}px`;
}

function updateEventListScrollState() {
  if (!eventList) return;
  const items = Array.from(eventList.children);
  if (items.length <= 10) {
    eventList.classList.remove("has-scroll");
    eventList.style.maxHeight = "";
    return;
  }
  const rowGap = parseFloat(window.getComputedStyle(eventList).rowGap || "0") || 0;
  const visibleItems = items.slice(0, 10);
  const visibleHeight = visibleItems.reduce((sum, item) => sum + item.getBoundingClientRect().height, 0) + (rowGap * Math.max(0, visibleItems.length - 1));
  eventList.classList.add("has-scroll");
  eventList.style.maxHeight = `${Math.ceil(visibleHeight)}px`;
}

function updateRosterListScrollState() {
  if (!rosterList) return;
  const items = Array.from(rosterList.children);
  if (items.length <= 5) {
    rosterList.classList.remove("has-scroll");
    rosterList.style.maxHeight = "";
    return;
  }
  const rowGap = parseFloat(window.getComputedStyle(rosterList).rowGap || "0") || 0;
  const visibleItems = items.slice(0, 5);
  const visibleHeight = visibleItems.reduce((sum, item) => sum + item.getBoundingClientRect().height, 0) + (rowGap * Math.max(0, visibleItems.length - 1));
  rosterList.classList.add("has-scroll");
  rosterList.style.maxHeight = `${Math.ceil(visibleHeight)}px`;
}

function positionCalendarPopover() {
  if (calendarPopover.classList.contains("is-hidden") || !calendarAnchorEl) return;
  const r = calendarAnchorEl.getBoundingClientRect();
  const pop = calendarPopover.getBoundingClientRect();
  const margin = 10;
  let left = Math.min(Math.max(r.left, margin), window.innerWidth - pop.width - margin);
  let top = r.bottom + 8;
  if (top + pop.height > window.innerHeight - margin) top = Math.max(margin, r.top - pop.height - 8);
  calendarPopover.style.left = `${left}px`;
  calendarPopover.style.top = `${top}px`;
}
function closeCalendarPopover() {
  calendarPopover.classList.add("is-hidden");
  calendarAnchorEl = null;
}
function updateCalendarHelperText() {
  if (!calendarDraft.startDate) { calendarHelper.textContent = "Select a start date."; return; }
  if (!calendarDraft.endDate) { calendarHelper.textContent = "Select optional end date."; return; }
  calendarHelper.textContent = "Dates selected. Click Done.";
}
function renderCalendarGrid() {
  const first = new Date(calendarView.year, calendarView.month, 1);
  const startWeekday = first.getDay();
  const days = new Date(calendarView.year, calendarView.month + 1, 0).getDate();
  calendarMonthLabel.textContent = new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(first);
  calendarGrid.innerHTML = "";
  for (let i = 0; i < startWeekday; i += 1) {
    const pad = document.createElement("span");
    pad.className = "calendar-pad";
    calendarGrid.appendChild(pad);
  }
  for (let day = 1; day <= days; day += 1) {
    const iso = `${calendarView.year}-${String(calendarView.month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "calendar-day-btn";
    if (calendarDraft.startDate === iso) btn.classList.add("is-selected", "is-start");
    if (calendarDraft.endDate === iso) btn.classList.add("is-selected", "is-end");
    if (calendarDraft.startDate && calendarDraft.endDate && iso > calendarDraft.startDate && iso < calendarDraft.endDate) btn.classList.add("is-in-range");
    btn.dataset.iso = iso;
    btn.textContent = String(day);
    calendarGrid.appendChild(btn);
  }
  updateCalendarHelperText();
}
function openCalendarPopover(anchorEl) {
  if (!anchorEl) return;
  calendarAnchorEl = anchorEl;
  calendarDraft.startDate = $("canningStartDate")?.value || "";
  calendarDraft.endDate = $("canningEndDate")?.value || "";
  const base = parseIsoDate(calendarDraft.startDate) || new Date();
  calendarView.year = base.getFullYear();
  calendarView.month = base.getMonth();
  renderCalendarGrid();
  calendarPopover.classList.remove("is-hidden");
  positionCalendarPopover();
}
function renderCanningDateRangeDisplay() {
  const start = $("canningStartDate")?.value || "";
  const end = $("canningEndDate")?.value || "";
  const display = $("canningDateRangeDisplay");
  if (!display) return;
  if (!start) { display.value = ""; return; }
  display.value = end ? `${formatDateLabel(start)} - ${formatDateLabel(end)}` : formatDateLabel(start);
}
function renderCanningPerDayTimes(initialDailyTimes = null) {
  const wrap = $("canningPerDayWrap");
  if (!wrap) return;
  const startDate = $("canningStartDate")?.value || "";
  const endDate = $("canningEndDate")?.value || "";
  const dates = getIsoDateRange(startDate, endDate);
  const baseTimeWrap = $("canningBaseTimeWrap");
  if (dates.length <= 1) {
    if (baseTimeWrap) baseTimeWrap.classList.remove("is-hidden");
    wrap.classList.add("is-hidden");
    wrap.innerHTML = "";
    return;
  }
  if (baseTimeWrap) baseTimeWrap.classList.add("is-hidden");
  const existing = {};
  wrap.querySelectorAll("[data-canning-day-row]").forEach((row) => {
    const date = row.getAttribute("data-date") || "";
    if (!date) return;
    existing[date] = {
      startTime: row.querySelector(".canning-day-start")?.value || "",
      endTime: row.querySelector(".canning-day-end")?.value || "",
    };
  });
  const defaults = {
    startTime: $("canningStartTime")?.value || "",
    endTime: $("canningEndTime")?.value || "",
  };
  const sourceDaily = initialDailyTimes && typeof initialDailyTimes === "object" ? initialDailyTimes : {};
  wrap.classList.remove("is-hidden");
  wrap.innerHTML = `<label class="field-label">Per-day Times</label><p class="canning-day-help">Multiple dates selected. Set start/end for each day.</p><div class="stack-sm" id="canningPerDayList"></div>`;
  const list = $("canningPerDayList");
  if (!list) return;
  dates.forEach((dateIso) => {
    const preferred = existing[dateIso] || sourceDaily[dateIso] || defaults;
    const row = document.createElement("div");
    row.className = "canning-day-row";
    row.setAttribute("data-canning-day-row", "1");
    row.setAttribute("data-date", dateIso);
    row.innerHTML = `<div class="canning-day-date">${escapeHtml(formatDateLabel(dateIso))}</div><div class="split"><div class="stack-sm"><label class="field-label" for="dayStart_${dateIso}">Start</label><input id="dayStart_${dateIso}" class="canning-day-start" type="time" value="${escapeHtml(preferred.startTime || "")}" /></div><div class="stack-sm"><label class="field-label" for="dayEnd_${dateIso}">End</label><input id="dayEnd_${dateIso}" class="canning-day-end" type="time" value="${escapeHtml(preferred.endTime || "")}" /></div></div>`;
    list.appendChild(row);
  });
}
function applyCalendarSelection() {
  const startInput = $("canningStartDate");
  const endInput = $("canningEndDate");
  if (!startInput || !endInput) return;
  startInput.value = calendarDraft.startDate;
  endInput.value = calendarDraft.endDate;
  renderCanningDateRangeDisplay();
  renderCanningPerDayTimes();
}
function normalizeRafflePrizes(value) {
  if (Array.isArray(value)) {
    return value.map((item) => ({
      title: String(item?.title || "").trim(),
      value: String(item?.value ?? "").trim(),
    })).filter((item) => item.title || item.value);
  }
  const legacy = String(value || "").trim();
  if (!legacy) return [];
  return [{ title: legacy, value: "" }];
}
function formatRafflePrizesText(prizes) {
  const list = normalizeRafflePrizes(prizes);
  if (!list.length) return "Prizes TBD";
  return list.map((item) => {
    const title = item.title || "Prize";
    const valueNum = Number(item.value);
    const valueText = item.value !== "" && Number.isFinite(valueNum) ? ` (${formatMoney(valueNum)})` : "";
    return `${title}${valueText}`;
  }).join(", ");
}
function formatRafflePrizesHtml(prizes) {
  const list = normalizeRafflePrizes(prizes);
  if (!list.length) return `<div class="raffle-prize-showcase"><p class="raffle-prize-empty">No prizes added</p></div>`;
  const total = list.reduce((sum, item) => {
    const n = Number(item.value);
    return Number.isFinite(n) && n > 0 ? sum + n : sum;
  }, 0);
  const itemsHtml = list.map((item) => {
    const title = escapeHtml(item.title || "Prize");
    const valueNum = Number(item.value);
    const valueText = item.value !== "" && Number.isFinite(valueNum) ? escapeHtml(formatMoney(valueNum)) : "TBD";
    return `<div class="raffle-prize-pill"><span class="raffle-prize-pill-title">${title}</span><span class="raffle-prize-pill-value">${valueText}</span></div>`;
  }).join("");
  return `<div class="raffle-prize-showcase"><p class="raffle-prize-total">Total Prize Value: ${escapeHtml(formatMoney(total))}</p><div class="raffle-prize-pill-list">${itemsHtml}</div></div>`;
}
function addRafflePrizeRow(prize = { title: "", value: "" }, rowState = "saved") {
  const list = $("rafflePrizeList");
  if (!list) return null;
  const row = document.createElement("div");
  row.className = "raffle-prize-row";
  row.setAttribute("data-raffle-prize-row", "1");
  row.setAttribute("data-row-state", rowState);
  row.innerHTML = `<input class="raffle-prize-title" type="text" placeholder="Prize title" value="${escapeHtml(prize.title || "")}" /><input class="raffle-prize-value" type="text" inputmode="decimal" placeholder="$0.00" value="${escapeHtml(formatMoneyTypingValue(prize.value || "", true))}" /><button type="button" class="raffle-prize-action-btn">Remove</button>`;
  applyLiveMoneyFormatting(row.querySelector(".raffle-prize-value"));
  const actionBtn = row.querySelector(".raffle-prize-action-btn");
  if (actionBtn) {
    if (rowState === "draft") {
      actionBtn.textContent = "Add Prize";
      actionBtn.setAttribute("data-row-action", "add");
    } else {
      actionBtn.textContent = "Remove";
      actionBtn.setAttribute("data-row-action", "remove");
    }
  }
  list.appendChild(row);
  return row;
}
function isRafflePrizeRowFilled(row) {
  const title = row.querySelector(".raffle-prize-title")?.value.trim() || "";
  const value = row.querySelector(".raffle-prize-value")?.value.trim() || "";
  return !!(title || value);
}
function ensureDraftRafflePrizeRow() {
  const list = $("rafflePrizeList");
  if (!list) return;
  let draftRow = list.querySelector('[data-raffle-prize-row][data-row-state="draft"]');
  if (!draftRow) draftRow = addRafflePrizeRow({ title: "", value: "" }, "draft");
  if (draftRow && list.firstElementChild !== draftRow) list.prepend(draftRow);
}
function renderRafflePrizeRows(prizes = []) {
  const list = $("rafflePrizeList");
  if (!list) return;
  list.innerHTML = "";
  const safe = normalizeRafflePrizes(prizes);
  safe.forEach((prize) => addRafflePrizeRow(prize, "saved"));
  ensureDraftRafflePrizeRow();
}

function renderEventTypeDetails(type, details = {}) {
  eventFormRenderedType = normalizeType(type);
  if (!type) { eventTypeDetailsEl.innerHTML = ""; return; }
  if (type === "canning") {
    const startDate = details.startDate || "";
    const endDate = details.endDate || "";
    const startTime = details.startTime || "12:00";
    const endTime = details.endTime || addHoursToTime(startTime, 2) || "14:00";
    const blockHoursRaw = Number(details.blockHours);
    const blockHours = Number.isFinite(blockHoursRaw) && blockHoursRaw > 0 ? blockHoursRaw : 1;
    const combined = startDate ? (endDate ? `${formatDateLabel(startDate)} - ${formatDateLabel(endDate)}` : formatDateLabel(startDate)) : "";
    eventTypeDetailsEl.innerHTML = `<div class="stack-sm"><label class="field-label" for="canningLocation">Canning Location</label><input id="canningLocation" type="text" placeholder="Storefront/intersection" value="${escapeHtml(details.location || "")}" /></div><div class="stack-sm"><label class="field-label" for="canningDateRangeDisplay">Date(s)</label><div class="calendar-input-wrap single"><input id="canningDateRangeDisplay" type="text" readonly placeholder="Pick date(s)" value="${escapeHtml(combined)}" /><button type="button" class="calendar-trigger" data-calendar-flow="canning-range" aria-label="Open date calendar" title="Open calendar"><span aria-hidden="true">&#128197;</span></button><input id="canningStartDate" type="hidden" value="${escapeHtml(startDate)}" /><input id="canningEndDate" type="hidden" value="${escapeHtml(endDate)}" /></div></div><div id="canningBaseTimeWrap" class="split"><div class="stack-sm"><label class="field-label" for="canningStartTime">Start Time</label><input id="canningStartTime" type="time" value="${escapeHtml(startTime)}" /></div><div class="stack-sm"><label class="field-label" for="canningEndTime">End Time</label><input id="canningEndTime" type="time" value="${escapeHtml(endTime)}" /></div></div><div class="canning-block-hours-row"><input id="canningBlockHours" type="number" min="0.25" step="0.25" value="${escapeHtml(String(blockHours))}" aria-label="Hours per block" /><span class="canning-block-hours-text">hours per block</span></div><div id="canningPerDayWrap" class="stack-sm is-hidden"></div><div class="stack-sm"><label class="field-label" for="canningSchedule">Schedule Notes</label><textarea id="canningSchedule" rows="3" placeholder="Shift notes, meeting point, setup details">${escapeHtml(details.schedule || "")}</textarea></div>`;
    renderCanningPerDayTimes(details.dailyTimes || {});
    return;
  }
  if (type === "raffle") {
    const pricing = getRaffleTicketPricing(details);
    eventTypeDetailsEl.innerHTML = `<div class="raffle-ticket-pricing-grid"><div class="stack-sm"><label class="field-label" for="rafflePriceOne">1 for</label><input id="rafflePriceOne" type="text" inputmode="decimal" placeholder="$0.00" value="${escapeHtml(formatMoneyTypingValue(pricing.one || "", true))}" /></div><div class="stack-sm"><label class="field-label" for="rafflePriceFive">5 for</label><input id="rafflePriceFive" type="text" inputmode="decimal" placeholder="$0.00" value="${escapeHtml(formatMoneyTypingValue(pricing.five || "", true))}" /></div><div class="stack-sm"><label class="field-label" for="rafflePriceTen">10 for</label><input id="rafflePriceTen" type="text" inputmode="decimal" placeholder="$0.00" value="${escapeHtml(formatMoneyTypingValue(pricing.ten || "", true))}" /></div><div class="stack-sm"><label class="field-label" for="rafflePriceCustom">X for each</label><input id="rafflePriceCustom" type="text" inputmode="decimal" placeholder="$0.00" value="${escapeHtml(formatMoneyTypingValue(pricing.custom || "", true))}" /></div></div><div class="stack-sm"><label class="field-label">Prizes</label><div id="rafflePrizeList" class="stack-sm"></div></div><div class="stack-sm"><label class="field-label" for="raffleDrawingDate">Drawing Date</label><div class="calendar-input-wrap single"><input id="raffleDrawingDate" type="datetime-local" value="${escapeHtml(details.drawingDate || "")}" /><button type="button" class="calendar-trigger" data-calendar-target="raffleDrawingDate" aria-label="Open date picker" title="Open calendar"><span aria-hidden="true">&#128197;</span></button></div></div>`;
    ["rafflePriceOne", "rafflePriceFive", "rafflePriceTen", "rafflePriceCustom"].forEach((id) => applyLiveMoneyFormatting($(id)));
    renderRafflePrizeRows(details.prizes || []);
    return;
  }
  if (type === "restaurant_night") {
    eventTypeDetailsEl.innerHTML = `<div class="split"><div class="stack-sm"><label class="field-label" for="restaurantDate">Date/Time</label><div class="calendar-input-wrap single"><input id="restaurantDate" type="datetime-local" value="${escapeHtml(details.dateTime || "")}" /><button type="button" class="calendar-trigger" data-calendar-target="restaurantDate" aria-label="Open date picker" title="Open calendar"><span aria-hidden="true">&#128197;</span></button></div></div><div class="stack-sm"><label class="field-label" for="restaurantLocation">Location</label><input id="restaurantLocation" type="text" placeholder="Restaurant + address" value="${escapeHtml(details.location || "")}" /></div></div><div class="stack-sm"><label class="field-label" for="restaurantDetails">Detailed Info</label><textarea id="restaurantDetails" rows="3" placeholder="Promo code, restrictions, donation share">${escapeHtml(details.details || "")}</textarea></div>`;
    return;
  }
  if (type === "merch") {
    eventTypeDetailsEl.innerHTML = `<div class="stack-sm"><label class="field-label" for="merchOrderInfo">Order Info</label><textarea id="merchOrderInfo" rows="3" placeholder="Items, sizes, prices, pickup">${escapeHtml(details.orderInfo || "")}</textarea></div><div class="split"><div class="stack-sm"><label class="field-label" for="merchOrderLink">Order Link</label><input id="merchOrderLink" type="url" placeholder="https://..." value="${escapeHtml(details.orderLink || "")}" /></div><div class="stack-sm"><label class="field-label" for="merchDeadline">Order Deadline</label><div class="calendar-input-wrap single"><input id="merchDeadline" type="date" value="${escapeHtml(details.deadline || "")}" /><button type="button" class="calendar-trigger" data-calendar-target="merchDeadline" aria-label="Open date picker" title="Open calendar"><span aria-hidden="true">&#128197;</span></button></div></div></div>`;
    return;
  }
  eventTypeDetailsEl.innerHTML = `<div class="stack-sm"><label class="field-label" for="otherEventDetails">Event Details</label><textarea id="otherEventDetails" rows="3" placeholder="Custom details">${escapeHtml(details.notes || "")}</textarea></div>`;
}
function collectTypeDetails(type, existing = {}) {
  if (type === "canning") {
    const startDate = $("canningStartDate")?.value || "";
    const endDate = $("canningEndDate")?.value || "";
    const blockHoursRaw = Number($("canningBlockHours")?.value);
    const blockHours = Number.isFinite(blockHoursRaw) && blockHoursRaw > 0 ? blockHoursRaw : 1;
    const dailyTimes = {};
    eventTypeDetailsEl.querySelectorAll("[data-canning-day-row]").forEach((row) => {
      const date = row.getAttribute("data-date") || "";
      if (!date) return;
      dailyTimes[date] = {
        startTime: row.querySelector(".canning-day-start")?.value || "",
        endTime: row.querySelector(".canning-day-end")?.value || "",
      };
    });
    return { location: $("canningLocation")?.value.trim() || "", startDate, endDate, startTime: $("canningStartTime")?.value || "", endTime: $("canningEndTime")?.value || "", blockHours, dailyTimes, schedule: $("canningSchedule")?.value.trim() || "" };
  }
  if (type === "raffle") {
    const prizes = [];
    eventTypeDetailsEl.querySelectorAll("[data-raffle-prize-row]").forEach((row) => {
      if (row.getAttribute("data-row-state") !== "saved") return;
      const title = row.querySelector(".raffle-prize-title")?.value.trim() || "";
      const valueRaw = row.querySelector(".raffle-prize-value")?.value.trim() || "";
      if (!title && !valueRaw) return;
      prizes.push({ title, value: valueRaw ? String(parseMoneyInput(valueRaw) || 0) : "" });
    });
    return {
      prizes,
      drawingDate: $("raffleDrawingDate")?.value || "",
      ticketPricing: {
        one: parseMoneyInput($("rafflePriceOne")?.value) || 0,
        five: parseMoneyInput($("rafflePriceFive")?.value) || 0,
        ten: parseMoneyInput($("rafflePriceTen")?.value) || 0,
        custom: parseMoneyInput($("rafflePriceCustom")?.value) || 0,
      },
      ticketSales: getRaffleTicketSales(existing),
    };
  }
  if (type === "restaurant_night") return { dateTime: $("restaurantDate")?.value || "", location: $("restaurantLocation")?.value.trim() || "", details: $("restaurantDetails")?.value.trim() || "" };
  if (type === "merch") return { orderInfo: $("merchOrderInfo")?.value.trim() || "", orderLink: $("merchOrderLink")?.value.trim() || "", deadline: $("merchDeadline")?.value || "" };
  return { notes: $("otherEventDetails")?.value.trim() || "" };
}
function validateCanningDetails(details) {
  if (!details.startDate) return "Select a start date for canning.";
  if (details.endDate && details.endDate < details.startDate) return "End date must be the same day or later than start date.";
  const blockHours = Number(details.blockHours);
  if (!Number.isFinite(blockHours) || blockHours <= 0) return "Hours per block must be greater than 0.";
  const rangeDates = details.endDate ? getIsoDateRange(details.startDate, details.endDate) : [];
  if (rangeDates.length > 1) {
    for (const date of rangeDates) {
      const slot = details.dailyTimes?.[date] || {};
      if (!slot.startTime || !slot.endTime) return `Set start/end times for ${formatDateLabel(date)}.`;
      if (slot.startTime >= slot.endTime) return `End time must be later than start time for ${formatDateLabel(date)}.`;
    }
    return "";
  }
  if (!details.startTime || !details.endTime) return "Select both start and end times.";
  if (details.startTime >= details.endTime) return "End time must be later than start time.";
  return "";
}
function eventSummary(e) {
  const d = e.details || {};
  const t = normalizeType(e.type);
  if (t === "canning") {
    const datePart = d.startDate ? (d.endDate ? `${formatDateLabel(d.startDate)} - ${formatDateLabel(d.endDate)}` : formatDateLabel(d.startDate)) : "Date TBD";
    const multiDay = d.startDate && d.endDate && d.endDate > d.startDate;
    const timePart = multiDay ? "Per-day times set" : (d.startTime && d.endTime ? `${formatTimeLabel(d.startTime)}-${formatTimeLabel(d.endTime)}` : "Time TBD");
    return `${d.location || "Location TBD"} | ${datePart} | ${timePart}`;
  }
  if (t === "raffle") {
    return `${formatRafflePrizesText(d.prizes)} | Draw: ${d.drawingDate || "TBD"}`;
  }
  if (t === "restaurant_night") return `${d.location || "Location TBD"} | ${d.dateTime || "Date TBD"}`;
  if (t === "merch") return d.orderInfo || "Order info TBD";
  return d.notes || "Details TBD";
}
function getEventMetaItems(e) {
  const d = e?.details || {};
  const t = normalizeType(e?.type);
  if (t === "canning") {
    const datePart = d.startDate ? (d.endDate ? `${formatDateLabel(d.startDate)} - ${formatDateLabel(d.endDate)}` : formatDateLabel(d.startDate)) : "Date TBD";
    const multiDay = d.startDate && d.endDate && d.endDate > d.startDate;
    const timePart = multiDay ? "Per-day times set" : (d.startTime && d.endTime ? `${formatTimeLabel(d.startTime)} - ${formatTimeLabel(d.endTime)}` : "Time TBD");
    return [
      { label: "Location", value: d.location ? mapLinkHtml(d.location) : "Location TBD", isHtml: !!d.location },
      { label: "Date", value: datePart, isHtml: false },
      { label: "Time", value: timePart, isHtml: false },
    ];
  }
  if (t === "restaurant_night") {
    const dateTime = parseDateTimeValue(d.dateTime);
    const datePart = dateTime ? new Intl.DateTimeFormat("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" }).format(dateTime) : "Date TBD";
    const timePart = dateTime ? new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit" }).format(dateTime) : "Time TBD";
    return [
      { label: "Location", value: d.location ? mapLinkHtml(d.location) : "Location TBD", isHtml: !!d.location },
      { label: "Date", value: datePart, isHtml: false },
      { label: "Time", value: timePart, isHtml: false },
    ];
  }
  return [];
}
function eventMetaBoxHtml(e, className = "") {
  const items = getEventMetaItems(e);
  if (!items.length) return "";
  const classes = ["event-meta-box"];
  if (className) classes.push(className);
  return `<div class="${classes.join(" ")}">${items.map((item) => `<div class="event-meta-chip"><span class="event-meta-label">${escapeHtml(item.label)}</span><span class="event-meta-value">${item.isHtml ? item.value : escapeHtml(item.value)}</span></div>`).join("")}</div>`;
}
function eventSummaryHtml(e) {
  const d = e?.details || {};
  const t = normalizeType(e?.type);
  if (t === "canning") {
    return eventMetaBoxHtml(e);
  }
  if (t === "restaurant_night") {
    return eventMetaBoxHtml(e);
  }
  if (t === "raffle") {
    return "";
  }
  return escapeHtml(eventSummary(e));
}
function resetRaffleTicketForm() {
  editingRaffleSaleId = null;
  if (raffleTicketForm) raffleTicketForm.reset();
  if (raffleTicketPackageEl) raffleTicketPackageEl.value = "1";
  if (raffleCustomTicketCountEl) raffleCustomTicketCountEl.value = "1";
  if (raffleAmountPaidEl) raffleAmountPaidEl.value = "";
  raffleCustomTicketCountWrap?.classList.add("is-hidden");
  if (raffleTicketSaveBtn) raffleTicketSaveBtn.textContent = "Add Buyer";
  raffleTicketCancelBtn?.classList.add("is-hidden");
}
function updateRaffleTicketAmountDefault(force = false) {
  const event = getEventById(selectedEventId);
  if (!event || normalizeType(event.type) !== "raffle") return;
  const pricing = getRaffleTicketPricing(event.details || {});
  const packageType = raffleTicketPackageEl?.value || "1";
  const customCount = Number(raffleCustomTicketCountEl?.value) || 1;
  raffleCustomTicketCountWrap?.classList.toggle("is-hidden", packageType !== "custom");
  const nextAmount = getDefaultRaffleAmountPaid(pricing, packageType, customCount);
  if (!raffleAmountPaidEl) return;
  const current = String(raffleAmountPaidEl.value || "").trim();
  if (force || !current) raffleAmountPaidEl.value = nextAmount ? formatMoneyTypingValue(nextAmount, true) : "";
}
function renderRaffleTicketSales(event) {
  const raffle = normalizeType(event?.type) === "raffle";
  eventDetailTicketSalesWrap?.classList.toggle("is-hidden", !raffle);
  if (!raffle || !eventDetailTicketSummary || !eventDetailTicketSalesList) return;
  const details = event.details || {};
  const pricing = getRaffleTicketPricing(details);
  const totals = getRaffleTicketTotals(details);
  eventDetailTicketSummary.innerHTML = `<div class="raffle-ticket-summary-chip"><span class="raffle-ticket-summary-label">Buyers</span><strong>${totals.buyers}</strong></div><div class="raffle-ticket-summary-chip"><span class="raffle-ticket-summary-label">Tickets</span><strong>${totals.tickets}</strong></div><div class="raffle-ticket-summary-chip"><span class="raffle-ticket-summary-label">Paid</span><strong>${escapeHtml(formatMoney(totals.amount))}</strong></div><div class="raffle-ticket-summary-chip"><span class="raffle-ticket-summary-label">Pricing</span><strong>1:${escapeHtml(formatMoney(pricing.one))} | 5:${escapeHtml(formatMoney(pricing.five))} | 10:${escapeHtml(formatMoney(pricing.ten))} | X:${escapeHtml(formatMoney(pricing.custom))}</strong></div>`;
  const ticketSales = getRaffleTicketSales(details).slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  if (editingRaffleSaleId && !ticketSales.some((sale) => sale.id === editingRaffleSaleId)) resetRaffleTicketForm();
  if (!ticketSales.length) {
    eventDetailTicketSalesList.innerHTML = `<p class="raffle-ticket-empty">No ticket buyers added yet.</p>`;
    resetRaffleTicketForm();
    updateRaffleTicketAmountDefault(true);
    return;
  }
  eventDetailTicketSalesList.innerHTML = "";
  ticketSales.forEach((sale) => {
    const row = document.createElement("article");
    row.className = "raffle-ticket-sale-item";
    const packageLabel = sale.packageType === "custom" ? `Custom (${sale.ticketCount})` : `${sale.ticketCount} ticket${sale.ticketCount === 1 ? "" : "s"}`;
    row.innerHTML = `<div class="raffle-ticket-sale-main"><p class="raffle-ticket-sale-name">${escapeHtml(sale.name || "Unnamed Buyer")}</p><p class="raffle-ticket-sale-meta">${escapeHtml(sale.contact || "No contact")} | ${escapeHtml(packageLabel)} | Paid ${escapeHtml(formatMoney(sale.amountPaid || 0))}</p></div><div class="raffle-ticket-sale-actions"><button type="button" class="raffle-ticket-row-btn" data-raffle-sale-edit="${sale.id}">Edit</button><button type="button" class="raffle-ticket-row-btn" data-raffle-sale-delete="${sale.id}">Delete</button></div>`;
    eventDetailTicketSalesList.appendChild(row);
  });
  if (!editingRaffleSaleId) {
    resetRaffleTicketForm();
    updateRaffleTicketAmountDefault(true);
  }
}
function startEditingRaffleSale(event, saleId) {
  const sale = getRaffleTicketSales(event?.details || {}).find((item) => item.id === saleId);
  if (!sale) return;
  editingRaffleSaleId = sale.id;
  raffleBuyerNameEl.value = sale.name || "";
  raffleBuyerContactEl.value = sale.contact || "";
  raffleTicketPackageEl.value = sale.packageType || "1";
  raffleCustomTicketCountEl.value = String(Math.max(1, Number(sale.ticketCount) || 1));
  raffleAmountPaidEl.value = formatMoneyTypingValue(Number(sale.amountPaid) || 0, true);
  raffleCustomTicketCountWrap?.classList.toggle("is-hidden", sale.packageType !== "custom");
  raffleTicketSaveBtn.textContent = "Save Buyer";
  raffleTicketCancelBtn?.classList.remove("is-hidden");
}
function resetEventFormState() {
  editingEventId = null;
  editingEventRemovedFlyerIndices = new Set();
  eventFormRenderedType = "";
  eventForm.reset();
  eventTitleEl.placeholder = getSuggestedEventTitlePlaceholder("");
  eventTypeDetailsEl.innerHTML = "";
  eventFlyersEl.value = "";
  eventFlyersFileNameEl.textContent = "No files selected";
  clearEventFlyerPreviews();
  closeCalendarPopover();
  if (eventModalTitleEl) eventModalTitleEl.textContent = "Create Event / Campaign";
  if (saveEventBtn) saveEventBtn.textContent = "Create Event";
}
function getRetainedFlyerCountForEditingEvent() {
  if (!editingEventId) return 0;
  const event = getEventById(editingEventId);
  if (!event) return 0;
  return (event.flyers || []).filter((_, idx) => !editingEventRemovedFlyerIndices.has(idx)).length;
}
function enforceFlyerLimit(baseCount, incomingCount) {
  const kept = Number(baseCount || 0);
  const incoming = Number(incomingCount || 0);
  const slotsLeft = Math.max(0, MAX_FLYERS_PER_EVENT - kept);
  if (incoming <= slotsLeft) return true;
  openAppDialog({
    title: "Flyer Limit Reached",
    message: `Each event can have up to ${MAX_FLYERS_PER_EVENT} flyers.`,
    confirmLabel: "OK",
    showCancel: false,
  });
  return false;
}
function startEditingEvent(event) {
  if (!event) return;
  editingEventId = event.id;
  editingEventRemovedFlyerIndices = new Set();
  if (eventModalTitleEl) eventModalTitleEl.textContent = "Edit Event";
  if (saveEventBtn) saveEventBtn.textContent = "Save Changes";
  eventTitleEl.value = event.title || "";
  eventTitleEl.placeholder = getSuggestedEventTitlePlaceholder(event.type);
  eventLeadNameEl.value = event.lead?.name || "";
  eventLeadPhoneEl.value = event.lead?.phone || "";
  eventLeadEmailEl.value = event.lead?.email || "";
  eventTypeEl.value = normalizeType(event.type);
  renderEventTypeDetails(normalizeType(event.type), event.details || {});
  eventFlyersEl.value = "";
  if ((event.flyers || []).length) {
    eventFlyersFileNameEl.textContent = "Preview below";
    renderStoredEventFlyerPreviews(event.flyers || []);
  } else {
    eventFlyersFileNameEl.textContent = "No files selected";
    clearEventFlyerPreviews();
  }
  closeCalendarPopover();
  openEventDetail(false);
  selectedEventId = event.id;
  openEvent(true);
}
function getEventById(id) {
  return state.events.find((e) => e.id === id) || null;
}
function getFlyerHref(flyer) {
  const href = flyer?.dataUrl || flyer?.url || flyer?.dataURL || "";
  return typeof href === "string" ? href : "";
}
function isImageFlyer(flyer, href) {
  const type = String(flyer?.type || "").toLowerCase();
  if (type.startsWith("image/")) return true;
  return String(href || "").startsWith("data:image/");
}
function getCanningBlockMinutes(details) {
  const hours = Number(details?.blockHours);
  if (!Number.isFinite(hours) || hours <= 0) return 60;
  return Math.max(15, Math.round(hours * 60));
}
function getCanningScheduleDays(details) {
  const startDate = details?.startDate || "";
  if (!startDate) return [];
  const endDate = details?.endDate || "";
  const dates = endDate && endDate >= startDate ? getIsoDateRange(startDate, endDate) : [startDate];
  const assignments = details?.assignments && typeof details.assignments === "object" ? details.assignments : {};
  const slotTotals = details?.slotTotals && typeof details.slotTotals === "object" ? details.slotTotals : {};
  const blockMinutes = getCanningBlockMinutes(details);
  return dates.map((date) => {
    const daily = details?.dailyTimes?.[date] || {};
    const start = daily.startTime || details?.startTime || "";
    const end = daily.endTime || details?.endTime || "";
    const startMin = timeToMinutes(start);
    const endMin = timeToMinutes(end);
    const slots = [];
    if (startMin >= 0 && endMin > startMin) {
      for (let t = startMin; t < endMin; t += blockMinutes) {
        const slotStart = t;
        const slotEnd = Math.min(t + blockMinutes, endMin);
        const slotKey = `${date}|${minutesToTime(slotStart)}-${minutesToTime(slotEnd)}`;
        slots.push({
          key: slotKey,
          label: `${formatTimeLabel(minutesToTime(slotStart))} - ${formatTimeLabel(minutesToTime(slotEnd))}`,
          assignedNames: getSlotAssignedNames(assignments, slotKey),
          raisedTotal: getSlotRaisedAmount(slotTotals, slotKey),
        });
      }
    }
    return { date, slots };
  }).filter((day) => day.slots.length);
}
function renderCanningScheduleForEvent(e) {
  if (normalizeType(e?.type) !== "canning") {
    eventDetailScheduleWrap.classList.add("is-hidden");
    eventDetailScheduleGrid.innerHTML = "";
    return;
  }
  const days = getCanningScheduleDays(e.details || {});
  const playerByName = new Map(state.players.map((p) => [(p.name || "").trim(), p]));
  eventDetailScheduleWrap.classList.remove("is-hidden");
  eventDetailScheduleGrid.innerHTML = "";
  if (!days.length) {
    eventDetailScheduleGrid.innerHTML = `<p class="canning-slot-empty">No schedule times available.</p>`;
    return;
  }
  days.forEach((day) => {
    const dayCol = document.createElement("section");
    dayCol.className = "canning-day-column";
    dayCol.innerHTML = `<p class="canning-day-title">${escapeHtml(formatDateLabel(day.date))}</p><div class="canning-day-slots"></div>`;
    const slotsWrap = dayCol.querySelector(".canning-day-slots");
    day.slots.forEach((slot) => {
      const card = document.createElement("article");
      card.className = `canning-slot-card${slot.assignedNames.length ? " is-assigned" : ""}`;
      const btn = document.createElement("button");
      btn.type = "button";
      const assignedMarkup = slot.assignedNames.length
        ? `<div class="canning-slot-assignees">${slot.assignedNames.map((name) => {
          const player = playerByName.get(name);
          const initials = escapeHtml(getInitials(name, "P"));
          const avatar = player?.photoDataUrl ? `<img src="${player.photoDataUrl}" alt="${escapeHtml(name)} photo" />` : `<span>${initials}</span>`;
          return `<span class="player-avatar canning-slot-avatar" title="${escapeHtml(name)}">${avatar}</span>`;
        }).join("")}</div>`
        : `<span class="canning-slot-empty-assignee">Unassigned - click to assign</span>`;
      btn.className = "canning-slot-btn canning-slot-assign-btn";
      btn.dataset.slotKey = slot.key;
      btn.innerHTML = `<strong>${escapeHtml(slot.label)}</strong>${assignedMarkup}`;
      const footer = document.createElement("div");
      footer.className = "canning-slot-footer";
      const total = document.createElement("span");
      total.className = "canning-slot-total";
      total.textContent = `Raised: ${formatMoney(slot.raisedTotal)}`;
      const moneyBtn = document.createElement("button");
      moneyBtn.type = "button";
      moneyBtn.className = "canning-slot-money-btn";
      moneyBtn.dataset.slotKey = slot.key;
      moneyBtn.dataset.slotRaised = String(slot.raisedTotal);
      moneyBtn.textContent = "$";
      footer.append(total, moneyBtn);
      card.append(btn, footer);
      slotsWrap.appendChild(card);
    });
    eventDetailScheduleGrid.appendChild(dayCol);
  });
}
function renderSlotAssignRoster() {
  const e = getEventById(selectedEventId);
  if (!e || !selectedSlotKey) { openSlotAssign(false); return; }
  const assignedNames = Array.isArray(slotAssignDraftNames) ? slotAssignDraftNames.slice() : [];
  const [date, timeRange] = selectedSlotKey.split("|");
  slotAssignTitleEl.textContent = `${formatDateLabel(date)} | ${timeRange || ""}`;
  slotAssignRosterEl.innerHTML = "";
  const names = state.players.map((p) => (p.name || "").trim()).filter(Boolean);
  if (!names.length) {
    slotAssignRosterEl.innerHTML = `<p class="canning-slot-empty">No roster players available.</p>`;
    slotAssignClearBtn.classList.add("is-hidden");
    return;
  }
  names.forEach((name) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `slot-assign-player-btn${assignedNames.includes(name) ? " is-assigned" : ""}`;
    btn.textContent = name;
    btn.addEventListener("click", () => {
      const nextAssigned = Array.isArray(slotAssignDraftNames) ? slotAssignDraftNames.slice() : [];
      const idx = nextAssigned.indexOf(name);
      if (idx >= 0) nextAssigned.splice(idx, 1);
      else nextAssigned.push(name);
      slotAssignDraftNames = nextAssigned;
      renderSlotAssignRoster();
    });
    slotAssignRosterEl.appendChild(btn);
  });
  slotAssignClearBtn.classList.toggle("is-hidden", !assignedNames.length);
}
function renderEventDetail() {
  const e = getEventById(selectedEventId);
  if (!e) { openEventDetail(false); return; }
  syncCanningRaisedForEvent(e);
  syncRaffleRaisedForEvent(e);
  const live = e.isLive !== false;
  const raffle = normalizeType(e.type) === "raffle";
  eventDetailTitleEl.textContent = "Event Details";
  if (eventDetailBlockTitleEl) eventDetailBlockTitleEl.textContent = e.title || "Untitled Event";
  eventDetailMetaEl.innerHTML = `${escapeHtml(typeLabel(e.type))} | <span class="event-status-text ${live ? "is-live" : "is-ended"}">${live ? "Live" : "Ended"}</span> | ${escapeHtml(formatMoney(e.raisedSoFar || 0))}`;
  eventDetailSummaryEl.innerHTML = eventSummaryHtml(e);
  eventDetailSummaryEl.classList.toggle("is-hidden", raffle);
  if (!raffle) resetRaffleTicketForm();
  eventDetailLeadEl.textContent = `Lead: ${e.lead?.name || "N/A"} | ${formatPhone(e.lead?.phone || "") || "N/A"}${e.lead?.email ? ` | ${e.lead.email}` : ""}`;
  renderRaffleDrawInfo(e);
  renderRaffleTicketSales(e);
  if (raffle) startRaffleCountdown();
  else stopRaffleCountdown();
  const detailNotes = e.notes || e.details?.schedule || e.details?.details || e.details?.orderInfo || e.details?.notes || "No additional notes";
  eventDetailNotesEl.innerHTML = raffle ? formatRafflePrizesHtml(e.details?.prizes) : linkifyAddressLines(detailNotes);
  eventDetailFlyersEl.innerHTML = "";
  (e.flyers || []).forEach((f, idx) => {
    const href = getFlyerHref(f);
    if (!href) return;
    const name = f.name || `Flyer ${idx + 1}`;
    const mime = f.type || "application/octet-stream";
    const b = document.createElement("button");
    b.type = "button";
    renderEventFlyerThumb(b, href, mime, name);
    b.addEventListener("click", () => openFlyerPreview(true, href, name, mime));
    eventDetailFlyersEl.appendChild(b);
  });
  if (!eventDetailFlyersEl.children.length) eventDetailFlyersEl.textContent = "No flyer uploaded";
  renderCanningScheduleForEvent(e);
  eventDetailEditBtn.classList.toggle("is-hidden", false);
  eventDetailUpdateRaisedBtn.classList.add("is-hidden");
  eventDetailAddFlyerBtn.classList.add("is-hidden");
  eventDetailEndBtn.classList.toggle("is-hidden", !live);
}
function renderEvents() {
  syncAllRaisedTotals();
  eventList.innerHTML = "";
  state.events.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).forEach((e) => {
    const live = e.isLive !== false;
    const li = document.createElement("li");
    li.className = "event-item";
    li.innerHTML = `<button type="button" class="event-pill-head"><div class="event-row-top"><strong>${escapeHtml(e.title)}</strong><span class="event-status ${live ? "status-live" : "status-ended"}">${live ? "Live" : "Ended"}</span></div><div class="event-pill-meta">${typeLabel(e.type)} | ${formatMoney(e.raisedSoFar || 0)} | Lead: ${escapeHtml(e.lead?.name || "N/A")}</div></button>`;
    li.querySelector(".event-pill-head").addEventListener("click", () => {
      selectedEventId = e.id;
      renderEventDetail();
      openEventDetail(true);
    });
    eventList.appendChild(li);
  });
  updateEventListScrollState();
}

function initCrop(image) { cropState.image = image; cropState.zoom = 1; cropState.baseScale = Math.max(cropCanvas.width / image.width, cropCanvas.height / image.height); cropState.offsetX = 0; cropState.offsetY = 0; cropZoomEl.value = "1"; }
function drawCrop() {
  if (!cropState.image) return;
  const ctx = cropCanvas.getContext("2d");
  const s = cropState.baseScale * cropState.zoom;
  const w = cropState.image.width * s;
  const h = cropState.image.height * s;
  const x = cropCanvas.width / 2 - w / 2 + cropState.offsetX;
  const y = cropCanvas.height / 2 - h / 2 + cropState.offsetY;
  ctx.clearRect(0, 0, cropCanvas.width, cropCanvas.height);
  ctx.fillStyle = "#070a18";
  ctx.fillRect(0, 0, cropCanvas.width, cropCanvas.height);
  ctx.drawImage(cropState.image, x, y, w, h);
}
function openCropForFile(file) {
  return new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.onload = () => {
      const img = new Image();
      img.onload = () => { initCrop(img); openCrop(true); drawCrop(); resolve(); };
      img.onerror = () => reject(new Error("img load fail"));
      img.src = fr.result;
    };
    fr.onerror = () => reject(new Error("file read fail"));
    fr.readAsDataURL(file);
  });
}
function openCropForSource(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => { initCrop(img); openCrop(true); drawCrop(); resolve(); };
    img.onerror = () => reject(new Error("img load fail"));
    img.src = src;
  });
}
function startCropDrag(clientX, clientY) {
  cropState.dragging = true;
  cropState.lastX = clientX;
  cropState.lastY = clientY;
  cropCanvas.classList.add("is-dragging");
}
function moveCropDrag(clientX, clientY) {
  if (!cropState.dragging) return;
  const dx = clientX - cropState.lastX;
  const dy = clientY - cropState.lastY;
  cropState.lastX = clientX;
  cropState.lastY = clientY;
  cropState.offsetX += dx;
  cropState.offsetY += dy;
  drawCrop();
}
function stopCropDrag() {
  cropState.dragging = false;
  cropCanvas.classList.remove("is-dragging");
}
function clearEventFlyerPreviews() {
  openFlyerPreview(false);
  eventFlyerPreviewUrls.forEach((url) => URL.revokeObjectURL(url));
  eventFlyerPreviewUrls = [];
  if (!eventFlyersPreviewEl) return;
  eventFlyersPreviewEl.innerHTML = "";
  eventFlyersPreviewEl.classList.add("is-hidden");
}
function renderEventFlyerPreviews(files) {
  clearEventFlyerPreviews();
  if (!eventFlyersPreviewEl) return;
  if (!files.length) return;
  eventFlyersPreviewEl.classList.remove("is-hidden");
  files.forEach((file) => {
    if (String(file.type || "").startsWith("image/")) {
      const url = URL.createObjectURL(file);
      eventFlyerPreviewUrls.push(url);
      const item = document.createElement("button");
      item.type = "button";
      item.className = "flyer-preview-item";
      item.dataset.previewType = "image";
      item.dataset.previewSrc = url;
      item.dataset.previewTitle = file.name;
      item.dataset.previewMime = file.type || "image/*";
      item.innerHTML = `<img src="${url}" alt="${escapeHtml(file.name)} preview" /><span>${escapeHtml(file.name)}</span>`;
      eventFlyersPreviewEl.appendChild(item);
      return;
    }
    const url = URL.createObjectURL(file);
    eventFlyerPreviewUrls.push(url);
    const filePill = document.createElement("button");
    filePill.type = "button";
    filePill.className = "flyer-preview-file";
    filePill.dataset.previewType = "file";
    filePill.dataset.previewSrc = url;
    filePill.dataset.previewTitle = file.name;
    filePill.dataset.previewMime = file.type || "application/octet-stream";
    filePill.textContent = file.name;
    eventFlyersPreviewEl.appendChild(filePill);
  });
}
function renderStoredEventFlyerPreviews(flyers) {
  clearEventFlyerPreviews();
  if (!eventFlyersPreviewEl) return;
  const items = Array.isArray(flyers) ? flyers : [];
  if (!items.length) return;
  eventFlyersPreviewEl.classList.remove("is-hidden");
  items.forEach((flyer, idx) => {
    if (editingEventRemovedFlyerIndices.has(idx)) return;
    const href = getFlyerHref(flyer);
    if (!href) return;
    const name = flyer?.name || `Flyer ${idx + 1}`;
    const mime = flyer?.type || (isImageFlyer(flyer, href) ? "image/*" : "application/octet-stream");
    if (isImageFlyer(flyer, href)) {
      const item = document.createElement("button");
      item.type = "button";
      item.className = "flyer-preview-item";
      item.dataset.previewType = "image";
      item.dataset.previewSrc = href;
      item.dataset.previewTitle = name;
      item.dataset.previewMime = mime;
      item.innerHTML = `<img src="${href}" alt="${escapeHtml(name)} preview" /><span>${escapeHtml(name)}</span><button type="button" class="flyer-preview-delete-btn" data-delete-stored-index="${idx}" aria-label="Delete ${escapeHtml(name)}">Remove</button>`;
      eventFlyersPreviewEl.appendChild(item);
      return;
    }
    const filePill = document.createElement("button");
    filePill.type = "button";
    filePill.className = "flyer-preview-file";
    filePill.dataset.previewType = "file";
    filePill.dataset.previewSrc = href;
    filePill.dataset.previewTitle = name;
    filePill.dataset.previewMime = mime;
    filePill.innerHTML = `<span>${escapeHtml(name)}</span><span class="flyer-preview-delete-btn" data-delete-stored-index="${idx}" aria-label="Delete ${escapeHtml(name)}">Remove</span>`;
    eventFlyersPreviewEl.appendChild(filePill);
  });
}

function wireInputs() {
  editTeamBtn.addEventListener("click", () => openTeam(true));
  cancelTeamBtn.addEventListener("click", () => { applyTheme(); openTeam(false); });
  resetTeamBtn.addEventListener("click", () => {
    openAppDialog({
      title: "Reset All Data",
      message: "Are you sure?",
      confirmLabel: "Yes",
      cancelLabel: "Cancel",
      onConfirm: () => {
        closeAppDialog(false);
        openAppDialog({
          title: "Reset All Data",
          message: "This cannot be undone.",
          confirmLabel: "Reset All",
          cancelLabel: "Cancel",
          onConfirm: () => {
            resetAllData();
            openTeam(false);
            return true;
          },
        });
        return false;
      },
    });
  });
  teamForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    state.team.name = teamNameEl.value.trim();
    state.team.division = teamDivisionEl.value.trim();
    state.team.hometown = teamHometownEl.value.trim();
    state.team.coach = coachNameEl.value.trim();
    state.team.assistantCoach = assistantCoachNameEl.value.trim();
    state.team.teamManager = teamManagerNameEl.value.trim();
    state.team.teamParent = teamParentNameEl.value.trim();
    state.team.color1 = teamColor1El.value;
    state.team.color2 = teamColor2El.value;
    state.team.accent = teamAccentEl.value;
    if (teamLogoEl.files?.[0]) state.team.logoDataUrl = await readFileAsDataUrl(teamLogoEl.files[0]);
    applyTheme(); renderTeam(); openTeam(false); saveState();
  });
  teamLogoEl.addEventListener("change", () => { logoFileNameEl.textContent = teamLogoEl.files?.[0]?.name || "No file selected"; });
  teamVenmoQrBtn.addEventListener("click", () => handleTeamPaymentCardClick("venmoQr", "Venmo QR", teamVenmoQrFileEl));
  teamZelleQrBtn.addEventListener("click", () => handleTeamPaymentCardClick("zelleQr", "Zelle QR Code", teamZelleQrFileEl));
  editTeamVenmoQrBtn.addEventListener("click", () => promptTeamPaymentChoice("venmoQr", "Venmo QR", teamVenmoQrFileEl));
  editTeamZelleQrBtn.addEventListener("click", () => promptTeamPaymentChoice("zelleQr", "Zelle QR Code", teamZelleQrFileEl));
  teamVenmoQrFileEl.addEventListener("change", async () => {
    const file = teamVenmoQrFileEl.files?.[0];
    if (!file) return;
    setTeamPaymentAsset("venmoQr", { type: "image", value: await readFileAsDataUrl(file) });
    teamVenmoQrFileEl.value = "";
    renderTeam();
    saveState();
  });
  teamZelleQrFileEl.addEventListener("change", async () => {
    const file = teamZelleQrFileEl.files?.[0];
    if (!file) return;
    setTeamPaymentAsset("zelleQr", { type: "image", value: await readFileAsDataUrl(file) });
    teamZelleQrFileEl.value = "";
    renderTeam();
    saveState();
  });
  teamColor1El.addEventListener("input", () => { state.team.color1 = teamColor1El.value; applyTheme(); });
  teamColor2El.addEventListener("input", () => { state.team.color2 = teamColor2El.value; applyTheme(); });
  teamAccentEl.addEventListener("input", () => { state.team.accent = teamAccentEl.value; applyTheme(); });
  openGoalBtn.addEventListener("click", () => openGoal(true));
  cancelGoalBtn.addEventListener("click", () => openGoal(false));
  applyLiveMoneyFormatting(goalAmountInputEl, true);
  goalForm.addEventListener("submit", (e) => {
    e.preventDefault();
    state.team.goalTitle = goalTitleInputEl.value.trim();
    state.team.goalAmount = Math.max(0, parseMoneyInput(goalAmountInputEl.value) || 0);
    renderGoal();
    openGoal(false);
    saveState();
  });

  openRosterBtn.addEventListener("click", () => { editingPlayerIndex = null; rosterModalTitle.textContent = "Add Player"; savePlayerBtn.textContent = "Save Player"; playerForm.reset(); pendingPlayerPhotoDataUrl = ""; playerPhotoFileNameEl.textContent = "No file selected"; setRosterPreview(""); openRoster(true); });
  cancelRosterBtn.addEventListener("click", () => { editingPlayerIndex = null; rosterModalTitle.textContent = "Add Player"; savePlayerBtn.textContent = "Save Player"; playerForm.reset(); pendingPlayerPhotoDataUrl = ""; playerPhotoFileNameEl.textContent = "No file selected"; setRosterPreview(""); openRoster(false); });
  editPlayerFromDetailBtn.addEventListener("click", () => { if (selectedPlayerIndex === null) return; fillPlayerForm(selectedPlayerIndex); openPlayerDetail(false); selectedPlayerAnchor = null; openRoster(true); });
  playerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = playerNameEl.value.trim();
    const number = playerNumberEl.value.trim();
    const contactName = contactNameEl.value.trim();
    const contactPhone = contactPhoneEl.value.trim();
    if (!name || !contactName || !contactPhone) return;
    let photoDataUrl = pendingPlayerPhotoDataUrl || "";
    if (!photoDataUrl && playerPhotoEl.files?.[0]) photoDataUrl = await readPlayerPhotoData(playerPhotoEl.files[0]);
    const payload = { name, number, contactName, contactPhone: formatPhone(contactPhone), photoDataUrl };
    if (editingPlayerIndex === null) state.players.push(payload);
    else state.players[editingPlayerIndex] = { ...state.players[editingPlayerIndex], ...payload, photoDataUrl: payload.photoDataUrl || state.players[editingPlayerIndex].photoDataUrl || "" };
    editingPlayerIndex = null;
    rosterModalTitle.textContent = "Add Player";
    savePlayerBtn.textContent = "Save Player";
    playerForm.reset();
    pendingPlayerPhotoDataUrl = "";
    playerPhotoFileNameEl.textContent = "No file selected";
    setRosterPreview("");
    renderRoster();
    openRoster(false);
    saveState();
  });
  playerPhotoEl.addEventListener("change", () => {
    const file = playerPhotoEl.files?.[0];
    playerPhotoFileNameEl.textContent = file ? file.name : "No file selected";
    if (!file) { pendingPlayerPhotoDataUrl = ""; if (editingPlayerIndex !== null && state.players[editingPlayerIndex]?.photoDataUrl) setRosterPreview(state.players[editingPlayerIndex].photoDataUrl); else setRosterPreview(""); return; }
    pendingPlayerPhotoDataUrl = "";
    if (rosterPreviewObjectUrl) URL.revokeObjectURL(rosterPreviewObjectUrl);
    rosterPreviewObjectUrl = URL.createObjectURL(file);
    setRosterPreview(rosterPreviewObjectUrl);
  });
  contactPhoneEl.addEventListener("blur", () => {
    contactPhoneEl.value = formatPhone(contactPhoneEl.value);
  });
  eventLeadPhoneEl.addEventListener("blur", () => {
    eventLeadPhoneEl.value = formatPhone(eventLeadPhoneEl.value);
  });
  cropPlayerPhotoBtn.addEventListener("click", () => {
    const file = playerPhotoEl.files?.[0];
    if (file) { openCropForFile(file).catch(() => {}); return; }
    const src = playerPhotoPreviewImg.getAttribute("src");
    if (src) openCropForSource(src).catch(() => {});
  });
  cropZoomEl.addEventListener("input", () => { cropState.zoom = Number(cropZoomEl.value) || 1; drawCrop(); });
  cropCanvas.addEventListener("pointerdown", (e) => {
    e.preventDefault();
    startCropDrag(e.clientX, e.clientY);
    cropCanvas.setPointerCapture?.(e.pointerId);
  });
  cropCanvas.addEventListener("pointermove", (e) => {
    if (!cropState.dragging) return;
    e.preventDefault();
    moveCropDrag(e.clientX, e.clientY);
  });
  cropCanvas.addEventListener("pointerup", () => { stopCropDrag(); });
  cropCanvas.addEventListener("pointercancel", () => { stopCropDrag(); });
  window.addEventListener("pointerup", () => { stopCropDrag(); });
  applyCropBtn.addEventListener("click", () => { pendingPlayerPhotoDataUrl = cropCanvas.toDataURL("image/png"); setRosterPreview(pendingPlayerPhotoDataUrl); playerPhotoFileNameEl.textContent = "Cropped photo ready"; playerPhotoEl.value = ""; openCrop(false); });
  cancelCropBtn.addEventListener("click", () => { playerPhotoEl.value = ""; pendingPlayerPhotoDataUrl = ""; if (editingPlayerIndex !== null && state.players[editingPlayerIndex]?.photoDataUrl) { setRosterPreview(state.players[editingPlayerIndex].photoDataUrl); playerPhotoFileNameEl.textContent = "Current photo on file"; } else { setRosterPreview(""); playerPhotoFileNameEl.textContent = "No file selected"; } openCrop(false); });

  eventTypeEl.addEventListener("change", () => {
    const type = normalizeType(eventTypeEl.value);
    const previousType = normalizeType(eventFormRenderedType);
    if (editingEventId && previousType && type && type !== previousType) {
      openAppDialog({
        title: "Change Event Type",
        message: "Are you sure? Changing the event type will clear the current type-specific information.",
        confirmLabel: "Change Type",
        cancelLabel: "Keep Type",
        allowBackdropClose: false,
        onConfirm: () => {
          renderEventTypeDetails(type);
          if (!eventTitleEl.value.trim()) eventTitleEl.placeholder = getSuggestedEventTitlePlaceholder(type);
          return true;
        },
        onCancel: () => {
          eventTypeEl.value = previousType;
        },
      });
      return;
    }
    renderEventTypeDetails(type);
    if (!eventTitleEl.value.trim()) eventTitleEl.placeholder = getSuggestedEventTitlePlaceholder(type);
  });
  eventTypeDetailsEl.addEventListener("click", (e) => {
    const raw = e.target;
    if (!(raw instanceof HTMLElement)) return;
    const prizeActionBtn = raw.closest(".raffle-prize-action-btn");
    if (prizeActionBtn) {
      const action = prizeActionBtn.getAttribute("data-row-action") || "remove";
      const row = prizeActionBtn.closest("[data-raffle-prize-row]");
      if (!row) return;
      if (action === "add") {
        if (!isRafflePrizeRowFilled(row)) return;
        row.setAttribute("data-row-state", "saved");
        prizeActionBtn.textContent = "Remove";
        prizeActionBtn.setAttribute("data-row-action", "remove");
        ensureDraftRafflePrizeRow();
        const draftTitle = eventTypeDetailsEl.querySelector('[data-raffle-prize-row][data-row-state="draft"] .raffle-prize-title');
        if (draftTitle instanceof HTMLInputElement) draftTitle.focus();
      } else {
        row.remove();
        ensureDraftRafflePrizeRow();
      }
      return;
    }
    const trigger = raw.closest(".calendar-trigger");
    if (!trigger) return;
    const nativeTarget = trigger.dataset.calendarTarget || "";
    if (nativeTarget) {
      const input = $(nativeTarget);
      if (input instanceof HTMLInputElement) {
        if (typeof input.showPicker === "function") {
          try { input.showPicker(); } catch (_e) { input.focus(); input.click(); }
        } else {
          input.focus();
          input.click();
        }
      }
      return;
    }
    if (trigger.dataset.calendarFlow !== "canning-range") return;
    const anchor = $("canningDateRangeDisplay") || trigger;
    openCalendarPopover(anchor);
  });
  eventTypeDetailsEl.addEventListener("input", (e) => {
    const t = e.target;
    if (!(t instanceof HTMLInputElement)) return;
    if (t.id !== "canningStartTime") return;
    const end = $("canningEndTime");
    if (!end) return;
    end.value = addHoursToTime(t.value, 2) || "";
  });
  calendarPrevBtn.addEventListener("click", () => {
    calendarView.month -= 1;
    if (calendarView.month < 0) { calendarView.month = 11; calendarView.year -= 1; }
    renderCalendarGrid();
  });
  calendarNextBtn.addEventListener("click", () => {
    calendarView.month += 1;
    if (calendarView.month > 11) { calendarView.month = 0; calendarView.year += 1; }
    renderCalendarGrid();
  });
  calendarGrid.addEventListener("click", (e) => {
    e.stopPropagation();
    const t = e.target;
    if (!(t instanceof HTMLElement)) return;
    if (!t.classList.contains("calendar-day-btn")) return;
    const iso = t.dataset.iso || "";
    if (!iso) return;
    if (!calendarDraft.startDate || (calendarDraft.startDate && calendarDraft.endDate)) {
      calendarDraft.startDate = iso;
      calendarDraft.endDate = "";
    } else if (iso <= calendarDraft.startDate) {
      calendarDraft.startDate = iso;
      calendarDraft.endDate = "";
    } else {
      calendarDraft.endDate = iso;
    }
    renderCalendarGrid();
  });
  calendarDoneBtn.addEventListener("click", () => {
    applyCalendarSelection();
    closeCalendarPopover();
  });
  eventFlyersEl.addEventListener("change", () => {
    let files = Array.from(eventFlyersEl.files || []);
    const retainedCount = getRetainedFlyerCountForEditingEvent();
    if (!enforceFlyerLimit(retainedCount, files.length)) {
      eventFlyersEl.value = "";
      files = [];
      clearEventFlyerPreviews();
    }
    const c = files.length;
    eventFlyersFileNameEl.textContent = c ? `${c} file${c === 1 ? "" : "s"} selected` : "No files selected";
    renderEventFlyerPreviews(files);
  });
  eventFlyersPreviewEl.addEventListener("click", (e) => {
    const t = e.target;
    if (!(t instanceof HTMLElement)) return;
    const deleteBtn = t.closest(".flyer-preview-delete-btn");
    if (deleteBtn) {
      const idx = Number(deleteBtn.getAttribute("data-delete-stored-index") || "");
      if (!Number.isInteger(idx) || idx < 0 || !editingEventId) return;
      editingEventRemovedFlyerIndices.add(idx);
      const editingEvent = getEventById(editingEventId);
      if (!editingEvent) return;
      renderStoredEventFlyerPreviews(editingEvent.flyers || []);
      return;
    }
    const preview = t.closest("[data-preview-src]");
    if (!preview) return;
    const src = preview.dataset.previewSrc || "";
    const title = preview.dataset.previewTitle || "Flyer Preview";
    const mime = preview.dataset.previewMime || "application/octet-stream";
    if (!src) return;
    openFlyerPreview(true, src, title, mime);
  });
  closeFlyerPreviewBtn.addEventListener("click", () => openFlyerPreview(false));
  flyerPreviewBackdrop.addEventListener("click", () => openFlyerPreview(false));
  appDialogConfirmBtn.addEventListener("click", async () => {
    const result = appDialogOnConfirm ? appDialogOnConfirm(appDialogInputEl.value, appDialogInput2El.value) : true;
    const shouldClose = result instanceof Promise ? await result : result;
    if (shouldClose !== false) closeAppDialog(false);
  });
  appDialogExtraBtn.addEventListener("click", async () => {
    const result = appDialogOnExtra ? appDialogOnExtra(appDialogInputEl.value, appDialogInput2El.value) : true;
    const shouldClose = result instanceof Promise ? await result : result;
    if (shouldClose !== false) closeAppDialog(false);
  });
  appDialogTertiaryBtn.addEventListener("click", async () => {
    const result = appDialogOnTertiary ? appDialogOnTertiary(appDialogInputEl.value, appDialogInput2El.value) : true;
    const shouldClose = result instanceof Promise ? await result : result;
    if (shouldClose !== false) closeAppDialog(false);
  });
  appDialogCancelBtn.addEventListener("click", () => closeAppDialog(true));
  appDialogBackdrop.addEventListener("click", () => {
    if (!appDialogAllowBackdropClose) return;
    closeAppDialog(true);
  });
  openEventBtn.addEventListener("click", () => { resetEventFormState(); openEvent(true); });
  cancelEventBtn.addEventListener("click", () => { resetEventFormState(); openEvent(false); });
  closeEventDetailBtn.addEventListener("click", () => openEventDetail(false));
  applyLiveMoneyFormatting(raffleAmountPaidEl, true);
  raffleTicketPackageEl?.addEventListener("change", () => updateRaffleTicketAmountDefault(true));
  raffleCustomTicketCountEl?.addEventListener("input", () => {
    if ((raffleTicketPackageEl?.value || "") !== "custom") return;
    updateRaffleTicketAmountDefault(true);
  });
  raffleTicketCancelBtn?.addEventListener("click", () => {
    resetRaffleTicketForm();
    updateRaffleTicketAmountDefault(true);
  });
  raffleTicketForm?.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const event = getEventById(selectedEventId);
    if (!event || normalizeType(event.type) !== "raffle") return;
    const name = raffleBuyerNameEl?.value.trim() || "";
    const contact = raffleBuyerContactEl?.value.trim() || "";
    const packageType = raffleTicketPackageEl?.value || "1";
    const ticketCount = getRafflePackageTicketCount(packageType, raffleCustomTicketCountEl?.value);
    const amountPaid = parseMoneyInput(raffleAmountPaidEl?.value);
    if (!name || !contact) {
      openAppDialog({ title: "Ticket Buyer", message: "Enter the buyer name and contact.", confirmLabel: "OK", showCancel: false });
      return;
    }
    if (!Number.isFinite(amountPaid) || amountPaid < 0) {
      openAppDialog({ title: "Ticket Buyer", message: "Enter a valid amount paid.", confirmLabel: "OK", showCancel: false });
      return;
    }
    if (!event.details || typeof event.details !== "object") event.details = {};
    const currentSales = getRaffleTicketSales(event.details);
    const nextSale = {
      id: editingRaffleSaleId || crypto.randomUUID(),
      name,
      contact,
      packageType,
      ticketCount,
      amountPaid,
      createdAt: editingRaffleSaleId ? (currentSales.find((sale) => sale.id === editingRaffleSaleId)?.createdAt || new Date().toISOString()) : new Date().toISOString(),
    };
    event.details.ticketSales = editingRaffleSaleId ? currentSales.map((sale) => (sale.id === editingRaffleSaleId ? nextSale : sale)) : [nextSale, ...currentSales];
    syncRaffleRaisedForEvent(event);
    resetRaffleTicketForm();
    renderEvents();
    renderGoal();
    renderEventDetail();
    saveState();
  });
  eventDetailTicketSalesList?.addEventListener("click", (evt) => {
    const raw = evt.target;
    if (!(raw instanceof HTMLElement)) return;
    const event = getEventById(selectedEventId);
    if (!event || normalizeType(event.type) !== "raffle") return;
    const editBtn = raw.closest("[data-raffle-sale-edit]");
    if (editBtn) {
      startEditingRaffleSale(event, editBtn.getAttribute("data-raffle-sale-edit") || "");
      return;
    }
    const deleteBtn = raw.closest("[data-raffle-sale-delete]");
    if (!deleteBtn) return;
    const saleId = deleteBtn.getAttribute("data-raffle-sale-delete") || "";
    if (!saleId) return;
    openAppDialog({
      title: "Delete Ticket Buyer",
      message: "Remove this ticket sale entry?",
      confirmLabel: "Delete",
      cancelLabel: "Cancel",
      onConfirm: () => {
        if (!event.details || typeof event.details !== "object") event.details = {};
        event.details.ticketSales = getRaffleTicketSales(event.details).filter((sale) => sale.id !== saleId);
        if (editingRaffleSaleId === saleId) resetRaffleTicketForm();
        syncRaffleRaisedForEvent(event);
        renderEvents();
        renderGoal();
        renderEventDetail();
        saveState();
        return true;
      },
    });
  });
  slotAssignCancelBtn.addEventListener("click", () => openSlotAssign(false));
  slotAssignSaveBtn.addEventListener("click", () => {
    const e = getEventById(selectedEventId);
    if (!e || !selectedSlotKey) { openSlotAssign(false); return; }
    if (!e.details || typeof e.details !== "object") e.details = {};
    if (!e.details.assignments || typeof e.details.assignments !== "object") e.details.assignments = {};
    if (slotAssignDraftNames.length) e.details.assignments[selectedSlotKey] = slotAssignDraftNames.slice();
    else delete e.details.assignments[selectedSlotKey];
    renderEventDetail();
    saveState();
    openSlotAssign(false);
  });
  slotAssignBackdrop.addEventListener("click", () => {});
  slotAssignClearBtn.addEventListener("click", () => {
    if (!selectedSlotKey) return;
    slotAssignDraftNames = [];
    renderSlotAssignRoster();
  });
  eventDetailScheduleGrid.addEventListener("click", (evt) => {
    const t = evt.target;
    if (!(t instanceof HTMLElement)) return;
    const moneyBtn = t.closest(".canning-slot-money-btn");
    if (moneyBtn) {
      const e = getEventById(selectedEventId);
      if (!e || normalizeType(e.type) !== "canning") return;
      const slotKey = moneyBtn.dataset.slotKey || "";
      if (!slotKey) return;
      const current = Number(moneyBtn.dataset.slotRaised || "0") || 0;
      openAppDialog({
        title: "Update Slot Total",
        message: "Add amount and/or set a new total for this time block:",
        inputType: "number",
        inputLabel: "Add Amount",
        inputValue: "",
        inputPlaceholder: "0",
        inputPrefix: "$",
        input2Type: "number",
        input2Label: "Set Total",
        input2Value: "",
        input2Placeholder: "0",
        input2Prefix: "$",
        confirmLabel: "Update",
        cancelLabel: "Cancel",
        allowBackdropClose: false,
        onConfirm: (value, value2) => {
          const addRaw = String(value ?? "").trim();
          const setRaw = String(value2 ?? "").trim();
          if (!addRaw && !setRaw) {
            openAppDialog({ title: "Invalid Value", message: "Enter an amount to add and/or a total to set.", confirmLabel: "OK", showCancel: false });
            return false;
          }
          const add = addRaw ? parseMoneyInput(addRaw) : 0;
          const set = setRaw ? parseMoneyInput(setRaw) : null;
          if (Number.isNaN(add) || add < 0 || (setRaw && (set === null || Number.isNaN(set) || set < 0))) {
            openAppDialog({ title: "Invalid Value", message: "Enter a valid non-negative number.", confirmLabel: "OK", showCancel: false });
            return false;
          }
          const n = (setRaw ? (set || 0) : current) + add;
          if (!e.details || typeof e.details !== "object") e.details = {};
          if (!e.details.slotTotals || typeof e.details.slotTotals !== "object") e.details.slotTotals = {};
          if (n > 0) e.details.slotTotals[slotKey] = n;
          else delete e.details.slotTotals[slotKey];
          syncCanningRaisedForEvent(e);
          renderEvents();
          renderGoal();
          renderEventDetail();
          saveState();
          return true;
        },
      });
      return;
    }
    const slotBtn = t.closest(".canning-slot-assign-btn");
    if (!slotBtn) return;
    const e = getEventById(selectedEventId);
    if (!e || normalizeType(e.type) !== "canning") return;
    const slotKey = slotBtn.dataset.slotKey || "";
    if (!slotKey) return;
    selectedSlotKey = slotKey;
    slotAssignDraftNames = getSlotAssignedNames(e.details?.assignments, selectedSlotKey);
    renderSlotAssignRoster();
    openSlotAssign(true);
  });
  eventDetailUpdateRaisedBtn.addEventListener("click", () => {
    const e = getEventById(selectedEventId);
    if (!e || e.isLive === false) return;
    const current = Number(e.raisedSoFar) || 0;
    openAppDialog({
      title: "Update Raised",
      message: "Add amount and/or set a new total:",
      inputType: "number",
      inputLabel: "Add Amount",
      inputValue: "",
      inputPlaceholder: "0",
      inputPrefix: "$",
      input2Type: "number",
      input2Label: "Set Total",
      input2Value: "",
      input2Placeholder: "0",
      input2Prefix: "$",
      confirmLabel: "Update",
      cancelLabel: "Cancel",
      allowBackdropClose: false,
      onConfirm: (value, value2) => {
        const addRaw = String(value ?? "").trim();
        const setRaw = String(value2 ?? "").trim();
        if (!addRaw && !setRaw) {
          openAppDialog({ title: "Invalid Value", message: "Enter an amount to add and/or a total to set.", confirmLabel: "OK", showCancel: false });
          return false;
        }
        const add = addRaw ? parseMoneyInput(addRaw) : 0;
        const set = setRaw ? parseMoneyInput(setRaw) : null;
        if (Number.isNaN(add) || add < 0 || (setRaw && (set === null || Number.isNaN(set) || set < 0))) {
          openAppDialog({ title: "Invalid Value", message: "Enter a valid non-negative number.", confirmLabel: "OK", showCancel: false });
          return false;
        }
        const n = (setRaw ? (set || 0) : current) + add;
        e.raisedSoFar = n;
        renderEvents(); renderGoal(); renderEventDetail(); saveState();
        return true;
      },
    });
  });
  eventDetailEditBtn.addEventListener("click", () => {
    const e = getEventById(selectedEventId);
    if (!e) return;
    startEditingEvent(e);
  });
  eventDetailAddFlyerBtn.addEventListener("click", () => {
    const e = getEventById(selectedEventId);
    if (!e || e.isLive === false) return;
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*,.pdf";
    input.multiple = true;
    input.addEventListener("change", async () => {
      const files = Array.from(input.files || []);
      if (!files.length) return;
      const existingCount = Array.isArray(e.flyers) ? e.flyers.length : 0;
      if (!enforceFlyerLimit(existingCount, files.length)) return;
      const items = await Promise.all(files.map(async (file) => {
        const dataUrl = await readEventFlyerDataUrl(file);
        const storedType = String(dataUrl || "").startsWith("data:image/") ? "image/jpeg" : (file.type || "application/octet-stream");
        return { name: file.name, type: storedType, dataUrl, uploadedAt: new Date().toISOString() };
      }));
      e.flyers = [...(e.flyers || []), ...items];
      renderEvents(); renderEventDetail(); saveState();
    });
    input.click();
  });
  eventDetailEndBtn.addEventListener("click", () => {
    const e = getEventById(selectedEventId);
    if (!e || e.isLive === false) return;
    e.isLive = false;
    e.endedAt = new Date().toISOString();
    renderEvents(); renderEventDetail(); saveState();
  });
  eventDetailDeleteBtn.addEventListener("click", () => {
    const e = getEventById(selectedEventId);
    if (!e) return;
    openAppDialog({
      title: "Delete Event",
      message: `Are you sure you want to delete "${e.title}"? This cannot be undone.`,
      confirmLabel: "Delete",
      cancelLabel: "Cancel",
      onConfirm: () => {
        state.events = state.events.filter((x) => x.id !== e.id);
        renderEvents();
        renderGoal();
        openEventDetail(false);
        saveState();
        return true;
      },
    });
  });
  eventForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const type = normalizeType(eventTypeEl.value);
    const title = eventTitleEl.value.trim();
    const existingEvent = editingEventId ? getEventById(editingEventId) : null;
    const raisedSoFar = existingEvent ? Number(existingEvent.raisedSoFar) || 0 : 0;
    const leadName = eventLeadNameEl.value.trim();
    const leadPhone = eventLeadPhoneEl.value.trim();
    if (!title || !type || !leadName || !leadPhone) return;
    const details = collectTypeDetails(type, existingEvent?.details || {});
    if (type === "canning") {
      const error = validateCanningDetails(details);
      if (error) {
        openAppDialog({ title: "Canning Validation", message: error, confirmLabel: "OK", showCancel: false });
        return;
      }
    }
    const files = Array.from(eventFlyersEl.files || []);
    const retainedCount = getRetainedFlyerCountForEditingEvent();
    if (!enforceFlyerLimit(retainedCount, files.length)) return;
    const flyers = await Promise.all(files.map(async (file) => {
      const dataUrl = await readEventFlyerDataUrl(file);
      const storedType = String(dataUrl || "").startsWith("data:image/") ? "image/jpeg" : (file.type || "application/octet-stream");
      return { name: file.name, type: storedType, dataUrl, uploadedAt: new Date().toISOString() };
    }));
    if (existingEvent) {
      existingEvent.title = title;
      existingEvent.type = type;
      existingEvent.lead = { name: leadName, phone: formatPhone(leadPhone), email: eventLeadEmailEl.value.trim() };
      existingEvent.details = details;
      const keptFlyers = (existingEvent.flyers || []).filter((_, idx) => !editingEventRemovedFlyerIndices.has(idx));
      existingEvent.flyers = [...keptFlyers, ...flyers];
      selectedEventId = existingEvent.id;
      renderEventDetail();
    } else {
      state.events.push({ id: crypto.randomUUID(), title, type, raisedSoFar, lead: { name: leadName, phone: formatPhone(leadPhone), email: eventLeadEmailEl.value.trim() }, notes: "", details, flyers, isLive: true, createdAt: new Date().toISOString() });
    }
    resetEventFormState();
    renderEvents(); renderGoal(); openEvent(false); if (existingEvent) openEventDetail(true); saveState();
  });

  window.addEventListener("resize", () => {
    if (!playerDetailModal.classList.contains("is-hidden")) positionPlayerDetail();
    positionCalendarPopover();
    updateRosterListScrollState();
    updateEventListScrollState();
  });
  document.addEventListener("click", (e) => {
    if (!calendarPopover.classList.contains("is-hidden")) {
      const path = typeof e.composedPath === "function" ? e.composedPath() : [];
      const insideCalendar = path.includes(calendarPopover);
      const insideEventDetails = path.includes(eventTypeDetailsEl);
      if (!insideCalendar && !insideEventDetails) closeCalendarPopover();
    }
    if (playerDetailModal.classList.contains("is-hidden")) return;
    const t = e.target;
    const inside = playerDetailModal.contains(t);
    const onAnchor = selectedPlayerAnchor && (selectedPlayerAnchor === t || selectedPlayerAnchor.contains(t));
    if (!inside && !onAnchor) { openPlayerDetail(false); selectedPlayerIndex = null; selectedPlayerAnchor = null; }
  });
}

async function initApp() {
  await loadState();
  wireInputs();
  applyTheme();
  renderTeam();
  openTeam(false);
  openGoal(false);
  openRoster(false);
  openEvent(false);
  openEventDetail(false);
  openSlotAssign(false);
  openCrop(false);
  openPlayerDetail(false);
  renderRoster();
  renderEvents();
  renderGoal();
}

initApp().catch(() => {
  wireInputs();
  applyTheme();
  renderTeam();
  openTeam(false);
  openGoal(false);
  openRoster(false);
  openEvent(false);
  openEventDetail(false);
  openSlotAssign(false);
  openCrop(false);
  openPlayerDetail(false);
  renderRoster();
  renderEvents();
  renderGoal();
});
