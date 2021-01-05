import React, { FunctionComponent } from 'react';
import { UserList } from '../Users/Users';

interface Props {}

const users = [{"gender":"female","name":{"title":"Ms","first":"عسل","last":"رضایی"},"location":{"street":{"number":8783,"name":"هویزه"},"city":"قرچک","state":"سیستان و بلوچستان","country":"Iran","postcode":79637,"coordinates":{"latitude":"28.7799","longitude":"90.0337"},"timezone":{"offset":"-10:00","description":"Hawaii"}},"email":"aasl.rdyy@example.com","login":{"uuid":"82c1eda7-c207-4a18-81a6-586d2ccd3e08","username":"greenfrog572","password":"nancy","salt":"idBNfGYh","md5":"26a527d6e89435a6f4f6fd9cff0325c8","sha1":"03d419b5e199981116f9eb3d44cbbef60d51d21a","sha256":"be9886439f24fd941451e46901a7b4b0e036c59feca9f244518620358b7d3710"},"dob":{"date":"1965-06-27T05:51:08.714Z","age":56},"registered":{"date":"2016-08-21T20:36:08.480Z","age":5},"phone":"078-81805726","cell":"0908-252-1581","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/women/16.jpg","medium":"https://randomuser.me/api/portraits/med/women/16.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/16.jpg"},"nat":"IR"},{"gender":"male","name":{"title":"Mr","first":"Magnus","last":"Thomsen"},"location":{"street":{"number":7394,"name":"Søndertoften"},"city":"Stenderup","state":"Nordjylland","country":"Denmark","postcode":84533,"coordinates":{"latitude":"39.2134","longitude":"-107.2663"},"timezone":{"offset":"+3:00","description":"Baghdad, Riyadh, Moscow, St. Petersburg"}},"email":"magnus.thomsen@example.com","login":{"uuid":"a0d38438-d255-48f9-bdc9-d6c3fae83890","username":"organicbear986","password":"lookout","salt":"yXn7O5Gm","md5":"e542516e059cfe4ac70371fe2479cd80","sha1":"364a8e5768c032fadb9dd9ac612c11e940900d42","sha256":"c425aa9670560432fec0a0f5275fb91f1c83363f76429842ff208b23cdcc20c6"},"dob":{"date":"1963-02-12T20:50:07.229Z","age":58},"registered":{"date":"2018-09-03T12:51:51.987Z","age":3},"phone":"99672998","cell":"10469021","id":{"name":"CPR","value":"120263-1250"},"picture":{"large":"https://randomuser.me/api/portraits/men/32.jpg","medium":"https://randomuser.me/api/portraits/med/men/32.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/32.jpg"},"nat":"DK"},{"gender":"male","name":{"title":"Mr","first":"James","last":"Brown"},"location":{"street":{"number":590,"name":"Duke St"},"city":"Maitland","state":"New Brunswick","country":"Canada","postcode":"G9O 0B3","coordinates":{"latitude":"87.3973","longitude":"-57.1080"},"timezone":{"offset":"+4:30","description":"Kabul"}},"email":"james.brown@example.com","login":{"uuid":"f5febc3e-fd10-469f-9322-4801772a0694","username":"heavybutterfly597","password":"casey1","salt":"IxG92XyX","md5":"cb8c8bed4262ffb54fb3402bf495ba7f","sha1":"2541ab048d73df84836f8da7c10869abf2a40042","sha256":"4fc22d816efff97896fcb3f440c2f3b201d7880c0cde08f9d2154b881725c2d3"},"dob":{"date":"1986-04-24T00:03:59.346Z","age":35},"registered":{"date":"2003-10-08T21:06:41.869Z","age":18},"phone":"169-573-4515","cell":"650-613-8551","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/9.jpg","medium":"https://randomuser.me/api/portraits/med/men/9.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/9.jpg"},"nat":"CA"},{"gender":"male","name":{"title":"Mr","first":"Ed","last":"Jacobs"},"location":{"street":{"number":359,"name":"North Street"},"city":"Winchester","state":"Dumfries and Galloway","country":"United Kingdom","postcode":"Z9 1HD","coordinates":{"latitude":"-82.5450","longitude":"18.8783"},"timezone":{"offset":"-4:00","description":"Atlantic Time (Canada), Caracas, La Paz"}},"email":"ed.jacobs@example.com","login":{"uuid":"68fdc6c3-718c-4113-9e9b-47818a91a26e","username":"bigtiger974","password":"clemson","salt":"CDRSzn5S","md5":"bc14d57316ceacbf817252f675a800ab","sha1":"0209f67679a77c00aa4e1b0f6932933fc41b7807","sha256":"75c78431ac9485e1c1ea2c24972be0ef5519e64f896f4deae9796e665f86355b"},"dob":{"date":"1948-02-12T21:03:25.536Z","age":73},"registered":{"date":"2010-12-09T03:58:16.727Z","age":11},"phone":"016977 0476","cell":"0777-425-240","id":{"name":"NINO","value":"PG 17 59 84 M"},"picture":{"large":"https://randomuser.me/api/portraits/men/63.jpg","medium":"https://randomuser.me/api/portraits/med/men/63.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/63.jpg"},"nat":"GB"},{"gender":"male","name":{"title":"Mr","first":"Nihal","last":"Dağdaş"},"location":{"street":{"number":8889,"name":"Mevlana Cd"},"city":"Kırklareli","state":"Erzurum","country":"Turkey","postcode":30743,"coordinates":{"latitude":"14.9009","longitude":"2.3767"},"timezone":{"offset":"-4:00","description":"Atlantic Time (Canada), Caracas, La Paz"}},"email":"nihal.dagdas@example.com","login":{"uuid":"24f81048-5474-408f-8f77-bb63eb31ef17","username":"bluemeercat785","password":"towers","salt":"MRaB0Ose","md5":"dc7ff381d216e8c788dfb6ef65eafb49","sha1":"f656a1bcd1925f32872e55dd050da0263c1406ee","sha256":"9a6b34f3d843a33634641290e992bf22fe245bba8a0777ce77a848734b5bc846"},"dob":{"date":"1956-09-26T18:13:57.868Z","age":65},"registered":{"date":"2006-01-23T17:27:35.751Z","age":15},"phone":"(872)-513-3114","cell":"(562)-862-0442","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/23.jpg","medium":"https://randomuser.me/api/portraits/med/men/23.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/23.jpg"},"nat":"TR"},{"gender":"female","name":{"title":"Miss","first":"Sascha","last":"Fraanje"},"location":{"street":{"number":3259,"name":"Bergvenstraat"},"city":"Goingarijp","state":"Gelderland","country":"Netherlands","postcode":83731,"coordinates":{"latitude":"24.0978","longitude":"94.3192"},"timezone":{"offset":"+8:00","description":"Beijing, Perth, Singapore, Hong Kong"}},"email":"sascha.fraanje@example.com","login":{"uuid":"4ffc16ad-de84-45df-9d87-fc81913f0af7","username":"bigpeacock883","password":"salasana","salt":"IXMR52nO","md5":"a2376d89931a0504e586aadc37495032","sha1":"a0564c4c0e4d6827387761b6b0397978a1b94a8d","sha256":"fa61fd06de031a5c34a00cb0ea93450c83053791674df302009d507a91170a16"},"dob":{"date":"1969-03-25T13:42:51.028Z","age":52},"registered":{"date":"2009-04-23T14:47:13.829Z","age":12},"phone":"(196)-736-3694","cell":"(541)-621-2149","id":{"name":"BSN","value":"09253245"},"picture":{"large":"https://randomuser.me/api/portraits/women/62.jpg","medium":"https://randomuser.me/api/portraits/med/women/62.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/62.jpg"},"nat":"NL"},{"gender":"female","name":{"title":"Madame","first":"Cristina","last":"Hubert"},"location":{"street":{"number":5644,"name":"Place du 8 Novembre 1942"},"city":"Kriens","state":"Zürich","country":"Switzerland","postcode":7104,"coordinates":{"latitude":"-35.1383","longitude":"125.7133"},"timezone":{"offset":"+5:45","description":"Kathmandu"}},"email":"cristina.hubert@example.com","login":{"uuid":"12b5963f-789a-42d0-a70b-daba16d72572","username":"orangeduck808","password":"windsurf","salt":"QYKeDyAz","md5":"21e2439bda2cfed1315952f30e25b991","sha1":"1f434a1a0d3afba9dbd0593b3f60ed92ff0e6dbe","sha256":"c859bfb83959d2cec836f5efb2ab9ff3dff33929c9953689ca5cd1c889347080"},"dob":{"date":"1990-06-26T20:02:51.651Z","age":31},"registered":{"date":"2011-09-03T03:26:38.059Z","age":10},"phone":"076 320 35 50","cell":"075 171 47 19","id":{"name":"AVS","value":"756.0297.2042.24"},"picture":{"large":"https://randomuser.me/api/portraits/women/16.jpg","medium":"https://randomuser.me/api/portraits/med/women/16.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/16.jpg"},"nat":"CH"},{"gender":"female","name":{"title":"Ms","first":"Diana","last":"Henderson"},"location":{"street":{"number":2618,"name":"Harrison Ct"},"city":"Perth","state":"Australian Capital Territory","country":"Australia","postcode":2789,"coordinates":{"latitude":"-56.7059","longitude":"117.7035"},"timezone":{"offset":"-7:00","description":"Mountain Time (US & Canada)"}},"email":"diana.henderson@example.com","login":{"uuid":"5a0c16ba-8818-40f6-a5cc-a48cb36d95f5","username":"organicelephant949","password":"10101010","salt":"9aZ0nw36","md5":"a516134343333b77d5035dd813571070","sha1":"096ac6f17bc7923a9574ae463c3ce7a6d6484915","sha256":"55f91f828ae3499624c7190a976db59d997a8ddd2f41d3079be3e660683b622d"},"dob":{"date":"1989-01-21T07:34:24.600Z","age":32},"registered":{"date":"2016-08-02T01:16:03.797Z","age":5},"phone":"09-0473-6686","cell":"0477-921-372","id":{"name":"TFN","value":"851400867"},"picture":{"large":"https://randomuser.me/api/portraits/women/24.jpg","medium":"https://randomuser.me/api/portraits/med/women/24.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/24.jpg"},"nat":"AU"},{"gender":"male","name":{"title":"Mr","first":"Mathis","last":"Skulstad"},"location":{"street":{"number":2095,"name":"Søren Jaabæks gate"},"city":"Visnes","state":"Troms - Romsa","country":"Norway","postcode":"0915","coordinates":{"latitude":"69.7341","longitude":"56.3162"},"timezone":{"offset":"+4:00","description":"Abu Dhabi, Muscat, Baku, Tbilisi"}},"email":"mathis.skulstad@example.com","login":{"uuid":"8be59649-39cc-4748-870f-f2426901d4ea","username":"crazybutterfly279","password":"lolo","salt":"HeX9z5xR","md5":"bc100a2418888ed7946ef9ab18694de1","sha1":"f2d5ec8cecb9e00f8ae187d20d21b4ecc1f88902","sha256":"4ec3cc68508090b9d176f00d704115e1f867eb7066dfe0ef78af8e12010c04ef"},"dob":{"date":"1967-10-01T21:39:12.770Z","age":54},"registered":{"date":"2014-07-13T15:31:49.533Z","age":7},"phone":"81598254","cell":"92258676","id":{"name":"FN","value":"01106703554"},"picture":{"large":"https://randomuser.me/api/portraits/men/8.jpg","medium":"https://randomuser.me/api/portraits/med/men/8.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/8.jpg"},"nat":"NO"},{"gender":"male","name":{"title":"Mr","first":"Rins","last":"Vromans"},"location":{"street":{"number":3025,"name":"Breedendamlaan"},"city":"Reitsum","state":"Gelderland","country":"Netherlands","postcode":74954,"coordinates":{"latitude":"-37.2836","longitude":"83.0607"},"timezone":{"offset":"+10:00","description":"Eastern Australia, Guam, Vladivostok"}},"email":"rins.vromans@example.com","login":{"uuid":"01e838df-662b-412d-871a-f031931b8ed7","username":"silverfish618","password":"jets","salt":"u7sQnPWZ","md5":"20c52b22dd0b5beb2ca2fd903bbfb87c","sha1":"0e9a5cbb968bfd9eff232aee8e4a5cbf6dc1a1d9","sha256":"c022ead4806f2dc6f569684aff397e3ef28f2f863975518aedff69bec35609ae"},"dob":{"date":"1959-12-12T00:18:34.351Z","age":62},"registered":{"date":"2017-06-14T10:46:30.604Z","age":4},"phone":"(939)-869-9907","cell":"(977)-852-4020","id":{"name":"BSN","value":"83694112"},"picture":{"large":"https://randomuser.me/api/portraits/men/10.jpg","medium":"https://randomuser.me/api/portraits/med/men/10.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/10.jpg"},"nat":"NL"}]

export const Main: FunctionComponent<Props> = () => <main className="main">
  <h1 className="main-header">Get your users, nice and hot!</h1>
  <UserList users={users as any} />
</main>;
