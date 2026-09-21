import { StyleSheet } from 'react-native';

// Al styling til appen ligger samlet i denne fil (krav i opgaven).
export const colors = {
  primary: '#2F5BEA',
  primaryDark: '#1E3FB0',
  accent: '#12B886',
  background: '#F4F6FB',
  card: '#FFFFFF',
  text: '#1B1F3B',
  muted: '#6B7280',
  border: '#DDE2EE',
  chip: '#E8EDFF',
  danger: '#D64545',
};

export const styles = StyleSheet.create({
  // ---------- Fælles ----------
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  scrollContent: {
    paddingBottom: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.muted,
    lineHeight: 22,
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.text,
    marginTop: 12,
    marginBottom: 8,
  },
  helper: {
    fontSize: 13,
    color: colors.muted,
    marginBottom: 8,
  },

  // ---------- Knapper ----------
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 12,
  },
  buttonSecondary: {
    backgroundColor: colors.card,
    borderWidth: 2,
    borderColor: colors.primary,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
  buttonTextSecondary: {
    color: colors.primary,
  },

  // ---------- Velkomstskærm ----------
  heroBox: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: 24,
    marginBottom: 24,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  heroText: {
    fontSize: 16,
    color: '#E8EDFF',
    lineHeight: 22,
  },
  roleBox: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  roleTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.text,
  },
  roleText: {
    fontSize: 14,
    color: colors.muted,
    marginTop: 4,
  },

  // ---------- Chips (uddannelsesvalg) ----------
  chipRow: {
    flexGrow: 0,
    marginBottom: 8,
  },
  chipWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  chip: {
    backgroundColor: colors.chip,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: colors.chip,
  },
  chipSelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primaryDark,
  },
  chipText: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '600',
  },
  chipTextSelected: {
    color: '#FFFFFF',
  },

  // ---------- Liste og jobkort ----------
  resultInfo: {
    fontSize: 13,
    color: colors.muted,
    marginBottom: 8,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.text,
  },
  cardCompany: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '600',
    marginTop: 2,
  },
  cardMeta: {
    fontSize: 13,
    color: colors.muted,
    marginTop: 6,
  },
  emptyBox: {
    alignItems: 'center',
    padding: 32,
  },
  emptyText: {
    fontSize: 15,
    color: colors.muted,
    textAlign: 'center',
    lineHeight: 22,
  },

  // ---------- Detaljer ----------
  detailCompany: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: '700',
    marginBottom: 4,
  },
  detailMeta: {
    fontSize: 14,
    color: colors.muted,
    marginBottom: 16,
  },
  detailText: {
    fontSize: 15,
    color: colors.text,
    lineHeight: 22,
  },

  // ---------- Formular (opret stilling) ----------
  input: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 14,
    fontSize: 15,
    color: colors.text,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  errorText: {
    color: colors.danger,
    fontSize: 13,
    marginTop: 8,
  },
});
