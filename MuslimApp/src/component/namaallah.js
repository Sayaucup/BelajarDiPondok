import React from 'react'
import {View,Text,StyleSheet,ScrollView,TouchableOpacity,Alert} from 'react-native'

class App extends React.Component {
    render(){
        return(
        <View>
            <ScrollView>
            <View style={{ flexDirection:'row-reverse',justifyContent:'center',flexWrap:'wrap'}}>
                <TouchableOpacity onPress={()=> Alert.alert('الرحمن','Maha Pemurah')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الرحمن</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الرحيم','Maha Penyayang')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الرحيم</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الملك','Maha Merajai (bisa di artikan Raja dari semua Raja)')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الملك</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('القدوس','Maha Suci')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}> القدوس</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('السلام','Maha Memberi Kesejahteraan')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>السلام</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('المؤمن','Maha Memberi Keamanan')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>المؤمن</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('المهيمن','Maha Mengatur')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>المهيمن</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('العزيز','Maha Perkasa')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>العزيز</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الجبار','Memiliki Mutlak Kegagahan')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الجبار</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('المتكبر','Maha Megah, Yang Memiliki Kebesaran')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>المتكبر</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الخالق','Maha Pencipta')}>
                <View style={styles.View}>
                    <View style={styles.View2}>
                        <Text style={styles.text}>الخالق</Text>    
                    </View>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('البارئ','Maha Melepaskan (Membuat, Membentuk, Menyeimbangkan)')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>البارئ</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('المصور','Maha Membentuk Rupa (makhluknya)')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>المصور</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الغفار','Maha Pengampun')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الغفار</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('القهار','Maha Menundukkan / Menaklukkan Segala Sesuatu')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>القهار</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الوهاب',' Maha Pemberi Karunia')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الوهاب</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الرزاق','Maha Pemberi Rezeki')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الرزاق</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الفتاح','Maha Pembuka Rahmat')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الفتاح</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
               <TouchableOpacity onPress={()=> Alert.alert('العليم','Maha Mengetahui (Memiliki Ilmu)')}>
                <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>العليم</Text>    
                        </View>
                    </View>
               </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('القابض','Maha Menyempitkan (makhluknya)')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>القابض</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الباسط','Maha Melapangkan (makhluknya)')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الباسط</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الخافض','Maha Merendahkan (makhluknya)')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الخافض</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الرافع','Maha Meninggikan (makhluknya)')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الرافع</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('المعز','Yang Maha Memuliakan (makhluknya)')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>المعز</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('المذل','Maha Menghinakan (makhluknya)')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>المذل</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('السميع','Maha Mendengar')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>السميع</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('البصير','Maha Melihat')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>البصير</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الحكم','Maha Menetapkan')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الحكم</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('العدل','Maha Adil')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>العدل</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('اللطيف','Maha Lembut')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>اللطيف</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الخبير','Maha Mengenal')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الخبير</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الحليم','Maha Penyantun')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الحليم</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('العظيم','Maha Agung')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>العظيم</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الغفور','Memberi Pengampunan')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الغفور</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الشكور','Maha Pembalas Budi (Menghargai)')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الشكور</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('العلى','Maha Tinggi')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>العلى</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الكبير','Maha Besar')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الكبير</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الحفيظ','Maha Memelihara')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الحفيظ</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('المقيت','Maha Pemberi Kecukupan')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>المقيت</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الحسيب','Maha Membuat Perhitungan')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الحسيب</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الجليل','Maha Luhur')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الجليل</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الكريم','Maha Pemurah')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الكريم</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الرقيب','Maha Mengawasi')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الرقيب</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('المجيب','Maha Mengabulkan')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>المجيب</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الواسع','Maha Luas')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الواسع</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الحكيم','Maha Bijaksana')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الحكيم</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الودود','Maha Mengasihi')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الودود</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('المجيد','Maha Mulia')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>المجيد</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الباعث','Maha Membangkitkan')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الباعث</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الشهيد','Maha Menyaksikan')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الشهيد</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الحق','Maha Benar')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الحق</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الوكيل','Maha Memelihara')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الوكيل</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('القوى','Maha Kuat')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>القوى</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('المتين','Maha Kokoh')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>المتين</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الولى','Maha Melindungi')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الولى</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الحميد','Maha Terpuji')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الحميد</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('المحصى','Maha Mengalkulasi (Menghitung Segala Sesuatu)')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>المحصى</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('المبدئ','Maha Memulai')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>المبدئ</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('المعيد','Maha Mengembalikan Kehidupan')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>المعيد</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('المحيى','Maha Menghidupkan')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>المحيى</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('المميت','Maha Mematikan')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>المميت</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الحي','Maha Hidup')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الحي</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('القيوم','Maha Mandiri')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>القيوم</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الواجد','Maha Penemu')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الواجد</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الماجد','Maha Mulia')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الماجد</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الواحد','Maha Tunggal')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الواحد</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الاحد','Maha Esa')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الاحد</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الصمد','Maha Dibutuhkan, Tempat Meminta')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الصمد</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('القادر','Maha Menentukan, Maha Menyeimbangkan')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>القادر</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('المقتدر','Maha Berkuasa')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>المقتدر</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('المقدم','Maha Mendahulukan')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>المقدم</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('المؤخر','Maha Mengakhirkan')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>المؤخر</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الأول','Maha Awal')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الأول</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الأخر','Maha Akhir')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الأخر</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الظاهر','Maha Nyata')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الظاهر</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الباطن','Maha Ghaib')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الباطن</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الوالي','Maha Memerintah')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الوالي</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('المتعالي','Maha Tinggi')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>المتعالي</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('البر','Maha Pemberi Kebajikan')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>البر</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('التواب','Maha Penerima Tobat')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>التواب</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('المنتقم','Maha Pemberi Balasan')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>المنتقم</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('العفو','Maha Pemaaf')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>العفو</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الرؤوف','Maha Pengasuh')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الرؤوف</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('مالك الملك','Maha Penguasa Kerajaan (Semesta)')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الواجد</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('ذو الجلال و الإكرام','Maha Pemilik Kebesaran dan Kemuliaan')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>ذو الجلال و الإكرام</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('المقسط','Maha  Pemberi Keadilan')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>المقسط</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الجامع','Maha Mengumpulkan')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الجامع</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الغنى','Maha Kaya')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الغنى</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('المغنى','Maha Pemberi Kekayaan')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>المغنى</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('المانع','Maha Mencegah')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>المانع</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الضار','Maha Penimpa Kemudharatan')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الضار</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('النافع','Maha Memberi Manfaat')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>النافع</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('النور','Maha Bercahaya (Menerangi, Memberi Cahaya)')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>النور</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الهادئ','Maha Pemberi Petunjuk')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الهادئ</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('البديع','Maha Maha Pencipta Yang Tiada Bandingannya')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>البديع</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الباقي','Maha Kekal')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الباقي</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الوارث','Maha Pewaris')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الوارث</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الرشيد','Maha Pandai')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الرشيد</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> Alert.alert('الصبور','Maha Sabar')}>
                    <View style={styles.View}>
                        <View style={styles.View2}>
                            <Text style={styles.text}>الصبور</Text>    
                        </View>
                    </View>
                </TouchableOpacity>
               
                
            </View>
            </ScrollView>
        </View>
        )
    }
}

export default App

const styles = StyleSheet.create({
    View2: {
      width: 60,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth:2,
      borderRadius:40,
      borderColor:'gray'
  
    },
    View:{
      borderColor:'gray',
      marginHorizontal: 10,
      marginVertical:10,
      borderRadius: 30 
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'gray',
    },
    Text: {
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'gray',
        marginBottom: 5,
    
      },
   
  })