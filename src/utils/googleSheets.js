const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzGkdKTX8YCNMKl6v0okPE7qqKrTDA8yu3oRlu-R-kV05k4QMgX6N9bQxLTHAtWhoU/exec";

export async function submitToSheets(payload) {
  try {
    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    const text = await response.text();

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      data = { success: false, message: text || "Invalid response from server" };
    }

    return {
      success: !!data.success,
      message: data.message || "Submitted successfully",
    };
  } catch (error) {
    return {
      success: false,
      message: error.message || "Network error",
    };
  }
}