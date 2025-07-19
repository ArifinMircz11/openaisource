async function kirimPrompt() {
  const prompt = document.getElementById("prompt").value;
  const hasil = document.getElementById("hasil");
  hasil.textContent = "⏳ Meminta jawaban dari GPT...";

  const API_KEY = "sk-proj-ISI-PUNYA-KAMU-DI-SINI"; // <- JANGAN PUBLISH INI DI PUBLIK!
  const endpoint = "https://api.openai.com/v1/chat/completions";

  const data = {
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7
  };

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify(data)
    });

    const json = await response.json();
    hasil.textContent = json.choices[0].message.content;
  } catch (error) {
    hasil.textContent = "❌ Gagal mendapatkan jawaban.";
    console.error(error);
  }
}
