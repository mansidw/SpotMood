async function emotionDetection(data) {
  const response = await fetch(
    // "https://api-inference.huggingface.co/models/sriAryan18/tf_bert_uncased_emotion_detection2",
    "https://api-inference.huggingface.co/models/bhadresh-savani/bert-base-go-emotion",
    {
      headers: {
        Authorization: process.env.REACT_APP_HUGGINGFACE_TOKEN,
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  return result;
}

async function sentimentDetection(data) {
  const response = await fetch(
    "https://api-inference.huggingface.co/models/cardiffnlp/twitter-roberta-base-sentiment-latest",
    {
      headers: {
        Authorization: process.env.REACT_APP_HUGGINGFACE_TOKEN,
      },
      method: "POST",
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  return result;
}

export { emotionDetection, sentimentDetection };
