import React, {useState, useEffect } from 'react';
import Link from 'next/link';

const renderAlbumData = (d) => {
	const listAlbumData = d.map((i, k) => <div key={k}>{i}</div>)
}

export default function fetchMusic() {
	const [albumData, setAlbumData] = useState([]);
	const [songData, setSongData] = useState([]);
	const [artistData, setArtistData] = useState([]);

	async function fetchAlbums() { 
		return fetch("http://localhost:5000/albums")
			.then((res) => res.json()) 
			.then((d) => setAlbumData(d)) 
	}

	async function fetchSongs() {
		return fetch("http://localhost:5000/songs")
			.then((res) => res.json())
			.then((s) => setSongData(s))
	}
	async function fetchArtists() {
		return fetch("http://localhost:5000/artists")
			.then((res) => res.json())
			.then((a) => setSongData(a))
	}

	useEffect(() => {
		fetchAlbums();
		fetchSongs();
		fetchArtists();
		renderAlbumData(albumData);
	}, [])

	for (let o = 0; o > 10; i++) {
		// do something here		
	}

	return ( 
		<div>
			this is supposed to be fetching music
				
			Back to home <Link href='/'>through here</Link>
			{albumData.map((dataObj, key) => {
				return <div key={key}>
						<h1>{dataObj.name}</h1>
						<p>{dataObj.id}</p>
					</div>
			})}
			{songData.map((dataObj, key) => {
				return <div key={key}>
						<h3>{dataObj.name}</h3>
						<p>{dataObj.id}</p>
					</div>
			})}
			{artistData.map((dataObj, key) => {
				return <div key={key}>
						<h3>{dataObj.name}</h3>
						<p>{dataObj.id}</p>	
					</div> 
			})}

		</div>
	)
}
