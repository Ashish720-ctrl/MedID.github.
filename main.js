 // ✅ Wait for DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
  // ✅ Reference to your form
  const form = document.getElementById("healthForm");

  // ✅ Handle form submit
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop page reload

    // ✅ Get form values
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const blood = document.getElementById("blood").value;

    // ✅ Save to Firebase Firestore
    db.collection("healthCards").add({
      name: name,
      age: age,
      bloodGroup: blood,
      created: new Date()
    })
    .then(() => {
      alert("✅ Health Card Saved!");
      form.reset();

      // ✅ Generate QR Code with text info
      const qr = new QRious({
        element: document.getElementById("qr-code"),
        size: 200,
        value: `Name: ${name}, Age: ${age}, Blood Group: ${blood}`
      });
    })
    .catch((error) => {
      alert("❌ Error saving data: " + error.message);
    });
  });
});
