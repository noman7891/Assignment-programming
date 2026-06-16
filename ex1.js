
// Function to validate luggage weight

const validateBag = () => {
  const bagWeight = Number(document.getElementById("weight").value);

  alert(`Entered baggage weight: ${bagWeight}kg`);

  if (bagWeight <= 15) {
    alert(`Your baggage is ${bagWeight}kg. It is within the permitted limit.`);
  } else {
    alert(
      `Your baggage is ${bagWeight}kg, which is above the allowed limit. Please remove some weight.`
    );

    // Show weight removal section
    document.getElementById("removed").style.display = "block";
    document.getElementById("remB").style.display = "block";
  }
};

// Function to update baggage weight after removing items

const updateBagWeight = () => {
  const removeWeight = Number(document.getElementById("removed").value);
  const currentBagWeight = Number(document.getElementById("weight").value);

  alert(`Removed weight: ${removeWeight}kg`);

  const finalWeight = currentBagWeight - removeWeight;

  document.getElementById("weight").value = finalWeight;

  if (finalWeight <= 15) {
    alert(
      `Updated baggage weight is ${finalWeight}kg. You can now proceed to check-in.`
    );

    // Hide controls after reaching valid weight
    document.getElementById("removed").style.display = "none";
    document.getElementById("remB").style.display = "none";
  } else {
    alert(
      `Updated baggage weight is still ${finalWeight}kg. More items need to be removed.`
    );
  }
};

