"use client";

import Footer from '@/components/ui/Footer';
import { Header } from '@/components/ui/Header';
import React from 'react';
import { translations } from '@/utils/translations';
import { usePathname } from 'next/navigation';

export default function Contact() {
  const pathname = usePathname();
  const getLangFromPath = (path?: string) => {
    if (!path) return 'en';
    const seg = path.split('/')[1];
    return seg === 'pt' ? 'pt' : 'en';
  };
  
  const [language, setLanguage] = React.useState(() => getLangFromPath(pathname));
  const t = (key: string) => {
    return translations[language]?.[key] || key;
  };   
  
  React.useEffect(() => {
    const lng = getLangFromPath(pathname);
    if (lng !== language) setLanguage(lng);
  }, [pathname]);

  const priorityCountries = [
    { code: 'BR', name: 'Brazil', dialCode: '+55', format: '(XX) XXXX-XXXX', flag: '🇧🇷' },
    { code: 'GB', name: 'United Kingdom', dialCode: '+44', format: 'XXXX XXX XXXX', flag: '🇬🇧' },
    { code: 'US', name: 'United States', dialCode: '+1', format: '(XXX) XXX-XXXX', flag: '🇺🇸' },
    { code: 'IT', name: 'Italy', dialCode: '+39', format: 'XXX XXX XXXX', flag: '🇮🇹' },
    { code: 'ES', name: 'Spain', dialCode: '+34', format: 'XXX XX XX XX', flag: '🇪🇸' }
  ];

const otherCountries = [
    { code: 'AF', name: 'Afghanistan', dialCode: '+93', format: 'XX XXX XXXX', flag: '🇦🇫' },
    { code: 'AL', name: 'Albania', dialCode: '+355', format: 'XX XXX XXXX', flag: '🇦🇱' },
    { code: 'DZ', name: 'Algeria', dialCode: '+213', format: 'XXX XX XX XX', flag: '🇩🇿' },
    { code: 'AD', name: 'Andorra', dialCode: '+376', format: 'XXX XXX', flag: '🇦🇩' },
    { code: 'AO', name: 'Angola', dialCode: '+244', format: 'XXX XXX XXX', flag: '🇦🇴' },
    { code: 'AR', name: 'Argentina', dialCode: '+54', format: 'XX XXXX-XXXX', flag: '🇦🇷' },
    { code: 'AM', name: 'Armenia', dialCode: '+374', format: 'XX XXX XXX', flag: '🇦🇲' },
    { code: 'AU', name: 'Australia', dialCode: '+61', format: 'XXX XXX XXX', flag: '🇦🇺' },
    { code: 'AT', name: 'Austria', dialCode: '+43', format: 'XXX XXX XXXX', flag: '🇦🇹' },
    { code: 'AZ', name: 'Azerbaijan', dialCode: '+994', format: 'XX XXX XX XX', flag: '🇦🇿' },
    { code: 'BH', name: 'Bahrain', dialCode: '+973', format: 'XXXX XXXX', flag: '🇧🇭' },
    { code: 'BD', name: 'Bangladesh', dialCode: '+880', format: 'XXXX-XXXXXX', flag: '🇧🇩' },
    { code: 'BY', name: 'Belarus', dialCode: '+375', format: 'XX XXX-XX-XX', flag: '🇧🇾' },
    { code: 'BE', name: 'Belgium', dialCode: '+32', format: 'XXX XX XX XX', flag: '🇧🇪' },
    { code: 'BZ', name: 'Belize', dialCode: '+501', format: 'XXX-XXXX', flag: '🇧🇿' },
    { code: 'BJ', name: 'Benin', dialCode: '+229', format: 'XX XX XX XX', flag: '🇧🇯' },
    { code: 'BT', name: 'Bhutan', dialCode: '+975', format: 'XX XX XX XX', flag: '🇧🇹' },
    { code: 'BO', name: 'Bolivia', dialCode: '+591', format: 'XXXX XXXX', flag: '🇧🇴' },
    { code: 'BA', name: 'Bosnia and Herzegovina', dialCode: '+387', format: 'XX-XXX-XXX', flag: '🇧🇦' },
    { code: 'BW', name: 'Botswana', dialCode: '+267', format: 'XX XXX XXX', flag: '🇧🇼' },
    { code: 'BN', name: 'Brunei', dialCode: '+673', format: 'XXX XXXX', flag: '🇧🇳' },
    { code: 'BG', name: 'Bulgaria', dialCode: '+359', format: 'XX XXX XXXX', flag: '🇧🇬' },
    { code: 'BF', name: 'Burkina Faso', dialCode: '+226', format: 'XX XX XX XX', flag: '🇧🇫' },
    { code: 'BI', name: 'Burundi', dialCode: '+257', format: 'XX XX XX XX', flag: '🇧🇮' },
    { code: 'KH', name: 'Cambodia', dialCode: '+855', format: 'XX XXX XXX', flag: '🇰🇭' },
    { code: 'CM', name: 'Cameroon', dialCode: '+237', format: 'XXXX XXXX', flag: '🇨🇲' },
    { code: 'CA', name: 'Canada', dialCode: '+1', format: '(XXX) XXX-XXXX', flag: '🇨🇦' },
    { code: 'CV', name: 'Cape Verde', dialCode: '+238', format: 'XXX XX XX', flag: '🇨🇻' },
    { code: 'CF', name: 'Central African Republic', dialCode: '+236', format: 'XX XX XX XX', flag: '🇨🇫' },
    { code: 'TD', name: 'Chad', dialCode: '+235', format: 'XX XX XX XX', flag: '🇹🇩' },
    { code: 'CL', name: 'Chile', dialCode: '+56', format: 'X XXXX XXXX', flag: '🇨🇱' },
    { code: 'CN', name: 'China', dialCode: '+86', format: 'XXX XXXX XXXX', flag: '🇨🇳' },
    { code: 'CO', name: 'Colombia', dialCode: '+57', format: 'XXX XXX XXXX', flag: '🇨🇴' },
    { code: 'KM', name: 'Comoros', dialCode: '+269', format: 'XXX XXXX', flag: '🇰🇲' },
    { code: 'CG', name: 'Congo', dialCode: '+242', format: 'XX XXX XXXX', flag: '🇨🇬' },
    { code: 'CR', name: 'Costa Rica', dialCode: '+506', format: 'XXXX XXXX', flag: '🇨🇷' },
    { code: 'HR', name: 'Croatia', dialCode: '+385', format: 'XX XXX XXXX', flag: '🇭🇷' },
    { code: 'CU', name: 'Cuba', dialCode: '+53', format: 'XXXX XXXX', flag: '🇨🇺' },
    { code: 'CY', name: 'Cyprus', dialCode: '+357', format: 'XX XXX XXX', flag: '🇨🇾' },
    { code: 'CZ', name: 'Czech Republic', dialCode: '+420', format: 'XXX XXX XXX', flag: '🇨🇿' },
    { code: 'DK', name: 'Denmark', dialCode: '+45', format: 'XX XX XX XX', flag: '🇩🇰' },
    { code: 'DJ', name: 'Djibouti', dialCode: '+253', format: 'XX XX XX XX', flag: '🇩🇯' },
    { code: 'DM', name: 'Dominica', dialCode: '+1767', format: 'XXX XXXX', flag: '🇩🇲' },
    { code: 'DO', name: 'Dominican Republic', dialCode: '+1', format: '(XXX) XXX-XXXX', flag: '🇩🇴' },
    { code: 'EC', name: 'Ecuador', dialCode: '+593', format: 'XX XXX XXXX', flag: '🇪🇨' },
    { code: 'EG', name: 'Egypt', dialCode: '+20', format: 'XXX XXX XXXX', flag: '🇪🇬' },
    { code: 'SV', name: 'El Salvador', dialCode: '+503', format: 'XXXX XXXX', flag: '🇸🇻' },
    { code: 'GQ', name: 'Equatorial Guinea', dialCode: '+240', format: 'XXX XXX XXX', flag: '🇬🇶' },
    { code: 'ER', name: 'Eritrea', dialCode: '+291', format: 'X XXX XXX', flag: '🇪🇷' },
    { code: 'EE', name: 'Estonia', dialCode: '+372', format: 'XXXX XXXX', flag: '🇪🇪' },
    { code: 'ET', name: 'Ethiopia', dialCode: '+251', format: 'XX XXX XXXX', flag: '🇪🇹' },
    { code: 'FJ', name: 'Fiji', dialCode: '+679', format: 'XXX XXXX', flag: '🇫🇯' },
    { code: 'FI', name: 'Finland', dialCode: '+358', format: 'XX XXX XXXX', flag: '🇫🇮' },
    { code: 'FR', name: 'France', dialCode: '+33', format: 'XX XX XX XX XX', flag: '🇫🇷' },
    { code: 'GA', name: 'Gabon', dialCode: '+241', format: 'XX XX XX XX', flag: '🇬🇦' },
    { code: 'GM', name: 'Gambia', dialCode: '+220', format: 'XXX XXXX', flag: '🇬🇲' },
    { code: 'GE', name: 'Georgia', dialCode: '+995', format: 'XXX XXX XXX', flag: '🇬🇪' },
    { code: 'DE', name: 'Germany', dialCode: '+49', format: 'XXX XXXXXXX', flag: '🇩🇪' },
    { code: 'GH', name: 'Ghana', dialCode: '+233', format: 'XXX XXX XXXX', flag: '🇬🇭' },
    { code: 'GR', name: 'Greece', dialCode: '+30', format: 'XXX XXX XXXX', flag: '🇬🇷' },
    { code: 'GD', name: 'Grenada', dialCode: '+1473', format: 'XXX XXXX', flag: '🇬🇩' },
    { code: 'GT', name: 'Guatemala', dialCode: '+502', format: 'XXXX XXXX', flag: '🇬🇹' },
    { code: 'GN', name: 'Guinea', dialCode: '+224', format: 'XXX XXX XXX', flag: '🇬🇳' },
    { code: 'GW', name: 'Guinea-Bissau', dialCode: '+245', format: 'XXX XXXX', flag: '🇬🇼' },
    { code: 'GY', name: 'Guyana', dialCode: '+592', format: 'XXX XXXX', flag: '🇬🇾' },
    { code: 'HT', name: 'Haiti', dialCode: '+509', format: 'XXXX XXXX', flag: '🇭🇹' },
    { code: 'HN', name: 'Honduras', dialCode: '+504', format: 'XXXX XXXX', flag: '🇭🇳' },
    { code: 'HU', name: 'Hungary', dialCode: '+36', format: 'XX XXX XXXX', flag: '🇭🇺' },
    { code: 'IS', name: 'Iceland', dialCode: '+354', format: 'XXX XXXX', flag: '🇮🇸' },
    { code: 'IN', name: 'India', dialCode: '+91', format: 'XXXXX XXXXX', flag: '🇮🇳' },
    { code: 'ID', name: 'Indonesia', dialCode: '+62', format: 'XXX-XXX-XXXX', flag: '🇮🇩' },
    { code: 'IR', name: 'Iran', dialCode: '+98', format: 'XXX XXX XXXX', flag: '🇮🇷' },
    { code: 'IQ', name: 'Iraq', dialCode: '+964', format: 'XXX XXX XXXX', flag: '🇮🇶' },
    { code: 'IE', name: 'Ireland', dialCode: '+353', format: 'XX XXX XXXX', flag: '🇮🇪' },
    { code: 'IL', name: 'Israel', dialCode: '+972', format: 'XX-XXX-XXXX', flag: '🇮🇱' },
    { code: 'JM', name: 'Jamaica', dialCode: '+1876', format: 'XXX XXXX', flag: '🇯🇲' },
    { code: 'JP', name: 'Japan', dialCode: '+81', format: 'XX-XXXX-XXXX', flag: '🇯🇵' },
    { code: 'JO', name: 'Jordan', dialCode: '+962', format: 'X XXXX XXXX', flag: '🇯🇴' },
    { code: 'KZ', name: 'Kazakhstan', dialCode: '+7', format: 'XXX XXX XX XX', flag: '🇰🇿' },
    { code: 'KE', name: 'Kenya', dialCode: '+254', format: 'XXX XXXXXX', flag: '🇰🇪' },
    { code: 'KI', name: 'Kiribati', dialCode: '+686', format: 'XXXXX', flag: '🇰🇮' },
    { code: 'KP', name: 'North Korea', dialCode: '+850', format: 'XXX XXX XXXX', flag: '🇰🇵' },
    { code: 'KR', name: 'South Korea', dialCode: '+82', format: 'XX-XXXX-XXXX', flag: '🇰🇷' },
    { code: 'KW', name: 'Kuwait', dialCode: '+965', format: 'XXXX XXXX', flag: '🇰🇼' },
    { code: 'KG', name: 'Kyrgyzstan', dialCode: '+996', format: 'XXX XXX XXX', flag: '🇰🇬' },
    { code: 'LA', name: 'Laos', dialCode: '+856', format: 'XX XXX XXX', flag: '🇱🇦' },
    { code: 'LV', name: 'Latvia', dialCode: '+371', format: 'XXXX XXXX', flag: '🇱🇻' },
    { code: 'LB', name: 'Lebanon', dialCode: '+961', format: 'XX XXX XXX', flag: '🇱🇧' },
    { code: 'LS', name: 'Lesotho', dialCode: '+266', format: 'XXXX XXXX', flag: '🇱🇸' },
    { code: 'LR', name: 'Liberia', dialCode: '+231', format: 'XXX XXX XXXX', flag: '🇱🇷' },
    { code: 'LY', name: 'Libya', dialCode: '+218', format: 'XX-XXXXXXX', flag: '🇱🇾' },
    { code: 'LI', name: 'Liechtenstein', dialCode: '+423', format: 'XXX XX XX', flag: '🇱🇮' },
    { code: 'LT', name: 'Lithuania', dialCode: '+370', format: 'XXX XXXXX', flag: '🇱🇹' },
    { code: 'LU', name: 'Luxembourg', dialCode: '+352', format: 'XXX XXX XXX', flag: '🇱🇺' },
    { code: 'MK', name: 'North Macedonia', dialCode: '+389', format: 'XX XXX XXX', flag: '🇲🇰' },
    { code: 'MG', name: 'Madagascar', dialCode: '+261', format: 'XX XX XXX XX', flag: '🇲🇬' },
    { code: 'MW', name: 'Malawi', dialCode: '+265', format: 'XXX XX XX XX', flag: '🇲🇼' },
    { code: 'MY', name: 'Malaysia', dialCode: '+60', format: 'XX-XXX XXXX', flag: '🇲🇾' },
    { code: 'MV', name: 'Maldives', dialCode: '+960', format: 'XXX-XXXX', flag: '🇲🇻' },
    { code: 'ML', name: 'Mali', dialCode: '+223', format: 'XXXX XXXX', flag: '🇲🇱' },
    { code: 'MT', name: 'Malta', dialCode: '+356', format: 'XXXX XXXX', flag: '🇲🇹' },
    { code: 'MH', name: 'Marshall Islands', dialCode: '+692', format: 'XXX-XXXX', flag: '🇲🇭' },
    { code: 'MR', name: 'Mauritania', dialCode: '+222', format: 'XXXX XXXX', flag: '🇲🇷' },
    { code: 'MU', name: 'Mauritius', dialCode: '+230', format: 'XXXX XXXX', flag: '🇲🇺' },
    { code: 'MX', name: 'Mexico', dialCode: '+52', format: 'XXX XXX XXXX', flag: '🇲🇽' },
    { code: 'FM', name: 'Micronesia', dialCode: '+691', format: 'XXX XXXX', flag: '🇫🇲' },
    { code: 'MD', name: 'Moldova', dialCode: '+373', format: 'XXXX XXXX', flag: '🇲🇩' },
    { code: 'MC', name: 'Monaco', dialCode: '+377', format: 'XX XX XX XX', flag: '🇲🇨' },
    { code: 'MN', name: 'Mongolia', dialCode: '+976', format: 'XXXX XXXX', flag: '🇲🇳' },
    { code: 'ME', name: 'Montenegro', dialCode: '+382', format: 'XX XXX XXX', flag: '🇲🇪' },
    { code: 'MA', name: 'Morocco', dialCode: '+212', format: 'XXX-XXXXXX', flag: '🇲🇦' },
    { code: 'MZ', name: 'Mozambique', dialCode: '+258', format: 'XX XXX XXXX', flag: '🇲🇿' },
    { code: 'MM', name: 'Myanmar', dialCode: '+95', format: 'XXX XXX XXXX', flag: '🇲🇲' },
    { code: 'NA', name: 'Namibia', dialCode: '+264', format: 'XX XXX XXXX', flag: '🇳🇦' },
    { code: 'NR', name: 'Nauru', dialCode: '+674', format: 'XXX XXXX', flag: '🇳🇷' },
    { code: 'NP', name: 'Nepal', dialCode: '+977', format: 'XXX-XXX XXXX', flag: '🇳🇵' },
    { code: 'NL', name: 'Netherlands', dialCode: '+31', format: 'XX XXX XXXX', flag: '🇳🇱' },
    { code: 'NZ', name: 'New Zealand', dialCode: '+64', format: 'XX XXX XXXX', flag: '🇳🇿' },
    { code: 'NI', name: 'Nicaragua', dialCode: '+505', format: 'XXXX XXXX', flag: '🇳🇮' },
    { code: 'NE', name: 'Niger', dialCode: '+227', format: 'XX XX XX XX', flag: '🇳🇪' },
    { code: 'NG', name: 'Nigeria', dialCode: '+234', format: 'XXX XXX XXXX', flag: '🇳🇬' },
    { code: 'NO', name: 'Norway', dialCode: '+47', format: 'XXX XX XXX', flag: '🇳🇴' },
    { code: 'OM', name: 'Oman', dialCode: '+968', format: 'XXXX XXXX', flag: '🇴🇲' },
    { code: 'PK', name: 'Pakistan', dialCode: '+92', format: 'XXX XXX XXXX', flag: '🇵🇰' },
    { code: 'PW', name: 'Palau', dialCode: '+680', format: 'XXX XXXX', flag: '🇵🇼' },
    { code: 'PS', name: 'Palestine', dialCode: '+970', format: 'XXX XXX XXX', flag: '🇵🇸' },
    { code: 'PA', name: 'Panama', dialCode: '+507', format: 'XXXX XXXX', flag: '🇵🇦' },
    { code: 'PG', name: 'Papua New Guinea', dialCode: '+675', format: 'XXX XXXX', flag: '🇵🇬' },
    { code: 'PY', name: 'Paraguay', dialCode: '+595', format: 'XXX XXX XXX', flag: '🇵🇾' },
    { code: 'PE', name: 'Peru', dialCode: '+51', format: 'XXX XXX XXX', flag: '🇵🇪' },
    { code: 'PH', name: 'Philippines', dialCode: '+63', format: 'XXX XXX XXXX', flag: '🇵🇭' },
    { code: 'PL', name: 'Poland', dialCode: '+48', format: 'XXX XXX XXX', flag: '🇵🇱' },
    { code: 'PT', name: 'Portugal', dialCode: '+351', format: 'XXX XXX XXX', flag: '🇵🇹' },
    { code: 'QA', name: 'Qatar', dialCode: '+974', format: 'XXXX XXXX', flag: '🇶🇦' },
    { code: 'RO', name: 'Romania', dialCode: '+40', format: 'XXX XXX XXX', flag: '🇷🇴' },
    { code: 'RU', name: 'Russia', dialCode: '+7', format: 'XXX XXX-XX-XX', flag: '🇷🇺' },
    { code: 'RW', name: 'Rwanda', dialCode: '+250', format: 'XXX XXX XXX', flag: '🇷🇼' },
    { code: 'KN', name: 'Saint Kitts and Nevis', dialCode: '+1869', format: 'XXX XXXX', flag: '🇰🇳' },
    { code: 'LC', name: 'Saint Lucia', dialCode: '+1758', format: 'XXX XXXX', flag: '🇱🇨' },
    { code: 'VC', name: 'Saint Vincent and the Grenadines', dialCode: '+1784', format: 'XXX XXXX', flag: '🇻🇨' },
    { code: 'WS', name: 'Samoa', dialCode: '+685', format: 'XXXXX', flag: '🇼🇸' },
    { code: 'SM', name: 'San Marino', dialCode: '+378', format: 'XXXX XXXXXX', flag: '🇸🇲' },
    { code: 'ST', name: 'Sao Tome and Principe', dialCode: '+239', format: 'XXX XXXX', flag: '🇸🇹' },
    { code: 'SA', name: 'Saudi Arabia', dialCode: '+966', format: 'XX XXX XXXX', flag: '🇸🇦' },
    { code: 'SN', name: 'Senegal', dialCode: '+221', format: 'XX XXX XX XX', flag: '🇸🇳' },
    { code: 'RS', name: 'Serbia', dialCode: '+381', format: 'XX XXX XXXX', flag: '🇷🇸' },
    { code: 'SC', name: 'Seychelles', dialCode: '+248', format: 'X XX XX XX', flag: '🇸🇨' },
    { code: 'SL', name: 'Sierra Leone', dialCode: '+232', format: 'XX XXXXXX', flag: '🇸🇱' },
    { code: 'SG', name: 'Singapore', dialCode: '+65', format: 'XXXX XXXX', flag: '🇸🇬' },
    { code: 'SK', name: 'Slovakia', dialCode: '+421', format: 'XXX XXX XXX', flag: '🇸🇰' },
    { code: 'SI', name: 'Slovenia', dialCode: '+386', format: 'XX XXX XXX', flag: '🇸🇮' },
    { code: 'SB', name: 'Solomon Islands', dialCode: '+677', format: 'XXXXX', flag: '🇸🇧' },
    { code: 'SO', name: 'Somalia', dialCode: '+252', format: 'XX XXX XXX', flag: '🇸🇴' },
    { code: 'ZA', name: 'South Africa', dialCode: '+27', format: 'XX XXX XXXX', flag: '🇿🇦' },
    { code: 'SS', name: 'South Sudan', dialCode: '+211', format: 'XXX XXX XXX', flag: '🇸🇸' },
    { code: 'LK', name: 'Sri Lanka', dialCode: '+94', format: 'XX XXX XXXX', flag: '🇱🇰' },
    { code: 'SD', name: 'Sudan', dialCode: '+249', format: 'XXX XXX XXX', flag: '🇸🇩' },
    { code: 'SR', name: 'Suriname', dialCode: '+597', format: 'XXX-XXXX', flag: '🇸🇷' },
    { code: 'SZ', name: 'Eswatini', dialCode: '+268', format: 'XXXX XXXX', flag: '🇸🇿' },
    { code: 'SE', name: 'Sweden', dialCode: '+46', format: 'XX-XXX XX XX', flag: '🇸🇪' },
    { code: 'CH', name: 'Switzerland', dialCode: '+41', format: 'XX XXX XX XX', flag: '🇨🇭' },
    { code: 'SY', name: 'Syria', dialCode: '+963', format: 'XXX XXX XXX', flag: '🇸🇾' },
    { code: 'TW', name: 'Taiwan', dialCode: '+886', format: 'XXXX XXXX', flag: '🇹🇼' },
    { code: 'TJ', name: 'Tajikistan', dialCode: '+992', format: 'XX XXX XXXX', flag: '🇹🇯' },
    { code: 'TZ', name: 'Tanzania', dialCode: '+255', format: 'XXX XXX XXX', flag: '🇹🇿' },
    { code: 'TH', name: 'Thailand', dialCode: '+66', format: 'XX XXX XXXX', flag: '🇹🇭' },
    { code: 'TL', name: 'Timor-Leste', dialCode: '+670', format: 'XXX XXXX', flag: '🇹🇱' },
    { code: 'TG', name: 'Togo', dialCode: '+228', format: 'XX XX XX XX', flag: '🇹🇬' },
    { code: 'TO', name: 'Tonga', dialCode: '+676', format: 'XXXXX', flag: '🇹🇴' },
    { code: 'TT', name: 'Trinidad and Tobago', dialCode: '+1868', format: 'XXX XXXX', flag: '🇹🇹' },
    { code: 'TN', name: 'Tunisia', dialCode: '+216', format: 'XX XXX XXX', flag: '🇹🇳' },
    { code: 'TR', name: 'Turkey', dialCode: '+90', format: 'XXX XXX XXXX', flag: '🇹🇷' },
    { code: 'TM', name: 'Turkmenistan', dialCode: '+993', format: 'XX XX XX XX', flag: '🇹🇲' },
    { code: 'TV', name: 'Tuvalu', dialCode: '+688', format: 'XXXXX', flag: '🇹🇻' },
    { code: 'UG', name: 'Uganda', dialCode: '+256', format: 'XXX XXXXXX', flag: '🇺🇬' },
    { code: 'UA', name: 'Ukraine', dialCode: '+380', format: 'XX XXX XX XX', flag: '🇺🇦' },
    { code: 'AE', name: 'United Arab Emirates', dialCode: '+971', format: 'XX XXX XXXX', flag: '🇦🇪' },
    { code: 'UY', name: 'Uruguay', dialCode: '+598', format: 'XXXX XXXX', flag: '🇺🇾' },
    { code: 'UZ', name: 'Uzbekistan', dialCode: '+998', format: 'XX XXX XX XX', flag: '🇺🇿' },
    { code: 'VU', name: 'Vanuatu', dialCode: '+678', format: 'XXXXX', flag: '🇻🇺' },
    { code: 'VE', name: 'Venezuela', dialCode: '+58', format: 'XXX-XXXXXXX', flag: '🇻🇪' },
    { code: 'VN', name: 'Vietnam', dialCode: '+84', format: 'XXX XXX XXXX', flag: '🇻🇳' },
    { code: 'YE', name: 'Yemen', dialCode: '+967', format: 'XXX XXX XXX', flag: '🇾🇪' },
    { code: 'ZM', name: 'Zambia', dialCode: '+260', format: 'XX XXX XXXX', flag: '🇿🇲' },
    { code: 'ZW', name: 'Zimbabwe', dialCode: '+263', format: 'XX XXX XXXX', flag: '🇿🇼' }
  ];


  const allCountries = [...priorityCountries, ...otherCountries];

  const [formData, setFormData] = React.useState({
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    phone: '',
    tickets: '',
    message: ''
  });
  
  const [selectedCountry, setSelectedCountry] = React.useState(priorityCountries[1]);
  const [showCountryDropdown, setShowCountryDropdown] = React.useState(false);
  const [countrySearch, setCountrySearch] = React.useState('');
  const [errors, setErrors] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);

  const filteredCountries = React.useMemo(() => {
    if (!countrySearch) return allCountries;
    return allCountries.filter(country => 
      country.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
      country.dialCode.includes(countrySearch)
    );
  }, [countrySearch]);

  const formatPhoneByCountry = (value, country) => {
    const numbers = value.replace(/\D/g, '');
    const format = country.format;
    let formatted = '';
    let numberIndex = 0;

    for (let i = 0; i < format.length && numberIndex < numbers.length; i++) {
      if (format[i] === 'X') {
        formatted += numbers[numberIndex];
        numberIndex++;
      } else {
        formatted += format[i];
      }
    }

    return formatted;
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return value && !emailRegex.test(value) ? 'Invalid email' : '';
      case 'phone':
        if (value && value.length < 8) {
          return 'Phone number too short';
        }
        return '';
      default:
        return '';
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    let formattedValue = value;
    if (name === 'phone') {
      formattedValue = formatPhoneByCountry(value, selectedCountry);
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setShowCountryDropdown(false);
    setCountrySearch('');
    
    if (formData.phone) {
      const formattedPhone = formatPhoneByCountry(formData.phone, country);
      setFormData(prev => ({
        ...prev,
        phone: formattedPhone
      }));
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  
  const newErrors = {};
  const requiredFields = ['email', 'firstName', 'lastName', 'company', 'tickets'];
  
  requiredFields.forEach(field => {
    if (!formData[field].trim()) {
      newErrors[field] = 'Required field';
    } else {
      const fieldError = validateField(field, formData[field]);
      if (fieldError) newErrors[field] = fieldError;
    }
  });

  Object.keys(formData).forEach(field => {
    if (!requiredFields.includes(field) && formData[field]) {
      const fieldError = validateField(field, formData[field]);
      if (fieldError) newErrors[field] = fieldError;
    }
  });

  setErrors(newErrors);

  if (Object.keys(newErrors).length > 0) {
    return;
  }

  setIsLoading(true);
  
  try {
    const formDataToSend = new FormData();
    formDataToSend.append('access_key', '9a1df9df-6912-4d9c-95af-17e7ca56cb3c');
    formDataToSend.append('email', formData.email);
    formDataToSend.append('firstName', formData.firstName);
    formDataToSend.append('lastName', formData.lastName);
    formDataToSend.append('company', formData.company);
    formDataToSend.append('phone', selectedCountry.dialCode + ' ' + formData.phone);
    formDataToSend.append('tickets', formData.tickets);
    formDataToSend.append('message', formData.message);
    formDataToSend.append('country', selectedCountry.name);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formDataToSend
    });

    if (response.ok) {
      setShowSuccess(true);
      setFormData({
        email: '',
        firstName: '',
        lastName: '',
        company: '',
        phone: '',
        tickets: '',
        message: ''
      });
      
      setTimeout(() => setShowSuccess(false), 3000);
    } else {
      throw new Error('Failed to send message');
    }
  } catch (error) {
    console.error('Error sending form:', error);
    alert('Erro ao enviar mensagem. Tente novamente.');
  } finally {
    setIsLoading(false);
  }
};

  return (
    <>
      <Header t={t} setLanguage={setLanguage} language={language} />
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-600">
        {/* Main Content */}
      <main className="py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left Side - Information */}
            <div className="text-white">
              <div className="inline-block bg-[rgba(255,255,255,0.2)] bg-opacity-90 px-4 py-2 rounded-full text-sm mb-6 sm:mb-8 backdrop-blur-sm">
                🚀 Revolutionize Your Customer Service
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 sm:mb-6">
                Improve customer service with AI agents.
              </h1>
              
              <p className="text-lg sm:text-xl opacity-90 mb-8 sm:mb-12 leading-relaxed">
                Schedule a demo with our sales team to see how Notrus can help you improve customer service through AI.
              </p>

              {/* Benefits */}
              <div className="space-y-6 sm:space-y-8">
                <div className="flex gap-3 sm:gap-4 items-start">
                  <div className="text-xl sm:text-2xl bg-[rgba(255,255,255,0.2)] bg-opacity-20 p-2 sm:p-3 rounded-xl backdrop-blur-sm flex-shrink-0">
                    ⚡
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Faster time to value</h3>
                    <p className="opacity-90 leading-relaxed text-sm sm:text-base">Build and iterate AI agents quickly, and seamlessly integrate with existing systems to deliver ROI in weeks, not months.</p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4 items-start">
                  <div className="text-xl sm:text-2xl bg-[rgba(255,255,255,0.2)] bg-opacity-20 p-2 sm:p-3 rounded-xl backdrop-blur-sm flex-shrink-0">
                    👁️
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Unmatched transparency</h3>
                    <p className="opacity-90 leading-relaxed text-sm sm:text-base">Get complete visibility into why AI agents make specific decisions, so you can iterate and improve agent behavior.</p>
                  </div>
                </div>

                <div className="flex gap-3 sm:gap-4 items-start">
                  <div className="text-xl sm:text-2xl bg-[rgba(255,255,255,0.2)] bg-opacity-20 p-2 sm:p-3 rounded-xl backdrop-blur-sm flex-shrink-0">
                    🛡️
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Reliable results at scale</h3>
                    <p className="opacity-90 leading-relaxed text-sm sm:text-base">Enterprise-grade protections ensure safe, high-quality AI interactions that scale effortlessly with your business.</p>
                  </div>
                </div>
              </div>
            </div>

      {/* Right Side - Form */}
      <div className="flex justify-center">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-10 w-full max-w-lg shadow-2xl mx-2 sm:mx-0">
          <h2 className="text-gray-800 text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-center">
            Get in touch
          </h2>
          
          <form onSubmit={handleSubmit} action="https://api.web3forms.com/submit" method="POST" className="space-y-4 sm:space-y-6">              
                    <div>
                      <label className="block text-gray-600 text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        required
                        className={`w-full bg-gray-100 border rounded-lg px-4 py-3 text-gray-800 transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:bg-gray-50 ${
                          errors.email ? 'border-red-400 bg-red-50' : 'border-gray-300'
                        }`}
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-600 text-sm font-medium mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          required
                          className={`w-full bg-gray-100 border rounded-lg px-4 py-3 text-gray-800 transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:bg-gray-50 ${
                            errors.firstName ? 'border-red-400 bg-red-50' : 'border-gray-300'
                          }`}
                        />
                        {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                      </div>
                      <div>
                        <label className="block text-gray-600 text-sm font-medium mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          required
                          className={`w-full bg-gray-100 border rounded-lg px-4 py-3 text-gray-800 transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:bg-gray-50 ${
                            errors.lastName ? 'border-red-400 bg-red-50' : 'border-gray-300'
                          }`}
                        />
                        {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-600 text-sm font-medium mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        required
                        className={`w-full bg-gray-100 border rounded-lg px-4 py-3 text-gray-800 transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:bg-gray-50 ${
                          errors.company ? 'border-red-400 bg-red-50' : 'border-gray-300'
                        }`}
                      />
                      {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
                    </div>

                    {/* Phone with Country Selector */}
                    <div>
                      <label className="block text-gray-600 text-sm font-medium mb-2">
                        Phone / WhatsApp
                      </label>
                      <div className="flex">
                        {/* Country Selector */}
                        <div className="relative">
                          <button
                            type="button"
                            onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                            className="bg-gray-100 border border-gray-300 border-r-0 rounded-l-lg px-3 py-3 flex items-center gap-2 hover:bg-gray-50 transition-colors focus:outline-none focus:border-indigo-500 text-gray-500"
                          >
                            <span className='text-sm flex items-center gap-1'>
                              <span className="uppercase mr-1">{selectedCountry.code}</span>
                              {selectedCountry.dialCode}
                            </span>
                            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>

                          {/* Country Dropdown */}
                          {showCountryDropdown && (
                            <div className="absolute top-full left-0 mt-1 w-80 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-64 overflow-hidden text-gray-500">
                              {/* Search */}
                              <div className="p-3 border-b border-gray-200">
                                <input
                                  type="text"
                                  placeholder="Search country..."
                                  value={countrySearch}
                                  onChange={(e) => setCountrySearch(e.target.value)}
                                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-indigo-500"
                                />
                              </div>
                              
                              {/* Countries List */}
                              <div className="max-h-48 overflow-y-auto">
                                {/* Priority Countries */}
                                {!countrySearch && (
                                  <>
                                    <div className="px-3 py-2 text-xs font-semibold text-gray-500 bg-gray-50">
                                      MAIN COUNTRIES
                                    </div>
                                    {priorityCountries.map((country) => (
                                      <button
                                        key={country.code}
                                        type="button"
                                        onClick={() => handleCountrySelect(country)}
                                        className="w-full px-3 py-2 text-left hover:bg-gray-50 flex items-center gap-3 text-sm"
                                      >
                                        <span className="text-lg">{country.flag}</span>
                                        <span className="flex-1">{country.name}</span>
                                        <span className="text-gray-500">{country.dialCode}</span>
                                      </button>
                                    ))}
                                    <div className="px-3 py-2 text-xs font-semibold text-gray-500 bg-gray-50">
                                      OTHER COUNTRIES
                                    </div>
                                  </>
                                )}
                                
                                {/* Filtered Countries */}
                                {filteredCountries.map((country) => {
                                  if (!countrySearch && priorityCountries.includes(country)) return null;
                                  return (
                                    <button
                                      key={country.code}
                                      type="button"
                                      onClick={() => handleCountrySelect(country)}
                                      className="w-full px-3 py-2 text-left hover:bg-gray-50 flex items-center gap-3 text-sm"
                                    >
                                      <span className="text-lg">{country.flag}</span>
                                      <span className="flex-1">{country.name}</span>
                                      <span className="text-gray-500">{country.dialCode}</span>
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Phone Input */}
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          placeholder={selectedCountry.format}
                          className={`flex-1 bg-gray-100 border rounded-r-lg px-4 py-3 text-gray-800 transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:bg-gray-50 text-sm ${
                            errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-300'
                          }`}
                        />
                      </div>
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                      <label className="block text-gray-600 text-sm font-medium mb-2">
                        Monthly support tickets 
                      </label>
                      <select
                        name="tickets"
                        value={formData.tickets}
                        onChange={handleInputChange}
                        onBlur={handleBlur}                        
                        className={`w-full bg-gray-100 border rounded-lg px-4 py-3 text-gray-500 transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:bg-gray-50 cursor-pointer ${
                          errors.tickets ? 'border-red-400 bg-red-50' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select an option</option>
                        <option value="0-100">0-100</option>
                        <option value="100-500">100-500</option>
                        <option value="500-1000">500-1000</option>
                        <option value="1000-5000">1000-5000</option>
                        <option value="5000+">5000+</option>
                      </select>
                      {errors.tickets && <p className="text-red-500 text-sm mt-1">{errors.tickets}</p>}
                    </div>

                    <div>
                      <label className="block text-gray-600 text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Tell us about your needs..."
                        className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 transition-all duration-300 focus:outline-none focus:border-indigo-500 focus:bg-gray-50 resize-vertical min-h-24"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-4 px-8 rounded-xl text-lg font-semibold transition-all duration-200 mt-4 ${
                        isLoading 
                          ? 'opacity-70 cursor-not-allowed' 
                          : 'hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/40'
                      }`}
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Sending...
                        </div>
                      ) : (
                        'Send message'
                      )}
                    </button>
                  </form>

                  <div className="text-center mt-6 pt-6 border-t border-gray-200">
                    <a
                      href="https://wa.me/+447418638908"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 rounded bg-[rgb(37,211,102)] text-white text-sm 
                                hover:bg-green-600 transition-colors duration-300"
                    >
                      Or chat directly on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Success Modal */}
        {showSuccess && (
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 text-center max-w-md mx-4 transform animate-pulse">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Message sent successfully!
              </h3>
              <p className="text-gray-600">
                Our team will contact you shortly.
              </p>
            </div>
          </div>
        )}

        {/* Overlay to close dropdown */}
        {showCountryDropdown && (
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setShowCountryDropdown(false)}
          />
        )}
      </div>
      
      <Footer t={t} setLanguage={setLanguage} language={language} />
    </>
  );
}
