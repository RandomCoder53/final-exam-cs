async function delay(ms) {
                await new Promise(resolve => setTimeout(resolve, ms));
            }
            console.log("Before delay");
            delay(2000);
            console.log("After delay");