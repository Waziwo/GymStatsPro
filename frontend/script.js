// frontend/js/script.js
import { db } from './firebase.js';
import { collection, addDoc, getDocs } from 'firebase/firestore';

document.getElementById('addResult').addEventListener('click', async () => {
    const result = prompt("Wprowadź wynik:");
    if (result) {
        try {
            await addDoc(collection(db, "results"), {
                result: result,
                timestamp: new Date()
            });
            alert("Wynik dodany!");
            loadResults();
        } catch (error) {
            console.error("Błąd podczas dodawania wyniku:", error);
            alert("Wystąpił błąd podczas dodawania wyniku.");
        }
    }
});

async function loadResults() {
    try {
        const querySnapshot = await getDocs(collection(db, "results"));
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = '';
        querySnapshot.forEach((doc) => {
            const resultItem = document.createElement('div');
            resultItem.textContent = doc.data().result;
            resultsDiv.appendChild(resultItem);
        });
    } catch (error) {
        console.error("Błąd podczas ładowania wyników:", error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});
loadResults();